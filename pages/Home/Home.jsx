import { Text, View } from "react-native";
import { HomeStyle } from "./Home.style";
import MeteoBasic from "../../components/MateoBasic/MeteoBasic";
const Home = ({ whether }) => {
  return (
    <>
      <View style={HomeStyle.upper}>
        <MeteoBasic
          temperature={Math.round(whether?.current_weather?.temperature)}
        />
      </View>
      <View style={HomeStyle.middle}>
        <Text style={HomeStyle.txt}>Middle</Text>
      </View>
      <View style={HomeStyle.bottom}>
        <Text style={HomeStyle.txt}>Bottom</Text>
      </View>
    </>
  );
};

export default Home;
