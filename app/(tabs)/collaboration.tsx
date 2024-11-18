import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import { Stack } from 'expo-router';
import UserBar from '~/components/UserBar';
export default function Three() {
    return(
        <>
        
        <SafeAreaView className = "w-full h-full">
        <UserBar/>
      <View className = "flex items-center justify-center h-full ">
      <Text className = " font-serif text-center text-xl">This tab is intended for communication between collaboraters. Last stage feature for this. </Text>
      </View>
        </SafeAreaView>
        </>
    )
}

{/*  */}