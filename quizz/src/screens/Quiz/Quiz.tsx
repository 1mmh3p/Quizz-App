import React from "react";
import { View, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import colors from "../../utils/colors";
import { Subheading, Caption, Title, Badge } from "react-native-paper";

const dimensions = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

const data = [
{
  id: "1",
  title: "İngilizce Kursu",
  date: "24",
  day: "Pazar",
  difficulty: "EASY",
  description: "Bu İngilizce kursu, her seviyeden öğrenciye hitap ediyor. Temel İngilizce bilgisi olmayanlar için uygun bir başlangıç noktası sunuyor."
},

  {
  id: "2",
  title: "Programlama Kursu",
  date: "25",
  day: "Pazartesi",
  difficulty: "MEDIUM",
  description: "Bu programlama kursu, temel bilgisayar bilimi konseptlerinden başlayarak karmaşık algoritmalar ve veri yapılarına kadar geniş bir yelpazeyi kapsıyor."
},

 {
  id: "3",
  title: "Bilim Kursu",
  date: "26",
  day: "Salı",
  difficulty: "HARD",
  description: "Bu bilim kursu, derinlemesine bilimsel konuları ele alarak katılımcılarına zorlu bir deneyim sunuyor."
},
{
  id: "4",
  title: "Matematik Kursu",
  date: "27",
  day: "Çarşamba",
  difficulty: "HARD",
  description: "Bu matematik kursu, temel ve orta seviye matematik konularını derinlemesine öğrenmek isteyenler için tasarlanmıştır."
},

{
  id: "5",
  title: "Tarih Kursu",
  date: "28",
  day: "Perşembe",
  difficulty: "HARD",
  description: "Bu tarih kursu, derinlemesine tarih bilgisi edinmek ve tarihin önemli dönüm noktalarını keşfetmek isteyenler için tasarlanmıştır."
},
{
  id: "6",
  title: "Fizik Kursu",
  date: "29",
  day: "Cuma",
  difficulty: "HARD",
  description: "Bu fizik kursu, temel fizik prensiplerini keşfetmek isteyenler için idealdir."
},
{
  id: "7",
  title: "Kimya Kursu",
  date: "30",
  day: "Cumartesi",
  difficulty: "HARD",
  description: "Bu kimya kursu, kimyanın temel kavramlarını ve prensiplerini anlamak isteyenler için mükemmel bir fırsattır."
},

];

const Quiz = ({ navigation }: any) => {
  return (
    <ScrollView>
      {data.map((item) => (
        <View key={item.id} style={{ flexDirection: "row", paddingBottom: 20 }}>
          <View style={{ alignSelf: "flex-start", margin: 10 }}>
            <View
              style={{
                alignSelf: "center",
                display: "flex",
              }}
            >
              <Subheading>{item.day}</Subheading>
              <Badge
                style={{
                  alignSelf: "center",
                  backgroundColor: colors.blue,
                }}
                size={30}
              >
                {item.date}
              </Badge>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("QuizStarted", {
            difficulty: item.difficulty
          })}>
            <View
              style={{
                marginTop: 10,
                borderRadius: 10,
                height: 130,
                maxHeight: 130,
                width: dimensions.width - 70,
                shadowColor: "#000",
                shadowOffset: {
                  width: 20,
                  height: 20,
                },
                shadowOpacity: 1,
                shadowRadius: 1,
                elevation: 2,
              }}
            >
              <View style={{ margin: 10 }}>
                <Title>{item.title}</Title>
                <Caption>{item.description}</Caption>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default Quiz;