import dictionary from './dictionary';
export const getWord = () => {
  let itemNumber = Math.floor(Math.random() * dictionary.length);
  console.log(dictionary[itemNumber]);
  return dictionary[itemNumber];
}
export const isInDictionary = (str) => dictionary.includes(str);
