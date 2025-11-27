import { View, Text } from "react-native";

type Props = {
  label: string;
  value: string;
}

const Info = ({ label, value }: Props) => (
  <View className="mb-2">
    <Text className="text-gray-300 font-semibold">{label}</Text>
    <Text className="text-white">{value}</Text>
  </View>
);

export default Info;