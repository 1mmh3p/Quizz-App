import React, { useEffect, useState , } from "react";
import { Linking } from "react-native";
import { View, Dimensions, ScrollView, TouchableOpacity, Text } from "react-native";
import { Avatar, Title, Caption, List, Divider } from "react-native-paper";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "../../utils/colors";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

const heightScreen = Dimensions.get("window").height;

const Profile = ({ navigation }: any) => {
  const [user, setUser] = useState<any>({});
  const findUser = async () => {
    const result = await AsyncStorage.getItem("user");
    if (result !== null) {
      setUser(JSON.parse(result));
    }
  };
  useEffect(() => {
    findUser();
    // AsyncStorage.clear();
  }, []);
  const name = user.name;
  const handleLogout = () => {
    AsyncStorage.clear();
    navigation.navigate("WelcomeScreen", { screen: "Login" });
  };
  return (
    <ScrollView>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("DetailProfile")}>
          <View
            style={{
              margin: 10,
              top: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Avatar.Text
              size={50}
              label={<MaterialIcons
                  name={"upload"}
                  color={colors.white}
                  size={30}
                />}
              style={{ backgroundColor: colors.blue, marginRight: 10 }}
            />
            <View>
              <Title>{name}</Title>
              <Caption>Profil Düzenle</Caption>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ margin: 10 }}>
          <Title>Hakkında</Title>
          <TouchableOpacity onPress={() => navigation.navigate("Requirement")}>
            <List.Item
              title="Hakkında"
              left={(props) => (
                <MaterialCommunityIcons
                  name={"newspaper-variant"}
                  color={colors.blue}
                  size={30}
                />
              )}
              right={(props) => (
                <MaterialIcons
                  name={"keyboard-arrow-right"}
                  color={colors.blue}
                  size={30}
                />
              )}
            />
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity onPress={() => navigation.navigate("PrivacyPolicy")}>
            <List.Item
              title="Gizlilik Politikası"
              left={(props) => (
                <MaterialIcons
                  name={"privacy-tip"}
                  color={colors.blue}
                  size={30}
                />
              )}
              right={(props) => (
                <MaterialIcons
                  name={"keyboard-arrow-right"}
                  color={colors.blue}
                  size={30}
                />
              )}
            />
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity onPress={() => navigation.navigate("HelpCenter")}>
            <List.Item
              title="Yardım Merkezi"
              left={(props) => (
                <MaterialCommunityIcons
                  name={"help-circle"}
                  color={colors.blue}
                  size={30}
                />
              )}
              right={(props) => (
                <MaterialIcons
                  name={"keyboard-arrow-right"}
                  color={colors.blue}
                  size={30}
                />
              )}
            />
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity onPress={() => navigation.navigate("QuizKullanim")}>
            <List.Item
              title="Quiz Nasıl kullanılır"
              left={(props) => (
                <MaterialCommunityIcons
                  name={"alert-rhombus"}
                  color={colors.blue}
                  size={30}
                />
              )}
              right={(props) => (
                <MaterialIcons
                  name={"keyboard-arrow-right"}
                  color={colors.blue}
                  size={30}
                />
              )}
            />
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity onPress={() => Linking.openURL('https://wa.link/8e43mg')}>
  <List.Item
    title="Bizimle Iletişim Gir"
    left={(props) => (
     <MaterialCommunityIcons
        name={"whatsapp"}
        color={colors.blue}
        size={25}
      />
    )}
    right={(props) => (
      <MaterialIcons
        name={"keyboard-arrow-left"}
        color={colors.blue}
        size={30}
      />
    )}
  />
</TouchableOpacity>
          <Button
            title="Çıkış Yap"
            buttonStyle={{
              backgroundColor: colors.blue,
              marginTop: 50,
            }}
            onPress={handleLogout as any}
          />
              <View style={{ alignItems: 'center', marginVertical: 20, flexDirection: 'row', justifyContent: 'center', }}>
              <Text>Developed by </Text>
              <MaterialCommunityIcons
                  name={"code-tags"}
                  color={colors.blue}
                  size={30}
                />
                <TouchableOpacity onPress={() => Linking.openURL('https://mustafaelhuseyyen.netlify.app/')}>
              <Text> Mustafa El Huseyyen </Text>
              </TouchableOpacity>
               <MaterialCommunityIcons
                  name={"code-json"}
                  color={colors.blue}
                  size={25}
                />
          </View>
        </View>
      </View>
      
    </ScrollView>
  );
};

export default Profile;
