import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { commonStyles } from "../styles/commonStyles";


const Page1 = () => (
    <View style={[commonStyles.container, styles.centerContent]}>
        <Image source = {require("../image/x.png")} style={styles.image}/>

        <Text style={styles.welcomeText}>Welcome to my App</Text>
        <Text style={styles.nameText}>█▒▒▒▒▒▒▒▒▒</Text>
        <Text style={styles.subtitle}>This is a demo app, designed to give you a sneak peek into the future</Text>
    </View>
);

const styles = StyleSheet.create({
    centerContent: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: "bold",
        letterSpacing: 3,
        marginBottom: 10,
        color: "#ffffff",
    },
    nameText: {
        fontSize: 15,
        fontWeight: "600",
        marginBottom: 5,
        color: "#ffffff",
    },
    subtitle: {
        marginTop: 10,
        fontSize: 11,
        fontStyle: "italic",
        textAlign: "center",
        color: "#ffffff",
    },
});

export default Page1;