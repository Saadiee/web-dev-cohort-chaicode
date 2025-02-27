function ptaNhi(fn, delay) {
  let myId;

  return function (...args) {
    clearTimeout(myId);
    myId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
// 0201 -> dev
//

function greet(name) {
  console.log(`Hello ${name}`);
}

const sachMeNhiPta = ptaNhi(() => greet("hitesh"), 3000);
sachMeNhiPta();
sachMeNhiPta();
sachMeNhiPta();
// remove past request => keep a reference of it
// fire a new request
// userRequest() => debouncesUserRequest()


onClik