import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './app/components/AppContainer/App/App';
import './index.css';


const Main = () => (
  // Beginning with v0.15.0, Material-UI components require a theme to be provided.
  // MuiThemeProvider injects the theme into your application context.
  <MuiThemeProvider>
    {/* The main application renders here */}
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

registerServiceWorker();
