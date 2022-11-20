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


/* TABS
--------------------------------------------*/
var tabs = require('tabs');
var container = document.querySelector('.tab-container');

if (container != null) {
    tabs(container);
}


/* CARACTERISTIQUES
--------------------------------------------*/
var caracBtn = document.querySelector('#add-carac-btn');
var inputBlock = document.querySelector('.carac-panel:last-child');
const containerCarac = document.querySelector('.carac-panel-container')

caracBtn.onclick = function(){
    var clone = inputBlock.cloneNode(true);
    containerCarac.append(clone);
    console.log("Cliqué");
    return false;
};