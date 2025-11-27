import { View } from "react-native";

const HeroesSkeleton = () => (
  <View className="flex-1 gap-4 pb-[50px]">
    <View className="w-full h-96 bg-gray-300 rounded-xl animate-pulse" />
    <View className="w-full h-96 bg-gray-300 rounded-xl animate-pulse" />
  </View>
);

export default HeroesSkeleton;