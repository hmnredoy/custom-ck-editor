import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/align-bottom.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

class InsertText extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'insertText', locale => {
            const view = new ButtonView( locale );

            view.set( {
                label: 'Insert Todo',
                icon: imageIcon,
                tooltip: true
            } );

            view.on( 'execute', () => {
                const content = prompt( 'Insert Todo' );

                editor.model.change( () => {
                    const viewFragment = editor.data.processor.toView( content + '<br>' );
                    const modelFragment = editor.data.toModel( viewFragment );
                    editor.model.insertContent( modelFragment );
                } );
            } );

            return view;
        } );
    }
}

export default InsertText