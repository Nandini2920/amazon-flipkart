import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

export default function Layout() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake authentication check (replace with Firebase/Auth logic)
    setTimeout(() => {
      setIsAuthenticated(false); // Set to true if logged in
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [loading, isAuthenticated]);
  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.replace("/search"); // Redirect after login
    }
  }, [loading, isAuthenticated]);
  
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Stack />;
}
