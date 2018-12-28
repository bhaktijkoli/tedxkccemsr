import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Main from './Main';

window.axios = require('axios');
window.Swal = require('sweetalert2');

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));
