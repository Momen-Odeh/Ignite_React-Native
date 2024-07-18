import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Image, TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import { TabsScreenProps } from "app/navigators"
import {
  // Button,
  CurrencyInput,
  HomeLogo,
  Screen,
  Text,
} from "app/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"
import { colors } from "app/theme"
import { useStores } from "app/models"

interface HomeScreenProps extends TabsScreenProps<"HomeTap"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const {
  //   authenticationStore: {
  //     // authEmail,
  //     logout,
  //   },
  //   reset,
  // } = useStores()
  // Pull in navigation via hook
  // const navigation = useNavigation()
  const {
    CurrencyStore: { baseCurrency, quoteCurrency, setBaseCurrency },
  } = useStores()
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
      <CurrencyInput value={baseCurrency} onValueChange={setBaseCurrency} />
      <CurrencyInput disabled={true} value={quoteCurrency} />
      <Text
        text={`1 ${"USD"} = ${3.63} ${"ILS"} as of 18-7-2024`}
        style={$currencyWeight}
        preset="bold"
      />

      <TouchableOpacity
        style={$reverseCurrencyContainer}
        onPress={() => console.log("reverseCurrency")}
      >
        <Image source={require("../../assets/images/currency-reverse.png")} />
        <Text text="Reverse Currency" style={$reverseCurrencyText} preset="bold" />
      </TouchableOpacity>
      {/* <Button
        onPress={() => {
          logout().then((response) => {
            if (response) reset()
          })
          // navigation.pop()
        }}
      >
        Log Out
      </Button> */}
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  padding: 30,
  // alignItems: "center",
}
const $homeLogo: TextStyle = {
  textAlign: "center",
  color: colors.primary.white,
  fontWeight: "bold",
  fontSize: 30,
  marginVertical: 20,
}
const $currencyWeight: TextStyle = {
  fontSize: 14,
  color: colors.primary.white,
  textAlign: "center",
  marginBottom: 15,
}
const $reverseCurrencyContainer: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 15,
}
const $reverseCurrencyText: TextStyle = {
  fontSize: 14,
  color: colors.primary.white,
}
