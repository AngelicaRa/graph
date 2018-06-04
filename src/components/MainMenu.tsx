import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './MainMenu.css';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/fontawesome-free-solid';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

interface MainMenuProps {}
interface MainMenuStats {}


export default class MainMenu extends React.Component<MainMenuProps, MainMenuStats> {
  render() {
    return <React.Fragment>
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
          <ListItemText primary='ABOUT'/>
        </ListItem>
      </List>
    {/* <ul className={styles.mainMenuList}>
      <li>
        <Link to='/' ><h3>LOGO</h3></Link>
      </li>
      <li>
        <Link to='bargraph'><FontAwesomeIcon icon={fa.faChartBar} className={styles.mainMenuListItem}  size='3x' /></Link>
      </li>
      <li>
        <FontAwesomeIcon icon={fa.faChartArea} className={styles.mainMenuListItem}  size='3x' />
      </li>
      <li>
        <FontAwesomeIcon icon={fa.faChartLine} className={styles.mainMenuListItem}  size='3x' />
      </li>
      <li>
        <FontAwesomeIcon icon={fa.faChartPie} className={styles.mainMenuListItem}  size='3x' />
      </li>
      <li>
        <Link to='about'><h3>About</h3></Link>
      </li>
    </ul>; */}
  </React.Fragment>;
  }
}