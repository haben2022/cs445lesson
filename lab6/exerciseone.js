
async function removeDuplicates(arr){
    return [...new Set(arr)]
    }
   Array.prototype.removeDuplicatesAsync=async function(){
    try{
    let result=await removeDuplicates(this)
    console.log(result)
    }catch(e){
    console.log(e)
    }
   }
   console.log(`start`);//1
   [4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); //2
   console.log(`end`);//3
   // Output:
   // start
   // end
   // [4, 1, 5, 7, 2, 3, 6]