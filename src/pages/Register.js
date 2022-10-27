import AccountCircle from '@mui/icons-material/AccountCircle'
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import KeySharpIcon from '@mui/icons-material/KeySharp';
import { Grid, Stack, TextField, InputAdornment, Button, Box } from '@mui/material'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom'
import { AuthContextProv } from '../contexts/AuthContext';
import { useContext } from 'react';



const Register = () => {
    const navigate = useNavigate()
    const { createUser } = useContext(AuthContextProv)
    return (        
        <Grid container>
            <Grid item xs={0} md={8} style={{ background: "url('https://picsum.photos/800/1200') no-repeat center", backgroundSize: "100%" }}>
            </Grid>
            <Grid item xs={12} md={4} sx={{ backgroundColor: 'whitesmoke', padding: '2rem' }}>
                <Box style={{ textAlign: 'center', mb: 2 }}>                    
                    <h2>- Register -</h2>
                </Box>
                <Formik
                    initialValues={{ username: '', firstName: '', lastName: '', email: '', biography: '', password: '', password1: '' }}
                    validationSchema={Yup.object().shape({
                        username: Yup.string().max(25, 'You must enter a maximum of 25 characters').required('User Name information must be filled'),
                        firstName: Yup.string().max(25, 'You must enter a maximum of 25 characters').required('First Name information must be filled'),
                        lastName: Yup.string().max(25, 'You must enter a maximum of 25 characters').required('Last Name information must be filled'),
                        email: Yup.string().email('Please enter a valid e-mail address').required('e-mail information must be filled').matches(/([\w._%+-]+@[\w.-]+\.[a-zA-Z]{0,4})/, 'Such as : asdf@dfgv.com'),                        
                        password: Yup.string().min(8).max(16).required('Password information must be filled'),
                        password1: Yup.string().min(8).max(16).required('Password information must be filled')
                    })
                    }
                    onSubmit={(values, action) => {
                        const userInfo = {
                            "username": values.username,
                            "email": values.email,
                            "first_name": values.firstName,
                            "last_name": values.lastName,                            
                            "biography": values.biography,
                            "password": values.password,
                            "password1": values.password1
                        }
                        
                        createUser(userInfo, navigate);
                        action.resetForm();
                        action.setSubmitting(false);
                    }}
                >
                    {({ values, handleChange, errors, touched, handleBlur }) => (
                        <Form>
                            <Stack spacing={4} direction='column' >
                                <TextField
                                    label='User Name'
                                    variant='outlined'
                                    id='username'
                                    type='text'
                                    name='username'
                                    value={values.username}
                                    onChange={handleChange}
                                    placeholder='User Name'
                                    onBlur={handleBlur}
                                    helperText={touched.username && errors.username}
                                    error={touched.username && Boolean(errors.username)}
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
                                    name='firstName'
                                    placeholder='First Name'
                                    value={values.firstName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.firstName && errors.firstName}
                                    error={touched.firstName && Boolean(errors.firstName)}
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
                                    name='lastName'
                                    placeholder='Last Name'
                                    value={values.lastName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.lastName && errors.lastName}
                                    error={touched.lastName && Boolean(errors.lastName)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start' >
                                                <AccountCircle />
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
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    helperText={touched.email && errors.email}
                                    error={touched.email && Boolean(errors.email)}
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
                                    value={values.biography}
                                    multiline
                                    rows={6}
                                    maxRows={18}
                                    onChange={handleChange}
                                    variant='outlined'
                                    id='biography'
                                    placeholder='Biography'
                                    onBlur={handleBlur}
                                    helperText={touched.biography && errors.biography}
                                    error={touched.email && Boolean(errors.biography)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start' >
                                                {/* <SettingsAccessibilityIcon /> */}
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <TextField
                                    label='Password'
                                    type='password'
                                    variant='outlined'
                                    value={values.password}
                                    name='password'
                                    onChange={handleChange}
                                    placeholder='Password'
                                    onBlur={handleBlur}
                                    helperText={touched.password && errors.password}
                                    error={touched.password && Boolean(errors.password)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start' >
                                                <KeySharpIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <TextField
                                    label='Password Again'
                                    type='password'
                                    variant='outlined'
                                    value={values.password1}
                                    name='password1'
                                    onChange={handleChange}
                                    placeholder='Password'
                                    onBlur={handleBlur}
                                    helperText={touched.password1 && errors.password1}
                                    error={touched.password1 && Boolean(errors.password1)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start' >
                                                <KeySharpIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                <Button variant='contained' type='submit' value='Submit' >Register</Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>
            </Grid>
        </Grid>
    )
}

export default Register