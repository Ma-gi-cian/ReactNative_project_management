
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { StyleSheet, Image,  View, Text, TouchableOpacity, ScrollView } from 'react-native';
import UserBar from '~/components/UserBar';



const tracking = ['Github Issues', 'Daily Tasks', 'Weekly Tasks', 'Collaborations']

export default function Home() {

  const pressHandler = (data:string) => {
    setSelected(data);
  }

  const [selected, setSelected] = useState("Github Issues")
  return (
    <>
      
      <SafeAreaView className = "flex flex-1">
        <UserBar/>
        <View className = " mt-2 flex items-center justify-center">
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className = 'w-full   flex gap-4 h-[30px] '>
            {tracking.map((d, I) => {return(<TouchableOpacity onPress={() =>pressHandler(d)} key = {I} className = {selected  == d ? "px-4  rounded-full  bg-indigo-400 border-white  flex items-center justify-center mx-8" : "px-4  rounded-full border-black border-[1px]  flex items-center justify-center mx-8" }><Text className = "font-serif ">{d}</Text></TouchableOpacity>)})}
          </ScrollView>
        </View>

        

      </SafeAreaView>
    </>
  );
}