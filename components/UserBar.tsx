import {View, TouchableOpacity, Text, Image} from 'react-native';
import { FontIcon } from '~/app/(tabs)/_layout';

const user = {
    firstName : 'Aditya',
    lastName : 'Jha',
    url : 'https://images.unsplash.com/photo-1567334037232-8e02cf81ca04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'
  }
export default function UserBar() {


    return(
        <>
        <View  className = "px-4 mt-2  px-8 border-b-[1px] border-gray-200/20 flex items-center justify-between flex-row  w-full ">
          <View className = "flex py-2  items-center overflow-hidden w-fit  flex-row  justify-center gap-2">
            <Image source={{uri :  user.url}} className = "w-[50px] h-[50px] rounded-full  " />
            <View className = "flex items-center justify-center">
            <Text className = "text-white w-full font-serif text-xl text-left">Hello {user.firstName}</Text>
            <Text className = "text-white w-full text-sm text-left">Welcome Back</Text>
            </View>
          </View>
          <View className = "flex items-center w-fit  flex-row gap-4 justify-center">
            <TouchableOpacity className = "border-2 border-white rounded-full p-2 items-center flex justify-center" ><FontIcon  iconName = "search" color = "white" /></TouchableOpacity>
            <TouchableOpacity className = "border-2  border-white rounded-full p-2 items-center flex justify-center" ><FontIcon iconName = "bell" color = "white" /></TouchableOpacity>
          </View>
        </View>
        </>
    )
}