import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TabsScreenProps } from "app/navigators"
import {
  RawabiButton,
  // RawabiScreen,
  RawabiScreen2,
  RawabiTextFiled,
  //  ,Text
} from "app/components"
import { Feather, FontAwesome5 } from "@expo/vector-icons"
import {
  // Dimensions,
  Image,
  ImageStyle,
  View,
  ViewStyle,
} from "react-native"

interface UsersScreenProps extends TabsScreenProps<"Users"> {}

export const UsersScreen: FC<UsersScreenProps> = observer(function UsersScreen() {
  return (
    <RawabiScreen2>
      <View style={$container}>
        <Image source={require("../../assets/images/RawabiLogo.png")} style={$LogoImage} />
        <View style={$TextFiledContainer}>
          <RawabiTextFiled
            Icon={<FontAwesome5 name="user-circle" />}
            placeholder="Email address"

            // helper="this is test to helper text"
          />
          <RawabiTextFiled isPassword placeholder="Password" Icon={<Feather name="lock" />} />
        </View>
        <View style={$ButtonsContainers}>
          <RawabiButton text={"Login"} />
          <RawabiButton text={"Continue as a Guest"} backgroundColor="#4C575D" />
        </View>

        {/* <Text text="test component" /> */}
      </View>
    </RawabiScreen2>
  )
})

const $container: ViewStyle = {
  // height: "100%",
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 55,
  paddingHorizontal: 32,
  // backgroundColor: "red",
}

const $LogoImage: ImageStyle = {
  marginBottom: 52,
}

const $TextFiledContainer: ViewStyle = {
  width: "100%",
  gap: 24,
  marginBottom: 70,
}

const $ButtonsContainers: ViewStyle = {
  width: "90%",
  gap: 22,
}
