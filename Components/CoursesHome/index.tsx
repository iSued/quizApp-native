import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faStopwatch,
  faEye,
  faThumbsUp,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";

type CourseCard = {
  title: string;
  author: string;
  thumbnail: string;
  isLiked: boolean;
  isRead: boolean;
  isBookmarked: boolean;
  timeToRead: number;
  categories: string[];
  toggleLike: () => boolean;
  toggleBookmarked: () => boolean;
};

const HomeCourses: React.FC<{
  card: CourseCard;
}> = ({ card }) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  const flatListRef = React.useRef<any>();
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.5 }}>
        <FlatList
          style={styles.menu}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={card.categories}
          ref={flatListRef}
          renderItem={({ item, index }) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => {
                setSelectedIndex(index);
                flatListRef.current.scrollToIndex({
                  index: index,
                  animated: true,
                });
              }}
            >
              <View
                key={index}
                style={
                  selectedIndex === index ? styles.selected : styles.menuItem
                }
              >
                <Text>{item}</Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
      <View
        style={{
          flex: 5,

          alignItems: "center",
        }}
      >
        <View style={styles.courseCard}>
          <View style={styles.cardImageContainer}>
            <Image
              source={{ uri: `${card.thumbnail}` }}
              style={styles.cardImage}
            ></Image>
          </View>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.cardHeaderCategory}>{card.author}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesomeIcon icon={faStopwatch} />
              <Text style={styles.courseTime}>{card.timeToRead} min</Text>
            </View>
          </View>
          <View style={styles.cardTitle}>
            <Text>{card.title}</Text>
          </View>
          <View style={styles.cardActions}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon
                icon={faEye}
                style={{ color: card.isRead ? "blue" : "#e0e0e0" }}
              />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesomeIcon
                icon={faThumbsUp}
                style={{ color: card.isLiked ? "blue" : "#e0e0e0" }}
              />
              <FontAwesomeIcon
                icon={faBookmark}
                style={{
                  color: card.isBookmarked ? "blue" : "#e0e0e0",
                  marginLeft: 20,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  menu: {},
  menuItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    width: 230,

    borderColor: "#e0e0e0",
    borderBottomWidth: 5,
    borderStyle: "solid",
    color: "#e0e0e0",
  },
  selected: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    width: 230,
    paddingHorizontal: 15,
    borderColor: "blue",
    borderBottomWidth: 5,
    borderStyle: "solid",
    color: "blue",
  },
  courseCard: {
    marginTop: 40,
    flexDirection: "column",
    backgroundColor: "white",
    width: 350,
    height: 300,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 30,
    elevation: 5,
  },
  cardImageContainer: {
    flex: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardImage: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    height: "100%",
  },
  cardHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  cardHeaderCategory: { fontWeight: "bold" },
  courseTime: {
    marginLeft: 5,
  },
  cardTitle: {
    flex: 1,
    paddingHorizontal: 10,
  },
  cardActions: {
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomeCourses;
