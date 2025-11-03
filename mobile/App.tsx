import "./global.css";
import { Text, View } from "react-native";
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Mantém a tela de splash visível enquanto carregamos os recursos
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text style={{ fontFamily: "Inter_700Bold" }} className="text-xl font-bold text-blue-800">
        Welcome to Nativewind!
      </Text>

      <Text style={{ fontFamily: "Inter_700Bold" }} className="text-base text-gray-600 mt-2">
        Your fonts have loaded successfully.
      </Text>
    </View>
  );
}
