import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TabsScreenProps } from "app/navigators"
import {
  RawabiButton,
  // RawabiScreen,
  RawabiScreen2,
  RawabiTextFiled,
  Text,
  //  ,Text
} from "app/components"
import { Feather, FontAwesome5 } from "@expo/vector-icons"
import {
  // Dimensions,
  Image,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
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
          <RawabiTextFiled
            isPassword
            placeholder="Password"
            Icon={<Feather name="lock" />}
            helper="Forgot password?"
            HelperTextProps={{
              onPress: () => {
                console.log("i am in forget password")
              },
              style: {
                // font-family: Poppins;
                textAlign: "right",
                color: "#4C575D",
                fontSize: 12,
                fontWeight: "500",
                lineHeight: 18,
              },
            }}
          />
        </View>
        <View style={$ButtonsContainers}>
          <RawabiButton text={"Login"} />
          <RawabiButton
            text={"Continue as a Guest"}
            backgroundColor="#4C575D"
            pressedBackgroundColor="#2F383D"
          />
        </View>

        <View style={$SignUpCntainer}>
          <Text style={$TextItem}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => console.log("Sigh up here")}>
            <Text style={[$TextItem, $TextItemSignUp]}>Sign up</Text>
          </TouchableOpacity>
        </View>
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
const $SignUpCntainer: ViewStyle = {
  flexDirection: "row",
  marginTop: 24,
  gap: 7,
}
const $TextItem: TextStyle = {
  // font-family: Poppins;
  fontSize: 12,
  fontWeight: "500",
  lineHeight: 18,
}
const $TextItemSignUp: TextStyle = {
  fontWeight: "700",
  color: "#A0CF67",
}
