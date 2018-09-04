CKEDITOR.plugins.add( 'save-to-pdf', {
    icons: 'save-to-pdf',
    init: function( editor ) {
        editor.addCommand( 'save-to-pdf', {
            exec: function( editor ) {
                debugger;
            }
        } );    
        editor.ui.addButton( 'save-to-pdf', {
            label: 'Save as PDF',
            command: 'save-to-pdf',
            toolbar: 'tools'
        });
    }
});