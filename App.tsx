/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import Courses from "./Components/CoursesHome/index";

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

const App = () => {
  const fakedata: CourseCard = {
    title: "Che cos'è sharepoint online?",
    author: "OFFICE 365",
    thumbnail: "https://picsum.photos/seed/picsum/200/300",
    isLiked: true,
    isRead: false,
    isBookmarked: true,
    timeToRead: 2,
    categories: [
      "TUTTI",
      "DIGITAL FOR LEADER",
      "OFFICE 365",
      "TECNOLOGIE DIGITALI",
    ],
    toggleLike: () => {
      return true;
    },
    toggleBookmarked: () => {
      return false;
    },
  };
  return (
    <>
      <Courses card={fakedata} />
    </>
  );
};

export default App;
