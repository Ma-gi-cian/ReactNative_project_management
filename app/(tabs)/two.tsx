import { Stack } from 'expo-router';
import {Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserBar from '~/components/UserBar';

export default function Home() {
  return (
    <>
      {/* <Stack.Screen options={{ title: 'Completed' }} /> */}
      <SafeAreaView className = "w-full  bg-[#181818] h-full">
        <UserBar/>
      <View className = "flex items-center justify-center h-full ">
        <Text className = "text-white text-xl font-serif text-center">This is the completed tab. You can check the tasks that have been completed.</Text>
      </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
