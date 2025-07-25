/*import { SplashScreen, Stack } from "expo-router";
import './global.css';
import {useFonts} from 'expo-font';
import { useEffect } from "react";

export default function RootLayout() {
  const[fontsLoaded,error]=useFonts(map:{
    "Quicksand-Bold":require(id:'../assets/fonts/Quicksand-Bold.ttf'),
    "Quicksand-Medium":require(id:'../assets/fonts/Quicksand-Medium.ttf'),
    "Quicksand-Regular":require(id:'../assets/fonts/Quicksand-Regular.ttf'),
    "Quicksand-Light":require(id:'../assets/fonts/Quicksand-Light.ttf'),
    "Quicksand-SemiBold":require(id:'../assets/fonts/Quicksand-SemiBold.ttf'),
  });
  useEffect(effect:()=>{
    if(error)throw error
    if(fontsLoaded)SplashScreen.hideAsync();

  },deps:[fontsLoaded,error]);
  return <Stack  screenOptions={{headerShown:false}}/>;
}
*/
import { SplashScreen, Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Quicksand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
    "Quicksand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  // Show nothing until fonts are loaded
  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
