const {add}=require("./utils");
console .log("Running CI Test...");
if(add(2,3)===5){
    console.log("Test passed!");
    process.exit(0);
}else{
    console.log("Test failed!");
    process.exit(1);
}