function frankenSplice(arr1, arr2, n) {
    //declarenew variable for returning
    let nvar=[];
    for(let i=0;i<n;i++){
    nvar.push(arr2[i]); //appending array2 to new variable
    }
    for(let j=0;j<arr1.length;j++){
        nvar.push(arr1[j]);//appending second array at specified location
    }
    for(let k=n;k<arr2.length;k++){
        nvar.push(arr2[k])//appending remaining array2 to new variable
    }
  return nvar;//returning a variable
}

console.log(frankenSplice([1, 2, 3,9,5,4], [4, 5, 6], 1));