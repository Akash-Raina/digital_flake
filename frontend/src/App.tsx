import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { Roles } from "./pages/Roles"
import { Users } from "./pages/Users"
import { CreateUser } from "./pages/CreateUser"

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/signup" element = {<Signup/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/" element = {<Home/>}/>
          <Route path="/roles" element = {<Roles/>}/>
          <Route path="/users" element = {<Users/>}/>
          <Route path="/create" element = {<CreateUser/>}/>
        </Routes>
    </Router>
  )
}

export default App
