export function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word =>
      word.charAt(0).toLocaleUpperCase('tr-TR') + word.slice(1).toLocaleLowerCase('tr-TR')
    )
    .join(' ');
}

