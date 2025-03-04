## Q: What is starvation/starvation of task queue❓
If micro tasks keep popping up without allowing other tasks a chance to run, what happens next? Well, in this scenario, the Callback Queue won’t get an opportunity to execute its tasks. This situation is what we call the starvation of tasks in the Callback Queue.

---
## Q: Hoisting❓
JavaScript Hoisting refers to the process whereby the interpreter **appears** to move the declaration of **functions**, **variables**, **classes**, or **imports** to the top of their scope, prior to execution of the code.
Yes, both `const` and `let` are **hoisted**, but they behave differently from `var`.  

## **Hoisting Behavior of `let` and `const`**
- **They are hoisted to the top of their scope,** just like `var`.
- **They are not initialized automatically,** unlike `var`, which gets initialized with `undefined`.
- **They are in a "Temporal Dead Zone" (TDZ)** from the start of their enclosing scope until the line where they are declared.

---
### **Key Differences Between `var`, `let`, and `const` Hoisting**
| Keyword | Hoisted? | Initialized? | Temporal Dead Zone? |
|---------|---------|-------------|----------------------|
| `var`   | ✅ Yes  | ✅ `undefined` | ❌ No |
| `let`   | ✅ Yes  | ❌ No (TDZ) | ✅ Yes |
| `const` | ✅ Yes  | ❌ No (TDZ) | ✅ Yes |

---

### Q: Does JS has the capability for network calling?❓
No, JS doesn't have the capability for network calling.

---
## Q: What is promisification❓
Converting legacy callback code to support promises

---
## Q: What is Closure Function❓
Function binded by its lexical scope. A closure is a function that remembers the variables from its outer scope, even after the outer function has finished executing.

Explanation & Example:
```javascript
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
}

const closureExample = outerFunction("Hello");
closureExample("World"); // Outer: Hello, Inner: World
```
Even though outerFunction has finished execution, innerFunction remembers outerVariable (lexical scope).


---

## Q: `this` keyword❓
That's a great question! The value of `this` in functions depends on **how the function is called**, not where it's defined. Let me break it down for you:  

### 🔥 **When does `this` refer to the `window` object?**
1️⃣ **Regular function calls (global scope or inside a function)**
```js
function showThis() {
    console.log(this);
}
showThis(); 
// In non-strict mode → window (browser) or global (Node.js)
// In strict mode → undefined
```
✅ **If a function is called without an object, `this` is the `window` object** (unless in strict mode).  

2️⃣ **Functions inside another function (without an object)**
```js
function outer() {
    function inner() {
        console.log(this);
    }
    inner();
}
outer(); // window (or undefined in strict mode)
```
✅ **Even though `inner` is inside `outer`, it’s still just a regular function. So `this` is `window`.**



### 🔥 **When does `this` refer to the object it's inside?**
1️⃣ **When calling a method on an object**
```js
const obj = {
    name: "Alice",
    sayHello: function () {
        console.log(this.name);
    }
};
obj.sayHello(); // "Alice"
```
✅ **Here, `this` refers to `obj` because the function was called as `obj.sayHello()`**  

2️⃣ **When using a constructor function**
```js
function Person(name) {
    this.name = name;
}
const p1 = new Person("Alice");
console.log(p1.name); // "Alice"
```
✅ **Here, `this` refers to the newly created object (`p1`).**

---

### 🔥 **Tricky Cases to Watch Out For**
1️⃣ **Losing `this` when assigning a method to a variable**
```js
const obj = {
    name: "Alice",
    sayHello: function () {
        console.log(this.name);
    }
};
const greet = obj.sayHello;
greet(); // undefined (called as a regular function)
```
❌ **Mistake:** `greet()` is no longer attached to `obj`, so `this` becomes `window`.  
✔ **Fix:** Use `.bind()`  
```js
const greet = obj.sayHello.bind(obj);
greet(); // "Alice"
```

2️⃣ **`this` inside a regular function in a method**
```js
const obj = {
    name: "Alice",
    greet() {
        function inner() {
            console.log(this.name);
        }
        inner();
    }
};
obj.greet(); // undefined (inner() is a regular function)
```
✔ **Fix:** Use an arrow function to inherit `this`
```js
const obj = {
    name: "Alice",
    greet() {
        const inner = () => {
            console.log(this.name);
        };
        inner();
    }
};
obj.greet(); // "Alice"
```


### 🎯 **Quick Summary**
| Function Call Type   | `this` Refers To |
|----------------------|----------------|
| **Regular function** (`showThis()`) | `window` (or `undefined` in strict mode) |
| **Object method** (`obj.method()`) | The object calling it |
| **Constructor function** (`new Func()`) | The new object created |
| **Arrow function** | Inherits `this` from outer function |
| **setTimeout/setInterval** | `window` (unless using `bind()` or arrow function) |
| **Event Listener** (`element.onclick = func`) | The element itself |


Does this clear up your doubt? Want to test with more tricky examples? 🚀😏


---
## Q: Promise Polyfill (Advanced Topic)❓


---
## Q: Event Loop does not exist. Can you write one from scratch❓

---
## Q: Promise does not exist. Can you write one from scratch❓

---
## Q: Sequence of HTML, CSS, JS loading in browser❓

---
## Q: Difference b/w Prototype & __proto__❓

---
## Q: Proxy in JS❓


---
## Q: Nullish coalescing❓


---
## Q: Closure & Lexical Scope❓


---
## Q: Debouncing❓


---
## Q: Throttling❓


---
## Q: ❓



---