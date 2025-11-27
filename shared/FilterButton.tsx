import { TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  press: () => void;
};

const FilterButton = ({ press }: Props) => {
  return (
    <TouchableOpacity
      className="p-4 bg-white rounded-full justify-center items-center border border-gray-300"
      onPress={press}
    >
      <MaterialIcons name="filter-list-alt" size={20} color="gray" />
    </TouchableOpacity>
  );
};

export default FilterButton;
