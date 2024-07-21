import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { TabsScreenProps } from "app/navigators"
import { Button, Screen } from "app/components"
import { useStores } from "app/models"

interface SettingsScreenProps extends TabsScreenProps<"Settings"> {}

export const SettingsScreen: FC<SettingsScreenProps> = observer(function SettingsScreen() {
  const {
    authenticationStore: { logout, reset },
  } = useStores()
  return (
    <Screen style={$root} statusBarStyle="dark" safeAreaEdges={["top", "bottom"]}>
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
}
