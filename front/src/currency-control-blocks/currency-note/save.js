import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { text, tone } = attributes;

  return (
    <div
      {...useBlockProps.save({
        className: `sb-cc-note sb-cc-note--${tone || 'strong'}`
      })}
    >
      <p>{text}</p>
    </div>
  );
}