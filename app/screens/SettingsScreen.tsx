import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { TabsScreenProps } from "app/navigators"
import {
  Button,
  //  Button,
  Screen,
  SettingContainer,
} from "app/components"
import { colors } from "app/theme"
import { AntDesign, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons"
import { useStores } from "app/models"

interface SettingsScreenProps extends TabsScreenProps<"Settings"> {}

export const SettingsScreen: FC<SettingsScreenProps> = observer(function SettingsScreen() {
  const {
    authenticationStore: { logout, reset },
  } = useStores()
  const accountSetting = {
    title: "Account",
    items: [
      {
        Icon: <AntDesign name="user" size={30} color="black" style={$Icon} />,
        label: "Edit Profile",
        onPress: () => {
          console.log("press")
        },
      },
      {
        Icon: <MaterialIcons name="security" size={30} color="black" style={$Icon} />,
        label: "Security",
        onPress: () => {
          console.log("press")
        },
      },
      {
        Icon: <Ionicons name="notifications" size={30} color="black" style={$Icon} />,
        label: "Notifications",
        onPress: () => {
          console.log("press")
        },
      },
      {
        Icon: <MaterialIcons name="privacy-tip" size={30} color="black" style={$Icon} />,
        label: "Privacy",
        onPress: () => {
          console.log("press")
        },
      },
    ],
  }
  const supportSetting = {
    title: "Support & About",
    items: [
      {
        Icon: <MaterialIcons name="subscriptions" size={30} color="black" style={$Icon} />,
        label: "my subscription",
        onPress: () => {
          console.log("press")
        },
      },
      {
        Icon: <Feather name="help-circle" size={30} color="black" style={$Icon} />,
        label: "Help & Support",
        onPress: () => {
          console.log("press")
        },
      },
    ],
  }
  return (
    <Screen
      style={$root}
      statusBarStyle="dark"
      safeAreaEdges={["top", "bottom"]}
      backgroundColor={colors.primary.white}
    >
      <SettingContainer contents={accountSetting} />
      <SettingContainer contents={supportSetting} />

      <Button
        onPress={() => {
          logout().then((response) => {
            if (response) reset()
          })
        }}
      >
        Log Out
      </Button>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  padding: 30,
}

const $Icon: ViewStyle = {
  flex: 1,
}
