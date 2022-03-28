import { StyleSheet, View, Image } from 'react-native';
import { Text, Paragraph } from 'react-native-paper';
import {
  MessengerIcon,
  MoreIcon,
  VerfiedIcon,
  LikeIcon,
  CommentIcon,
  SaveIcon,
  PaginationIcon,
} from '../assets/icons';

const Post = () => {
  return (
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
  );
};

export default Post;

const styles = StyleSheet.create({
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
