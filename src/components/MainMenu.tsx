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
    fontSize: '40px',
  },
  logo: {
    padding: '0'
  },
  link: {
    textDecoration: 'none',
  },
  text: {
    color: 'white',
  }
};


export default class MainMenu extends React.Component<MainMenuProps, MainMenuStats> {
  render() {
    return <div style={ this.props.externalStyles }>
      <List component='nav' style={styles.menu}>
        <Link to='/' style={styles.link}>
          <ListItem button >
            <img style={styles.logo} src='../../assets/Easygraph.png' alt='logo' width='104px' height='62px'/>
          </ListItem>
        </Link>
        <Link to='bargraph' style={styles.link}>
          <ListItem button >
            <ListItemIcon><InsertChart style={styles.icon}/></ListItemIcon>
            <ListItemText disableTypography primary={
              <Typography style={styles.text}>Histogram</Typography>
            }></ListItemText>
          </ListItem>
        </Link>
        <Link to='areagraph' style={styles.link}>
          <ListItem button >
            <ListItemIcon><PieChart style={styles.icon}/></ListItemIcon>
            <ListItemText disableTypography primary={
              <Typography style={styles.text}>Pie Chart</Typography>
            }></ListItemText>
          </ListItem>
        </Link>
        <Link to='linegraph' style={styles.link}>
          <ListItem button  >
            <ListItemIcon><ShowChart style={styles.icon}/></ListItemIcon>
            <ListItemText disableTypography primary={
              <Typography style={styles.text}>Line Graph</Typography>
            }></ListItemText>
          </ListItem>
        </Link>
        <Link to='piegraph' style={styles.link}>
          <ListItem button  >
            <ListItemIcon><MultilineChart style={styles.icon}/></ListItemIcon>
            <ListItemText disableTypography primary={
              <Typography style={styles.text}>Others</Typography>
            }></ListItemText>
          </ListItem>
        </Link>
        <Link to='about' style={styles.link}>
          <ListItem button><Typography style={styles.text}>ABOUT</Typography></ListItem>
        </Link>
      </List>
  </div>;
  }
}