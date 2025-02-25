## **What is `map()`?**

`Array.prototype.map()` is a built-in JavaScript method that creates a **new array** by calling a provided function on **every element** in the original array. It doesn't change the original array, which is why it's known as a **pure function**.

### **Syntax**

```js
const newArray = originalArray.map((currentValue, index, array) => {
  // Return the new value to be included in the newArray
}, thisArg);
```

- **`currentValue`**: The current element being processed in the array.
- **`index`** *(optional)*: The index of the current element.
- **`array`** *(optional)*: The original array being processed.
- **`thisArg`** *(optional)*: Value to use as `this` when executing the callback.

---

## **Basic Example: Multiplying Each Element by 2**

Let's start with a simple example:

```js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => {
  return number * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

### **Step-by-step Breakdown**

1. **Original Array:** `[1, 2, 3, 4, 5]`
2. **Callback Function:** For each element, we multiply it by `2`.
3. **Iteration Details:**

   | Iteration | `currentValue` | Calculation       | Resulting Value |
   |-----------|----------------|-------------------|-----------------|
   | 1st       | 1              | `1 * 2`           | 2               |
   | 2nd       | 2              | `2 * 2`           | 4               |
   | 3rd       | 3              | `3 * 2`           | 6               |
   | 4th       | 4              | `4 * 2`           | 8               |
   | 5th       | 5              | `5 * 2`           | 10              |

4. **Final Output:** The new array `[2, 4, 6, 8, 10]` is returned, leaving the original array unchanged.

---

## **More Examples**

### **1. Converting an Array of Strings to Uppercase**

```js
const fruits = ["apple", "banana", "cherry"];

const uppercasedFruits = fruits.map((fruit) => {
  return fruit.toUpperCase();
});

console.log(uppercasedFruits); // Output: ["APPLE", "BANANA", "CHERRY"]
```

**Explanation:**
- Each fruit name is converted to uppercase.
- The new array contains the uppercase strings.

---

### **2. Extracting Specific Properties from Objects**

Imagine you have an array of objects and you want to extract a particular property from each:

```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const userNames = users.map((user) => {
  return user.name;
});

console.log(userNames); // Output: ["Alice", "Bob", "Charlie"]
```

**Explanation:**
- The callback function returns the `name` property of each user.
- The new array contains just the names.

---

### **3. Using Index in `map()`**

You can also use the index of each element in the callback:

```js
const numbers = [10, 20, 30];

const detailedNumbers = numbers.map((number, index) => {
  return `Index ${index}: ${number}`;
});

console.log(detailedNumbers);
// Output: ["Index 0: 10", "Index 1: 20", "Index 2: 30"]
```

**Explanation:**
- The callback function receives both the current element (`number`) and its `index`.
- It returns a string that includes both the index and the number.

---

## **Key Points to Remember**

- **Non-Mutating:**  
  `map()` returns a **new array**; it does not modify the original array.
  
- **Callback Function:**  
  The function passed to `map()` is executed once for every element in the array, in order.
  
- **Return Value:**  
  The value returned by the callback function becomes an element in the new array.

- **Pure Function:**  
  Since `map()` is non-mutating and creates a new array, it fits well with functional programming principles.

---