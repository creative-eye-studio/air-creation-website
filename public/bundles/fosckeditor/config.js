/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	config.language = 'fr';
	config.extraPlugins = 'codemirror,filebrowser';
	// config.startupMode = 'source';
	config.allowedContent = true;
	config.entities = false;
	config.baseHref = '/';
	config.contentsCss = '../build/app.css';
	config.height = 300;
	config.bodyClass = 'no-js header-second';
};
