import { Box, Button, Typography } from '@mui/material';
import BlogCard from '../components/BlogCard';
import Loading from '../assets/loading.gif'
import { useContext, useEffect, useState } from 'react';
import { BlogDataContext } from '../contexts/BlogContext';

const Dashboard = () => {
    const { blogPosts, getBlogPosts, setPage, page } = useContext(BlogDataContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getBlogPosts()
        setIsLoading(false)
    }, [page])

    
    if (isLoading) {
        return (
            <div style={{ backgroundColor: 'black', height: '93.35vh', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
                <img src={Loading} alt="Loading..." width={'800'} />
            </div>
        )
    }
    

    return (
        <Box sx={{ textAlign: 'center', fontFamily: 'Girassol, cursive', display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }} >
            <Typography variant='h3' sx={{ fontFamily: 'Girassol, cursive' }} >-Dashboard-</Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4, mt: 4, textAlign: 'left' }}>
                {blogPosts?.map((post, index) => (
                    <BlogCard blogData={post} key={index} />
                ))}                
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '60%', mx: 'auto', my: 5 }}>
                <Button onClick={() => setPage(page > 6 ? (page - 6) : (page))} variant="contained" color="secondary" startIcon={null}>View Less</Button>
                <Button onClick={() => setPage(page + 6)} variant="contained" color="warning" startIcon={null}>View More</Button>
            </Box>
        </Box >
    );
}
export default Dashboard