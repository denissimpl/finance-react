import { useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import Copyright from './components/Copyright';
import { useSubmit } from './hooks/useSubmitForm';

export interface IFormProps{
  text: {
      header: string,
      button: string
  },
  isLogin: boolean
}



const defaultTheme = createTheme();

const AuthForm = (props: IFormProps) => {
  const [nameValue, setNameValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")

  const clearInputs = () => {
    setNameValue("")
    setPasswordValue("")
  }
  
  const handleSubmit = useSubmit(props, nameValue, passwordValue, clearInputs)

  return (
    
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {props.text.header}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={(newValue) => {
                setNameValue(newValue.target.value);
              }}
              value={nameValue}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={(newValue) => {
                setPasswordValue(newValue.target.value);
              }}
              value={passwordValue}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 , height: "60px"}}
            >
              {props.text.button}
            </Button>
            {
              props.isLogin ?
              <Grid container>
                <Grid item>
                  {"Нет аккаунта? "}
                    <NavLink to="/register" end>
                    Регистрация
                    </NavLink>
                </Grid>
              </Grid>:
              null
            }
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 4, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default AuthForm