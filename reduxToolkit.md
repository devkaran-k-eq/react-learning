### **1. Why Redux Toolkit Over `useContext`?**

Both `useContext` and Redux Toolkit help manage state in a React app, but Redux Toolkit solves some key problems of `useContext`:

| Feature | `useContext` + `useReducer` | Redux Toolkit |
|---------|-----------------|---------------|
| **Global State Management** | Good for small apps | Scales better for large apps |
| **Code Complexity** | Can get messy with multiple contexts and reducers | Provides structured, boilerplate-free state management |
| **Performance** | Re-renders entire components on state change | Uses a central store and optimizes re-renders efficiently |
| **Asynchronous Logic (API Calls)** | Needs `useEffect` and `useReducer` separately | Built-in `createAsyncThunk` for API calls |
| **Dev Tools & Debugging** | Harder to debug manually | Has Redux DevTools for time travel debugging |

---
### **2. Understanding Redux Toolkit Workflow**
Redux Toolkit makes Redux easier by reducing boilerplate code. Here’s the basic workflow:

1. **Create a Slice (`createSlice`)** - Defines state and reducers.
2. **Setup Store (`configureStore`)** - Combines slices and creates a store.
3. **Provide Store (`Provider`)** - Wraps the app to make the store available.
4. **Use State & Dispatch (`useSelector` & `useDispatch`)** - Get data and update state.

---

### **3. Learning Redux Toolkit with a Simple Counter Example**

#### **Step 1: Install Redux Toolkit**
```sh
npm install @reduxjs/toolkit react-redux
```

#### **Step 2: Create a Slice**
Inside `redux/counterSlice.js`:
```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
```
✅ **What happens here?**
- `createSlice` creates a slice of state (like a module).
- It has `initialState` and `reducers` (functions to modify the state).
- The `reducers` update the state directly (Redux Toolkit uses Immer internally).

---

#### **Step 3: Setup the Store**
Inside `redux/store.js`:
```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```
✅ **What happens here?**
- `configureStore` sets up Redux in a structured way.
- All slices (reducers) are combined in `reducer`.

---

#### **Step 4: Provide the Store**
In `index.js` or `main.jsx`:
```js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```
✅ **What happens here?**
- `Provider` makes the Redux store available to the whole app.

---

#### **Step 5: Use Redux in a Component**
Inside `Counter.js`:
```js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
```
✅ **What happens here?**
- `useSelector` reads the state from Redux.
- `useDispatch` sends actions to update the state.

---

### **4. Key Redux Toolkit Terms**
- **Store**: Central place where all states are managed.
- **Slice**: A part of the store (like "counter", "user", "cart").
- **Reducer**: A function that modifies the state.
- **Action**: A command that tells the reducer what to do.
- **Dispatch**: A function to trigger an action.
- **Selector**: A function to get data from the store.

---

### **5. How Redux Toolkit is Different from `useContext`**
| Feature | `useContext` | Redux Toolkit |
|---------|-------------|--------------|
| **State Management** | Uses React's built-in `useContext` | Uses a centralized Redux store |
| **State Changes** | Uses `useState` or `useReducer` | Uses `createSlice` with reducers |
| **Performance** | Re-renders all components using the context | Optimized re-renders |
| **Best For** | Small apps | Medium to large apps |
| **Async Support** | Not built-in, needs extra code | Has built-in async support (`createAsyncThunk`) |

---
### **6. What to Learn Next?**
- Learn how `createAsyncThunk` handles API calls.
- Use Redux DevTools to debug state changes.
- Try middleware like `redux-persist` for saving state in localStorage.

---

🔹 **Summary**
- `useContext` is great for small apps, but Redux Toolkit is better for large apps with complex state.
- Redux Toolkit simplifies Redux with `createSlice` and `configureStore`.
- The workflow is **Slice → Store → Provider → useSelector/useDispatch**.


# 2. What is a "Slice" in Redux Toolkit?


### **What is a "Slice" in Redux Toolkit?**  
A **slice** in Redux Toolkit is a **small, self-contained piece of the global state** that includes:  
1. **State** (data for that feature)  
2. **Reducers** (functions to update that state)  
3. **Actions** (automatically generated to trigger reducers)  

✅ **Think of a slice like a “mini-store” for a specific part of your app's state.**  

---

### **🔹 Why is it Called a "Slice"?**  
Imagine your **Redux store is a big pizza** 🍕 (global state).  
Each **slice** of pizza represents a specific part of that state (e.g., a counter, user data, or cart items).  

| Slice Name | What It Manages |
|------------|----------------|
| `counterSlice` | Manages counter state (`count`) |
| `userSlice` | Manages user state (e.g., `name`, `email`) |
| `cartSlice` | Manages shopping cart items |

Each **slice** is a **portion** of the Redux store, making the app modular and easy to manage.

---

### **🔹 Example of a Slice (`counterSlice`)**
```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",  // Name of the slice
  initialState,      // Initial state for this slice
  reducers: {        // Functions to update state
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
    reset: (state) => { state.count = 0; }
  }
});

// Export actions
export const { increment, decrement, reset } = counterSlice.actions;

// Export reducer to be used in store
export default counterSlice.reducer;
```

✅ **Breaking it down:**  
- `name: "counter"` → This is the slice name.  
- `initialState: { count: 0 }` → This defines the initial value for this slice.  
- `reducers` → These are functions that update the state inside this slice.  
- `createSlice` **automatically creates actions** like `increment()`, `decrement()`, etc.

---

### **🔹 How Slices Fit into the Redux Store**
Once you create multiple slices, you **combine them in the store**:

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,  // One slice for counter state
    user: userReducer         // Another slice for user state
  }
});

export default store;
```

Now, you can **access and modify each slice separately** in your components.

---

### **🚀 Summary**
- **A slice is a small part of the Redux store that manages a specific piece of state.**
- **It includes state, reducers, and automatically generated actions.**
- **Slices make Redux Toolkit simpler and modular** because each feature (counter, user, cart) has its own state and logic.



# 3. How `createSlice` Generates Actions and Reducer Automatically

Great observation! You’re asking how **actions** and the **reducer** come into the picture when they are not explicitly defined in the object inside `createSlice`. Let’s break it down step by step.

---

### **🔹 How `createSlice` Generates Actions and Reducer Automatically**
When you use `createSlice()`, Redux Toolkit **automatically** creates:
1. **Actions** – Functions that return action objects (`type` and `payload`).
2. **Reducer** – A function that updates the state.

#### **Example of `createSlice`**
```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
    incrementByAmount: (state, action) => { state.count += action.payload; }
  }
});

// 🔹 Actions are automatically created!
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// 🔹 Reducer is automatically generated!
export default counterSlice.reducer;
```

---

### **🔹 What’s Happening Behind the Scenes?**
Let’s break it down into **three parts**:

#### **1️⃣ How Actions Are Created**
When you define `reducers` inside `createSlice`, Redux Toolkit automatically **creates actions** for each reducer function.

For example, the `increment` function inside `reducers` will **automatically** generate this action:

```js
{
  type: "counter/increment"
}
```
Similarly, the `incrementByAmount` reducer generates an action that expects a **payload**:
```js
{
  type: "counter/incrementByAmount",
  payload: 5
}
```
This means **you don’t need to manually define actions** anymore, Redux Toolkit does it for you.

#### **2️⃣ How the Reducer is Created**
Redux Toolkit automatically combines all reducer functions into a single **reducer function**.  

For example, behind the scenes, Redux Toolkit generates a function like this:
```js
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    case "counter/decrement":
      return { count: state.count - 1 };
    case "counter/incrementByAmount":
      return { count: state.count + action.payload };
    default:
      return state;
  }
};
```
Instead of writing this manually, `createSlice` generates it for us.

#### **3️⃣ How We Use Actions & Reducer**
After exporting them:
```js
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```
We can use them in our components like this:
```js
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
    </div>
  );
};
```
When `dispatch(increment())` is called, it:
1. **Triggers the action** `{ type: "counter/increment" }`
2. **Redux Toolkit finds the matching reducer**
3. **State updates automatically**

---

### **🔹 Why This is Useful?**
✅ **Less Boilerplate** – No need to manually write action creators & switch statements.  
✅ **Easier to Use** – Actions & reducers are bundled together in one slice.  
✅ **More Readable** – State logic is inside one file instead of spread across multiple files.  

---

### **🚀 Summary**
- `createSlice()` automatically **creates actions and a reducer** based on the `reducers` object.
- Actions are generated from function names (`increment`, `decrement`, etc.).
- The reducer is created behind the scenes and handles actions.
- We export actions and the reducer separately, then use them in components.

Would you like me to show how `createSlice` works with API calls (async actions)? 🚀


# 4. Why Do We Write `export default counterSlice.reducer;` but Import It as `counterReducer`?

Great question! Let's break it down step by step.

---

### **Why Do We Write `export default counterSlice.reducer;` but Import It as `counterReducer`?**

#### **1️⃣ How Export Works in JavaScript**
In `counterSlice.js`, we **export the reducer as the default export**:

```js
export default counterSlice.reducer;
```
This means **when we import this file, we can give it any name**.

#### **2️⃣ Importing the Default Export**
In `store.js`, we import it like this:
```js
import counterReducer from "./counterSlice";
```
- `counterReducer` is **just a variable name we chose**.
- We could have named it anything, like `counterSliceReducer`, and it would still work:
  ```js
  import counterSliceReducer from "./counterSlice";
  ```

#### **3️⃣ Why Do We Call It `counterReducer`?**
- This is a **naming convention**.
- Since `counterSlice.reducer` contains **only the reducer function**, we rename it to `counterReducer` to make it clear that it's the reducer.

---

### **🔹 What Happens in `store.js`?**
Inside `store.js`, we add the reducer to the store:

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Imported reducer

const store = configureStore({
  reducer: {
    counter: counterReducer, // Adding reducer to Redux store
  },
});

export default store;
```

**Explanation:**
- `counterReducer` is the reducer function.
- It is stored under the `counter` key in the Redux store.
- The final **global state** will look like this:
  ```js
  {
    counter: { count: 0 } // State managed by counterReducer
  }
  ```

---

### **🔹 Summary**
1. `export default counterSlice.reducer;` → Exports the reducer function.
2. `import counterReducer from "./counterSlice";` → Imports the default export (we can name it anything).
3. `counterReducer` is added to `configureStore` under the `counter` key.

Would you like to see how multiple slices (e.g., `userSlice`, `cartSlice`) work together in the store? 🚀

# 5. **`reducer`** and **`reducers`** are different in Redux Toolkit

Yes! **`reducer`** and **`reducers`** are different in Redux Toolkit, and their roles are separate. Let's break it down clearly.  

---

### **1️⃣ `reducers` (Inside `createSlice`)**
- It is **an object** inside `createSlice`, where we define multiple functions that modify the state.
- Each function inside `reducers` represents a way to update the slice's state.

#### **Example: `reducers` Inside `createSlice`**
```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {  // This contains multiple reducer functions
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; },
    incrementByAmount: (state, action) => { state.count += action.payload; }
  }
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;
```
✅ **Here, `reducers` is an object that holds multiple functions.**  
Each function inside `reducers` is called a **case reducer function** (e.g., `increment`, `decrement`, `incrementByAmount`).

---

### **2️⃣ `reducer` (Exported from `createSlice`)**
- It is **a single function** automatically generated by `createSlice`.
- This function takes the current state and an action, then decides how to update the state.
- It combines all the individual reducers from `reducers`.

#### **How `createSlice.reducer` Works**
Behind the scenes, Redux Toolkit generates something like this:
```js
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "counter/increment":
      return { ...state, count: state.count + 1 };
    case "counter/decrement":
      return { ...state, count: state.count - 1 };
    case "counter/incrementByAmount":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};
```
✅ **This is the `reducer` function that gets exported and used in the store.**

---

### **3️⃣ How `reducers` and `reducer` Work Together**
| Term | What it Does | Where is it Used? |
|------|-------------|-------------------|
| **`reducers`** | An object containing multiple functions that update state | Inside `createSlice({ reducers: { ... } })` |
| **`reducer`** | A single function that combines all reducers and updates the state | Exported from `createSlice` and used in `store.js` |

---

### **4️⃣ Where Are They Used?**
#### **🔹 `reducers` is Used Inside `createSlice`**
```js
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: { 
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; }
  }
});
```

#### **🔹 `reducer` is Exported and Used in `store.js`**
```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";  // Importing the exported reducer

const store = configureStore({
  reducer: {
    counter: counterReducer  // Adding reducer to the store
  }
});
```

---

### **🚀 Summary**
| Concept | Meaning |
|---------|---------|
| `reducers` | An object inside `createSlice` that contains multiple functions for updating the state |
| `reducer` | A single function generated by `createSlice` that combines all reducers and updates the state |
| `export default counterSlice.reducer;` | Exports the generated reducer function so it can be used in the store |
| `import counterReducer from "./counterSlice";` | Imports the reducer into `store.js` |

---

### **🎯 Final Answer:**
✅ **Yes, `reducers` (plural) and `reducer` (singular) are different.**  
- `reducers` contains multiple functions inside `createSlice`.  
- `reducer` is a single function created automatically and exported for use in `store.js`.  

Let me know if you need more clarity! 🚀

# 5. Best practices and guidelines when defining `initialState` in Redux Toolkit

Yes! There are some **best practices** and guidelines when defining `initialState` in Redux Toolkit, but there are **no strict rules**. You can define it in different ways based on your application's needs.

---

## **1️⃣ Best Practices for Defining `initialState`**
### ✅ **Use an Object for Complex State**
If your slice manages multiple values, it's best to use an **object** as the initial state.

```js
const initialState = {
  count: 0,
  loading: false,
  error: null
};
```
This keeps the state **organized** and **scalable**.

---

### ✅ **Use a Simple Value for a Single Piece of State**
If your slice only manages a single value, you can use **a number, string, or boolean** directly.

```js
const initialState = 0; // If the state is just a number
const initialState = ""; // If the state is just a string
const initialState = false; // If the state is a boolean
```
However, using an **object** is usually recommended to make it easier to extend later.

---

### ✅ **Define `initialState` Inside `createSlice`**
Instead of creating a separate variable, you can define `initialState` directly inside `createSlice`:

```js
const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },  // Defining state directly
  reducers: {
    increment: (state) => { state.count += 1; },
    decrement: (state) => { state.count -= 1; }
  }
});
```
This is **perfectly valid** and avoids extra variable definitions.

---

## **2️⃣ Common Mistakes to Avoid**
### ❌ **Using `null` Instead of a Proper Default Value**
Avoid setting `initialState` to `null`, as it can cause unexpected behavior:

```js
const initialState = null;  // ❌ Bad practice
```
Instead, always use a **valid default value** that represents the expected state.

---

### ❌ **Using an Undefined Initial State**
Never leave `initialState` undefined:

```js
const initialState; // ❌ This will cause an error
```
Always assign a value, even if it’s empty:

```js
const initialState = {};  // ✅ Safe approach
```

---

### ❌ **Using `const` When State Should Be Mutable**
Since Redux Toolkit uses **Immer**, you can directly mutate the state inside reducers. However, make sure your `initialState` is not **defined as `const` when modifying it directly**:

```js
const initialState = { count: 0 }; // ✅ OK

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => { 
      state.count += 1;  // ✅ Allowed because Immer handles immutability
    }
  }
});
```

---

## **3️⃣ Special Cases: Using Arrays or Fetching Initial State**
### ✅ **Using an Array as the Initial State**
If you're managing a list (like a to-do app), you can start with an empty array:

```js
const initialState = [];
```
Example:
```js
const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => { 
      state.push(action.payload); 
    }
  }
});
```

---

### ✅ **Fetching Initial State from Local Storage or an API**
If you need to **load state from local storage or an API**, you can do this:

```js
const initialState = JSON.parse(localStorage.getItem("cart")) || { items: [] };
```
Or with a function:

```js
const getInitialState = () => {
  return JSON.parse(localStorage.getItem("cart")) || { items: [] };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialState(),
  reducers: {
    addItem: (state, action) => { state.items.push(action.payload); }
  }
});
```

---

## **🚀 Summary: Rules & Best Practices for `initialState`**
| ✅ Do This | ❌ Avoid This |
|------------|-------------|
| Use an **object** for complex state | `initialState = null` (can cause bugs) |
| Use a **primitive value** if managing a single value | `initialState = undefined` (will throw errors) |
| Define `initialState` **inside** `createSlice` if simple | Making `initialState` immutable with `const` when modifying it |
| Use an **array** for lists | Using an object when only a single number/string is needed |
| Load from **local storage or API** if needed | Defining a dynamic initial state without a default value |

Would you like an example where `initialState` is loaded dynamically (like fetching from an API)? 🚀



## Look around yourself. 99.99% of the people will generally be: lazy, unfocused, random, non-process, non-systematic, non-improving, relying on past laurels, etc. You just need to be a bit better on these counts, and you will win The Game of Life. Hands Down.


### Top recruiters and industry breakdown
#### Prominent recruiters included Accenture Strategy (75 offers), Boston Consulting Group (25), TCS Management Consulting (24), American Express (20), Bain & Company (17), PwC (16), and McKinsey & Company (14).

#### A detailed sector-wise breakdown of the recruitment process is as follows:

#### Consulting (32 firms – 245 offers): Accenture ATCI, Accenture Strategy, Alvarez & Marsal, Arthur D. Little, Bain & Company, Boston Consulting Group, ConsultAdd Services, EY India, EY Parthenon India, EY Parthenon Singapore, GDi Partners, India PAC Consulting, Infosys Consulting, ISEG Foundation, Kearney, KPMG, LEK Consulting, McKinsey & Company, Monitor Deloitte, Oliver Wyman, Practus Advisors, PwC, Samagra Consulting, Showtime Consulting, Simon-Kucher & Partners, Strategy& India, Strategy& Middle East, Takshashila Consulting, TCS Management Consulting, Tech Trust - Consultadd Group, TransformationX, Vector Consulting.

#### IT Software/Analytics/Product Management (34 firms – 80 offers): Accordion, Adobe, Amagi Media Labs, Aurigo, BrowserStack, Capgemini, Capital One, ClearTax, Cloudfiles, Coforge, Cognizant, Cohesity, Cyware, e2open, Eightfold AI, EXL Digital, EXL Services, Gemini Solutions, Google, GyanSys Infotech, Kreditbee, KyN Hood, Microsoft, NetApp, Newgen Software, Oracle, Pine Labs, Salesforce, ThoughtSpot, Trianz, UKG, Vinculum, Vmock, Xoriant.

#### Finance/Banking/Investments (41 firms – 79 offers): Acuity Knowledge Partners, Ambit, ARGA Investment Management, Avendus Capital, Axis Bank, Bajaj Finserv, Bank of America, Barclays, BNP Paribas, Cholamandalam Finance, CIFDAQ, CitiBank, Coverfox, Credila, D.E. Shaw, Deutsche Bank, DSP Asset Manager, Edelweiss Alternatives, EY India Investment Banking, Faering Capital, Goldman Sachs, HSBC Bank, IDFC First Bank, IIFL Securities, IvyCap Ventures, JP Morgan Chase & Co., Kotak Mahindra Bank, Kotak Mahindra Capital (IB), L&T Finance, Manapuram Finance, NatWest Group, Navi, o3 Capital, Piramal Alternatives, Power Finance Corporation, Rothschild & Co., SBI Funds Management, Standard Chartered Bank, Trust Group, Universal Sompo, UTI AMC.

#### Ecommerce/Payments/Telecom/Logistics (19 firms – 70 offers): Airtel, Amazon, American Express, C-DOT, DTDC Express, Flipkart, Juspay, Myntra, National Payments Corporation of India, NoBroker, Nykaa, Ola, PhonePe, QuickSell, Swiggy, Tata Play, Tesco India, Visa, Zomato.

#### Manufacturing/Construction/Energy/Infrastructure (19 firms – 38 offers): Arcelor Mittal Nippon Steel, Arvind SmartSpaces, Asian Paints, Blueleaf Energy, Century Real Estate Holdings, Indian Oil Corporation, KPIT Technologies, Lodha Group, Lodha Ventures, ReNew Power, Rishi FIBC, Rubber King, Samsung Electronics, Scimplify, Sobha Realty, Sunrise Polymers, Suzlon Energy, Tata Steel, TKIL Industries.

#### FMCG/Retail (16 firms – 37 offers): AB InBev, Amul, Diageo, Fast Retailing, Hindustan Coca-Cola Beverages, Hindustan Unilever, ITC, Kraft Heinz, Marico, Mondelez, Olam Food Ingredients, Par Empire, Philip Morris International, Pidilite, Procter & Gamble, Wipro Consumer Care.

#### Conglomerates (8 firms – 23 offers): Adani Group, Aditya Birla Group, CK Birla Group, GMR, Mahindra Group, RPG Group, Tata Administrative Services, Vedanta.

#### Healthcare/Education (8 firms – 23 offers): Alkem Laboratories, Dr. Reddy's Laboratories, Haleon, Health City Cayman Islands, Optum, Sun Pharmaceuticals, IDF and IIMBx.

#### Professor Nishant Verma, Chairperson of Career Development Services, IIMB, remarked, “Despite being a challenging year for the job market around the world, IIM Bangalore conducted the process very efficiently. We are also glad to share that job offers made during the process have set a new benchmark both in terms of the number of offers made and the diversity of roles across sectors.”