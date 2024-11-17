
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { StyleSheet, Image,  View, Text, TouchableOpacity, ScrollView } from 'react-native';
import UserBar from '~/components/UserBar';


const user = {
  firstName : 'Roxy',
  lastName : 'NULL',
  url : 'https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

const tracking = ['Ongoing Tasks', 'Daily Tasks', 'Weekly Tasks', 'Collaborations']

export default function Home() {

  const pressHandler = (data:string) => {
    setSelected(data);
  }

  const [selected, setSelected] = useState("Ongoing Tasks")
  return (
    <>
      
      <SafeAreaView className = "w-full  bg-[#181818] h-full">
        <UserBar/>
        <View className = " mt-2 flex items-center justify-center">
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className = 'w-full   flex gap-4 h-[30px] '>
            {tracking.map((d, I) => {return(<TouchableOpacity onPress={() =>pressHandler(d)} key = {I} className = {selected  == d ? "px-4  rounded-full  bg-[#009688] border-white border-[1px] flex items-center justify-center mx-8" : "px-4  rounded-full border-white border-[1px]  flex items-center justify-center mx-8" }><Text className = "font-serif text-white">{d}</Text></TouchableOpacity>)})}
          </ScrollView>
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
