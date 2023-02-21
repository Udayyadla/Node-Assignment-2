const readline=require("readline");
const  rl=readline.createInterface(process.stdin,process.stdout);
rl.question('Please Enter Your Name: ',(result)=>{
   console.log(`hello ${result}`);
   rl.close()
})
    
