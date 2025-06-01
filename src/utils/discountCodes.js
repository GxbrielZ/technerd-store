export const discountCodes = [
  {
    code: 'RABATOBRANIE2025',
    type: 'percentage',
    value: 0.05,
    display: '5% zniżki',
    weight: 1,
  },
  {
    code: 'SETKA',
    type: 'fixed',
    value: 100,
    display: '100 zł zniżki',
    weight: 1,
  },
  {
    code: 'FIVEZERO',
    type: 'fixed',
    value: 50,
    display: '50 zł zniżki',
    weight: 3,
  },
  {
    code: 'DYSZKA',
    type: 'fixed',
    value: 10,
    display: '10 zł zniżki',
    weight: 5,
  },
];

export const getRandomDiscountCode = () => {
  const totalWeight = discountCodes.reduce((sum, coupon) => sum + coupon.weight, 0);
  let randomNum = Math.random() * totalWeight;

  for (let i = 0; i < discountCodes.length; i++) {
    randomNum -= discountCodes[i].weight;
    if (randomNum <= 0) {
      return discountCodes[i];
    }
  }
  
  return discountCodes[discountCodes.length - 1];
};