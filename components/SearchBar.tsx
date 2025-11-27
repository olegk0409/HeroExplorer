import FilterButton from "@/shared/FilterButton";
import { TextInput, View } from "react-native";

type Props = {
  value: string;
  onChange: (val: string) => void;
  onFilterPress: () => void;
}

const SearchBar = ({ value, onChange, onFilterPress }: Props) => (
  <View className="flex-row justify-between">
    <TextInput
      value={value}
      placeholder="Search..."
      onChangeText={onChange}
      className="w-[80%] p-4 rounded-lg bg-white border border-gray-300 text-lg text-gray-800 shadow-md"
    />
    <FilterButton press={onFilterPress} />
  </View>
);

export default SearchBar;