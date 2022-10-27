import { Button, Box, CardMedia, Typography, TextField, InputAdornment } from '@mui/material'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContextProv } from '../contexts/AuthContext';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import AccountCircle from '@mui/icons-material/AccountCircle'
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import LinkTwoToneIcon from '@mui/icons-material/LinkTwoTone';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';

const Profile = () => {
    const [showForm, setShowForm] = useState(false)
    const { currentUser, updateUser } = useContext(AuthContextProv)
    const [updateUserInfo, setUpdateUserInfo] = useState(currentUser)

    const navigate = useNavigate()

    const handleChange = (e) => {        
        const { name, value } = e.target
        setUpdateUserInfo({ ...updateUserInfo, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(updateUserInfo);
        updateUser(updateUserInfo, currentUser.id, navigate)
        setUpdateUserInfo("")
        setShowForm(false)
    }
    return (
        <Box sx={{ width: { xs: "80%", sm: "70%", md: "60%" }, mx: 'auto', my: '1rem' }}>
            <Box sx={{
                display: 'flex', flexDirection: { xs: "column-reverse", sm: 'column-reverse', md: 'row' }, justifyContent: { xs: 'center', md: 'space-evenly' }, alignContent: 'center', gap: 5, backgroundColor: 'bisque'
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', gap: 3 }}>
                    <Typography component="h2" variant="h4" >{currentUser.username}</Typography>
                    <Typography component="h2" variant="h4" >{currentUser.first_name} {currentUser.last_name}</Typography>
                    <Typography component="h2" variant="h6">{currentUser.biography}</Typography>
                    <Typography component="h2" variant="h6">{currentUser.email}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', gap: 3 }}>
                    <CardMedia
                        component="img"
                        alt={currentUser.usrname}
                        height="240"
                        image={currentUser.profile_pic}
                        sx={{ borderRadius: '50%', maxWidth: { xs: "200px", sm: "250px", md: "250px" } }}
                    />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignContent: 'center', my: '10rem', gap: '2rem', height: 600 }}>
                <Box>
                    <Typography component="span" variant="p" sx={{ mx: 2 }}>For Update Your User Information , Click Here</Typography>
                    <Button variant="contained" color="success" size="medium" startIcon={<UpgradeIcon />} onClick={() => setShowForm(true)}>Open Form</Button>
                </Box>
                {
                    showForm
                    &&
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignContent: 'center', gap: '2rem' }}>
                        <TextField
                            label='User Name'
                            variant='outlined'
                            id='username'
                            type='text'
                            name='username'
                            value={updateUserInfo.username}
                            onChange={handleChange}
                            placeholder='User Name'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start' >
                                        <BadgeTwoToneIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            label='First Name'
                            variant='outlined'
                            id='firstName'
                            type='text'
                            name='first_name'
                            placeholder='First Name'
                            value={updateUserInfo.first_name}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start' >
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            label='Last Name'
                            variant='outlined'
                            id='lastName'
                            type='text'
                            name='last_name'
                            placeholder='Last Name'
                            value={updateUserInfo.last_name}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start' >
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            label='Profile Picture'
                            variant='outlined'
                            id='profile_pic'
                            type='url'
                            name='profile_pic'
                            placeholder='Profile Picture'
                            value={updateUserInfo.profile_pic}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start' >
                                        <LinkTwoToneIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            label='E-mail'
                            variant='outlined'
                            id='email'
                            type='email'
                            name='email'
                            placeholder='e-mail'
                            value={updateUserInfo.email}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start' >
                                        <AlternateEmailSharpIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                        <TextField
                            label='Biography'
                            name='biography'
                            value={updateUserInfo.biography}
                            multiline
                            rows={6}
                            // maxRows={18}
                            onChange={handleChange}
                            variant='outlined'
                            id='biography'
                            placeholder='Biography'
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start' />
                                )
                            }}
                        />

                        <Button variant='contained' type='submit' value='Submit' >Update</Button>
                    </form>
                }
            </Box>
        </Box>
    )
}

export default Profile