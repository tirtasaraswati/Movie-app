import React from "react";
import "../assets/index.scss";

export default function () {
  var dataArr = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
  var idx = 0;
  const found = [];

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
        idx += 1;
      }
    });
    return found;
  };

  anagram(dataArr[idx], dataArr);

  return (
    <div>
      <h1>Anagram Test Case</h1>
      <div>{found}</div>
    </div>
  );
}
