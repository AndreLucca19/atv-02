import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function SimplePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Madara uchiha</Text>
      <Image
        source={{ uri: "https://c.wallhere.com/photos/eb/2e/Uchiha_Madara_Naruto_Shippuuden_Rinnegan_anime-1362223.jpg!d" }}
        style={styles.image}
      />
      <Text style={styles.description}>
        "wake up to reality! nothing ever goes as planned in this world."
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
});
