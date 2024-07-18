interface TotalPriceParametrs  {
  price: number;
  discount?: number;
  isInstallment?: boolean;
  months?: number;
}

const totalPrice = ({
  price,
  discount = 0,
  isInstallment,
  months = 12,
}: TotalPriceParametrs): number => {
  
  const priceWithDiscount = price - price * discount/100;
  const totalPrice = isInstallment ? priceWithDiscount / months: priceWithDiscount;

  return Math.round(totalPrice);
};


const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }); 
console.log(price); // 6250

const price2 = totalPrice({ price: 100000, discount: 50 }); 
console.log(price2); // 50000

const price3 = totalPrice({ price: 90000, isInstallment: true, months: 3 }); 
console.log(price3); // 30000