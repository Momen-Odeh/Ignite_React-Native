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
      this.updateQuoteCurrency()
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
        const res = await api.getExchangeRates(self.baseCurrencyTitle)
        this.setExchangeRate(res.rates[self.quoteCurrencyTitle])
        this.updateQuoteCurrency()
        return true
      } catch (error) {
        console.log("there is error in currency api")

        return false
      }
    },
    updateQuoteCurrency() {
      const exchangedCurrency: number = parseFloat(self.baseCurrency) * self.exchangeRate
      this.setQuoteCurrency(exchangedCurrency.toFixed(2))
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface CurrencyStore extends Instance<typeof CurrencyStoreModel> {}
export interface CurrencyStoreSnapshotOut extends SnapshotOut<typeof CurrencyStoreModel> {}
export interface CurrencyStoreSnapshotIn extends SnapshotIn<typeof CurrencyStoreModel> {}
export const createCurrencyStoreDefaultModel = () => types.optional(CurrencyStoreModel, {})
