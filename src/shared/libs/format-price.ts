export const formatPrice = (price: number) => {
  return Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
  }).format(price);
};
