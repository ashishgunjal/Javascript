var a= Promise.resolve('a')
var promise1 = new Promise((resolve,reject)=>{
  var a =true
  if(a){
    resolve('resolve')
  }else{
    reject('reject')
  }
})

var promise2 = new Promise((resolve,reject)=>{
  var a =true
  if(a){
    resolve('resolve')
  }else{
    reject('reject')
  }
})



Promise.all([a,promise1,promise2])
.then((results)=>{
  console.log(results)
}).
catch((err)=>{
  console.log('err1 '+ err)
}) 
//Except writing then for every promise write promises in all. if any fails 
//it will goes in catch and return 1st promise



Promise.race([a,promise1,promise2])
.then((result)=>{
  console.log(result)
})
.catch((err)=>{
  console.log('err '+ err)

}) 
//Return the first promise that is either fullfill or reject


Promise.any([a,promise1,promise2])
.then((result)=>{
  console.log(result)
})
.catch((err)=>{
  console.log('err '+ err)

}) 
// Return one promise that fullfill first. not a single promise is resolved 
// then get agreegate error

Promise.allSettled([a,promise1,promise2])
.then((result)=>{
  console.log(result)
})
.catch((err)=>{
  console.log('err '+ err)

}) 
// Gives status of every promise either fullfill or reject
