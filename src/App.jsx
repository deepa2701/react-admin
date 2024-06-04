
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Layout from './components/layout/Layout'

import { BrowserRouter, Route, Routes,useNavigate,Navigate} from 'react-router-dom'
import UserList from './components/pages/user/UserList'
import ListJackpot from './components/pages/jackpot/ListJackpot'
import CreateJackpot from './components/pages/jackpot/CreateJackpot'
import UserDetails from './components/pages/user/UserDetails'
import { List } from '@mui/material'
import Example from './components/pages/Example'
function App() {
 
  return (
    <>
    <div className="vertical-layout vertical-menu-modern  navbar-floating footer-static  " data-open="click" data-menu="vertical-menu-modern" data-col="">
   {/* <Header/>
   <Sidebar/>
   <Dashboard/>
    */}

<BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={
            <Protected>
              <Dashboard />
            </Protected>
          } />
          <Route path='/userlist' element={
            <Protected>
              <UserList />
            </Protected>
          } />

          <Route path='/userdetails' element={
            <Protected>
              <UserDetails />
            </Protected>
          } />


          <Route path='/create-jackpot' element={
            <Protected>
              <CreateJackpot />
            </Protected>
          } />

          <Route path='/list-jackpot' element={
            <Protected>
              <ListJackpot />
            </Protected>
          } />


<Route path='/example' element={
            <Protected>
              <Example />
            </Protected>
          } />

        </Route>

        
        <Route path='/login' element={
          <Public>
            <Login />
          </Public>
        } />
        <Route path='/register' element={
          <Public>
            <Register />
          </Public>
        } />
      </Routes>
    </BrowserRouter>
   {/* <Login/> */}
   {/* <Register/> */}


   
    </div>
    </>
  )
}
const isLogin = () =>!!localStorage.getItem("isAuth");

// console.log("dddd",isLogin)
const Protected = ({ children }) => {
  return isLogin() ? children : <Navigate to='/login' />;
}
const Public = ({ children }) => {
  return isLogin() ? <Navigate to='/' /> : children;
}
export default App
