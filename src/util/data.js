export const formatMoney = (amount) => {
  return `$ ${amount}`;
};

export const convert24to12 = (time) => {
  var ts = time;
  var H = +ts.substr(0, 2);
  var h = H % 12 || 12;
  h = h < 10 ? "0" + h : h;
  ts = h + ts.substr(2, 3);
  return ts;
};

export const goToPreviousPath = (history) => {
  history.goBack();
};
