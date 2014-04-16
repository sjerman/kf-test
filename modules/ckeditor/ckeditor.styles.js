/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 * This file is used/requested by the 'Styles' button.
 * The 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 */
if(typeof(CKEDITOR) !== 'undefined') {
    CKEDITOR.addStylesSet( 'drupal',
    [
            /* Block Styles */

            // These styles are already available in the "Format" drop-down list, so they are
            // not needed here by default. You may enable them to avoid placing the
            // "Format" drop-down list in the toolbar, maintaining the same features.
            /*
            { name : 'Paragraph'		, element : 'p' },
            { name : 'Heading 1'		, element : 'h1' },
            { name : 'Heading 2'		, element : 'h2' },
            { name : 'Heading 3'		, element : 'h3' },
            { name : 'Heading 4'		, element : 'h4' },
            { name : 'Heading 5'		, element : 'h5' },
            { name : 'Heading 6'		, element : 'h6' },
            { name : 'Preformatted Text', element : 'pre' },
            { name : 'Address'			, element : 'address' },
            */
           
           /*

            { name : 'Blue Title'		, element : 'h3', styles : { 'color' : 'Blue' } },
            { name : 'Red Title'		, element : 'h3', styles : { 'color' : 'Red' } },

			*/
            /* Inline Styles */

            // These are core styles available as toolbar buttons. You may opt enabling
            // some of them in the "Styles" drop-down list, removing them from the toolbar.
            /*
            { name : 'Strong'			, element : 'strong', overrides : 'b' },
            { name : 'Emphasis'			, element : 'em'	, overrides : 'i' },
            { name : 'Underline'		, element : 'u' },
            { name : 'Strikethrough'	, element : 'strike' },
            { name : 'Subscript'		, element : 'sub' },
            { name : 'Superscript'		, element : 'sup' },
            */

            {
                    name : 'Bootstrap: striped table',
                    element : 'table',
                    attributes :
                    {
                            'class' : 'table table-striped'
                    }
            },
            
            {
                    name : 'Default button',
                    element : 'a',
                    attributes :
                    {
                            'class' : 'btn btn-default'
                    }
            },

            {
                    name : 'Primary button',
                    element : 'a',
                    attributes :
                    {
                            'class' : 'btn btn-primary'
                    }
            },
            
            {
                    name : 'Success button',
                    element : 'a',
                    attributes :
                    {
                            'class' : 'btn btn-success'
                    }
            },
            
            {
                    name : 'Warning button',
                    element : 'a',
                    attributes :
                    {
                            'class' : 'btn btn-warning'
                    }
            },
            
            {
                    name : 'Danger button',
                    element : 'a',
                    attributes :
                    {
                            'class' : 'btn btn-danger'
                    }
            },
            
            {
                    name : 'Default panel',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'panel panel-default'
                    }
            },
            
            {
                    name : 'Primary panel',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'panel panel-primary'
                    }
            },
            
            {
                    name : 'Success panel',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'panel panel-success'
                    }
            },

            {
                    name : 'Warning panel',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'panel panel-warning'
                    }
            },

            {
                    name : 'Panel heading',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'panel-heading'
                    }
            },

            {
                    name : 'Panel body',
                    element : 'div',
                    attributes :
                    {
                            'class' : 'panel-body'
                    }
            },

            {
                    name : 'Panel title',
                    element : 'h3',
                    attributes :
                    {
                            'class' : 'panel-title'
                    }
            },
            
            {
                    name : 'Image on Left',
                    element : 'img',
                    attributes :
                    {
                            'style' : 'padding: 5px; margin-right: 5px',
                            'border' : '2',
                            'align' : 'left'
                    }
            },

            {
                    name : 'Image on Right',
                    element : 'img',
                    attributes :
                    {
                            'style' : 'padding: 5px; margin-left: 5px',
                            'border' : '2',
                            'align' : 'right'
                    }
            }
    ]);
}
