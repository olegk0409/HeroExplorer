import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

type Props = {
  title: string,
  press: (val: any) => void;
}

const Button = ({title, press}: Props) => {
  return (
    <View className="flex justify-center border-[1px] rounded-2xl overflow-hidden w-full">
      <TouchableOpacity activeOpacity={0.4} onPress={press}>
        <LinearGradient
          colors={['#3b82f6', '#9333ea', '#ec4899']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="justify-center items-center shadow-lg p-4 w-full"
        >
          <Text className="text-white text-lg font-bold">{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

export default Button