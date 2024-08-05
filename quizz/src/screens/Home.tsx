import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from "../utils/colors";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSequence } from 'react-native-reanimated';
import {FontAwesome,} from "@expo/vector-icons";
const sections = [
  "ingilizce",
  "bilim",
  "programlama",
  "matematik",
  "fizik",
  "kimya",
  "Tarih"
];

export default function Home({ navigation }: any) {
  const [user, setUser] = useState<any>({});
  const [currentSection, setCurrentSection] = useState(0);
  const translateX = useSharedValue(-200);

  useEffect(() => {
    const findUser = async () => {
      const result = await AsyncStorage.getItem("user");
      if (result !== null) {
        setUser(JSON.parse(result));
      }
    };
    findUser();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      translateX.value = withSequence(
        withTiming(0, { duration: 1000 }),
        withTiming(200, { duration: 1000 }, () => {
          setCurrentSection(prev => (prev + 1) % sections.length);
          translateX.value = -200;
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [translateX]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box1}>
      <View  style={{flexDirection:'row'}}>
       <FontAwesome
              name="user"
              size={30}
              collor="gray"
            />
      <Text  style={styles.quizQuestion2}>{user.name}</Text>
      </View>
      <View>
        <Image
        source={require("../assets/Logo.png")}
        style={{
          height:150 ,
          width:150,
          alignSelf: "center",
          marginTop: 30,
        }}
      />
      </View>
      <View style={{alignItems:'center' , justifyContent:'center',}}>
      <Text style={styles.quizQuestion}>Kendinizi Test Edin</Text>
      <Text></Text>
      <View style={{marginLeft:60,}}>
      <Text style={styles.quizQuestion2}>Farklı Konulardaki Sınavlara Girerek Bilginizi Ölçün</Text>
      </View>
      </View>
              <View style={styles.quizContainer}>
                    <Text style={styles.quizQuestion}>Dersler</Text>
          <Animated.View style={[styles.animatedContainer, animatedStyle]}>
            <Text style={styles.quizQuestion2}>{sections[currentSection]}</Text>
          </Animated.View>
        </View>
      </View>
      <Button onPress={() => navigation.navigate("QUIZ", { screen: "QUIZ" })}>
        Quiz Start
      </Button>
      <Button onPress={() => navigation.navigate("QUIZ", { screen: "QuizRecords" })}>
        Quiz Kayıtları
      </Button>
      <Button onPress={() => navigation.navigate("QuizKullanim")}>
        Quiz Nasıl kullanılır
        <MaterialCommunityIcons name={"help-circle"} color={colors.blue} size={18} />
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    margin: 20,
  },
  box1: {
    flex: 1,
    backgroundColor: 'gray',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quizQuestion: {
    fontSize: 30,
    marginHorizontal: 8,
    textShadowColor: 'rgba(2, 2, 2, 2.75)', 
    textShadowOffset: { width: -1, height: 1 }, 
    textShadowRadius: 10,
    color: '#000000', 
  },
  quizQuestion2: {
    fontSize: 30,
    marginHorizontal: 8,
    textShadowColor: 'rgba(2, 2, 2, 2.75)', 
    textShadowOffset: { width: -1, height: 1 }, 
    textShadowRadius: 10,
    color: '#ffffff', 
  },

  quizContainer: {
   borderRadius:15,
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30,
    fontWeight:900,
    overflow: 'hidden',
  }
});
