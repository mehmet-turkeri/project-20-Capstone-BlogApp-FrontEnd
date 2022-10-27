import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import Clarusway from "../assets/cw.jpeg"
import { AuthContextProv } from '../contexts/AuthContext';


const Navbar = () => {
    const navigate = useNavigate()
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { currentUser, logout } = React.useContext(AuthContextProv)
    const pages = ['New Blog', "About"];
    const settings = currentUser ? ['Profile', 'MyBlogs', 'NewBlog', 'Logout'] : ['Login', 'Register'];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
        if (e.target.innerText === "New Blog") {
            navigate(`/newblog`)
        }
        else if (e.target.innerText === "About") {
            navigate(`/about`)
        }
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" color='info'>
            <Container maxWidth="xxl">
                <Toolbar disableGutters>
                    <img src={Clarusway} alt="Clarusway" width={30} sx={{ display: { xs: 'none', md: 'flex' }, marginRight: 5 }} />                    
                    <Typography
                        variant="h6"
                        noWrap
                        onClick={() => navigate('/')}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Noto Serif',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}                    
                    >
                        Mehmet Blog
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>                    
                    <Typography
                        variant="h5"
                        noWrap
                        onClick={() => navigate('/')}
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'Noto Serif',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            cursor: 'pointer'
                        }}
                    >
                        Mehmet Blog
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            onClick={() => navigate("/newblog")}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            New Blog
                        </Button><Button
                            onClick={() => navigate("/about")}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            About
                        </Button>
                    </Box>

                    {currentUser &&
                        <Typography variant="h5" component="h2" sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Noto Serif',
                            fontWeight: 700
                        }}>
                            {currentUser.first_name} {currentUser.last_name}
                        </Typography>
                    }
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title={currentUser ? currentUser.username : "Authentication"}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                {currentUser
                                    ?
                                    <Avatar alt={currentUser.username} src={currentUser.profile_pic} />
                                    :
                                    <Avatar alt="Anonymous User" src="/static/images/avatar/2.jpg" />
                                }
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px', fontFamily: 'Noto Serif' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    {
                                        setting === "Logout"
                                            ?
                                            <Typography onClick={() => logout(navigate)} textAlign="center">{setting}</Typography>
                                            :
                                            <Typography onClick={() => navigate(`/${(setting).toLocaleLowerCase()}`)} textAlign="center">{setting}</Typography>
                                    }
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;

