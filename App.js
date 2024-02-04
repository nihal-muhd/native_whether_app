import { AppStyle } from "./App.style";
import { ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import appBackground from './assets/background.png'
import Home from "./pages/Home/Home";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { useEffect, useState } from "react";

export default function App() {
  const [coordinates, setCordinates] = useState()
  useEffect(() => {
    getCordinates()
  }, [])
  const getCordinates = async () => {
    const { status } = await requestForegroundPermissionsAsync()
    if (status === 'granted') {
      const location = await getCurrentPositionAsync()
      setCordinates({ lat: location.coords.latitude, lng: location.coords.longitude })
    } else {
      setCordinates({ lat: "54.6", lng: '14.6' })
    }
  }
  return (
    <ImageBackground imageStyle={AppStyle.img} style={AppStyle.img_background} source={appBackground}>
      <SafeAreaProvider>
        <SafeAreaView style={AppStyle.safeView}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}


