import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { TabsScreenProps } from "app/navigators"
import { Button, Screen, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"

interface HomeScreenProps extends TabsScreenProps<"HomeTap"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  // Pull in one of our MST stores
  const {
    authenticationStore: { authEmail, logout },
    reset,
  } = useStores()
  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} safeAreaEdges={["bottom", "top"]} preset="scroll">
      <Text text="home" />
      <Text>{authEmail}</Text>
      <Button
        onPress={() => {
          logout().then((response) => {
            if (response) reset()
          })
          // navigation.pop()
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
