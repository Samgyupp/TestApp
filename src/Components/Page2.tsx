import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons
import { commonStyles } from "../styles/commonStyles";

const Page2 = () => {
    const openLink = (url: string) => {
        Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
    };

    return (
        <View style={[commonStyles.container, styles.centerContent]}>
            <Text style={styles.nameText}>Samuel Samoza</Text>
            <Text style={styles.subText}>BSIT2A</Text>

            {/* Social Media Icons */}
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => openLink("https://www.instagram.com/268sml_/")}>
                    <Icon name="instagram" size={40} color="#ffffff" style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => openLink("https://www.facebook.com/smlndcho/")}>
                    <Icon name="facebook" size={40} color="#ffffff" style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => openLink("https://github.com/Samgyupp")}>
                    <Icon name="github" size={40} color="#ffffff" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

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
    },
    iconContainer: {
        flexDirection: "row",
        marginTop: 20,
    },
    icon: {
        marginHorizontal: 15, // Space between icons
    },
});

export default Page2;