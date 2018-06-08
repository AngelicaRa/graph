import * as React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/fontawesome-free-solid';
import { List, ListItem, ListItemText, Paper, ListItemIcon } from '@material-ui/core';
import { BubbleChart, InsertChart, GraphicEq, MultilineChart, PieChart, ShowChart } from '@material-ui/icons';


interface MainMenuProps {}
interface MainMenuStats {}

const styles: React.CSSProperties = {
  fontSize: '40px',
  color: 'red'
};

export default class MainMenu extends React.Component<MainMenuProps, MainMenuStats> {

  render() {
    return <Paper>
      <List component='nav'>
        {/* <Link to='/'><ListItem button>LOGO</ListItem></Link>
        <Link to='bargraph'><ListItem button><FontAwesomeIcon icon={fa.faChartBar} size='3x' /></ListItem></Link>
        <Link to='areagraph'><ListItem button><FontAwesomeIcon icon={fa.faChartArea} size='3x' /></ListItem></Link>
        <Link to='linegraph'><ListItem button><FontAwesomeIcon icon={fa.faChartLine} size='3x' /></ListItem></Link>
        <Link to='piegraph'><ListItem button><FontAwesomeIcon icon={fa.faChartPie} size='3x' /></ListItem></Link>
        <Link to='about'><ListItem button><ListItemText primary='ABOUT'/></ListItem></Link> */}
        <Link to='/'>
          <ListItem button>
            LOGO
          </ListItem>
        </Link>
        <Link to='bargraph'>
          <ListItem button>
            <ListItemIcon >
              <PieChart color='action' style={styles}/>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to='areagraph'>
          <ListItem button>
            <ListItemIcon >
              <InsertChart color='primary' style={styles}/>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to='linegraph'>
          <ListItem button>
            <ListItemIcon >
              <ShowChart color='error' style={styles}/>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to='piegraph'>
          <ListItem button>
            <ListItemIcon >
              <MultilineChart color='secondary' style={styles}/>
            </ListItemIcon>
          </ListItem>
        </Link>
        <Link to='about'>
          <ListItem button>
            <ListItemText primary='ABOUT'/>
          </ListItem>
        </Link>
      </List>
  </Paper>;
  }
}