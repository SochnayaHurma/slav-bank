import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
    const { title, description, fallbackText } = attributes;

    // Генерируем пропсы для обертки (те же классы и дата-атрибуты)
    const blockProps = useBlockProps.save( {
        className: 'form-shell',
        'data-form-shell': true,
    } );

    return (
        <div { ...blockProps }>
            { /* Заголовок */ }
            { ! RichText.isEmpty( title ) && (
                <RichText.Content
                    tagName="h3"
                    value={ title }
                />
            ) }

            { /* Описание */ }
            { ! RichText.isEmpty( description ) && (
                <RichText.Content
                    tagName="p"
                    className="muted"
                    value={ description }
                />
            ) }

            <div className="form-wrap">
                { /* Место, куда WordPress вставит HTML 
                   вложенных блоков (в нашем случае CF7) 
                */ }
                <InnerBlocks.Content />
            </div>

            { /* Текст-заглушка (fallback) */ }
            { ! RichText.isEmpty( fallbackText ) && (
                <RichText.Content
                    tagName="p"
                    className="muted form-fallback-text"
                    value={ fallbackText }
                />
            ) }
        </div>
    );
}