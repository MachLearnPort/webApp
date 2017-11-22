// fetch the data from the api
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/Components/App';

import config from './config';
import axios from 'axios';

axios.get(`${config.serverUrl}/api/contests`)
  .then(resp => {
    ReactDOMServer.renderToString(
      <App initialContests={resp.data.contests} />
    );
  });