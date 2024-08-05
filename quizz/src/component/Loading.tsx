import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import colors from "../utils/colors";

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size={30} color={colors.blue} />
      <Text>Loading...</Text>
    </View>
  );
};
export default Loading;
