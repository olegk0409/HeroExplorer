import { View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { withScreenLayout } from "@/hoc/withScreenLayout";
import AnimatedLoading from "@/components/AnimatedLoading";
import Button from "@/shared/Button";
import { useRouter } from "expo-router";

const OnboardingScreen = () => {
  const router = useRouter();
  const fade1 = useRef(new Animated.Value(0)).current;
  const fade2 = useRef(new Animated.Value(0)).current;
  const fade3 = useRef(new Animated.Value(0)).current;
  const fade4 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fade1, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(fade2, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(fade3, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(fade4, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View className="flex-1 justify-around items-center px-6">
      <AnimatedLoading />
      <Animated.View style={{ opacity: fade1 }}>
        <Text className="text-white text-2xl font-bold text-center mb-6">
          Welcome to Hero Explorer!
        </Text>
      </Animated.View>

      <Animated.View style={{ opacity: fade2 }}>
        <Text className="text-white text-lg text-center mb-6">
          Search through hundreds of superheroes and discover their unique
          abilities, origins and stats.
        </Text>
      </Animated.View>

      <Animated.View style={{ opacity: fade3 }}>
        <Text className="text-white text-lg text-center">
          Add favorites, compare heroes, and dive deeper into every character’s
          story. Your journey begins here.
        </Text>
      </Animated.View>

      <Animated.View style={{ opacity: fade3, width: '100%' }}>
        <Button title="Start" press={() => router.replace('/(tabs)')}/>
      </Animated.View>
    </View>
  );
};

export default withScreenLayout(OnboardingScreen);