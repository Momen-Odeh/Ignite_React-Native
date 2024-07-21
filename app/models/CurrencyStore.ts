import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { api } from "app/services/api"

/**
 * Model description here for TypeScript hints.
 */
export const CurrencyStoreModel = types
  .model("CurrencyStore")
  .props({
    baseCurrency: "1",
    quoteCurrency: "3.63",
    baseCurrencyTitle: "USD",
    quoteCurrencyTitle: "ILS",
    exchangeRate: 1,
  })
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setBaseCurrency(value: string) {
      self.setProp("baseCurrency", value)
    },
    setQuoteCurrency(value: string) {
      self.setProp("quoteCurrency", value)
    },
    setExchangeRate(value: number) {
      self.setProp("exchangeRate", value)
    },
    setBaseCurrencyTitle(value: string) {
      self.setProp("baseCurrencyTitle", value)
    },
    setQuoteCurrencyTitle(value: string) {
      self.setProp("quoteCurrencyTitle", value)
    },
    async updateCurrency() {
      try {
        console.log("in action updateCurrency")
        const res = await api.getExchangeRates(self.baseCurrencyTitle)
        this.setExchangeRate(res.rates[self.quoteCurrencyTitle])
        // console.log(res.rates[self.quoteCurrencyTitle])
        // const exchangedCurrency: number =
        //   parseFloat(self.baseCurrency) * res.rates[self.quoteCurrencyTitle]
        // this.setQuoteCurrency(exchangedCurrency.toFixed(2))
        return true
      } catch (error) {
        console.log("there is error in currency api")

        return false
      }
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
// .actions((self) => {

// })

export interface CurrencyStore extends Instance<typeof CurrencyStoreModel> {}
export interface CurrencyStoreSnapshotOut extends SnapshotOut<typeof CurrencyStoreModel> {}
export interface CurrencyStoreSnapshotIn extends SnapshotIn<typeof CurrencyStoreModel> {}
export const createCurrencyStoreDefaultModel = () => types.optional(CurrencyStoreModel, {})
