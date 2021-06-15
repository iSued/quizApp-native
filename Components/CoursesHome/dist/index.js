"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_fontawesome_1 = require("@fortawesome/react-native-fontawesome");
var HomeCourses = function (_a) {
    var card = _a.card;
    return (react_1["default"].createElement(react_native_1.View, { style: styles.courseCard },
        react_1["default"].createElement(react_native_1.View, { style: styles.cardImageContainer },
            react_1["default"].createElement(Image, { source: { uri: "" + card.thumbnail }, style: styles.cardImage })),
        react_1["default"].createElement(react_native_1.View, { style: styles.cardHeader },
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(react_native_1.Text, { style: styles.cardHeaderCategory }, card.author)),
            react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", alignItems: "center" } },
                react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: "stopwatch" }),
                react_1["default"].createElement(react_native_1.Text, { style: styles.courseTime },
                    card.timeToRead,
                    " min"))),
        react_1["default"].createElement(react_native_1.View, { style: styles.cardTitle },
            react_1["default"].createElement(react_native_1.Text, null, card.title)),
        react_1["default"].createElement(react_native_1.View, { style: styles.cardActions },
            react_1["default"].createElement(react_native_1.View, { style: {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                } },
                react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: "eye", style: { color: card.isRead ? "blue" : "#e0e0e0" } })),
            react_1["default"].createElement(react_native_1.View, { style: { flexDirection: "row", alignItems: "center" } },
                react_1["default"].createElement(react_native_1.TouchableWithoutFeedback, null,
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: "thumbs-up", style: { color: card.isLiked ? "blue" : "#e0e0e0" } })),
                react_1["default"].createElement(react_native_1.TouchableWithoutFeedback, null,
                    react_1["default"].createElement(react_native_fontawesome_1.FontAwesomeIcon, { icon: "bookmark", style: {
                            color: card.isBookmarked ? "blue" : "#e0e0e0",
                            marginLeft: 20
                        } }))))));
};
var styles = react_native_1.StyleSheet.create({
    courseCard: {
        marginTop: 40,
        flexDirection: "column",
        backgroundColor: "white",
        minHeight: 300,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom: 30,
        elevation: 5
    },
    cardImageContainer: {
        flex: 3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    cardImage: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: "100%",
        height: "100%"
    },
    cardHeader: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10
    },
    cardHeaderCategory: { fontWeight: "bold" },
    courseTime: {
        marginLeft: 5
    },
    cardTitle: {
        flex: 1,
        paddingHorizontal: 10
    },
    cardActions: {
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
exports["default"] = HomeCourses;
