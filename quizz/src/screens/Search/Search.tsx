import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import SearchBar from "../../component/SearchBar";
import { Title, Switch, useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import Card from "../../component/Card";
const widthScreen = Dimensions.get("window").width;

const Search = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          // paddingHorizontal: 10,
          margin: 10,
          borderRadius: 10,
        }}
      >
        <SearchBar
          search="quiz"
          onSearch={() => navigation.navigate("SearchDashboard")}
        />
      </View>
      <View style={{ margin: 10 }}>
        <Card.Quiz />
      </View>
    </View>
  );
};

export default Search;
