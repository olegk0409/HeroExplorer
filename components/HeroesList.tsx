import { FlatList, RefreshControl } from "react-native-gesture-handler";
import HeroItem from "./HeroItem";
import { Hero } from "@/utils/types";

type Props = {
  heroes: Hero[];
  refreshing: boolean;
  onRefresh: () => Promise<void>;
}

export const HeroesList = ({ heroes, refreshing, onRefresh }: Props) => (
  <FlatList
    data={heroes}
    showsVerticalScrollIndicator={false}
    contentContainerClassName="gap-4"
    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    renderItem={({ item }) => (
      <HeroItem
        id={item.id}
        name={item.name}
        image={item.image.url}
        stats={item.powerstats}
        nameColor={item.appearance["eye-color"].toLowerCase()}
      />
    )}
  />
);