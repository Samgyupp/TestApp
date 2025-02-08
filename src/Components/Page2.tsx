import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { commonStyles } from "../styles/commonStyles";

const Page2 = () => (
    <View style={[commonStyles.container, styles.centerContent]}>
        <Text style={styles.nameText}>Samuel Samoza</Text>
        <Text style={styles.subText}>BSIT2A</Text>
    </View>
);

const styles = StyleSheet.create({
    centerContent: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    nameText: {
        fontSize: 20,
        fontWeight: "600",
        color: "#ffffff",
        textAlign: "center",
    },
    subText: {
        fontSize: 12,
        marginTop: 5,
        color: "#ffffff",
        fontStyle: "italic",
    }
});

export default Page2;