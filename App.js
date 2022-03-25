import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import { Provider } from "react-native-paper";
import {
  CameraIcon,
  IgtvIcon,
  InstagramIcon,
  MessengerIcon,
  OvalIcon,
} from "./src/assets/icons";

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.row}>
            <CameraIcon style={styles.cameraIcon} />
            <InstagramIcon />
            <IgtvIcon style={styles.igtvIcon} />
            <OvalIcon style={styles.ovalIcon} />
            <MessengerIcon style={styles.messengerIcon} />
          </View>
        </View>
        <View style={styles.stories}>
        <LinearGradient
  colors={['#CA1D7E', '#E35157', '#F2703F']}
  start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
  style={{ height: 82,width: 82,alignItems: 'center',justifyContent: 'center',borderRadius:82 / 2}}>
          <Image resizeMode="cover" style={{width: 77,height: 77,borderRadius: 77/2,alignSelf: 'center',borderColor: '#fff',borderWidth: 2}} source={ require('./src/assets/images/profile.jpg')} />
          </LinearGradient>
        </View>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "flex-start",
  },
  header: {
    backgroundColor: "#FAFAFA",
    height: 60,
    justifyContent: "center",
    alignContent: "center",
    borderBottomWidth: 0.6,
    borderBottomColor: "#A6A6AA",
  },
  row: {
    flexDirection: "row",
    position: "relative",
    justifyContent: "center",
    alignContent: "center",
  },
  cameraIcon: {
    position: "absolute",
    top: 0,
    left: 10,
  },
  igtvIcon: {
    position: "absolute",
    top: 0,
    right: 10,
    marginRight: 40,
  },
  messengerIcon: {
    position: "absolute",
    top: 2,
    right: 10,
  },
  ovalIcon: {
    position: "absolute",
    top: 2,
    right: 49,
  },
  stories: {

  }
});
