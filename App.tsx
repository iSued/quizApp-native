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
import CoursesHome from "./Components/CoursesHome/index";
import CourseCardHook from "./Hooks/CourseCardHooks/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStopwatch,
  faEye,
  faThumbsUp,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch, faEye, faThumbsUp, faBookmark);

const App = () => {
  const { fakedata, toggleBookmarked, toggleLike } = CourseCardHook();
  return (
    <>
      <CoursesHome
        card={fakedata}
        toggleLike={toggleLike}
        toggleBookmarked={toggleBookmarked}
      />
    </>
  );
};

export default App;
