import { Link, Tabs } from 'expo-router';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';

const FontIcon = ({iconName, color} :{iconName : React.ComponentProps<typeof FontAwesome>['name'] , color : string}) => (<FontAwesome name={iconName} size={24} color = {color} />)
const IonIcon = ({iconName, color} : {iconName : React.ComponentProps<typeof Ionicons>['name'], color : string }) => (<Ionicons name = {iconName} size = {24} color = {color} />)
const AntIcon = ({iconName, color} : {iconName : React.ComponentProps<typeof AntDesign>['name'], color : string }) => (<AntDesign name = {iconName} size = {24} color = {color} />)

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarStyle : {
          backgroundColor : '#181818'
        }
      }}>
      <Tabs.Screen
        name="index"

        options={{
          headerShown : false,
          title: 'Home',
          tabBarIcon: ({color}) => (
            <FontIcon iconName = "home" color  = {color} />
          )
          
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          headerShown : false,
          title: 'Completed',
          
          tabBarIcon: ({ color }) => <FontIcon iconName = "list" color = {color} />
        }}
      />
      <Tabs.Screen name = "collaboration" options={{headerShown : false, title : 'Collaboration', tabBarIcon : ({color}) => <IonIcon iconName = "people" color = {color} />}} />
    </Tabs>
  );
}

export {IonIcon, FontIcon, AntIcon}

