import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import { Text, Paragraph } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Provider } from 'react-native-paper';
import {
  CameraIcon,
  IgtvIcon,
  InstagramIcon,
  MessengerIcon,
  OvalIcon,
  MoreIcon,
  VerfiedIcon,
  LikeIcon,
  CommentIcon,
  SaveIcon,
  PaginationIcon,
} from '../assets/icons';

const HomeScreen = () => {
  return (
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
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <View style={styles.postUserInfo}>
            <Image
              resizeMode="cover"
              style={{
                width: 40,
                height: 40,
                borderRadius: 500,
              }}
              source={require("../assets/images/profile-2.jpg")}
            />
            <View style={styles.postUserName}>
              <View style={styles.postVerfied}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    paddingRight: 4,
                  }}
                >
                  karennne
                </Text>
                <VerfiedIcon style={styles.verfiedIcon} />
              </View>
              <Text style={{ fontSize: 10 }}>New York, United State</Text>
            </View>
          </View>
          <MoreIcon style={styles.postHeadermoreIcon} />
        </View>
        <View style={styles.postImage}>
          <Image
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
            source={require("../assets/images/post_image.jpg")}
          />
        </View>
        <View style={styles.postReactionContainer}>
          <View style={styles.postReaction}>
            <View style={{ marginLeft: 8 }}>
              <LikeIcon />
            </View>
            <View style={{ marginLeft: 8 }}>
              <CommentIcon />
            </View>
            <View style={{ marginLeft: 8 }}>
              <MessengerIcon />
            </View>
          </View>
          <View style={{ position: "absolute", top: 0, right: 10 }}>
            <SaveIcon />
          </View>
          <View style={{ position: "absolute", top: 10 }}>
            <PaginationIcon />
          </View>
        </View>
        <View style={styles.postLike}>
          <View style={styles.postPersonThumbnail}>
            <Image
              style={{ width: 21, height: 21, borderRadius: 500 }}
              source={require("../assets/images/profile-4.jpg")}
            />
          </View>
          <View>
            <Paragraph>
              Liked by
              <Text style={{ fontWeight: "bold" }}> craig_love </Text>
              and
              <Text style={{ fontWeight: "bold" }}> 44,686 others </Text>
            </Paragraph>
          </View>
        </View>
        <View style={styles.postDescription}>
          <Paragraph style={{ fontSize: 12 }}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>karennne </Text>
            The game in New York was amazing and I want to share some photos
          </Paragraph>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default HomeScreen;

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
    borderBottomColor: "#DDD",
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
  postContainer: {
    marginVertical: 10,
    borderTopColor: "#DDD",
    borderTopWidth: 0.6,
  },
  postHeader: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  postUserInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  postUserName: {
    paddingHorizontal: 10,
  },
  postVerfied: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  postHeadermoreIcon: {
    position: "absolute",
    top: 0,
    left: 10,
  },
  postImage: {
    width: "100%",
    height: 250,
  },
  postReactionContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  postReaction: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  postLike: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 26,
  },
  postPersonThumbnail: {
    width: 24,
    height: 24,
    borderRadius: 500,
    marginRight: 2,
  },
  postDescription: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
});
