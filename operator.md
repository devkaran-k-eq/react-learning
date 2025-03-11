---

## **1️⃣ Logical AND (`&&`) - Short-Circuit Evaluation**
✅ **Returns the first falsy value or the last truthy value.**  
✅ **Used for conditional execution.**

```js
let authStatus = true;
let username = "John";

let result = authStatus && username;
console.log(result); // "John"
```
- If `authStatus` is `true`, it returns `username`.
- If `authStatus` is `false`, it returns `false`.

### **Use Case:** Conditional Rendering in React  
```jsx
{authStatus && <Dashboard />}
```
- If `authStatus` is `true`, `<Dashboard />` is shown.
- If `authStatus` is `false`, **nothing is shown**.

---

## **2️⃣ Logical OR (`||`) - Default Value Assignment**
✅ **Returns the first truthy value or the last falsy value.**  
✅ **Commonly used for setting default values.**

```js
let userInput = ""; // Falsy value
let defaultName = "Guest";

let username = userInput || defaultName;
console.log(username); // "Guest"
```
- If `userInput` is empty (`""`, falsy), it returns `"Guest"`.
- If `userInput` had a value (truthy), it would return that value.

### **Use Case:** Provide a Default Value  
```js
function greet(name) {
  console.log("Hello, " + (name || "Guest"));
}

greet(""); // "Hello, Guest"
greet("Alice"); // "Hello, Alice"
```

---

## **3️⃣ Nullish Coalescing (`??`) - Handle `null` or `undefined`**
✅ **Returns the right-hand value only if the left-hand value is `null` or `undefined`.**  
✅ **Does NOT treat `false`, `0`, or `""` as nullish.**

```js
let userInput = null;
let defaultName = "Guest";

let username = userInput ?? defaultName;
console.log(username); // "Guest"
```
- If `userInput` is `null` or `undefined`, it returns `"Guest"`.
- If `userInput` is `""`, `0`, or `false`, it **does not** use the default.

### **Difference Between `||` and `??`**
```js
let input1 = ""; // Empty string
let input2 = null;

console.log(input1 || "Default"); // "Default" (treats "" as falsy)
console.log(input1 ?? "Default"); // "" (does NOT treat "" as nullish)
console.log(input2 ?? "Default"); // "Default" (nullish check works)
```

---

## **4️⃣ Ternary Operator (`? :`) - Inline If-Else**
✅ **Used for conditional expressions (shorthand for `if-else`).**  

```js
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";

console.log(canVote); // "Yes"
```
- If `age >= 18`, it returns `"Yes"`, otherwise `"No"`.

### **Use Case:** Dynamic Styling in React  
```jsx
<button className={isActive ? "btn-active" : "btn-inactive"}>
  Click Me
</button>
```
- If `isActive` is `true`, apply `"btn-active"`, else `"btn-inactive"`.

---

## **5️⃣ Optional Chaining (`?.`) - Safe Property Access**
✅ **Prevents errors when accessing nested properties that might not exist.**  

```js
let user = {
  profile: {
    name: "Alice"
  }
};

console.log(user.profile?.name); // "Alice"
console.log(user.address?.city); // undefined (no error!)
```
- **Without `?.`**, accessing `user.address.city` would cause an error.
- **With `?.`**, it returns `undefined` instead of breaking.

---

## **🚀 Summary of Operators**
| Operator | Usage | Description |
|----------|-------|-------------|
| `&&` (AND) | `a && b` | Returns `a` if falsy, else returns `b`. |
| `||` (OR) | `a || b` | Returns `a` if truthy, else returns `b`. |
| `??` (Nullish Coalescing) | `a ?? b` | Returns `b` only if `a` is `null` or `undefined`. |
| `? :` (Ternary) | `condition ? value1 : value2` | If condition is `true`, returns `value1`, else `value2`. |
| `?.` (Optional Chaining) | `obj?.prop` | Returns `undefined` if `obj` is null/undefined, avoiding errors. |

---

## **🚀 Which One to Use?**
- ✅ Use **`&&`** for conditional execution (e.g., `isLoggedIn && <Component />`).
- ✅ Use **`||`** for **default values** (`userInput || "Guest"`).
- ✅ Use **`??`** when you **only** want to handle `null` or `undefined` (`userInput ?? "Guest"`).
- ✅ Use **`?.`** to safely access properties (`user.profile?.name`).
- ✅ Use **`? :`** for **inline if-else conditions**.
