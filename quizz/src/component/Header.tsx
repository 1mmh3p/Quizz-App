import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../utils/colors";

const widthScreen = Dimensions.get("window").width;

const Header = {
  Transparent: (props: any) => {
    const { insets, previous, navigation } = props;
    return (
      <View
        style={{
          position: "absolute",
          backgroundColor: "transparent",
          zIndex: 100,
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <TouchableOpacity>
          <FontAwesome5 name="edit" size={20} color={colors.blue} />
        </TouchableOpacity>
      </View>
    );
  },
};

export default Header;
