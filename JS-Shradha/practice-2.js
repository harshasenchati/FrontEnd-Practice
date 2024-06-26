let num = 25;
let userNum = prompt("guess the number");

while (userNum != num) {
  userNum = prompt("you guessed it wrong guess again");
}

console.log("you got it right");
let userInput = prompt("enter a value ");
userInput = "@" + userInput + userInput.length;
console.log(userInput);
let nums = [74, 86, 98, 67, 35, 71, 84];
sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum = sum + nums[i];
}
console.log(sum);
for (const val of nums) {
  sum += val;
}
console.log(sum);
console.log(`avg marks of the class is =${sum}`);
let items = [250, 645, 300, 900, 50];
let discountedItems = [];
for (const val of items) {
  disc = val - val / 10;
  discountedItems.push(disc);
}
console.log(discountedItems);
function vowelCount(vowel) {
  let obtainedVowels = [];
  let chars = vowel.split("");
  for (let i = 0; i < chars.length; i++) {
    if (
      chars[i] === "a" ||
      chars[i] === "e" ||
      chars[i] === "i" ||
      chars[i] === "o" ||
      chars[i] === "u"
    ) {
      obtainedVowels.push(chars[i]);
    }
  }

  console.log(obtainedVowels.length);
}

vowelCount("aeiou");
let names = [1, 2, 3, 4, 5];
let newArray = names.map((val) => {
  return val * val;
});
console.log(newArray);
let names = [1, 2, 3, 4, 5];
let newArray = names.filter((val) => {
  return val % 2 === 0;
});
console.log(newArray);
let nums = [1, 2, 3, 4, 5];
let even = [];
nums.forEach((val) => {
  if (val % 2 === 0) even.push(val);
});
console.log(even);
let arr = [1, 2, 3, 4, 5, 6, 8];
let evenArr = arr.filter((val) => {
  return val > 2;
});
console.log(evenArr);
let arr = [1, 2, 3, 4, 5, 6, 8];
let result = arr.reduce((prev, current) => {
  if (prev < current) {
    return prev;
  } else {
    return current;
  }
});
console.log(result);
let userNum = prompt("enter a number");
let arr = [];
for (let i = 1; i <= userNum; i++) {
  arr.push(i);
}
let sum = arr.reduce((prev, next) => {
  prev += next;
  return prev;
});
console.log(arr);
console.log(sum);
let divs = document.querySelectorAll(".box");
let idx = 0;
for (const div of divs) {
  divs[idx].innerText = `new value ${idx}`;
  idx++;
}
document.querySelector("div").setAttribute("class", "container");
let div = document.querySelector("div");
div.style.backgroundColor = "red";
let newBtn = document.createElement("button");
newBtn.innerText = "Subscribe";
div.appendChild(newBtn);
let newHeading = document.createElement("h2");
newHeading.innerText = "Jai Hind";

document.querySelector("body").append(newHeading);
div.appendChild(newHeading);
let newBtn = document.createElement("button");
newBtn.innerText = "ClickMe";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
document.body.prepend(newBtn);
let Div = document.querySelector("div");

Div.classList.add("model");
let btn = document.querySelector("#btn1");
btn.onclick = () => {
  console.log("button Was clicked");
  let a = 23;
  a++;
  console.log(a);
};
btn.addEventListener("click");
let Div = document.querySelector(".box");
Div.onclick = (e) => {
  console.log(e.target);
  console.log(e.type);
  console.log(e.clientX, e.clientY);
};
let togglebtn = document.querySelector(".theme");
let wholeScreen = document.querySelector("body");
let lightTheme = true;
togglebtn.addEventListener("click", () => {
  if (lightTheme == true) {
    wholeScreen.setAttribute("class", "blacktheme");
    wholeScreen.classList.add("blacktheme");
    document.querySelector("body").style.backgroundColor = "black";
    lightTheme = false;
  } else {
    wholeScreen.setAttribute("class", "lighttheme");
    wholeScreen.classList.add("lighttheme");
    document.querySelector("body").style.backgroundColor = "white";

    lightTheme = true;
  }
});
