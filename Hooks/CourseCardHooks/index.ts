import React from "react";
import { CourseCard } from "../../Types/types";

const CourseCardHook = () => {
  const [fakedata, setFakeData] = React.useState<CourseCard>({
    title: "Che cos'è sharepoint online?",
    author: "OFFICE 365",
    thumbnail: "https://picsum.photos/seed/picsum/200/300",
    isLiked: false,
    isRead: false,
    isBookmarked: true,
    timeToRead: 2,
    categories: [
      "TUTTI",
      "DIGITAL FOR LEADER",
      "OFFICE 365",
      "TECNOLOGIE DIGITALI",
    ],
  });
  const toggleLike = () => {
    let newCourseCard: CourseCard = { ...fakedata };
    newCourseCard.isLiked = !newCourseCard.isLiked;
    setFakeData({ ...newCourseCard });
  };
  const toggleBookmarked = () => {
    let newCourseCard: CourseCard = { ...fakedata };
    newCourseCard.isBookmarked = !newCourseCard.isBookmarked;
    setFakeData({ ...newCourseCard });
  };
  return { fakedata, toggleLike, toggleBookmarked };
};
export default CourseCardHook;
