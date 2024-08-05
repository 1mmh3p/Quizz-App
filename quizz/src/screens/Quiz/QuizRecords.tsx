import React, { useEffect } from "react";
import { View, Text, BackHandler, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import colors from "../../utils/colors";
import layouts from "../../utils/layouts";

// Define the menu options with icons
const menu = [
  {
    id: 1,
    name: "Yeniden Oyna",
    icon: (
      <Ionicons
        name="refresh"
        size={30}
        color="white"
        style={{
          backgroundColor: colors.darkBlue,
          padding: 15,
          borderRadius: 30,
        }}
      />
    ),
  },
  {
    id: 2,
    name: "Anasayfa",
    icon: (
      <Feather
        name="home"
        size={30}
        color="white"
        style={{
          backgroundColor: colors.darkBlue,
          padding: 15,
          borderRadius: 30,
        }}
      />
    ),
  },
  {
    id: 3,
    name: "Skor Paylaş",
    icon: (
      <Ionicons
        name="share"
        size={30}
        color="white"
        style={{
          backgroundColor: colors.darkBlue,
          padding: 15,
          borderRadius: 30,
        }}
      />
    ),
  },
];

const QuizRecords = ({ navigation, route }) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      navigation.navigate("Home");
      return true;
    });

    return () => backHandler.remove();
  }, [navigation]);

  const score = route?.params?.score ?? 0;

  return (
    <View style={{ backgroundColor: colors.gray, height: layouts.windowHeight }}>
      {/* Top Section */}
      <View
        style={{
          backgroundColor: colors.blue,
          height: layouts.windowHeight / 3,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Skor: {score}
        </Text>
      </View>

      {/* Middle Section */}
      <View
        style={{
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
          width: layouts.windowWidth - 40,
          alignSelf: "center",
          padding: 20,
          paddingVertical: 30,
          position: "absolute",
          top: 200,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
              <Text style={{ color: colors.yellow }}>⬤</Text>
              <View style={{ marginLeft: 10 }}>
                <Text>100%</Text>
                <Text>Tamamlama</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: colors.yellow }}>⬤</Text>
              <View style={{ marginLeft: 10 }}>
                <Text>10</Text>
                <Text>Doğru</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
              <Text style={{ color: colors.yellow }}>⬤</Text>
              <View style={{ marginLeft: 10 }}>
                <Text>100%</Text>
                <Text>Toplam Soru</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: colors.yellow }}>⬤</Text>
              <View style={{ marginLeft: 10 }}>
                <Text>10</Text>
                <Text>Yanlış</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom Section */}
      <View
        style={{
          marginTop: 120,
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        {menu.map((item) => (
          <View key={item.id} style={{ alignItems: "center" }}>
            <TouchableOpacity>{item.icon}</TouchableOpacity>
            <Text>{item.name}</Text>
          </View>
        ))}
      </View>

      {/* Back Button */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 120,
          width:'100%',

        
        }}
      >
           <TouchableOpacity 
          style={{  backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,}} 
          onPress={() => navigation.goBack()}
        >
          <Text style={{color: 'white',
    fontSize: 16,}}>Geri Dön</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuizRecords;
