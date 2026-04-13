import { useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { label, items = [] } = attributes;
  const blockProps = useBlockProps.save({ className: 'sbc-item' });

  return (
    <div {...blockProps}>
      <div className="kicker"><b>{label}</b></div>

      <div className="sbc-hours">
        {items.map((item, index) => (
          <div className="alert" key={index}>
            <div className="sbc-alert__dot" aria-hidden="true"></div>
            <div>
              <div className="sbc-alert__title">{item.title}</div>
              <div className="sbc-muted sbc-alert__text">{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}