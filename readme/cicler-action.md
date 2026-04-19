

## ОБработка в цикле множественного рича

```js
{safeActions.length > 0 &&
    safeActions.map((action) => (
        <RichText
            key={action.id}
            tagName="a"
            className={`btn ${action.variant || 'primary'}`}
            href={action.url || ''}
            value={action.text}
            onChange={(value) =>
                updateAction(action.id, { text: value })
            }
        />
    ))}

```