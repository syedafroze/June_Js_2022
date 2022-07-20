// let promise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     if(true){
//       resolve("success");
//     }
//     else{
//       reject("rejected");
//     }
//   },3000)
// })

// promise.then((msg)=>console.log(msg)) .catch((msg)=>console.log("failure"));

/*

pending 
success
failure 

*/

let promises = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("success1");
      } else {
        reject();
      }
    }, 2000);
  });
  let res1 = await promise;
  console.log(res1);

  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("success2");
      } else {
        reject();
      }
    }, 2000);
  });

  let res2 = await promise2;
  console.log(res2);
};

promises();
