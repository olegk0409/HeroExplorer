import React from "react";
import { View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import colors from "@/theme/colors";

const iconMap: Record<string, keyof typeof AntDesign.glyphMap> = {
  index: "home",
  favourite: "heart",
};

export default function CustomTabBar({
  state,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="absolute left-0 right-0 overflow-hidden rounded-2xl pl-1 pr-1"
      style={{ bottom: insets.bottom }}
    >
      <LinearGradient
        colors={[colors.background, colors.foreground]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="border-[1px] rounded-2xl overflow-hidden"
      >
        <View className="flex-row justify-around py-3">
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                className="items-center justify-center"
                activeOpacity={0.8}
              >
                <View
                  className={`
                  items-center justify-center
                  w-[30px] h-[30px] rounded-full
                `}
                  style={isFocused ? { transform: [{ scale: 1.6 }] } : {}}
                >
                  <AntDesign
                    name={iconMap[route.name] || "alert-circle"}
                    size={20}
                    color={isFocused ? "#FFF" : "#000"}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </LinearGradient>
    </View>
  );
}
