import { Hero } from "@/utils/types";
import { useEffect, useState } from "react";

const apiUrl =
  process.env.EXPO_PUBLIC_BASE_API_URL! + process.env.EXPO_PUBLIC_API_KEY!;

export function useHeroesByName(name: string) {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);


  const fetchHeroes = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(`${apiUrl}/search/${name}`);
      const data = await response.json();

      setHeroes(data.results || []);
    } catch (e: any) {
      setError(e.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);

    await fetchHeroes();

    setRefreshing(false);
  };

  useEffect(() => {
    if (!name) {
      setHeroes([]);
      return;
    }

    fetchHeroes();
  }, [name]);

  return { heroes, loading, error, refreshing, onRefresh };
}
