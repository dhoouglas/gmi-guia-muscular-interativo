import "./global.css";
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, } from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LoginScreen } from './src/screens/auth/LoginScreen';
import { StatusBar } from "react-native";

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
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <LoginScreen />
    </SafeAreaProvider>
  );
}
