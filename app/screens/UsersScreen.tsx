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
  View,
  ViewStyle,
} from "react-native"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface UsersScreenProps extends TabsScreenProps<"Users"> {}

export const UsersScreen: FC<UsersScreenProps> = observer(function UsersScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <RawabiScreen2>
      <View style={$container}>
        <Image source={require("../../assets/images/RawabiLogo.png")} />
        <RawabiTextFiled
          Icon={<FontAwesome5 name="user-circle" />}
          placeholder="Email address"
          // helper="this is test to helper text"
        />
        <RawabiTextFiled isPassword placeholder="Password" Icon={<Feather name="lock" />} />
        <RawabiButton text={"Login"} />
        <RawabiButton text={"Continue as a Guest"} backgroundColor="#4C575D" />

        {/* <Text text="test component" /> */}
      </View>
    </RawabiScreen2>
  )
})

const $container: ViewStyle = {
  // width: Dimensions.get("window").width,
  // height: Dimensions.get("window").height,
  // alignItems: "center",
  // justifyContent: "center",
  // backgroundColor: "red",
}
