import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavLinks from './Links/NavLinks';

import AuthMenu from './Auth/AuthMenu';

const Header = () => {
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Finance
                    </Typography>
                    <NavLinks />
                    <AuthMenu />
                    
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header