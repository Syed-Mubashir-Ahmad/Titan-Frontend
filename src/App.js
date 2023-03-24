import React from 'react';
import Typography from '@mui/material/Typography';
import SignInSide from './Components/SignInSide';
import SignUp from './Components/SignUp';
import Users from './Components/Users';
import ForgotPassword from './Components/ForgotPassword'
import { createTheme, ThemeProvider } from '@mui/material';
import UserModal from './Components/CreateUserModal';
import Roles from './Components/Roles';
import Profile from './Components/Profile';
import Permission from './Components/Permission';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
  } from "react-router-dom";


const App = () => {
    return(
      
        <>
        {/* <SignUp/> */}
      <Router>
        <Routes>
          {/* <Route exact path="/" component={Home} /> */}

          <Route path="/SignUp" element={<SignUp/>} />

          <Route path="/SignInSide" element={<SignInSide/>} />

          <Route path="/ForgotPassword" element={<ForgotPassword/>} />

          <Route path="/Users" element={<Users/>} />

          <Route path="/UserModal" element={<UserModal/>} />

          <Route path="/Roles" element={<Roles/>} />

          <Route path="/Permission" element={<Permission/>} />

          <Route path="/Profile" element={<Profile/>} />

          <Route path="/" element={<Navigate replace to="/SignUp" />} />
        </Routes>
      </Router>
    </>
    );
}

export default App;