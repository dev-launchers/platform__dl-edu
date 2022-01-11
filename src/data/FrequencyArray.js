import ModuleMetaData from "./ModuleMetadata";

const frequencyArray = [];
let found;
const tagHolder = [];

//take each metadata object and extract the keywords from each.  place keywords in tagHolder array
ModuleMetaData.forEach((item) => {
  item.keyWords.forEach((tag) => tagHolder.push(tag));
});
tagHolder.forEach((tag) => {
  //look for matching tag already in array
  found = frequencyArray.findIndex(
    (searchedForTag) => searchedForTag.name === tag
  );
  //if not found, push tag into array, frequency = 1
  if (found === -1) {
    frequencyArray.push({ name: tag, frequency: 1 });
  } else {
    frequencyArray[found].frequency++;
  }
});
//sort the array in descending order
frequencyArray.sort(function (a, b) {
  return b.frequency - a.frequency;
});

export default frequencyArray;