import { NavLink } from "react-router-dom";
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import classes from "./NavLinks.module.scss"
import { links } from "./utils/Links";
const NavLinks = () => {
    
    return (
    <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
      <List role="menubar" orientation="horizontal">
       {
            links.map((link, i) => 
            <NavLink to={link.to} key={i} className={classes.links}>
                {link.name}
            </NavLink>
            )
        }
      </List>
    </Box>
    )
        
}

export default NavLinks
