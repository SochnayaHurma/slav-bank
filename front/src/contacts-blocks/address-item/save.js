import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { label, value, note, copyValue } = attributes;

  const yandex = value
    ? `https://yandex.ru/maps/?text=${encodeURIComponent(value)}`
    : '';

  const google = value
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value)}`
    : '';

  const blockProps = useBlockProps.save({ className: 'sbc-item' });

  return (
    <div {...blockProps}>
      <div className="sbc-kicker"><b>{label}</b></div>

      <div className="sbc-item__value">
        <span>{value}</span>
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

        {yandex ? (
          <a className="btn primary" href={yandex} target="_blank" rel="noreferrer">
            Открыть в Яндекс Картах
          </a>
        ) : null}

        {google ? (
          <a className="btn outline" href={google} target="_blank" rel="noreferrer">
            Открыть в Google Maps
          </a>
        ) : null}
      </div>
    </div>
  );
}