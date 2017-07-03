// // Arrow function
// var materials = ["test", "test 1", "string", "hello"];
//
// var length1 = materials.map((material) => material.length);
// console.log(length1);
//
// var func = () => ({foo: 1});
// console.log(func());
//
// function fn(x,...a) {
//   console.log(a);//2,3,4
// }
//
// fn(1,2,3,4);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 67, 58, 61, 59, 62, 60, 63, 1894, 1888, 1891, 1889, 1892, 1890, 1893, 51, 26, 29, 32, 21, 33, 34, 35, 33, 45, 29, 22, 2046, 2050];
var sorted_arr = arr.slice().sort(); // You can define the comparing function here.
                                     // JS by default uses a crappy string compare.
                                     // (we use slice to clone the array so the
                                     // original array won't be modified)
var results = [];
for (var i = 0; i < arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
    }
}

console.log("result: ", results);
