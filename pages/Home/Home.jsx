import {Text, View} from 'react-native'
import { HomeStyle } from './Home.style'
const Home = () => {
  return (
    <>
    <View style={HomeStyle.upper}>
      <Text style={HomeStyle.txt}>hey</Text>
    </View>
    <View style={HomeStyle.middle}>
      <Text style={HomeStyle.txt}>Middle</Text>
    </View>
    <View style={HomeStyle.bottom}>
      <Text style={HomeStyle.txt}>Bottom</Text>
    </View>
    </>
  )
}

export default Home
