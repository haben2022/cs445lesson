let promise=new Promise((resolve,reject)=>{
    setInterval((n) => {
        n=23;
        for(let i=2;i<n;i++){
            if(n%2===0){
                resolve(false);
            }
            else reject(true)
        }
        
    }, 500);
});

promise.then((massage) => { 
    console.log(`{promise:${massage}}`)
     }).catch((massage) => {
         console.log(`{promise:${massage}}`)
    });