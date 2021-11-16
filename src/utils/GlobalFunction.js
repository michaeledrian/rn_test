export function stringToNumber(someString) {
  let filtered = someString.replace(/^0+/, '').replace(/[^0-9]/g, '');
  if (filtered === undefined || filtered === null || filtered === '') {
    filtered = 0;
  }

  return filtered;
}

export function stringToDecimal(someString) {
  let filtered = someString
    .replace(/^[^0-9]/g, '')
    .replace(/[,]/g, '.')
    .replace(/[^.\d]/g, '')
    .replace(/^(\d*\.?)|(\d*)\.?/g, '$1$2')
    .replace(/^0+(?=\d)|,(?=[^,]*,)|(,\d{2})\d+$/g, '$1');
  if (filtered === undefined || filtered === null || filtered === '') {
    filtered = 0;
  }

  return filtered;
}
