import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './MainMenu.css';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/fontawesome-free-solid';
import { List, ListItem, ListItemIcon, ListItemText, Paper } from '@material-ui/core';

interface MainMenuProps {}
interface MainMenuStats {}


export default class MainMenu extends React.Component<MainMenuProps, MainMenuStats> {
  render() {
    return <Paper>
      <List component='nav'>
        <ListItem button>
          <Link to='/'>LOGO</Link>
        </ListItem>
        <ListItem button>
          <Link to='bargraph'><FontAwesomeIcon icon={fa.faChartBar} size='3x' /></Link>
        </ListItem>
        <ListItem button>
          <Link to='bargraph'><FontAwesomeIcon icon={fa.faChartArea} size='3x' /></Link>
        </ListItem>
        <ListItem button>
          <Link to='bargraph'><FontAwesomeIcon icon={fa.faChartLine} size='3x' /></Link>
        </ListItem>
        <ListItem button>
          <Link to='bargraph'><FontAwesomeIcon icon={fa.faChartPie} size='3x' /></Link>
        </ListItem>
        <ListItem button>
          <Link to='about'><ListItemText primary='ABOUT'/></Link>
        </ListItem>
      </List>
  </Paper>;
  }
}