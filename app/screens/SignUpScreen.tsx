/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/sort-styles */
import React, { FC, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, TextInput, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { RawabiResidential, Screen } from "app/components"
import { Feather, FontAwesome, FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons"
import { TextField, TextFieldProps } from "../components/TextField"

interface SignUpScreenProps extends AppStackScreenProps<"SignUp"> {}

export const SignUpScreen: FC<SignUpScreenProps> = observer(function SignUpScreen() {
  const [residentialValue, setResidentialValue] = useState<boolean>(false)
  const fNameRef = useRef<TextInput>(null)
  const lNameRef = useRef<TextInput>(null)
  const phoneRef = useRef<TextInput>(null)
  const emailRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)
  const confirmPasswordRef = useRef<TextInput>(null)

  const signUpFormDetails: (TextFieldProps & { ref?: React.RefObject<TextInput> })[] = [
    {
      placeholder: "Phone number",
      Icon: <Feather name="smartphone" />,
      ref: phoneRef,
      returnKeyType: "next",
      onSubmitEditing: () => {
        emailRef.current?.focus()
      },
      blurOnSubmit: false,
    },
    {
      placeholder: "Email address",
      Icon: <MaterialCommunityIcons name="email" />,
      ref: emailRef,
      returnKeyType: "next",
      onSubmitEditing: () => {
        passwordRef.current?.focus()
      },
      blurOnSubmit: false,
    },
    {
      placeholder: "Password",
      Icon: <FontAwesome name="lock" />,
      isPassword: true,
      ref: passwordRef,
      returnKeyType: "next",
      onSubmitEditing: () => {
        confirmPasswordRef.current?.focus()
      },
      blurOnSubmit: false,
    },
    {
      placeholder: "Confirm password",
      Icon: <FontAwesome name="lock" />,
      isPassword: true,
      ref: confirmPasswordRef,
      returnKeyType: "done",
      onSubmitEditing: () => {
        // make SignUp
      },
      // blurOnSubmit: false,
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
          ref={fNameRef}
          returnKeyType="next"
          onSubmitEditing={() => {
            lNameRef.current?.focus()
          }}
          blurOnSubmit={false}
        />
        <TextField
          preset="primary"
          placeholder="Last name"
          containerStyle={styles.NameTextFiledItem}
          ref={lNameRef}
          returnKeyType="next"
          onSubmitEditing={() => {
            phoneRef.current?.focus()
          }}
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.signUpForm}>
        {signUpFormDetails.map((item, index) => (
          <TextField preset="primary" key={index} {...item} />
        ))}
      </View>

      <TextField
        preset="primary"
        placeholder="Email adress Test"
        Icon={<MaterialCommunityIcons name="email" />}
        containerStyle={{ marginTop: 16 }}
        status="error"
        helper="Email has already been taken"
      />
      <RawabiResidential
        containerStyle={styles.RawabiResidentialContainer}
        residentialValue={residentialValue}
        SetResidentialValue={setResidentialValue}
      />
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
