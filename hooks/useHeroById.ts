import { Hero } from "@/utils/types";
import { useEffect, useState } from "react";
import useStoredHeroes from "./useStoredHeroes";
import { useGlobalSearchParams } from "expo-router";

const apiUrl =
  process.env.EXPO_PUBLIC_BASE_API_URL! + process.env.EXPO_PUBLIC_API_KEY!;

export function useHeroById() {
  const { id } = useGlobalSearchParams();
  const { heroes: storedHeroes } = useStoredHeroes();
  const [hero, setHero] = useState<Hero | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    const savedHero = storedHeroes.find((hero) => hero.id === id);

    const fetchHero = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`${apiUrl}/${id}`);
        const data = await res.json();

        setHero(data);
      } catch (e: any) {
        setError(e.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (savedHero) {
      setHero(savedHero)
      setLoading(false)
    } else {
      fetchHero()
    }
  }, [id]);

  return { hero, loading, error };
}