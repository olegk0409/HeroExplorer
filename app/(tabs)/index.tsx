import CustomBottomSheet from "@/components/CustomBottomSheet";
import { ErrorState } from "@/components/ErrorState";
import { HeroesList } from "@/components/HeroesList";
import HeroesSkeleton from "@/components/HeroesSkeleton";
import SearchBar from "@/components/SearchBar";
import { withScreenLayout } from "@/hoc/withScreenLayout";
import useBottomSheet from "@/hooks/useBottomSheet";
import { useDebounceCallback } from "@/hooks/useDebounceCallback";
import { useHeroesByName } from "@/hooks/useHeroesByName";
import Header from "@/shared/Header";
import { sortHeroes } from "@/utils/sortHeroes";
import { Filter } from "@/utils/types";
import { useCallback, useMemo, useState } from "react";
import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";

function HeroesTab() {
  const [query, setQuery] = useState<string>('');
  const [input, setInput] = useState<string>('');
  const [filter, setFilter] = useState(Filter.none);

  const {heroes, loading, error, refreshing, onRefresh} = useHeroesByName(query);
  const { bottomSheetRef, openSheet, closeSheet } = useBottomSheet();
  const debouncedSetQuery = useDebounceCallback((val: string) => setQuery(val), 1000);

  const sortedHeroes = useMemo(() => sortHeroes(filter, heroes), [filter, heroes])

  const handleInputChange = (val: string) => {
    setInput(val);
    debouncedSetQuery(val.trim());
  };

  const renderContent = useCallback(() => {
    if (loading) {
      return (
        <HeroesSkeleton />
      );
    } else if (error) {
      return (
        <ErrorState />
      )
    } else {
      return (
        <View className="flex-1">
          {sortedHeroes.length > 0 ? (
            <HeroesList heroes={sortedHeroes} refreshing={refreshing} onRefresh={onRefresh}/>
          ) : (
            <Text className="text-white text-[20px]">{query ? 'No results found' : 'Enter name of your hero'}</Text>
          )}
        </View>
      )
    }
  }, [loading, error, sortedHeroes, refreshing])

  return (
    <View className="flex-1 pb-[50px]">
      <Header title="Heroes Explore" />
      <View className="p-4 gap-6 flex-1">
        <SearchBar value={input} onChange={handleInputChange} onFilterPress={openSheet}/>
        {renderContent()}
      </View>
      <CustomBottomSheet ref={bottomSheetRef} closeSheet={closeSheet} filter={filter} setFilter={setFilter}/>
    </View>
  );
}

export default withScreenLayout(HeroesTab);
 