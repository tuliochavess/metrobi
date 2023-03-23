function check() {
  const value = document.getElementById("bracket").value;
  const bracket = "'" + value + "'";
  const validBrackets = checkConstant(bracket);

  if (value !== "" && value.length > 1 && validBrackets) {
    const result = isProperlyClosed(bracket);

    if (result === true) {
      document.querySelector(
        "h2"
      ).innerHTML = `The brackest opened and closed properly.`;
      return;
    }
    document.querySelector("h2").innerHTML =
      "The brackest DO NOT opened and closed properly.";
    return;
  }

  document.querySelector("h2").innerHTML = "Please, type a pair of brackets!";
}

function isProperlyClosed(brackets) {
  const stack = [];
  const openBrackets = ["{", "(", "["];
  const closeBrackets = ["}", ")", "]"];
  const matchingBrackets = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let i = 0; i < brackets.length; i++) {
    const bracket = brackets[i];

    if (openBrackets.includes(bracket)) {
      stack.push(bracket);
    } else if (closeBrackets.includes(bracket)) {
      const lastOpenBracket = stack.pop();

      if (lastOpenBracket !== matchingBrackets[bracket]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function checkConstant(constant) {
  const validChars = ["{", "}", "[", "]", "(", ")", "'"];

  for (let i = 0; i < constant.length; i++) {
    if (!validChars.includes(constant[i])) {
      return false;
    }
  }

  return true;
}
