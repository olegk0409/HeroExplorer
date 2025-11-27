import { TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';

const BackButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name="arrow-back-circle" size={30} color="white" />
    </TouchableOpacity>
  )
}

export default BackButton