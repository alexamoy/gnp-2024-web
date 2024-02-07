import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography } from '@mui/material';
import logan_pass_img from './static/assets/logan_pass.jpeg';

function App() {
  return (
    <div className="App">
      <div className="bg" style={{ backgroundImage: `url(${logan_pass_img})` }}></div>
        <div className="landing-page-text">
          <Typography variant="h1" component="h2">
            Alexa & Luke
          </Typography>
          <Typography variant="h4" component="h2">
            August 15th, 2024
          </Typography>
          <Typography variant="h6" component="h2">
            Glacier National Park
          </Typography>
        </div>
    </div>
  );
}

export default App;
