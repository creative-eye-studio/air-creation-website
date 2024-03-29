/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	config.language = 'fr';
	config.extraPlugins = 'codemirror,filebrowser,powrmediagallery';
	// config.startupMode = 'source';
	config.allowedContent = true;
	config.extraAllowedContent = 'i';
	config.entities = false;
	config.baseHref = '/';
	config.contentsCss = '../build/app.5f10ce6e.css';
	config.height = 300;
	config.bodyClass = 'no-js header-second';
};
