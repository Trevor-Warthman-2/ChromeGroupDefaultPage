import { Button } from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import { Tab } from '../../models/Tab.ts';
import './App.css';
import styles from './Popup.module.css';

// import some classes here and make new ones and whatever

const App: FC = () => <Popup />;

const Popup: FC = (): ReactElement => {
  const [currentTab, setTab] = useState(await new Tab().init(Tab.getCurrentChromeTab()));
  // tab objects from with "setToDefaultForGroup"
  // NEXT: Try building.
  return (
    <div>
      <header>
        <p>Make this page the default for the current group?</p>
        <Button className={styles.selectionButton} onClick={currentTab.setCurrentUrlToDefaultForGroup()}>Set this tab as default for the current group</Button>
        <Button className={styles.selectionButton} onClick={openNewOptionsTab()}>View Options Tab</Button>
        Learn React
      </header>
    </div>
  );
};

/* eslint-disable-next-line */
const openNewOptionsTab = () => chrome.tabs.create({ url: './options.html' });

export { App };
