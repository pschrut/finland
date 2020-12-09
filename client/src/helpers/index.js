const urlParams = new URLSearchParams(window.location.search);

export function replaceQueryParam(history, param, value) {
  urlParams.set(param, value);
  history.replace({
    search: `?${urlParams.toString()}`
  });
}

export function getQueryParam(param) {
  return urlParams.get(param);
}

export function sumTableAmounts(table) {
  if (table.length == 0) {
    return [];
  }

  let arrayOfAmounts = [];
  table.forEach(info => {
    let amountStringToNumber = Number(info.amount.replace(",","."));
    arrayOfAmounts.push(amountStringToNumber);
  })
  return arrayOfAmounts.reduce((acum, amount) => acum + amount)
          .toFixed(2)
          .toString()
          .replace(".", ",");
}

Date.prototype.toDateInputValue = (function() {
  let local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0,10);
});

Date.prototype.toLocaleDateStringYY = (function() {
  let localSplit = new Date(this).toLocaleDateString().split("/")
  return (localSplit.length > 1) ?
    localSplit[0] + "/"  + localSplit[1]
    : this;
});