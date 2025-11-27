import { View, Text, Image } from "react-native";
import React from "react";
import Button from "@/shared/Button";
import { PowerStats } from "@/utils/types";
import { Link } from "expo-router";

type Props = {
  id: string;
  name: string;
  image: string;
  stats: PowerStats;
  nameColor: string;
};

const HeroItem = ({ id, name, image, stats, nameColor }: Props) => {
  const statsArray = Object.entries(stats);

  return (
    <View className="p-4 bg-slate-300 border-2 border-red-500 rounded-lg gap-2 w-full">
      <View className="flex-row">
        <View className="w-[50%]">
          <Text
            className={`text-[24px] font-bold text-center`}
            style={{ color: nameColor }}
          >
            {name}
          </Text>

          <Image
            source={{
              uri: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/ac58010a8a66e05d1cac1eb85fee2b69/superbohaterowie.png",
            }}
            className="w-48 h-72 object-contain rounded-md mx-auto"
          />
        </View>

        <View className="w-[50%] items-center justify-center gap-2">
          <Text className="color-black text-xl font-semibold">Power stats:</Text>
          <View className="flex-wrap flex-row justify-evenly items-center">
            {statsArray.map(([statName, statValue], index) => (
              <View
                key={index}
                className="p-2 bg-gray-100 border border-gray-400 rounded-lg w-[47%] items-center"
              >
                <Text className="text-sm text-gray-700">
                  {statName.charAt(0).toUpperCase() + statName.slice(1)}
                </Text>
                <Text className="font-bold">{statValue.toString()}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View>
        <Link
          key={id}
          href={{
            pathname: `/hero/[id]`,
            params: { id: id },
          }}
          className="w-full z-10"
        >
          <Button title="View Details" press={() => {}} />
        </Link>
      </View>
    </View>
  );
};

export default HeroItem;
