import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { commonStyles } from "../styles/commonStyles";

const Page3 = () => (
    <View style={[commonStyles.container, styles.centerContent]}>
        <Text style={styles.updateText}>U P D A T E S</Text>
        <Text style={styles.subText}>current version: 0.2</Text>

    </View>
);

const styles = StyleSheet.create({
    centerContent: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    updateText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center",
        letterSpacing: 3,
        textTransform: "uppercase",
    },
    subText: {
        fontSize: 15,
        fontWeight: "600",
        marginBottom: 5,
        color: "#ffffff",
        fontStyle: "italic",
    }
});

export default Page3;