import useStoredHeroes from "@/hooks/useStoredHeroes";
import { Hero } from "@/utils/types";
import Fontisto from "@expo/vector-icons/Fontisto";
import React from "react";
import { TouchableOpacity } from "react-native";

type Props = {
  hero: Hero;
};

const FavouriteButton = ({ hero }: Props) => {
  const { heroes, addHero, removeHero } = useStoredHeroes();
  const { id } = hero;

  const isFavourite = heroes.some((hero) => hero.id === id);

  const handlePress = () => {
    isFavourite ? removeHero(id) : addHero(hero);
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      {isFavourite ? (
        <Fontisto name="heart" size={30} color="red" />
      ) : (
        <Fontisto name="heart-alt" size={30} color="red" />
      )}
    </TouchableOpacity>
  );
};

export default FavouriteButton;
