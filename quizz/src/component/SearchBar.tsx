import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Text, Icon } from "react-native-elements";
import colors from "../utils/colors";

const SearchBar = ({
  search,
  onSearch,
}: {
  search: string;
  onSearch: () => void;
}) => {
  return (
    <TouchableWithoutFeedback onPress={onSearch}>
      <View style={styles.search}>
        <Icon name="search" size={24} color={colors.blue} />
        <Text style={styles.searchText}>Search {search}...</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  search: {
    elevation: 0.7,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    minHeight: 50,
    backgroundColor: colors.gray,
    borderRadius: 10,
    width: "100%",
  },
  searchText: {
    fontSize: 12,
    color: colors.blue,
    marginLeft: 8,
  },
});

export default SearchBar;
