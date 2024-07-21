import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { ActivityIndicator, Image, TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import { ModalStackScreenProps } from "app/navigators"
import currencies from "../utils/data/currencies.json"
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
// import { api } from "app/services/api"

interface HomeScreenProps extends ModalStackScreenProps<"MainStack"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen({ navigation }) {
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
    CurrencyStore: {
      baseCurrency,
      quoteCurrency,
      setBaseCurrency,
      setQuoteCurrency,
      setBaseCurrencyTitle,
      setQuoteCurrencyTitle,
      baseCurrencyTitle,
      quoteCurrencyTitle,
      updateCurrency,
      exchangeRate,
    },
  } = useStores()
  const handelUpdateCurrency = async () => {
    setIsLoading(true)
    if (await updateCurrency()) {
      console.log(quoteCurrency)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    console.log("******", baseCurrencyTitle)

    if (currencies.includes(baseCurrencyTitle)) {
      console.log("1111111111111")
      handelUpdateCurrency()

      // api.getExchangeRates(baseCurrency).then((response) => {
      //   console.log("222222222222")

      // eslint-disable-next-line dot-notation
      // console.log(response.rates[baseCurrency])
      // const res: number = parseFloat(response.rates[baseCurrency]) * parseFloat(baseCurrency)

      // setQuoteCurrency(res.toFixed(3))
      // })
    }
  }, [baseCurrencyTitle, quoteCurrencyTitle])
  useEffect(() => {
    const exchangedCurrency: number = parseFloat(baseCurrency) * exchangeRate
    setQuoteCurrency(exchangedCurrency.toFixed(2))
  }, [baseCurrency, baseCurrencyTitle, quoteCurrencyTitle])

  const [isLoading, setIsLoading] = useState<boolean>(false)
  return (
    <Screen
      style={$root}
      safeAreaEdges={["bottom", "top"]}
      backgroundColor={colors.primary.blue}
      statusBarStyle="light"
    >
      <HomeLogo />
      <Text text="Currency Converter" style={$homeLogo} preset="heading" />
      {/* <Text>{authEmail}</Text> */}
      {isLoading ? (
        <ActivityIndicator color={colors.primary.white} size={"large"} />
      ) : (
        <>
          <CurrencyInput
            currencyTitle={baseCurrencyTitle}
            value={baseCurrency}
            onValueChange={setBaseCurrency}
            onButtonPress={() => {
              console.log("on Button press ==> base ")
              navigation.push("CurrencyList", { isBaseCurrency: true })
            }}
          />
          <CurrencyInput
            currencyTitle={quoteCurrencyTitle}
            disabled={true}
            value={quoteCurrency}
            onButtonPress={() => {
              navigation.push("CurrencyList", { isBaseCurrency: false })
            }}
          />
          <Text
            text={`1 ${baseCurrencyTitle} = ${exchangeRate.toFixed(
              2,
            )} ${quoteCurrencyTitle} as of ${
              // Date.now()
              "21-7-2024"
            }`}
            style={$currencyWeight}
            preset="bold"
          />

          <TouchableOpacity
            style={$reverseCurrencyContainer}
            onPress={() => {
              setBaseCurrencyTitle(quoteCurrencyTitle)
              setQuoteCurrencyTitle(baseCurrencyTitle)
            }}
          >
            <Image source={require("../../assets/images/currency-reverse.png")} />
            <Text text="Reverse Currency" style={$reverseCurrencyText} preset="bold" />
          </TouchableOpacity>
        </>
      )}
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
