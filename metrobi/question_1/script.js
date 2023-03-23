function compareValues() {
  const input1 = document.getElementById("value1").value;
  const input2 = document.getElementById("value2").value;
  const input3 = document.getElementById("value3").value;
  const input4 = document.getElementById("value4").value;
  const input5 = document.getElementById("value5").value;

  const array = [input1, input2, input3, input4, input5];
  const result = findUniqueDuplicatePositions(array);
  const count = countEmptyElements(array);

  if (count < 2) {
    document.querySelector("h2").innerHTML = "Type at least 2 values!";
    return;
  }

  if (result !== null) {
    const [pos1, pos2] = result;
    document.querySelector("h2").innerHTML =
      "The positions with the same value are: ";
    document.querySelector(".results1").innerHTML = `${pos1 + 1} and `;
    document.querySelector(".results2").innerHTML = `${pos2 + 1}`;
  } else {
    document.querySelector("h2").innerHTML =
      "Has more than 2 equal values ​​or no equal values!";
    document.querySelector(".results1").innerHTML = "";
    document.querySelector(".results2").innerHTML = "";
  }
}

function findUniqueDuplicatePositions(array) {
  const positions = {};

  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];

    if (currentValue !== "") {
      if (positions[currentValue]) {
        positions[currentValue].count++;

        if (positions[currentValue].count > 2) {
          return null;
        }

        positions[currentValue].positions.push(i);
      } else {
        positions[currentValue] = {
          count: 1,
          positions: [i],
        };
      }
    }
  }

  const duplicateValues = Object.keys(positions).filter(
    (key) => positions[key].count === 2
  );

  if (duplicateValues.length !== 1) {
    return null;
  }

  return positions[duplicateValues[0]].positions;
}

function countEmptyElements(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== "") {
      count++;
    }
  }
  return count;
}
