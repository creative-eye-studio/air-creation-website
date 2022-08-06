/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/admin/app.scss';

// start the Stimulus application
import './bootstrap';

<<<<<<< HEAD

/* TABS
----------------------*/
var tabs = require('tabs');
=======
/* TABS
--------------------------------------------*/
var tabs = require('tabs');

>>>>>>> e9c34bc8539e50e39f7cd3bd2ec1534f12b243d6
var container=document.querySelector('.tab-container')
tabs(container);