// data'da 19.99 olarak tutulan fiyat bilgisinin
// UI'da 19,99 olarak gösterilmesi için
// Aynı zamanda sepetteki toplam fiyatın küsüratlarının yalnızca ilk iki rakamının gösterilmesi için
// Örneğin = 190,599899  => 190,59
export const formatMoney = (money) => {
  let result = money.toString();
  result = result.replace(".", ",").substring(0, 5);
  return result;
};
