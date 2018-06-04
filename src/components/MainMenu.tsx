import * as React from 'react';
import * as styles from './MainMenu.css';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import * as fa from '@fortawesome/fontawesome-free-solid';

interface MainMenuProps {}
interface MainMenuStats {}

export default class MainMenu extends React.Component<MainMenuProps, MainMenuStats> {
  render() {
    return <div>
        <ul className={styles.mainMenuList}>
          <li><FontAwesomeIcon icon={fa.faChartBar} className={styles.mainMenuListItem} color='red' size='3x' /></li>
          <li><FontAwesomeIcon icon={fa.faChartArea} className={styles.mainMenuListItem} color='red' size='3x' /></li>
          <li><FontAwesomeIcon icon={fa.faChartLine} className={styles.mainMenuListItem} color='red' size='3x' /></li>
          <li><FontAwesomeIcon icon={fa.faChartPie} className={styles.mainMenuListItem} color='red' size='3x' /></li>
        </ul>
      </div>;
  }
}