import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeIn, FadeInDown, FadeInRight, FadeInUp, FadeOut } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

export default function SignupScreen() {

    const navigation = useNavigation();

  return (
    <View className="bg-white h-full w-full">
        <StatusBar style='light' />
        <Image className="h-full w-full absolute" source={require('../assets/images/background.png')} />
        
        {/* lights */}
        <View className="flex-row justify-around w-full absolute">
            <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} className="h-[225] w-[90]" source={require("../assets/images/light.png")} />
            <Animated.Image entering={FadeInUp.delay(500).duration(1500).springify().damping(3)} className="h-[160] w-[65]" source={require("../assets/images/light.png")} />
        </View>

        {/* Title & Forms */}
        <View className='w-full h-full flex justify-around pt-40 pb-10'>
            {/* Title */}
            <View className='flex items-center'>
                <Animated.Text entering={FadeInRight.duration(1000).springify()} className="text-white font-bold tracking-wider text-5xl">
                    Sign Up
                </Animated.Text>
            </View>

            {/* form */}
            <View className="flex items-center mx-4 space-y-4">
                <Animated.View entering={FadeInDown.delay(200).duration(1500).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
                    <TextInput placeholder="Email" placeholderTextColor={'gray'}/>
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(400).duration(1500).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
                    <TextInput placeholder="Password" placeholderTextColor={'gray'} secureTextEntry />
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(600).duration(1500).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-4">
                    <TextInput placeholder="Confirm password" placeholderTextColor={'gray'} secureTextEntry />
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(800).duration(1500).springify()} className="w-full">
                    <TouchableOpacity
                        className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
                        <Animated.Text entering={FadeInDown.duration(1000).springify()} className="text-xl font-bold text-white text-center">
                            Register
                        </Animated.Text>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(1000).duration(1500).springify()} className="flex-row justify-center ">
                    <Text className="">Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.push('Login')}>
                        <Text className="text-sky-600">
                            Login
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    </View>
  )
}