// console.log(module);

// module.exports = "hello world";
// module.exports.getDate = getDate;
exports.getDate = getDate;

// function getDate() {
//     let today = new Date();
     
//     let options = {
//         weekday: "long",
//         day: "numeric",
//         month: "long"
//     };
    
//     let day = today.toLocaleDateString("en-US", options);

//     return day;
// }

function getDate() {
    let today = new Date();
     
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    let day = today.toLocaleDateString("en-US", options);

    return day;
}

// module.exports.getDay = getDay;
exports.getDay = getDay;

function getDay() {
    let today = new Date();
     
    let options = {
        weekday: "long"
    };
    
    let day = today.toLocaleDateString("en-US", options);

    return day;
}

// console.log(module);
// console.log(module.exports);