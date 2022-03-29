import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WomanIcon from '@mui/icons-material/Woman';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import ManIcon from '@mui/icons-material/Man';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const mainListItems = (
  <ThemeProvider theme={mdTheme}>
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon color='primary'/>
        <Switch {...label} defaultChecked />
      </ListItemIcon>
      <ListItemText primary="All Products" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon color='primary' />
        <Switch {...label} disabled  />
      </ListItemIcon>
      
      <ListItemText primary="Top Products" />
     
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ManIcon color='primary' />
        <Switch {...label} disabled  />
      </ListItemIcon>
      <ListItemText primary="Mens Ware" />
     
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <WomanIcon color='primary' />
        <Switch {...label} disabled />
      </ListItemIcon>
      <ListItemText primary="Womens Ware" />
      
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon  color='primary'/>
        <Switch {...label} disabled />
      </ListItemIcon>
      <ListItemText primary="New Arrivals" />
      
    </ListItemButton>
  </React.Fragment>
  </ThemeProvider>
);

export const secondaryListItems = (
  <ThemeProvider theme={mdTheme}>
  <React.Fragment>
    <ListSubheader component="div" inset>
      Locations
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <FmdGoodIcon color='primary' />
      </ListItemIcon>
      <ListItemText primary="Port Moresby" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FmdGoodIcon  color='primary'/>
      </ListItemIcon>
      <ListItemText primary="Lae" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FmdGoodIcon color='primary'/>
      </ListItemIcon>
      <ListItemText primary="Goroka" />
    </ListItemButton>
  </React.Fragment>
  </ThemeProvider>
);