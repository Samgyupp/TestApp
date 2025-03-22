import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 
import { commonStyles } from "../styles/commonStyles";

const Page2 = () => {
    const openLink = (url: string) => {
        Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
    };

    return (
        <View style={[commonStyles.container, styles.centerContent]}>
            {/* Profile Image */}
            <Image source={require("../image/sam.jpg")} style={styles.profileImage} />

            <Text style={styles.nameText}>Samuel Samoza</Text>
            <Text style={styles.subText}>BSIT2A</Text>

            {/* Social Media Icons */}
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => openLink("https://www.instagram.com/268sml_/")}>
                    <Icon name="instagram" size={40} color="#ffffff" style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => openLink("https://www.facebook.com/sam.samoza.9/")}>
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
    profileImage: {
        width: 120, 
        height: 120,
        borderRadius: 30, 
        marginBottom: 15,
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
        marginHorizontal: 15, 
    },
});

export default Page2;
