export function getRandomElements(arr, count = 5) {
  const shuffled = arr?.sort(() => 0.5 - Math.random());
  return shuffled?.slice(0, count);
}

