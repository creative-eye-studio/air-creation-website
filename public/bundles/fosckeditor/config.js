/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

var request = new XMLHttpRequest();
var urlBase = 'https://aircreation.com/'
request.open("GET", "../../../build/entrypoints.json", false);
request.send(null)
var json = JSON.parse(request.responseText);

CKEDITOR.editorConfig = function( config ) {
	config.language = 'fr';
	config.extraPlugins = 'codemirror,filebrowser,powrmediagallery';
	// config.startupMode = 'source';
	config.allowedContent = true;
	config.extraAllowedContent = 'i';
	config.entities = false;
	config.baseHref = '/';
	config.contentsCss = '../' + json.entrypoints.app.css[0];
	config.height = 300;
	config.bodyClass = 'no-js header-second';
};
