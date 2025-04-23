// function MyPromise(duration){
//  const p = new Promise(function(resolve){
//     setTimeout(() => {
//          resolve()
//     }, duration);
//  })
//  return p
// }

// const ans = MyPromise(1000);
// ans.then(()=>{
//     console.log("The time out is Done")
// })



function MyPromise(duration, callback){
     setTimeout(()=>{
           callback()
     },duration)
}
const data = MyPromise(1000, ()=>{
    console.log("The time out is Done")
})