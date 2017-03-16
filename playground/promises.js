var asyncAdd=(a,b)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a===`number`&& typeof b===`number`){
                resolve(a+b);                
            }
            else{
                reject(`Arguments must be numbers`);
            }
        },1500)
    })
};

asyncAdd(4,8)
.then((res)=>{console.log(res);return asyncAdd(res,"45");})
.then((res)=>{console.log("must be 57",res)})
.catch((errorMessage)=>{console.log(errorMessage)}); 

// var somePromise = new Promise((resolve,reject)=>{
// setTimeout(()=> {
//   resolve(`Hey it worked`);
//   reject(`Unable to fulfill promise`);  
// }, 4000);




// });

// somePromise.then(
//     (message)=>{console.log      (`success ${message}`)},
//     (errorMessage)=>{console.log (`error:  ${errormessage}`)}
    
// );
 