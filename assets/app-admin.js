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

if (caracBtn) {
    caracBtn.onclick = function(){
        var clone = inputBlock.cloneNode(true);
        containerCarac.append(clone);
        console.log("Cliqué");
        return false;
    };
}



/* SUPPRESSION D'UNE IMAGE
--------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    console.log("Page chargée");
    var delImgBtn = document.querySelectorAll('.delImgBtn');
    delImgBtn.forEach(btn => {
        btn.onclick = function(e) {
            e.preventDefault();
            var httpRequest = new XMLHttpRequest();
            var itemId = btn.getAttribute('imgId');
            httpRequest.onreadystatechange = function(data, response){
                if (response == 'good') {
                    console.log("Demande envoyée");
                } else {
                    console.log("Demande refusée");
                }
            }
            httpRequest.open("POST", window.location.href);
            httpRequest.send({
                'imgId':itemId
            });
        }
    });
})



/* TINY MCE
--------------------------------------------*/
tinymce.init({
    selector: '#mytextarea'
});