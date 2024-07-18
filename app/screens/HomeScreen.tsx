import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { TabsScreenProps } from "app/navigators"
import { Button, HomeLogo, Screen, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"
import { colors } from "app/theme"

interface HomeScreenProps extends TabsScreenProps<"HomeTap"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  // Pull in one of our MST stores
  const {
    authenticationStore: {
      // authEmail,
      logout,
    },
    reset,
  } = useStores()
  // Pull in navigation via hook
  // const navigation = useNavigation()

  return (
    <Screen
      style={$root}
      safeAreaEdges={["bottom", "top"]}
      // preset="scroll"
      backgroundColor={colors.primary.blue}
      statusBarStyle="light"
    >
      <HomeLogo />
      <Text text="Currency Converter" style={$homeLogo} preset="heading" />
      {/* <Text>{authEmail}</Text> */}
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
  justifyContent: "center",
  alignItems: "center",
}
const $homeLogo: TextStyle = {
  textAlign: "center",
  color: colors.primary.white,
  fontWeight: "bold",
  fontSize: 30,
  marginVertical: 20,
}
