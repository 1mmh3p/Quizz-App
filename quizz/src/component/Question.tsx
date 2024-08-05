import React from "react";
import { View, Text } from "react-native";
import { Badge } from "react-native-paper";
import colors from "../utils/colors";

interface QuestionProps {
  questionNr: number;
  question: string;
}
const Question = ({ question, questionNr }: QuestionProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
        // alignContent: "center",
        // alignSelf: "center",
        marginTop: 0,
        paddingRight: 10,
      }}
    >
      {/* <Badge
        size={20}
        style={{
          backgroundColor: colors.darkBlue,
          marginRight: 10,
          alignSelf: "center",
        }}
      >
        {questionNr}
      </Badge> */}
      <Text style={{ color: "#000", fontSize: 16, textAlign: "left" }}>
        {question}
      </Text>
    </View>
  );
};
export default Question;
