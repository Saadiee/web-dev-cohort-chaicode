// console.log(arr[-1]);

// const user = {
//   name: "hitesh",
//   age: 40,
//   password: "123",
// };

// const proxyUser = new Proxy(user, {
//   get(target, prop) {
//     console.log(prop);
//     if (prop === "password") {
//       throw new Error("Access Denied");
//     }
//     return target[prop];
//   },
//   set(target, prop, user){}
// });
// console.log(proxyUser.password);

function negativeIndex(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);
      if (index < 0) {
        return target[target.length + index];
      }
      return target[index];
    },
    set(target, prop, value) {
      const index = Number(prop);
      if (index < 0) {
        target[target.length + index] = value;
      } else {
        target[index] = value;
      }
      return true;
    },
  });
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = negativeIndex(arr);

console.log(arr[-1]);
console.log(newArr[-1]);
newArr[-1] = 22;
console.log(newArr);
console.log(arr);
