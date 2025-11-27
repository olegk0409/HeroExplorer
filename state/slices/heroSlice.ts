import { Hero } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeroesState {
  heroes: Hero[];
}

const initialState: HeroesState = {
  heroes: [],
};

export const heroSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    addHero: (state, action: PayloadAction<Hero>) => {
      state.heroes.push(action.payload);
    },
    removeHero: (state, action: PayloadAction<string>) => {
      state.heroes = state.heroes.filter(h => h.id !== action.payload);
    },
    updateHero: (state, action: PayloadAction<Hero>) => {
      const idx = state.heroes.findIndex(h => h.id === action.payload.id);
      if (idx !== -1) {
        state.heroes[idx] = action.payload;
      }
    },
    setHeroes: (state, action: PayloadAction<Hero[]>) => {
      state.heroes = action.payload;
    }
  },
});

export const { addHero, removeHero, updateHero, setHeroes } = heroSlice.actions;
export default heroSlice.reducer;