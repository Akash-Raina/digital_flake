import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { Roles } from "./pages/Roles"
import { Users } from "./pages/Users"
import { CreateUser } from "./pages/CreateUser"
import { EditUser } from "./pages/EditUser"
import { AddRole } from "./pages/AddRole"
import { EditRole } from "./pages/EditRole"
import ResetPassword from "./pages/ResetPassword"
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
          <Route path="/user/edit/:id" element = {<EditUser/>}/>
          <Route path="/role/add" element = {<AddRole/>}/>
          <Route path="/role/edit/:id" element = {<EditRole/>}/>
          <Route path= "/admin/reset-password/:token" element = {<ResetPassword/>}/>
        </Routes>
    </Router>
  )
}

export default App
