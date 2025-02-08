import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';


export type RootStackParamList = {
    Home: undefined;
    Profile: { userId?: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home' }}
                />
                 <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: 'profile' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;