export const formatMoney = (money) => {
  let result = money.toString();
  result = result.replace(".", ",").substring(0, 5);
  return result;
};
