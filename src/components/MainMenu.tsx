import * as React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon, Typography } from '@material-ui/core';
import { InsertChart, MultilineChart, PieChart, ShowChart } from '@material-ui/icons';


export interface MainMenuProps {
  externalStyles?: React.CSSProperties;
}
interface MainMenuStats {}

const styles = {
  menu: {
    background: '#53B97C'
  },
  button: {
    marginRight: '0',
    width: 'fit-content'
  },
  icon: {
    color: 'white',
    margin: '10px 0 0 25px',
    fontSize: '50px',
  },
  logo: {
    padding: '0'
  },
  link: {
    textDecoration: 'none',
  },
  text: {
    fontSize: '26px',
    color: 'white',
    marginLeft: '10px'
  }
};


export default class MainMenu extends React.Component<MainMenuProps, MainMenuStats> {
  render() {
    return <div style={ this.props.externalStyles }>
      <List component='nav' style={styles.menu}>
        <Link to='/'>
          <ListItem button >
            <img style={styles.logo} src='../../assets/Easygraph.png' alt='logo' width='104px' height='62px'/>
          </ListItem>
        </Link>
        <Link to='bargraph'>
          <ListItem button >
            <ListItemIcon >
              <PieChart color='action' style={styles.icon}/>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to='areagraph'>
          <ListItem button  >
            <ListItemIcon >
              <InsertChart color='primary' style={styles.icon}/>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to='linegraph'>
          <ListItem button  >
            <ListItemIcon >
              <ShowChart color='error' style={styles.icon}/>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to='piegraph'>
          <ListItem button  >
            <ListItemIcon >
              <MultilineChart color='secondary' style={styles.icon}/>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to='about' style={styles.link}>
          <ListItem button >
            <Typography style={styles.text}>ABOUT</Typography>
          </ListItem>
        </Link>
      </List>
  </div>;
  }
}