import React from "react";
import { View, Text, Button, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Platform, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../Navigation/AppNavigator";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
}; 

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [userId, setUserId] = React.useState('');

  const checkValidity = () => userId.length >= 8;

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "position"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 20}
        style={styles.inner}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <Image source={require("../image/x.png")} style={styles.image} />
          <Text style={styles.text}>Welcome to your Home Screen</Text>
          <TextInput
            style={styles.input}
            value={userId}
            onChangeText={setUserId}
            placeholder="Enter User ID"
            placeholderTextColor={'#ffffff'}
            autoCapitalize="none"
          />
          <View style={styles.buttonContainer}>
            {checkValidity() ? (
              <Button
                title="Go to Profile"
                color={'#ffffff'}
                onPress={() => navigation.navigate('Profile', { userId })}
              />
            ) : (
              <Button title="Enter User ID" color={'#ffffff'} />
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  
  inner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },

  image: {
    width: 147,
    height: 147,
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 37,
  },

  text: {
    fontSize: 40,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 25,
  },

  input: {
    width: "85%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#ffffff",
    backgroundColor: "#000000",
    marginBottom: 10,

  },
  buttonContainer: {
    width: "80%",
    marginBottom: 10,
  },
});

export default HomeScreen;
