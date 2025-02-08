import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Animated, Easing } from "react-native";
import { commonStyles } from "../styles/commonStyles";

const Page1 = () => {
    const dot1 = useRef(new Animated.Value(0)).current;
    const dot2 = useRef(new Animated.Value(0)).current;
    const dot3 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animateDot = (dot: Animated.Value, delay: number) => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(dot, {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.ease,
                        useNativeDriver: false,
                    }),
                    Animated.timing(dot, {
                        toValue: 0,
                        duration: 500,
                        easing: Easing.ease,
                        useNativeDriver: false,
                    }),
                ])
            ).start();
        };

        animateDot(dot1, 0);
        setTimeout(() => animateDot(dot2, 300), 300);
        setTimeout(() => animateDot(dot3, 600), 600);
    }, []);

    return (
        <View style={[commonStyles.container, styles.centerContent]}>
            <Image source={require("../image/x.png")} style={styles.image} />
            <Text style={styles.welcomeText}>Welcome to my App</Text>

            {/* Pulsating Dots */}
            <View style={styles.dotsContainer}>
                <Animated.View style={[styles.dot, { opacity: dot1 }]} />
                <Animated.View style={[styles.dot, { opacity: dot2 }]} />
                <Animated.View style={[styles.dot, { opacity: dot3 }]} />
            </View>

            <Text style={styles.subtitle}>This is a demo app, </Text>
            <Text style={styles.subtitle2}> designed to give you a sneak peek into the future</Text>
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
    dotsContainer: {
        flexDirection: "row",
        marginTop: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#ffffff",
        marginHorizontal: 5,
    },
    subtitle: {
        marginTop: 20,
        fontSize: 11,
        fontStyle: "italic",
        textAlign: "center",
        color: "#ffffff",
        
    },
    subtitle2: {
        marginTop: 5,
        fontSize: 11,
        fontStyle: "italic",
        textAlign: "center",
        color: "#ffffff",
        marginBottom: 50,
        
    },
});

export default Page1;
