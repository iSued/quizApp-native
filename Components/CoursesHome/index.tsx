import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import Animated, {
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useAnimatedGestureHandler,
  useDerivedValue,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

type CourseCard = {
  title: string;
  author: string;
  thumbnail: string;
  isLiked: boolean;
  isRead: boolean;
  isBookmarked: boolean;
  timeToRead: number;
  categories: string[];
};

const HomeCourses: React.FC<{
  card: CourseCard;
  toggleLike: () => void;
  toggleBookmarked: () => void;
}> = ({ card, toggleLike, toggleBookmarked }) => {
  const scaleLike = useSharedValue(1);
  const scaleBookmark = useSharedValue(1);

  const bookmarkStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleBookmark.value }],
    };
  });

  const likeStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleLike.value }],
    };
  });

  const likeAnimation = () => {
    if (card.isLiked) {
      toggleLike();
      scaleLike.value = withSpring(
        0.8,
        {
          damping: 20,
          mass: 3,
          stiffness: 2500,
        },
        () => {
          scaleLike.value = withSpring(1);
        }
      );
    } else {
      toggleLike();
      scaleLike.value = withSpring(
        1.5,
        {
          damping: 20,
          mass: 3,
          stiffness: 2500,
        },
        () => {
          scaleLike.value = withSpring(1);
        }
      );
    }
  };

  const bookmarkAnimation = () => {
    if (card.isBookmarked) {
      toggleBookmarked();
      scaleBookmark.value = withSpring(
        0.8,
        {
          damping: 20,
          mass: 3,
          stiffness: 2500,
        },
        () => {
          scaleBookmark.value = withSpring(1);
        }
      );
    } else {
      toggleBookmarked();
      scaleBookmark.value = withSpring(
        1.5,
        {
          damping: 20,
          mass: 3,
          stiffness: 2500,
        },
        () => {
          scaleBookmark.value = withSpring(1);
        }
      );
    }
  };

  return (
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
          <FontAwesomeIcon icon="stopwatch" />
          <Text style={styles.courseTime}>{card.timeToRead}min</Text>
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
            size={24}
            icon="eye"
            style={{ color: card.isRead ? "blue" : "#e0e0e0" }}
          />
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableWithoutFeedback onPress={likeAnimation}>
            <Animated.View style={likeStyles}>
              <FontAwesomeIcon
                size={24}
                icon="thumbs-up"
                style={{
                  color: card.isLiked ? "blue" : "#e0e0e0",
                }}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={bookmarkAnimation}>
            <Animated.View style={[bookmarkStyles, { marginLeft: 20 }]}>
              <FontAwesomeIcon
                size={24}
                icon="bookmark"
                style={{
                  color: card.isBookmarked ? "blue" : "#e0e0e0",
                }}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  courseCard: {
    marginTop: 40,
    flexDirection: "column",
    backgroundColor: "white",

    minHeight: 300,
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
