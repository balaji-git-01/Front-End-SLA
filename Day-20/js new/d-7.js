//async
/* 1.callback 
2.aync await 
3. promise */



let p=new Promise((resolve,reject)=>{
    console.log("Pending");
    let sucess=false;
    if(sucess){
        resolve("task completed");
    }
    else{
        reject("Failed")
    }
});

p.then((data)=>{
    console.log(data);
})
.catch((err)=>{
 console.log(err);
 
})