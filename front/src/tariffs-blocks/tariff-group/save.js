import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { title } = attributes;

  return (
    <div {...useBlockProps.save({ className: 'sb-tariff-group' })}>
      <p><strong>{title}</strong></p>
      <ul className="wp-block-list">
        <InnerBlocks.Content />
      </ul>
    </div>
  );
}