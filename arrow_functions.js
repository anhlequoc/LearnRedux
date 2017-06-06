// Arrow function
var materials = ["test", "test 1", "string", "hello"];

var length1 = materials.map((material) => material.length);
console.log(length1);

var func = () => ({foo: 1});
console.log(func());

function fn(x,...a) {
  console.log(a);//2,3,4
}

fn(1,2,3,4);