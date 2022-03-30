import * as React from 'react';
//import {useAuth0} from "@auth0/auth0-react"
import { styled, createTheme, ThemeProvider,alpha  } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar'; 
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from "@mui/material/CardHeader"
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import TablePagination from '@mui/material/TablePagination';
import TableContainer from '@mui/material/TableContainer';
import List from '@mui/material/List';
//import Popper from '@mui/material/Popper';
//import AppBar from '@mui/material/AppBar';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './SideBar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import Title from './Title';
import axios from "axios"
import ImageList from '@mui/material/ImageList';
import ImageListItem from "@mui/material/ImageListItem"
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//import ProductImage from './ProductImage';
//import Products from './ProductsList';

import {auth} from "../firebase/firebase.config"

import {signOut,onAuthStateChanged} from "firebase/auth"
import { SettingsOverscanOutlined } from '@mui/icons-material';


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
 
];


const fetchURL = "https://api-rmwlookup.Soul2urfeet.com.pg/products";

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

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
    },
  },
}));


function preventDefault(event) {
  event.preventDefault();
}




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme({
  palette: {
    primary: {
      light: '#b73324',
      main: '#b73324',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#b73324',
      main: '#b73324',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function DashboardContent() {

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [productId, setProductId] = React.useState("id")
  const [productName,setProductName] = React.useState("Jervis Button Down Shirt")
  const [productDescription,setProductDescription] = React.useState("description")
  const [productColor,setProductColor] = React.useState("color")
  const [productImage,setProductImage] = React.useState("https://images.pexels.com/lib/api/pexels.png")
  const [productCode, setProductCode] = React.useState("code")
  const [productPrice, setProductPrice] = React.useState("price")
  const [foption, setFoption] = React.useState('');
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');


  const [productLists, setProducts] = React.useState([])
  const ProductsArrayList = []
  const [User, setUser] = React.useState([])
  const [open, setOpen] = React.useState(true);


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeFoption = (event) => {
    setFoption(event.target.value);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };



  const toggleDrawer = () => {
    setOpen(!open);
  };

  //const [Opening, setOpening] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
 

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   setOpening((previousOpen) => !previousOpen);
  // };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function getProductID(event){
    console.log("current target id", event.currentTarget.id)
    const ProductID = event.currentTarget.id
    const ProductName = event.currentTarget.cells[0].innerText
    const ProductDesciption = event.currentTarget.cells[1].innerText
    const ProductCode =  event.currentTarget.cells[2].innerText
    const ProductColor  = event.currentTarget.cells[3].innerText
    const ProductPrice  = event.currentTarget.cells[4].innerText
    const ProductPicture  = event.currentTarget.cells[5].innerText
   
  
    setProductId(ProductID)
    setProductName(ProductName)
    setProductDescription(ProductDesciption)
    setProductColor(ProductColor)
    setProductCode(ProductCode)
    setProductPrice(ProductPrice)
    setProductImage(ProductPicture)
  }
 const logout = async () => {
  await signOut(auth);
};


 function Buttons(){
   return (
   <Button onClick={logout}>Logout </Button>
   )
   }
   function Profile(){
    return (
    <Button > User Profile </Button>
    )
    }
  

const Users = [User, <Profile/>, <Buttons/>];

onAuthStateChanged(auth, (currentUser) => {
  try {
    if (currentUser) {
      setUser(currentUser.email);
    }else{
      console.log("user not existed")
    }
  } catch (error) {
    console.log(error)
  }
  })

React.useEffect(() => {

  const controller = new AbortController();
    const signal = controller.signal;
    try{
       axios
       .get(fetchURL,{params : {p : 0, s : 9}}, { signal: signal })
       .then(function (products) {
        console.log("response data",products.data);

        
        products.data.forEach(product =>{
        const Singleproduct = Object.assign({}, product)
        ProductsArrayList.push(Singleproduct)
        
      });
      setProducts(ProductsArrayList)
      })
      .catch(function (error) {
        console.log(error);
      })
    }catch(error){
      console.log(error)
    }
  
  
  
}, []);


 
  return (
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: '24px', // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                RMW Lookup
              </Typography>
              <Search>
	            <SearchIconWrapper>
                  <SearchIcon />
              </SearchIconWrapper>
             <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
             </Search>

              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton> 
              <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Dean Peter" src='' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
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
              {Users.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
                  
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              {mainListItems}
              <Divider sx={{ my: 1 }} />
              {secondaryListItems}
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxwidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                  <Container >
                          <Typography
                            component="h6"
                            variant="h6"
                            align="left"
                            color="theme.secondary"
                            gutterBottom
                          >
                            {productName}
                          </Typography>
                          <Typography component="p" align="left" variant="p">
                           {`Produce Code  ( ${productCode} )`}
                        </Typography>
                        <Typography component="p"  align="left" variant="p" sx={{fontWeight:800}}>
                           {`sales Price ( ${productPrice} )`}
                        </Typography>
                          <Typography variant="p" align="left" color="text.primary" component="p">
                            Quickly build an effective pricing table for your potential customers with
                            this layout. It&apos;s built with default MUI components with little
                            customization.
                          </Typography>
                            <ImageList sx={{ width: 500, height: 250 }} cols={7} rowHeight={50}>
                          {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                              <img
                                src={`${item.img}?w=100&h=100&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=100&h=100&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                              />
                            </ImageListItem>
                          ))}
                            </ImageList>
                  </Container>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                  <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                        <Card component="p" align="left" variant="p" >
                          <CardMedia
                          component="img"
                          
                          height={200}
                          // image={productImage}
                          maxwidth="lg"
                          src={`${productImage}?w=100&h=100&fit=crop&auto=format`}
                          alt="Chelsea-header"/>
                          {/* <CardHeader
                          title={productName}
                          subheader={productCode}/> */}
                        </Card>
                  </Paper>
                </Grid>
                <Grid item xs={12} 
                  sx={{ p: 2, 
                  display: 'flex', 
                  flexDirection: 'row', 
                  flexWrap : 'wrap', 
                  alignContent : 'flex-end', 
                  justifyContent :"flex-end"}}>
                    <Box sx={{ minWidth: 120, marginRight : 3, height : 10}}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Search By</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={foption}
                            label="search by"
                            onChange={handleChangeFoption}
                          >
                            <MenuItem value="pname">product name</MenuItem>
                            <MenuItem value="pcode">product code</MenuItem>
                          </Select>
                      </FormControl>
                    </Box>
                    <Stack  sx={{ width: 257, marginRight : 0, height:20}}>
                        <Autocomplete
                          value={value}
                          onChange={(event,newValue)=>{setValue(newValue)}}
                          inputValue={inputValue}
                          onInputChange={(event,newinputValue)=>{setInputValue(newinputValue)}}
                          freeSolo
                          id="free-solo-2-demo"
                          disableClearable
                          options={productLists.map((product) => 

                            {
                              if (foption === "pname") {
                                 return product[1]
                              }else{
                                return product[3]
                              }}
                              )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Search Product"
                              InputProps={{
                                ...params.InputProps,
                                type: 'search', 
                              }}
                            />
                          )}
                        />
                      </Stack>
                      
                </Grid>
                <Grid item xs={12}>
                  <Paper sx={{ display: 'flex', flexDirection: 'column'}}>
                    <React.Fragment>
                        <Typography>
                        <Title > Products </Title>
                          </Typography> 
                        <TableContainer sx={{height: 400  }}>
                        <Table size="small" sx = {{height : "max-content"}} stickyHeader aria-label="sticky table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Product Name</TableCell>
                              <TableCell>Product Description </TableCell>
                              <TableCell>Product Code</TableCell>
                              <TableCell>Product Color</TableCell>
                              
                              <TableCell align="right">Sales</TableCell>
                            </TableRow>
                            <TableRow>
                          
                            </TableRow>
                          </TableHead>
                          <TableBody>
                             { (inputValue) ? (
                             productLists.map((product) => {
                               if (inputValue===product[1] || inputValue===product[3]) {
                                return (
                                  <TableRow 
                                  id={product[3]}
                                  key={product[0]}
                                  onClick={getProductID}
                                  >
                                    <TableCell>{product[1]}</TableCell>
                                    <TableCell>{product[2]}</TableCell>
                                    <TableCell>{product[3]}</TableCell>
                                    <TableCell>{product[4]}</TableCell>
                                    <TableCell align="right">{`K ${product[6]}`}</TableCell>
                                    <TableCell sx = {{display:"none"}} align="right">{product[5]}</TableCell>
                                  </TableRow>
                                )
                               }
                              }) ) : (
                                  productLists.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => {
                                   return ( <TableRow 
                                     id={product[3]}
                                     key={product[0]}
                                     onClick={getProductID}
                                     >
                                       <TableCell>{product[1]}</TableCell>
                                       <TableCell>{product[2]}</TableCell>
                                       <TableCell>{product[3]}</TableCell>
                                       <TableCell>{product[4]}</TableCell>
                                       <TableCell align="right">{`K ${product[6]}`}</TableCell>
                                       <TableCell sx = {{display:"none"}} align="right">{product[5]}</TableCell>
                                     </TableRow>
                                    )
                                     } 
                                   )
                                  
                               )
                                    }
                          </TableBody>
                        </Table>
                        </TableContainer>
                        <TablePagination
                          rowsPerPageOptions={[5, 10, 25]}
                          component="div"
                          count={productLists.length}
                          page={page}
                          onPageChange={handleChangePage}
                          rowsPerPage={rowsPerPage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                        </React.Fragment>
                  </Paper>
                </Grid>
              </Grid>
              <Copyright sx={{ pt: 4 }} />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    
  );
}

export default function Dashboard() {
  return  <DashboardContent />;
}