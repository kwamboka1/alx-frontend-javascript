/* eslint-disable */
export default function updateUniqueItems(groceriesMap) {
  if (!(groceriesMap instanceof Map)) throw new Error("Cannot process");

  groceriesMap.forEach((value, key) => {
    if (value === 1) groceriesMap.set(key, 100);
  });

  return groceriesMap;
}
