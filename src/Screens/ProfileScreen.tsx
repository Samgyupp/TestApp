import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Button, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../Navigation/AppNavigator";
import Page1 from '../Components/Page1';
import Page2 from '../Components/Page2';
import Page3 from '../Components/Page3';
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons

const Tab = createBottomTabNavigator();

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type Props = {
    route: ProfileScreenRouteProp;
};

const ProfileScreen: React.FC<Props> = ({ route }) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#000000',
                },
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#888888',
                tabBarIcon: ({ color, size }) => {
                    let iconName: string;

                    if (route.name === "Front Page") {
                        iconName = "home";
                    } else if (route.name === "Details") {
                        iconName = "user";
                    } else if (route.name === "Updates") {
                        iconName = "bell";
                    } else {
                        iconName = "question";
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
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
