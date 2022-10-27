import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import About from '../pages/About';
import BlogDetails from '../pages/Details';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import NewBlog from '../pages/NewBlog';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import UpdateBlog from '../pages/UpdateBlog';
import UsersBlogs from '../pages/UsersBlogs';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/about' element={<About />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/newblog' element={<PrivateRouter />}>
                    <Route path='' element={<NewBlog />} />
                </Route>
                <Route path='/myblogs' element={<PrivateRouter />}>
                    <Route path='' element={<UsersBlogs />} />
                </Route>
                <Route path='/details/:str' element={<PrivateRouter />}>
                    <Route path='' element={<BlogDetails />} />
                </Route>
                <Route path='/update/:str' element={<PrivateRouter />}>
                    <Route path='' element={<UpdateBlog />} />
                </Route>
                <Route path='/profile' element={<PrivateRouter />}>
                    <Route path='' element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter