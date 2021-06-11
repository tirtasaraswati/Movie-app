import React from "react";
import "../assets/index.scss";

export default function () {
  const dataArr = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
  const found = [];
  const uniqueArray = [];
  var data1 = [];
  var data2 = [];
  var data3 = [];

  const uniqueDataArr = (arr) => {
    for (var i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1) {
        uniqueArray.push(arr[i]);
      }
    }
    data1 = uniqueArray.splice(0, 3);
    data2 = uniqueArray.splice(3, 2);
    data3 = uniqueArray.splice(5, 6);
    return data1, data2, data3;
  };

  let anagram = (word, arr) => {
    arr.forEach((item) => {
      const sorting = (array) => {
        var done = false;
        while (!done) {
          done = true;
          for (var i = 1; i < array.length; i += 1) {
            if (array[i - 1] > array[i]) {
              done = false;
              var tmp = array[i - 1];
              array[i - 1] = array[i];
              array[i] = tmp;
            }
          }
        }

        return array;
      };
      const newItem = item.split("");
      const newWord = word.split("");

      const isItem = sorting(newItem);
      const isWord = sorting(newWord);

      const joinItem = isItem.join("");
      const joinWord = isWord.join("");
      if (joinItem === joinWord) {
        found.push(item);
      }
    });
    uniqueDataArr(found);
    return found;
  };

  return (
    <div>
      <h1>Anagram Test Case</h1>
      {dataArr.forEach((item, idx, array) => {
        anagram(array[idx], dataArr);
      })}
      <div>{uniqueArray.toString()}</div>
      <div>{data1.toString()}</div>
      <div>{data2.toString()}</div>
      <div>{data3.toString()}</div>
    </div>
  );
}
