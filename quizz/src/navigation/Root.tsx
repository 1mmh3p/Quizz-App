import React, { Fragment, useEffect, useState } from "react";
import BarNavigation from "./BarNavigation";
import { NavigationContainer } from "@react-navigation/native";
import colors from "../utils/colors";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeStack } from "./StackNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const Root = () => {
  const [user, setUser] = useState("");
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
  console.log(user, "dari root");
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.darkBlue} />
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name={"BarNavigation"}
            component={BarNavigation}
            options={{ headerShown: false }}
          />
        ) : (
          <Fragment>
            <Stack.Screen
              name={"WelcomeScreen"}
              component={WelcomeStack}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={"BarNavigation"}
              component={BarNavigation}
              options={{ headerShown: false }}
            />
          </Fragment>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
