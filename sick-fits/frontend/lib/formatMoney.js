export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minmumFractionDigits: 2,
  };
  if(amount % 100 === 0 ){
    options.minmumFractionDigits = 0;
  }
  const formatter = Intl.NumberFormat('en-us', options);

  return formatter.format(amount / 100);
}
