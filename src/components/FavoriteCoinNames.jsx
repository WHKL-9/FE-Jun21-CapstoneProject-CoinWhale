const FavoriteCoinNames = () => {
  let getCoins = document.querySelectorAll("#coinButton");
  let coinNames = [];
  for (let i = 0; i < getCoins.length; i++) {
    coinNames.push(getCoins[i].innerHTML);
  }
  console.log(coinNames);
  return coinNames;
};

export default FavoriteCoinNames;
