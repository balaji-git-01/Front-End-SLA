function countEven(start,end){
    let count=0;
    for(let i=start;i<=end;i++){
        if(i%2==0){
            count+=1;
        }
    }
    return count;
}

console.log(countEven(1,20));

function countsum(s,e){
    let sum=0;
    for(let i=s;i<=e;i++){
      sum=sum+i;
    }
    return sum;
}

console.log(countsum(1,10));

function Evensum(s,e){
    let sum=0;
    for(let i=s;i<=e;i++){
      if(i%2==0)
        sum=sum+i;
    }
    return sum;
}

console.log(Evensum(1,10));

function oddsum(s,e){
    let sum=0;
    for(let i=s;i<=e;i++){
      if(i%2!=0)
        sum=sum+i;
    }
    return sum;
}

console.log(oddsum(1,10));
