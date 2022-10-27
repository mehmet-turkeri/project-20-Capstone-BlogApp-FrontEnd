import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import { useNavigate } from 'react-router';
import { AuthContextProv } from '../contexts/AuthContext';



export default function BlogCard({ blogData }) {
    const navigate = useNavigate();

    const { currentUser } = React.useContext(AuthContextProv)


    const handleClick = (slug) => {
        navigate(`/details/${slug}`, { state: { slug } })
    }    
    return (
        <Card sx={{ maxWidth: 345, width: 350, height: 470, position: "relative" }}>
            <div onClick={() => handleClick(blogData.slug)} style={{ cursor: 'pointer' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={blogData.image}
                    alt={blogData.title}
                />
                <CardContent sx={{ bgcolor: '#81abc2', height: 120 }}>
                    <Typography variant='h6'>{blogData.title}</Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: '4',
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        {blogData.content}
                    </Typography>
                </CardContent>
            </div>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: green[500] }} aria-label="blog">
                        {((blogData.author).slice(0, 1)).toUpperCase()}
                    </Avatar>
                }
                title={blogData.author.toUpperCase()}
                subheader={(new Date(blogData.published_date).toUTCString()).slice(0, 16)}
            />
            <CardActions disableSpacing sx={{ position: "absolute", bottom: "5px", left: "5px" }}>
                <IconButton aria-label="like" sx={{ color: (blogData.post_like?.filter((like) => like.user_id === currentUser.id)[0]?.user_id) && "red" }}>
                    <FavoriteIcon />
                    <Typography sx={{ ml: 1 }} >
                        {blogData.like_count}
                    </Typography>
                </IconButton>
                <IconButton aria-label="view">
                    <VisibilityTwoToneIcon />
                    <Typography sx={{ ml: 1 }}>
                        {blogData.post_view_count}
                    </Typography>
                </IconButton>
                <IconButton aria-label="comment">
                    <ChatBubbleOutlineOutlinedIcon />
                    <Typography sx={{ ml: 1 }}>
                        {blogData.comment_count}
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    );
}