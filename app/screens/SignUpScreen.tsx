/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/sort-styles */
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  // RawabiResidential, RawabiTextFiled,
  Screen,
} from "app/components"
import { Feather, FontAwesome, FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons"
import { TextField } from "../components/TextField"

interface SignUpScreenProps extends AppStackScreenProps<"SignUp"> {}

export const SignUpScreen: FC<SignUpScreenProps> = observer(function SignUpScreen() {
  // const [residentialValue, setResidentialValue] = useState<boolean>(false)
  // const fNameRef = useRef<TextInput>(null)
  // const lNameRef = useRef<TextInput>(null)

  const signUpFormDetails = [
    {
      placeholder: "Phone number",
      Icon: <Feather name="smartphone" />,
    },
    {
      placeholder: "Email address",
      Icon: <MaterialCommunityIcons name="email" />,
    },
    {
      placeholder: "Confirm password",
      Icon: <FontAwesome name="lock" />,
      isPassword: true,
    },
    {
      placeholder: "Password",
      Icon: <FontAwesome name="lock" />,
      isPassword: true,
    },
  ]
  return (
    <Screen preset={"scroll"} safeAreaEdges={["top"]} style={styles.screen}>
      <View style={styles.namesContainer}>
        <TextField
          preset="primary"
          placeholder="First name"
          Icon={<FontAwesome6 name="user" />}
          containerStyle={styles.NameTextFiledItem}
          // returnKeyType="next"
          // ref={fNameRef}
        />
        <TextField
          preset="primary"
          placeholder="Last name"
          containerStyle={styles.NameTextFiledItem}
          // ref={lNameRef}
        />
      </View>
      <View style={styles.signUpForm}>
        {signUpFormDetails.map((item, index) => (
          <TextField preset="primary" key={index} {...item} />
        ))}
      </View>

      {/* <RawabiResidential
        containerStyle={styles.RawabiResidentialContainer}
        residentialValue={residentialValue}
        SetResidentialValue={setResidentialValue}
      /> */}
    </Screen>
  )
})

const styles = StyleSheet.create({
  NameTextFiledItem: {
    flex: 1,
  },
  namesContainer: {
    flexDirection: "row",
    gap: 10,
  },
  signUpForm: {
    marginTop: 16,
    gap: 16,
  },
  RawabiResidentialContainer: {
    marginTop: 16,
  },
  screen: {
    padding: 20,
  },
})
