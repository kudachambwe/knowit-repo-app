import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from  '@fortawesome/fontawesome-svg-core'
import { faStar, faEye, faLink, faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

library.add(faStar, faEye, faLink, faArrowLeft, faArrowRight);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
