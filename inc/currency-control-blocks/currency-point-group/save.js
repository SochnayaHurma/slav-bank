import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { title, items = [] } = attributes;

  return (
    <section {...useBlockProps.save({ className: 'sb-cc-group' })}>
      <h3 className="sb-cc-group__title">{title}</h3>

      <ul className="sb-cc-points">
        {items.map((item, index) => (
          <li className="sb-cc-point" key={index}>
            <span className="sb-cc-point__icon" aria-hidden="true"></span>
            <span className="sb-cc-point__text">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}