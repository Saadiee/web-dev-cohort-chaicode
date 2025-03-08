# Full-Stack Project
ChaiCode fullstack project notes

### General Notes:
- use `npm init` to create a package.json file
- use **NodeMon** to monitor changes in nodesJs
- Don't import `.env` simply by import. instead use **dotenv** package
- To make sure only the frontend talks with server/backend we should use cors package. [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)


## Bring 3rd Party APIs/Libraries to the Frontend
- use `require`
- use `import` (add `type= "module"` to the package.json)
- `npm i -D <packageName>` installs package as **dev-dependency**


## ExpressJS
```js
import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// A sample server that listens at port 3000
```
- **Express** is the backend framework
- `get` is the request method that send something(data/HTML) to the client at the given url
```js 
app.get('/', (req, res) => { res.send('Hello World!') })
```
- Above code will display "Hello World!" on the url `localhost:3000/`
- port is usually stored in the `.env` file and imported form there.
- calback in `app.get()` is also called `controller`.
- We should store `controllers` and `routes` in different files and import them into `index.js`
```js
const port = process.env.PORT || 3000
// look for port in env file, if  not present use port 3000
// Best Practice
```
- **CORS** error is the most common error and should be resolved at backend. Use **npm corse** package to resolve this error.
- cors usually give porblem in local host but runs good in production.
```js
app.use(cors({
    // essential config options
    origin:"http://localhost:3000", // origin you want to give access
    methods:["GET","POST", "DELETE"] // methods you want to allow
    allowedHeaders:["Content-Type", "Authorization"]
    }))
```
- To accept JSON data from the client/frontend, use `app.use(express.json())`
- To accept data from url query, use `app.use(express.urlencoded({extended: true}))`
- **COMPLETE Boiler plate code**
```js
import express from "express"
import dotenv from "dotenv"
const app = express()
const port = 3000

dotenv.config();

app.use(cors({

    origin:"http://localhost:3000",
    methods:["GET","POST", "DELETE"],
    allowedHeaders:["Content-Type", "Authorization"]
    }))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Boiler plate code (index.js)
```


## Database
- We can directly communicate with DB but we use ORM to do that. ORM act as middle-man
- **Mongoose** is the ORM for MongoDB
- Mongoose sit on backend
- use `npm -i mongoose`
- store DB file in `./utlis` folder
- DB server should be near backend server
- in DB url remove everything after ....mongodeb.net/
- don't use special charcters in DB password. Use numbers and alphabets
- add you app name after that `/`
- Store db url in .env file
```js
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const db = () =>{
    mongoose.connect(process.env.MONGODB_URL) //returns pormise
.then(()=>{
    
})
.catch((err) => console.log(err, "Failed to connect to MongoDB"))
}

export default db;

// our goal is export function() from this file that connects db    
// (./utils/db.js)
```
- Now import `db` into index.js file
```js
import db from "./utils/db.js"

// ~ after ~
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

db();

// (index.js)
```

## Pre-planing
1. What to build? - Aunthentication System
2. Make Schema 
   - [name, email, password]
   - role: - User & Admin
   - isVerified? - true or false
   - password reset tokken
   - password reset tokken expiration time
   - verification token
   - createdAt

## Schema
- make `model` folder and make file name `User.model.js`
- import `mongoose` package
- make variable `userSchema`

```js
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: String,
    passwordResetToken: String,
    passwordResetTokenExpiration: Date,
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

export default User
```
- `const User = mongoose.model("User", userSchema)` when goes to mongoDB it will make `users` collection Add `s` at the end of collection name and lowercase first letter
- `timestamps: true` will add `createdAt` and `updatedAt` field to the schema

### Controller
- make `controller` folder and make file name `user.controller.js`
```js
const registerUser = async (req, res) => {
    res.send("registerd")
}

export {registerUser}
```

### Route
- make `routes` folder and make file name `user.route.js`
```js
import express from "express"
import {registerUser} from "../controllers/user.controller.js"

const router = express.Router()

router.get("/register", registerUser)

export default router

// boiler plate code
```
### Back to index.js
```js
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"

// import all routes
import userRoute from "./routes/user.route.js"

// after db connection

// user routes
app.use("/api/v1/user", userRoute)