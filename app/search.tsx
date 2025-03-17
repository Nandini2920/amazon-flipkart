import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useRouter } from "expo-router";

export default function SearchScreen() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      router.push(`/product-details?query=${query}`);
    }
  };

  return (
    <ImageBackground source={require("../assets/pic4.jpg")} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Compare Prices</Text>
        <Text style={styles.subtitle}>Search for a product to compare prices on Amazon & Flipkart</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter product name..."
          placeholderTextColor="#666" // Darker placeholder color
          value={query}
          onChangeText={setQuery}
        />

        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%", 
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    //backgroundColor: "rgba(255, 255, 255, 0.7)", // Light overlay for white background
    padding: 20,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    marginBottom: 240,
    marginLeft: 28,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333", // Darker text for readability
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555", // Medium gray for better contrast
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: "rgba(255, 255, 255, 0.9)", // More solid input background
    marginBottom: 15,
    color: "#333", // Dark text inside input
  },
  button: {
    backgroundColor: "#0056b3", // Darker blue button for visibility
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
