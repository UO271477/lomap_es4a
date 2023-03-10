import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Navigator from '../Navbar/Navigator';
import { click } from '@testing-library/user-event/dist/click';
import ReactDOM from 'react-dom/client';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    }
  },
}));



class PrimarySearchAppBar extends React.Component {
  constructor(props:any){
    super(props);
    
    
  }
  isOpen=false
  
  clickMenu(){
    this.isOpen=!this.isOpen
    console.log(this.isOpen);
    this.forceUpdate();
  }
  render(){
    console.log("renderizando")
    return (
      
      <Box >
        
        <Box >
        <AppBar position="static" style={{ background: '#101F33' }}>
          <Toolbar>
          <IconButton 
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => { this.clickMenu(); }}
            >
              <MenuIcon />
            </IconButton>
            
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Usuario
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                
                aria-haspopup="true"
                
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            
            
          </Toolbar>
        </AppBar></Box>
        <Box sx={{ gridArea: 'nav'}}><Navigator variant={"temporary"} open={this.isOpen}/></Box>;
      </Box>

    );
    
  }
}
/**
 * <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => { console.log('pulsado') }}
          >
            <MenuIcon />
          </IconButton>
 */
export default PrimarySearchAppBar;