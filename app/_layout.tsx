import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { StatusBar, Text, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { TodoProvider } from "@/contextApi/Todo.context";
import Toast from "react-native-toast-message";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const test = useSafeAreaInsets();

  return (
    <TodoProvider>
      <Stack
        screenOptions={{
          //fullScreenGestureEnabled: true,
          header: () => (
            <View
              className="w-full h-[180px] bg-teal-900 flex flex-row gap-4 items-center justify-center"
              style={{ paddingTop: test.top }}
            >
              <FontAwesome6 name="clipboard-list" size={50} color="white" />
              <Text className="uppercase text-3xl font-bold text-white">
                todo list
              </Text>
            </View>
          ),
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar />
      <Toast />
    </TodoProvider>
  );
}
