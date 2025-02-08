import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Animated, Easing } from "react-native";
import { commonStyles } from "../styles/commonStyles";

const Page1 = () => {
    const progress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(progress, {
                toValue: 100,
                duration: 5000, // Adjust speed of animation
                easing: Easing.linear,
                useNativeDriver: false,
            })
        ).start();
    }, []);

    return (
        <View style={[commonStyles.container, styles.centerContent]}>
            <Image source={require("../image/x.png")} style={styles.image} />

            <Text style={styles.welcomeText}>Welcome to my App</Text>

            {/* Animated Loading Bar */}
            <View style={styles.loadingBarContainer}>
                <Animated.View
                    style={[
                        styles.loadingBar,
                        {
                            width: progress.interpolate({
                                inputRange: [0, 100],
                                outputRange: ["0%", "100%"],
                            }),
                        },
                    ]}
                />
            </View>

            <Text style={styles.subtitle}>This is a demo app, designed to give you a sneak peek into the future</Text>
        </View>
    );
};

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
    loadingBarContainer: {
        width: 150, // Adjust bar width
        height: 10,
        backgroundColor: "#444",
        borderRadius: 5,
        overflow: "hidden",
        marginTop: 10,
    },
    loadingBar: {
        height: "100%",
        backgroundColor: "#ffffff",
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