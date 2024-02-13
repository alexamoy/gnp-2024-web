import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container, Divider, Drawer, IconButton, List, ListItem } from '@mui/material';
import { ChevronLeftOutlined } from '@mui/icons-material';
import gnp_sunset from './static/assets/gnp_sunset.jpeg';
import { TopBar } from './TopBar';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerClose = () => {
    setIsOpen(false);
  }
  const weddingDate = new Date("08/15/2024");
  const today = new Date();
  const countdownTime = weddingDate.getTime() - today.getTime();
 
  const countdown = Math.round(countdownTime / (1000 * 3600 * 24));
  return (
    <div className="App">
      <TopBar open={isOpen} setOpen={setIsOpen} />
      <Drawer variant="persistent" anchor="left" open={isOpen} className="menu-drawer">
        <Container className="menu-drawer-header">
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftOutlined />
          </IconButton>
        </Container>
        <Divider />
        <List>
          <ListItem>Item 1</ListItem>
        </List>
      </Drawer>
      <div className="bg" style={{ backgroundImage: `url(${gnp_sunset})` }}></div>
      <Container className="landing-page-text">
        <Container className="alexa-luke-text-container">
          <div className="name-text">Alexa</div>
          <div className="ampersand-text">&</div>
          <div className="name-text">Luke</div>
        </Container>
        <Container className="wedding-date-text">
          August 15th, 2024
        </Container>
        <Container className="wedding-location-text">
          {countdown} Days Away!
        </Container>
      </Container>
    </div>
  );
}

export default App;
