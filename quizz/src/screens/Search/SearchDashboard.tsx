import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
import colors from "../../utils/colors";
import layouts from "../../utils/layouts";
import { Ionicons } from "@expo/vector-icons";

const SearchDashboard = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = () => {
    navigation.navigate("SearchResults", { search: searchQuery });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <Icon name="search" size={24} />
         <TextInput
  placeholder="Ürün ara..."
  autoCapitalize="none"
  autoCorrect={false}
  value={searchQuery}
  onChangeText={(text) => setSearchQuery(text)}
  onSubmitEditing={handleSearch}
  style={styles.input}
/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inputContainer: {
    padding: 10,
    marginVertical: 5,
    flexDirection: "row",
    backgroundColor: colors.gray,
    width: layouts.windowWidth / 1.2,
    alignSelf: "flex-end",
    borderRadius: 50,
  },
  input: {
    flex: 1,
  },
});

export default SearchDashboard;
