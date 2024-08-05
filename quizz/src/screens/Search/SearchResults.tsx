import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from Expo if you're using it

const SearchResults = ({ navigation }) => {
  return (
    <View>
      <Text>Arama Sonuçları</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchResults;
