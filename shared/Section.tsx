import { ReactNode } from "react";
import { View, Text } from "react-native";

type Props = {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: Props) => (
  <View className="p-4 rounded-xl border border-slate-500 bg-gray-500">
    <Text className="text-xl font-bold mb-3 text-white">{title}</Text>
    {children}
  </View>
);

export default Section;