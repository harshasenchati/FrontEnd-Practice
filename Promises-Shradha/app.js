// setTimeout(()=>{
//   console.log("hello");
// }
// ,2000);
// console.log("one");
// console.log("two");
// function sum (a,b){
//   console.log( a+b );
// }
// function calculator (a,b,summation){
//   summation(a,b);
// }
// calculator(5,10,sum);
// function getData(dataID,getNextData){
//   setTimeout(()=>{
//     console.log("data",dataID);
//     if(getNextData){
//       getNextData();
//     }
//   },2000)
// }
// getData(1,()=>{
//   getData(2,()=>{
//     getData(3,()=>{
//       getData(4);
//     })
//   });
// });
// let promise = new Promise ((resolve,reject)=>{
//   console.log("iam a promise");
//   reject("some error occured");
// })

// function getData(dataId,getNextData){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data",dataId);
//       resolve("success");
//       if(getNextData){
//         getNextData();
//       }
//     },5000);
//   });
// }
// const getPromise= ()=>{
//   return new Promise((resolve,reject)=>{
//     console.log("Iam a new promise ");
//     reject("network error");
//     resolve("success");
//   });
// };
// let promise=getPromise();
// promise.then((res)=>{
//   console.log("promise fulfilled",res);
// })
// promise.catch((err)=>{
//   console.log("promise rejected",err);
// })
// function asyncFunc1(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("some data1");
//       resolve("success");
//     },4000);
//   });
// }
// function asyncFunc2(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("some data2");
//       resolve("success");
//     },4000);
//   });
// }
// console.log("fetching data1.....")
// let p1=asyncFunc1();
// p1.then((res)=>{
//   console.log(res);
//   console.log("fetching data2.....")
//   let p2=asyncFunc2();
//   p2.then((res)=>{
//     console.log(res);
//   })
// })
// function getData(dataId){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data",dataId);
//       resolve("success");
//     },2000);
//   });
// }

// getData(1).then((res)=>{
//   return getData(2);
//  })
//  .then((res)=>{
//   return getData(3)
//  })
//  .then((res)=>{
//   return getData(4)
//  })
//   .then((res)=>{
//     console.log(res)
//   });    
// function api(a){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("weather Data",a);
//       resolve(200);
//     },2000);
//   });
// }
// async function getWeatherData(){
//   await api(1);
//   await api(2);
//   await api(3);
// }
// getWeatherData();
// function getData(dataId){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data",dataId);
//       resolve("success");
//     },2000);
//   });
// }

// async function getAllData(){
//   await getData(1);
//   await getData(2);
//   await getData(3);
//   await getData(4);
// }
// getAllData();
// const URL='https://api.thecatapi.com/v1/images/search?limit=10';

// const getImages = async ()=>{
//   console.log("initiated");
//   const response= await fetch(URL);
//   const data=await response.json();
//   data.forEach((cat)=>{
//     const imgElement=document.createElement('div');
//     imgElement.style.height="300px";
//     imgElement.style.width="300px";
//     imgElement.style.backgroundImage='url(' + cat.url + ')';
//     imgElement.style.backgroundSize="cover";
//     imgElement.style.border="2px solid black";
//     const maindiv=document.querySelector(".maindiv");
//     maindiv.appendChild(imgElement);
//   })
// }
// const imageClear = () => {
//   cleardiv=document.querySelector(".maindiv");
//   cleardiv.innerHTML='';
// }


