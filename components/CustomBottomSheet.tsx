import React, { forwardRef, ReactElement, SetStateAction } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from "@gorhom/bottom-sheet";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Filter } from "@/utils/types";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  closeSheet: () => void;
  filter: Filter;
  setFilter: React.Dispatch<SetStateAction<Filter>>;
};

const FILTER_OPTIONS: { label: ReactElement; value: Filter }[] = [
  { label: <MaterialCommunityIcons name='brain' size={24} color="black" />, value: Filter.intelligence },
  { label: <FontAwesome name="hand-grab-o" size={24} color="black" />, value: Filter.strength },
  { label: <MaterialCommunityIcons name="foot-print" size={24} color="black" />, value: Filter.speed },
  { label: <MaterialCommunityIcons name="hammer" size={24} color="black" />, value: Filter.durability },
  { label: <MaterialCommunityIcons name="emoticon-cool" size={24} color="black" />, value: Filter.power },
  { label: <MaterialCommunityIcons name="knife-military" size={24} color="black" />, value: Filter.combat },
  { label: <MaterialCommunityIcons name="close" size={24} color="black" />, value: Filter.none },
];

const CustomBottomSheet = forwardRef<BottomSheet, Props>(
  ({ closeSheet, filter, setFilter }, ref) => {
    const handleSelect = (value: Filter) => {
      setFilter(value);
      closeSheet();
    };

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={["40%", "70%", "80%"]}
        backgroundStyle={{ backgroundColor: 'gray' }}
        onChange={(index) => {
          if (index <= 0) closeSheet();
        }}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            opacity={0.8}
            pressBehavior="none"
            disappearsOnIndex={-1}
          />
        )}
      >
        <BottomSheetView className="flex-1 w-full p-4 gap-6">
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-xl font-bold text-white">Select Filter</Text>

            <TouchableOpacity onPress={closeSheet}>
              <AntDesign name="close" size={24} color={"#FFF"} />
            </TouchableOpacity>
          </View>

          <View className="mt-4 gap-3 flex-row flex-wrap justify-center">
            {FILTER_OPTIONS.map((item) => {
              const isActive = filter === item.value;

              return (
                <TouchableOpacity
                  key={item.value}
                  onPress={() => handleSelect(item.value)}
                  className={`
                    p-4 rounded-lg w-[30%] items-center
                    ${isActive ? "bg-red-300" : "bg-gray-200"}
                  `}
                >
                  {item.label}
                  {item.value !== Filter.none && <Text>{item.value}</Text>}
                </TouchableOpacity>
              );
            })}
          </View>
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

export default CustomBottomSheet;