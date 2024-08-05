import React, { Fragment } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  Animated,
} from "react-native";
import { Button } from "react-native-elements";
import colors from "../../utils/colors";
import Onboarding from "../../component/Onboarding";
const BORDER_RADIUS = 75;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

});

const Welcome = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Onboarding />
      <Button
        title="BAŞLA"
        buttonStyle={{
          backgroundColor: colors.blue,
          width: width / 2,
          alignSelf: "center",
          marginBottom: 30,
        }}
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default Welcome;
