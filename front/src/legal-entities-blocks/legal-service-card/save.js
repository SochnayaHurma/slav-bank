import { useBlockProps } from '@wordpress/block-editor';

function toItems(raw = '') {
  return String(raw)
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function Save({ attributes }) {
  const {
    title,
    titleUrl,
    leadText,
    itemsRaw,
    detailsLabel,
    detailsUrl,
    contactText,
    buttonText,
    buttonUrl,
    openInNewTab
  } = attributes;

  const items = toItems(itemsRaw);
  const target = openInNewTab ? '_blank' : undefined;
  const rel = openInNewTab ? 'noopener noreferrer' : undefined;

  return (
    <article {...useBlockProps.save({ className: 'sb-le-service' })}>
      <header className="sb-le-service__header">
        <h3 className="sb-le-service__title">
          {titleUrl ? (
            <a href={titleUrl} target={target} rel={rel}>
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
      </header>

      {leadText ? (
        <p className="sb-le-service__lead">{leadText}</p>
      ) : null}

      {items.length ? (
        <ul className="sb-le-list">
          {items.map((item, index) => (
            <li className="sb-le-point" key={index}>
              <span className="sb-le-point__icon" aria-hidden="true"></span>
              <span className="sb-le-point__text">{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {detailsUrl ? (
        <p className="sb-le-service__details">
          <strong>
            <a href={detailsUrl} target={target} rel={rel}>
              {detailsLabel || 'Подробнее'}
            </a>
          </strong>
        </p>
      ) : null}

      {contactText ? (
        <div className="sb-le-callout">
          <p>{contactText}</p>
        </div>
      ) : null}

      {buttonText && buttonUrl ? (
        <div className="center-h">
          <a className="btn primary" href={buttonUrl} target={target} rel={rel}>
            <strong>{buttonText}</strong>
          </a>
        </div>
      ) : null}
    </article>
  );
}