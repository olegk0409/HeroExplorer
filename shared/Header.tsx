import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '@/theme/colors';

type Props = {
  title: string;
}

function Header({title}: Props) {
  return (
    <LinearGradient
      colors={[colors.foreground, colors.background]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="p-4 rounded-2xl shadow-md items-center justify-center border-[1px] overflow-hidden"
    >
      <Text className="text-white text-[30px] font-bold">{title}</Text>
    </LinearGradient>
  );
}

export default Header;