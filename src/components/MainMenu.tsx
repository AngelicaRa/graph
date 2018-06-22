import * as React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemIcon, Typography } from '@material-ui/core';
import { InsertChart, MultilineChart, PieChart, ShowChart, Person } from '@material-ui/icons';
import { info, IconType } from './info';
import { Logo } from './Logo';


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
  renderIcon(icon, style) {
    switch (icon) {
      case IconType.INSERT_CHART:
        return <InsertChart style={style}/>;
      case IconType.MULTILINE_CHART:
        return <MultilineChart style={style}/>;
      case IconType.PIE_CHART:
        return <PieChart style={style}/>;
      case IconType.SHOW_CHART:
        return <ShowChart style={style}/>;
      case IconType.PERSON:
        return <Person style={style}/>;
    }
  }

  render() {
    return <div style={ this.props.externalStyles }>
      <List component='nav' style={styles.menu}>
        <Link to='/' style={styles.link}>
          <ListItem button style={{ padding: 0 }} >
            <Logo width='200px' height='125px' color='white'/>
            {/* <img style={styles.logo} src='../../assets/Easygraph.png' alt='logo' width='104px' height='62px'/> */}
          </ListItem>
        </Link>

        {info.map((info) =>
          <Link key={info.name} to={info.route} style={styles.link}>
          <ListItem button  >
            <ListItemIcon>
              {this.renderIcon(info.icon, styles.icon)}
            </ListItemIcon>
            <ListItemText disableTypography primary={
              <Typography style={styles.text}>{info.name}</Typography>
            }></ListItemText>
          </ListItem>
        </Link>
        )}

        <Link to='about' style={styles.link}>
          <ListItem button><Typography style={styles.text}>ABOUT</Typography></ListItem>
        </Link>
      </List>
  </div>;
  }
}