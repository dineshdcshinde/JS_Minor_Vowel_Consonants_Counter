let text = document.querySelector("textarea");
let vowelBtn = document.querySelector("button");
let consonantBtn = document.querySelector(".consonants");

// it is to avoid having load of the classes if it is then the output will be same as that class defined
let output = document.querySelector(".output");

let count = 0;

vowelBtn.addEventListener("click", () => {
  let vowels = "aeiou";

  let alphabet = text.value.toLowerCase();

  output.classList.remove("success", "failure");

  if (!alphabet) {
    output.classList.add("failure");
    output.innerText = "Please enter a text...";
    return;
  }

  for (let i = 0; i < alphabet.length; i++) {
    if (vowels.includes(alphabet[i])) {
      count++;
    }
    output.classList.add("success");
    output.textContent = `Vowels count ${count}`;

    setTimeout(() => {
      text.value = "";
      count = 0;
      output.textContent = `Vowels count 0`;
    }, 3000);
  }
});

consonantBtn.addEventListener("click", () => {
  let vowels = "aeiou";

  let consonant = 0;

  let alphabet = text.value.toLowerCase();

  output.classList.remove("success", "failure");

  if (!alphabet) {
    output.classList.add("failure");
    output.innerText = "Please enter a text...";
    return;
  }

  for (let i = 0; i <= alphabet.length; i++) {
    if (!vowels.includes(alphabet[i]) && alphabet[i].match(/[a-z]/i)) {
      consonant++;
    }

 
    output.classList.add("success");
    output.textContent = `Consonants count ${consonant}`;

    setTimeout(() => {
      text.value = "";
      consonant = 0;
      output.textContent = `Consonants count 0`;
    }, 3000);
  }
});
