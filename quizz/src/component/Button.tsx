import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { elevate } from "react-native-elevate";
import { Badge } from "react-native-paper";

interface ButtonProps {
  key: number;
  answer: string;
  onPress: () => void;
  correct: boolean;
  disabled: boolean;
}

const Button = ({ answer, onPress, correct, disabled }: ButtonProps) => {
  return (
    <RectButton
      style={[
        styles.container,
        elevate(5),
        { backgroundColor: !disabled ? "#fff" : "#ccc" },
      ]}
      {...{ onPress }}
    >
      <Text
        style={{
          textAlign: "left",
          fontWeight: "bold",
          color: correct ? "red" : "#006996",
        }}
      >
        {answer}
      </Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 43,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 14,
    paddingHorizontal: 13,
    borderRadius: 2,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    textTransform: "capitalize",
  },
});
export default Button;
