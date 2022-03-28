import { StyleSheet, View, FlatList,Image } from "react-native";
import { Text } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";

const Stories = () => {
  return (
    <View style={styles.stories}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={[1]}
        renderItem={({ item }) => (
          <>
            <View style={styles.story}>
              <LinearGradient
                colors={["#CA1D7E", "#E35157", "#F2703F"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={styles.storyGradient}
              >
                <Image
                  resizeMode="cover"
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 58 / 2,
                    alignSelf: "center",
                    borderColor: "#fff",
                    borderWidth: 2,
                  }}
                  source={require("../assets/images/profile-1.jpg")}
                />
              </LinearGradient>
              <Text style={styles.storyText}>Your story</Text>
            </View>
            <View style={styles.story}>
              <LinearGradient
                colors={["#CA1D7E", "#E35157", "#F2703F"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={styles.storyGradient}
              >
                <Image
                  resizeMode="cover"
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 58 / 2,
                    alignSelf: "center",
                    borderColor: "#fff",
                    borderWidth: 2,
                  }}
                  source={require("../assets/images/profile-2.jpg")}
                />
              </LinearGradient>
              <LinearGradient
                colors={["#E35157", "#CA1D7E"]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 0 }}
                style={styles.storyLive}
              >
                <Text style={styles.storyLiveText}>LIVE</Text>
              </LinearGradient>
              <Text style={styles.storyText}>karennne</Text>
            </View>
            <View style={styles.story}>
              <LinearGradient
                colors={["#CA1D7E", "#E35157", "#F2703F"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={styles.storyGradient}
              >
                <Image
                  resizeMode="cover"
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 58 / 2,
                    alignSelf: "center",
                    borderColor: "#fff",
                    borderWidth: 2,
                  }}
                  source={require("../assets/images/profile-3.jpg")}
                />
              </LinearGradient>
              <Text style={styles.storyText}>zackjohn</Text>
            </View>
            <View style={styles.story}>
              <LinearGradient
                colors={["#CA1D7E", "#E35157", "#F2703F"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={styles.storyGradient}
              >
                <Image
                  resizeMode="cover"
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 58 / 2,
                    alignSelf: "center",
                    borderColor: "#fff",
                    borderWidth: 2,
                  }}
                  source={require("../assets/images/profile-4.jpg")}
                />
              </LinearGradient>
              <Text style={styles.storyText}>craig_love</Text>
            </View>
            <View style={styles.story}>
              <LinearGradient
                colors={["#CA1D7E", "#E35157", "#F2703F"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={styles.storyGradient}
              >
                <Image
                  resizeMode="cover"
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 58 / 2,
                    alignSelf: "center",
                    borderColor: "#fff",
                    borderWidth: 2,
                  }}
                  source={require("../assets/images/profile-5.jpg")}
                />
              </LinearGradient>

              <Text style={styles.storyText}>kieron_d</Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  stories: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 10,
  },
  story: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  storyGradient: {
    position: "relative",
    height: 62,
    width: 62,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 62 / 2,
    marginBottom: 5,
  },
  storyText: {
    fontSize: 12,
  },

  storyLive: {
    position: "absolute",
    bottom: 14,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 5,
  },
  storyLiveText: {
    color: "white",
    fontSize: 8,
  },
});
