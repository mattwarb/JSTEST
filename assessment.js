
function isPrime(number){

//let a= document.getElementById("textPrime").value; for testing it works on html
let a = 9; //can change this to any number and it will spit out if it is prime or not on a html
let divs = 0;
let Ndivs = 0;
for(i = 2; i < a; i++){

    if((a % i ) == false){

        //console.log("Divides by " + i);
        divs++;
        

    
    }

   else if((a % i) == true){

    //console.log("does not divide by " + i);
    Ndivs++
   }

}
//console.log(divs);
//console.log(Ndivs);
if(divs == 0){

 console.log(a + " is prime");


}
else{
    console.log(a + " is not prime");
}

//-----------------------------------done


}
  
function amountToCoins(amount, coins){
    let num = 66;
    let coinage = [25, 10, 5, 2, 1];
    let numOf25 = 0;
    let numOf10 = 0;
    let numOf5 = 0;
    let numOf2 = 0;
    let numOf1 = 0;
    //console.log(num);
    for(i=0;num>0;i++){

    
    if((num - coinage[0] ) >= 0){

       num = num - coinage[0];
       numOf25++
       console.log(numOf25 + " 25p ");
        
    }

    else if((num - coinage[1] ) >= 0){

        num = num - coinage[1];
        numOf10++
        console.log(numOf10 + " 10p ");
         
     }


     else if((num - coinage[2] ) >=0){

        num = num - coinage[2];
        numOf5++
        console.log(numOf5 + " 5p ");
         
     }



     else if((num - coinage[3] ) >=0){

        num = num - coinage[3];
        numOf2++
        console.log(numOf2 +" 2p ");
         
     }


     else if((num - coinage[4] ) >=0){

        num = num - coinage[4];
        numOf1++
        console.log(numOf1+ " 1p ");
         
     }
     

}
console.log(numOf25 + " 25ps, " + numOf10 + " 10ps, " + numOf5 + " 5ps, "+ numOf2 + " 2ps, and " + numOf1 + " 1ps.");
}


//------------------------------------------------done

function uniqueLetters(string){
    let str = "sdga";
    console.log(str);
    //can't remember how to look at strings properly, annoying because I did the triple very well

}

function factorial(number){

    let f= 4;

    let out=f; 
    for(i=1;i<f;i++){
      //5*4
      //next iteration (5*4)*3
      //next iteration (5*4*3)*2
       
      //stuck here can't think how to iterate and keep the first multiplication
       
        let top = out * i;
        out = top;
        
      //  console.log(i);
       // console.log(out);
    //----------------------------------------will come back to DID IT 
    }

    console.log(f + " factorial is " + out);


}

function fibonacci(number){



    let n = 10;
    let i = 0;
    let oldFib = 0;
    let fib = 1;
    console.log(oldFib);
    console.log(fib);

    while(i<10){

        let fibSum = oldFib + fib; 
        oldFib=fib; 
        fib = fibSum;

        //console.log(fib);
       
        console.log(fibSum);
        
  
        i++


            //same problem as above, can't think ho0w to iterate and keep previous answer to plus again to 
            //'GETTING CLOSE
            //DONEEEEEEEEEEEEEEEEEEEEEEEEEE
    }


}