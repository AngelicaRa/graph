import * as React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/fontawesome-free-solid';
import { List, ListItem, ListItemText, Paper, BottomNavigation, BottomNavigationAction } from '@material-ui/core';

interface MainMenuProps {}
interface MainMenuStats {}


export default class MainMenu extends React.Component<MainMenuProps, MainMenuStats> {
  constructor(props) {
    super(props);
  }
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  }

  render() {
    const classes  = this.props;
    const { value } = this.state;

    return <Paper>
      <List component='nav'>

        {/* <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels>
        <BottomNavigationAction label='Recents' icon={<FontAwesomeIcon icon={fa.faChartBar} />} />
        <BottomNavigationAction label='Favorites' icon={<FontAwesomeIcon icon={fa.faChartBar} />} />
        <BottomNavigationAction label='Nearby' icon={<FontAwesomeIcon icon={fa.faChartBar} />} />
      </BottomNavigation> */}

        <Link to='/'><ListItem button>LOGO</ListItem></Link>

        <Link to='bargraph'><ListItem button><FontAwesomeIcon icon={fa.faChartBar} size='3x' /></ListItem></Link>

        <Link to='areagraph'><ListItem button><FontAwesomeIcon icon={fa.faChartArea} size='3x' /></ListItem></Link>

        <Link to='linegraph'><ListItem button><FontAwesomeIcon icon={fa.faChartLine} size='3x' /></ListItem></Link>

        <Link to='piegraph'><ListItem button><FontAwesomeIcon icon={fa.faChartPie} size='3x' /></ListItem></Link>

        <Link to='about'><ListItem button><ListItemText primary='ABOUT'/></ListItem></Link>
      </List>
  </Paper>;
  }
}