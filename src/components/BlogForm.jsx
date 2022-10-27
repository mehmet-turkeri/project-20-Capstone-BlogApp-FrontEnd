import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { BlogDataContext } from '../contexts/BlogContext';

const BlogForm = ({ handleChange, handleSubmit, posts, buttonInnerText }) => {
    const { category, loadingCategory } = useContext(BlogDataContext)

    if (loadingCategory) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <Stack spacing={3} direction='column' >
                <TextField
                    label='Title'
                    type='text'
                    name='title'
                    value={posts.title}
                    id="outlined-size-normal"
                    required
                    onChange={handleChange}
                />
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Categories</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        // value={posts.category}
                        name='category'
                        defaultValue=""
                        value={posts.category}
                        label="Categories"
                        required
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>Categories</em>
                        </MenuItem>
                        {category?.map((item, index) => (
                            <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    label='Image URL'
                    type='url'
                    name='image'
                    value={posts.image}
                    id="outlined-size-normal"
                    onChange={handleChange}
                    required
                />
                <TextField
                    label='Content'
                    name='content'
                    value={posts.content}
                    multiline
                    rows={6}
                    maxRows={18}
                    required
                    onChange={handleChange}
                />
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="status">Status</InputLabel>
                    <Select
                        labelId="status"
                        id="status"
                        name='status'
                        value={posts.status}
                        defaultValue=""
                        // value={posts.status}
                        label="Status"
                        required
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>Status</em>
                        </MenuItem>
                        <MenuItem value="d">Draft</MenuItem>
                        <MenuItem value="p">Published</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    variant='contained'
                    type='submit'
                    value='submit'
                >{buttonInnerText}</Button>
            </Stack>
        </form>
    )
}

export default BlogForm