import React, { useLayoutEffect } from "react";
import { TouchableOpacity } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Profile from "../screens/Profile/Profile";
import Search from "../screens/Search/Search";
import Quiz from "../screens/Quiz/Quiz";
import QuizStarted from "../screens/Quiz/QuizStarted";
import QuizKullanim from "../screens/Quiz/QuizKullanim";
import DetailProfile from "../screens/Profile/DetailProfile";
import QuizCalendar from "../screens/Quiz/QuizCalendar";
import Welcome from "../screens/welcome/Welcome";
import Login from "../screens/Login";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../utils/colors";
import HelpCenter from "../screens/About/HelpCenter";
import PrivacyPolicy from "../screens/About/PrivacyPolicy";
import Requirement from "../screens/About/Requirement";
import SearchDashboard from "../screens/Search/SearchDashboard";
import SearchResults from "../screens/Search/SearchResults";
import QuizRecords from "../screens/Quiz/QuizRecords";
import Header from "../component/Header";

const Stack = createNativeStackNavigator();

export const WelcomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Welcome"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"Login"} component={Login} />
      <Stack.Screen name={"Welcome"} component={Welcome} />
    </Stack.Navigator>
  );
};

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"Home"} component={Home} />
        <Stack.Screen
        name="QuizKullanim"
        component={QuizKullanim}
      
      />
    </Stack.Navigator>
  );
};

export const QuizStack = ({ navigation, route }) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "QuizStarted" || routeName === "QuizRecords") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      initialRouteName={"Quiz"}
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.blue },
      }}
    >
      <Stack.Screen
        name={"Quiz"}
        component={Quiz}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("QuizCalendar")}>
              <FontAwesome5 name="calendar-day" size={20} color={"white"} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name={"QuizStarted"}
        component={QuizStarted}
        options={{ statusBarHidden: true }}
      />
      <Stack.Screen
        name={"QuizCalendar"}
        component={QuizCalendar}
        options={{ headerTitle: "Calendar" }}
      />
      <Stack.Screen
        name={"QuizRecords"}
        component={QuizRecords}
        options={{ header: (props) => <Header.Transparent {...props} /> }}
      />
    
    </Stack.Navigator>
  );
};

export const ProfileStack = ({ navigation, route }) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (
      routeName === "DetailProfile" ||
      routeName === "HelpCenter" ||
      routeName === "PrivacyPolicy" ||
      routeName === "Requirement"
    ) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator
      initialRouteName={"Profile"}
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.blue },
      }}
    >
      <Stack.Screen name={"Profile"} component={Profile} />
      <Stack.Screen name={"DetailProfile"} component={DetailProfile} />
      <Stack.Screen
        name={"HelpCenter"}
        component={HelpCenter}
        options={{
          headerTitle: "FAQ",
          headerTitleAlign: "left",
        }}
      />
      <Stack.Screen
        name={"PrivacyPolicy"}
        component={PrivacyPolicy}
        options={{
          headerTitle: "Privacy And Policy",
          headerTitleAlign: "left",
        }}
      />
      <Stack.Screen
        name={"Requirement"}
        component={Requirement}
        options={{ headerTitle: "About", headerTitleAlign: "left" }}
      />
    </Stack.Navigator>
  );
};

export const SearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Search"}
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen name={"Search"} component={Search} />
      <Stack.Screen name={"SearchDashboard"} component={SearchDashboard} />
      <Stack.Screen name={"SearchResults"} component={SearchResults} />
    </Stack.Navigator>
  );
};
