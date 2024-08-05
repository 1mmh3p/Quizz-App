import React, { useState } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import colors from "../utils/colors";
import { Button } from "react-native-elements";
import layouts from "../utils/layouts";
import * as Yup from "yup";
import { Formik } from "formik";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./Home";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
});

const Login = ({ navigation }: any) => {
  const [username, setUsername] = useState("");
  const handleOnChangeText = (text: any) => setUsername(text);
  const handleLogin = async () => {
    const user = { name: username };
    await AsyncStorage.setItem("user", JSON.stringify(user));
    return navigation.navigate("BarNavigation");
  };
  return (
    // <Formik
    //   initialValues={{ username: "" }}
    //   validationSchema={LoginSchema}
    //   onSubmit={handleLogin}
    // >
    //   {({ values, handleChange, handleSubmit, errors, touched }) => (
    <View style={{ backgroundColor: "#f0f0f0", height: layouts.windowHeight }}>
      <Image
        source={require("../assets/Logo.png")}
        style={{
          height: layouts.windowHeight / 3,
          width: layouts.windowWidth / 1.5,
          alignSelf: "center",
          marginTop: 30,
        }}
      />
      <View style={{ marginTop: 30 }}>
        <TextInput
          dense={true}
          label="Username"
          placeholder="Gir Username"
          mode="outlined"
          theme={{ colors: { primary: colors.darkBlue } }}
          style={{ width: layouts.windowWidth / 1.1, alignSelf: "center" }}
          onChangeText={handleOnChangeText}
          value={username}
        />
        {/* {errors.username && touched.username && (
              <Text
                style={{
                  color: "red",
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}
              >
                {errors.username}
              </Text>
            )} */}
        <Button
          title="Giriş Yap"
          buttonStyle={{
            backgroundColor: colors.darkBlue,
            width: layouts.windowWidth / 1.1,
            alignSelf: "center",
            marginTop: 30,
          }}
          onPress={handleLogin as any}
        />
      </View>
     
    </View>
    //   )}
    // </Formik>
  );
};

export default Login;
