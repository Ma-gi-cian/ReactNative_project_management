import {View, Dimensions, TouchableOpacity, Text, Image} from 'react-native';
import { FontIcon, AntIcon } from '~/app/(tabs)/_layout';
import {useState, useEffect} from 'react'

export default function UserBar() {

  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  const pressHandler = () => {
    console.log("clicked the image");
  }

  const tasks = ['New Tasks', 'Saved Tasks']

  const [task, setTask] = useState("New Tasks")
  const tasksHandler = (d:string) => {
    setTask(d)
  }

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowWidth(window.width);
    });

    return () => subscription?.remove();
  }, []);
    return(
        <>
        <View className = {`max-w-[${windowWidth}] flex-row items-center justify-between px-2 py-1 border-b-[1px] border-gray-800  min-w-[${windowWidth}]`} >
        <TouchableOpacity className = "px-2 py-2 border-[1px] border-black rounded-full" ><FontIcon iconName = "user-o" color = "black" /></TouchableOpacity>
          <View className = "flex items-center gap-4 rounded-xl overflow-hidden bg-gray-500/20 px-1 py-1 justify-center flex-row w-[60%]">
          {tasks.map((d, I) => (<TouchableOpacity onPress = {() => tasksHandler(d)} key =  {I} className =  {d == task ? `rounded-full bg-gray-400 px-2 py-1` : `rounded-full px-4 py-1`}><Text className = "font-mono text-md">{d}</Text></TouchableOpacity>))}
          </View>

          <View className = "flex-row gap-4 w-[15%] px-2 py-2 flex items-center justify-center" >
            <TouchableOpacity >
              <AntIcon iconName = "gift" color = "black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntIcon iconName = "dotchart" color = "black" />
            </TouchableOpacity>
          </View>
        </View>
        </>
    )
}

/*

*/