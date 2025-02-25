### Q: What is starvation/starvation of task queue❓
If micro tasks keep popping up without allowing other tasks a chance to run, what happens next? Well, in this scenario, the Callback Queue won’t get an opportunity to execute its tasks. This situation is what we call the starvation of tasks in the Callback Queue.

---
### Q: Hoisting❓
JavaScript Hoisting refers to the process whereby the interpreter **appears** to move the declaration of **functions**, **variables**, **classes**, or **imports** to the top of their scope, prior to execution of the code.
Yes, both `const` and `let` are **hoisted**, but they behave differently from `var`.  

### **Hoisting Behavior of `let` and `const`**
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

### Q: Event Loop does not exist. Can you write one from scratch❓
---
### Q: Promise does not exist. Can you write one from scratch❓
---
### Q: Sequence of HTML, CSS, JS loading in browser❓
---
### Q: Difference b/w Prototype & __proto__❓
---
### Q: Proxy in JS❓

---
### Q: ❓