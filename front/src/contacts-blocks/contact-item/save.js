import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { label, value, href, note, copyValue, actionLabel } = attributes;
  const blockProps = useBlockProps.save({ className: 'sbc-item' });

  return (
    <div {...blockProps}>
      <div className="sbc-kicker"><b>{label}</b></div>

      <div className="sbc-item__value">
        {href ? <a href={href}>{value}</a> : <span>{value}</span>}
      </div>

      {note ? <div className="sbc-muted">{note}</div> : null}

      <div className="sbc-actions sbc-actions--wrap">
        <button
          type="button"
          className="mini copy"
          data-copy={copyValue || value}
        >
          Копировать
        </button>

        {href ? (
          <a className="btn outline" href={href}>
            {actionLabel || 'Открыть'}
          </a>
        ) : null}
      </div>
    </div>
  );
}