import { Filter, Hero } from "./types";

export const sortHeroes = (filter: Filter, array: Hero[]): Hero[] => {
  if (filter === Filter.none) return array;

  return [...array].sort((a, b) => {
    const aVal = a.powerstats[filter];
    const bVal = b.powerstats[filter];


    const aIsNull = aVal === null || aVal === "null" || aVal === "" || aVal === "0";
    const bIsNull = bVal === null || bVal === "null" || bVal === "" || bVal === "0";

    if (aIsNull && !bIsNull) return 1;
    if (!aIsNull && bIsNull) return -1;
    if (aIsNull && bIsNull) return 0;

    return Number(bVal) - Number(aVal);
  });
}