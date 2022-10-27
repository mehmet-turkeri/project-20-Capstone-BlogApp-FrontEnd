import { Grid } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BlogForm from '../components/BlogForm'
import { AuthContextProv } from '../contexts/AuthContext'
import { BlogDataContext } from '../contexts/BlogContext'

const UpdateBlog = () => {
    const { state } = useLocation()
    const [updateBlog, setUpdateBlog] = useState(state.blogDetail)
    const { currentUser } = useContext(AuthContextProv)
    const { updatePost, getCategories } = useContext(BlogDataContext)
    const navigate = useNavigate()
    const submitButtonInnerContent = 'Update Blog Post';
    const handleChange = (e) => {        
        const { name, value } = e.target
        setUpdateBlog({ ...updateBlog, [name]: value })
        console.log(name, value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updatePost(state.blogDetail.slug, navigate, updateBlog)
        console.log(updateBlog);
        setUpdateBlog("")
    }
    console.log(updateBlog);
    console.log(state)
    useEffect(() => {
        getCategories()
    }, [])
    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ maxHeight: '100vh', marginTop: '10px' }}
        >
            <Grid item width={'30%'}>
                <BlogForm handleChange={handleChange} handleSubmit={handleSubmit} posts={updateBlog} buttonInnerText={submitButtonInnerContent} />
            </Grid>
        </Grid>
    )
}

export default UpdateBlog
