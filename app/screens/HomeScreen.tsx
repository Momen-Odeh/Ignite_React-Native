import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { ActivityIndicator, Image, TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import { ModalStackScreenProps } from "app/navigators"
import currencies from "../utils/data/currencies.json"
import { CurrencyInput, HomeLogo, Screen, Text } from "app/components"
import { colors } from "app/theme"
import { useStores } from "app/models"

interface HomeScreenProps extends ModalStackScreenProps<"MainStack"> {}

export const HomeScreen: FC<HomeScreenProps> = observer(function HomeScreen({ navigation }) {
  const {
    CurrencyStore: {
      baseCurrency,
      quoteCurrency,
      setBaseCurrency,
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
      setIsLoading(false)
    } else {
      alert("there is an error in api calling")
    }
  }
  useEffect(() => {
    if (currencies.includes(baseCurrencyTitle)) {
      handelUpdateCurrency()
    }
  }, [baseCurrencyTitle, quoteCurrencyTitle])

  const [isLoading, setIsLoading] = useState<boolean>(false)
  function formatDate(date: number) {
    const d = new Date(date)
    const day = d.getDate()
    const month = d.getMonth() + 1 // Months are zero-based
    const year = d.getFullYear()

    return `${day}-${month}-${year}`
  }

  return (
    <Screen
      style={$root}
      safeAreaEdges={["bottom", "top"]}
      backgroundColor={colors.primary.blue}
      statusBarStyle="light"
    >
      <HomeLogo />
      <Text text="Currency Converter" style={$homeLogo} preset="heading" />
      {isLoading ? (
        <ActivityIndicator color={colors.primary.white} size={"large"} />
      ) : (
        <>
          <CurrencyInput
            currencyTitle={baseCurrencyTitle}
            value={baseCurrency}
            onValueChange={setBaseCurrency}
            onButtonPress={() => {
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
            )} ${quoteCurrencyTitle} as of ${formatDate(Date.now())}`}
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
