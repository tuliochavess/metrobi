async function generate() {
  const input1 = document.getElementById("value1").value;
  const input2 = document.getElementById("value2").value;
  const input3 = document.getElementById("value3").value;
  const input4 = document.getElementById("value4").value;
  document.querySelector(".resultTitle").innerHTML = "Here is your array: ";

  const array = [input1, input2, input3, input4];
  const count = countEmptyElements(array);

  if (count < 4) {
    document.querySelector(".resultTitle").innerHTML = "Type the 4 values! ";
    return;
  }

  await showArrayWithDelay(array);
}

async function showArrayWithDelay(array) {
  let time = 1000;
  const span = document.querySelector(".resultText");

  const button = document.getElementById("button");
  disableButtonForXtime(button);
  
  for (let i = 0; i < array.length; i++) {
    await new Promise((x) => setTimeout(x, time));
    span.textContent += array[i] + " ";
    time *= 2;
  }
}

function disableButtonForXtime(button) {
  button.disabled = true;
  setTimeout(() => {
    button.disabled = false;
  }, 15000);
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
