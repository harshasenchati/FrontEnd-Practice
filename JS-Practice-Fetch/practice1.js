let btn = document.getElementById("special");
let dataele = document.getElementById("data");

btn.onclick = function () {
  let p = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "test.txt", true);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject("No data found");
      }
    };
  });

  p.then(function (data) {
    console.log(data);
  }).catch(function (errordata) {
    console.log(errordata);
  });
};


