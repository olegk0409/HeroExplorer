import { HeroesList } from "@/components/HeroesList";
import { withScreenLayout } from "@/hoc/withScreenLayout";
import useStoredHeroes from "@/hooks/useStoredHeroes";
import Header from "@/shared/Header";
import { View, Text } from "react-native";

function FavouriteTab() {
  const { heroes } = useStoredHeroes();

  return (
    <View className="flex-1 pb-[50px]">
      <Header title="Favourite Heroes" />
      <View className="p-4 gap-6 flex-1">
        {heroes.length > 0 ? (
          <HeroesList heroes={heroes} refreshing={false} onRefresh={() => Promise.resolve()}/>
        ) : (
          <Text>You can add your favourite heroes</Text>
        )}
      </View>
    </View>
  );
}

export default withScreenLayout(FavouriteTab);
