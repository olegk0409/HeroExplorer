import { addHero, removeHero, updateHero } from "@/state/slices/heroSlice";
import { AppDispatch, RootState } from "@/state/store";
import { useDispatch, useSelector } from "react-redux";


const useStoredHeroes = () => {
  const dispatch = useDispatch<AppDispatch>();

  const heroes = useSelector((state: RootState) => state.heroes.heroes);
  const add = (hero: any) => dispatch(addHero(hero));
  const remove = (id: string) => dispatch(removeHero(id));
  const update = (hero: any) => dispatch(updateHero(hero));

  return {
    heroes,
    addHero: add,
    removeHero: remove,
    updateHero: update,
  };
}

export default useStoredHeroes;