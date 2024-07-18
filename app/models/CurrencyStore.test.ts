import { CurrencyStoreModel } from "./CurrencyStore"

test("can be created", () => {
  const instance = CurrencyStoreModel.create({})

  expect(instance).toBeTruthy()
})
