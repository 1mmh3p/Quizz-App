import React from "react";
import { View, Text } from "react-native";
import { List, Title, Caption } from "react-native-paper";
import colors from "../../utils/colors";

const HelpCenter = () => {
  return (
    <View style={{ margin: 20, flex: 1 }}>
      <Title>Question</Title>
      <Caption>Sıkça Sorulan</Caption>
      <View>
        <List.Accordion
          title="Quiz nedir?"
          titleStyle={{ color: colors.blue, fontWeight: "bold" }}
        >
          <List.Item title="Internet " titleStyle={{ fontSize: 15 }} />
        </List.Accordion>
        <List.Accordion
          title="Quiz nasıl başlatılır?"
          titleStyle={{ color: colors.blue, fontWeight: "bold" }}
        >
          <List.Item title="Internet " titleStyle={{ fontSize: 15 }} />
        </List.Accordion>
        <List.Accordion
          title="Ödül nasıl alınır?"
          titleStyle={{ color: colors.blue, fontWeight: "bold" }}
        >
          <List.Item title="Internet " titleStyle={{ fontSize: 15 }} />
        </List.Accordion>
      </View>
      <View style={{ position: "absolute", bottom: 0 }}>
        <Caption>
          Sorunuzun cevabını bulamıyor musunuz? Tam FAQ sayfamızı kontrol etmekten veya mustafaelhuseyyen@gmail.com adresinden bizimle iletişime geçmekten çekinmeyin.
        </Caption>
      </View>
    </View>
  );
};

export default HelpCenter;
