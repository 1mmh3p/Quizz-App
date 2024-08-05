import React, { Fragment } from "react";
import { View, Text } from "react-native";
import Button from "../component/Button";
import {AnswerObject} from '../screens/Quiz/QuizStarted'

interface AnswersProps {
  answers: string[];
  setAnswers: any;
  checkAnswer: () => void;
  userAnswer: AnswerObject | undefined;
}

export default function Answers({
  answers,
  setAnswers,
  checkAnswer,
  userAnswer
}: AnswersProps) {
  console.log(answers);
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        // paddingTop: 14,
        paddingHorizontal: 24.5,
        marginTop: 30,
      }}
    >
      {answers.map((answer, key) => (
        <Fragment key={answer}>
          <Button
            {...{ key, answer }}
            correct = {userAnswer ?.correctAnswer === answer}
            disabled={userAnswer ? true : false}
            onPress={() => {
              setAnswers.current = answer;
              checkAnswer();
            }}
          />
        </Fragment>
      ))}
    </View>
  );
}
