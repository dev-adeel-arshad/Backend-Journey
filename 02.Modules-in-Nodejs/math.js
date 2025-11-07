

// function add(a,b){
//     return a+b
// }


// function sub(a,b){
// return  a-b
// }


// first way to export these
// module.exports={
//     add,
//     sub
// }

// module.exports={
//     addFn:add,
//     subFn:sub
// }


// we can export in another way


// this will also work

exports.addFn=(a,b)=>a+b
exports.subFn=(a,b)=>a-b