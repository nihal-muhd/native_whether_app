import { AppStyle } from "./App.style";
import { ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import appBackground from './assets/background.png'
import Home from "./pages/Home/Home";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
import { useEffect, useState } from "react";
import { useFonts } from 'expo-font'

export default function App() {
  const [coordinates, setCordinates] = useState()
  const [whether, setWhether] = useState()
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf")
  })
  console.log(whether);
  useEffect(() => {
    getCordinates()
  }, [])
  useEffect(() => {
    if (coordinates) {
      fetchWhetherReport()
    }
  }, [coordinates])
  const fetchWhetherReport = async () => {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`)
    const json = await res.json();
    setWhether(json)
  }
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
          {isFontLoaded && <Home whether={whether} />}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}


