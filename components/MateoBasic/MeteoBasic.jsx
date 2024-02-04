import { Image, Text, View } from "react-native";
import { basicStyle } from "./MeteoBasic.style.";

const MeteoBasic = ({ temperature }) => {
  return (
    <>
      <View style={basicStyle.clock}>
        <Text style={basicStyle.txt}>Clock</Text>
      </View>
      <View style={basicStyle.city}>
        <Text style={basicStyle.txt}>City</Text>
      </View>
      <View style={basicStyle.inter}>
        <Text style={basicStyle.inter_txt}>Sunny</Text>
      </View>
      <View style={basicStyle.temp_box}>
        <Text style={basicStyle.temp_txt}>{temperature}*</Text>
        <Image style={basicStyle.temp_img} />
      </View>
    </>
  );
};

export default MeteoBasic;
