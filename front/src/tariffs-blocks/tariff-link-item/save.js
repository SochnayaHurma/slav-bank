import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { title, url, date, targetBlank } = attributes;

  return (
    <li {...useBlockProps.save()}>
      <a
        className="doc-card"
        href={url || '#'}
        target={targetBlank ? '_blank' : undefined}
        rel={targetBlank ? 'noopener noreferrer' : undefined}
      >
        <span className="doc-title">
          <strong>{title}</strong>
        </span>
        <span className="doc-arrow doc-ext" style={{ textAlign: 'center', minWidth: '132px' }}>
          {date}
        </span>
      </a>
    </li>
  );
}