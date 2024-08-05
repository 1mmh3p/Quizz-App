import React from "react";
import { View, ScrollView, Dimensions, StyleSheet } from "react-native";
import { Avatar, Title, Caption, List, TextInput } from "react-native-paper";
import colors from "../../utils/colors";
import { Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;

const DetailProfile = () => {
  return (
    // <ScrollView>
    <View style={{ height: heightScreen, flex: 1 }}>
      <Avatar.Text
          label={<MaterialIcons
                  name={"upload"}
                  color={colors.white}
                  size={30}
                />}
        size={65}
        style={{
          backgroundColor: colors.blue,
          alignSelf: "center",
          marginTop: 20,
        }}
      />
      <TextInput
        mode="outlined"
        dense={true}
        style={styles.textInput}
        label="Name"
        //   disabled={true}
        outlineColor={colors.blue}
        theme={{ colors: { primary: colors.blue } }}
      />
      <TextInput
        mode="outlined"
        dense={true}
        style={styles.textInput}
        label="Email"
        outlineColor={colors.blue}
        theme={{ colors: { primary: colors.blue } }}
      />
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
        }}>
     <Button
  title="Kaydet"
  buttonStyle={{
    padding: 20,
    borderRadius: 0,
    backgroundColor: colors.blue,
    width: widthScreen,
  }}
/>

      </View>
    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: widthScreen - 20,
    alignSelf: "center",
    marginTop: 10,
  },
});

export default DetailProfile;
