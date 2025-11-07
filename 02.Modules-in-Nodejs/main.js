// node is basically division of you codespace into the component

// to create the modules we have to export these using module=something of we have just onething to export or if we have two or more we can  export it as an object like
//  module={
//     a,b
// }
// and we can change their name for our use like
// module={
//     first:a,
//     second:b
// }

console.log('Now it is working fine');

   // const math= require("./math.js") it is also good

   const {subFn, addFn}=require("./math.js")

   // console.log(math);// this will print as add and sub functions

   // there are followign ways to use these

  //console.log('The Sum is:',math.addFn(2,4)); if we have used const math=..  than this will work
   console.log('The sum is:',addFn(2,4));
   console.log('The difference is:',subFn(4,2));
   
    