import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { Agenda, Calendar, CalendarList } from "react-native-calendars";
import { Badge, Caption, Subheading, Title } from "react-native-paper";
import colors from "../../utils/colors";
import moment from "moment";

function QuizCalendar({ navigation }: any) {
  console.log(moment().get("date"));
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Agenda
          renderEmptyData={(day: any) => {
            return (
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    padding: 10,
                    color: "grey",
                  }}
                >
                  Plan Yok
                </Text>
              </View>
            );
          }}
          renderItem={(item) => {
            return (
              <View>
                <Text>Burada planlar...</Text>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
}

export default QuizCalendar;
