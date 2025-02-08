import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View, Text, Button, StyleSheet} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native"
import { RootStackParamList } from "../Navigation/AppNavigator";
import Page1 from '../Components/Page1';
import Page2 from '../Components/Page2';
import Page3 from '../Components/Page3';


const Tab = createBottomTabNavigator();


type ProfileScreenRouteProp = RouteProp <RootStackParamList, 'Profile'>;


type Props = {
    route : ProfileScreenRouteProp;
};


const ProfileScreen: React.FC<Props> = ({route}) => {
return(
<Tab.Navigator
screenOptions={{
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#000000',
    },
    tabBarActiveTintColor: '#ffffff',
    tabBarInactiveTintColor: '#888888',
  }}
  >
    <Tab.Screen 
    name="Front Page" 
    component={Page1}
     />
    <Tab.Screen 
    name="Details" 
    component={Page2} 
    />
    <Tab.Screen 
    name="Updates" 
    component={Page3} 
    />
    </Tab.Navigator>
    );
  };


export default ProfileScreen;
