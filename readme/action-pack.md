
## Нормализация и создание базового объекта
```js
export const createBadge = () => ({
	id: `badge-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
	text: __('Новый badge', 'acme-blocks'),
	url: '',
	opensInNewTab: false,
	linkMode: false,
	pageId: 0,
});

const normalizeBadge = (badge, index) => ({
	id: badge?.id || `badge-${index}`,
	text: badge?.text || '',
	url: badge?.url || '',
	linkMode: !!badge?.linkMode,
	pageId: Number(badge?.pageId) || 0,
	opensInNewTab: !!badge?.opensInNewTab,
});

```


## Инициализация

```js
	const [addMenuAnchor, setAddMenuAnchor] = useState(null);

	const safeBadges = Array.isArray(pillItems)
		? pillItems.map(normalizeBadge)
		: [];

```

##  Крад события 
```js
	const updateBadges = (nextBadges) => {
		setAttributes({ pillItems: nextBadges });
	};

	const updateBadge = (badgeId, patch) => {
		updateBadges(
			safeBadges.map((badge) =>
				badge.id === badgeId ? { ...badge, ...patch } : badge
			)
		);
	};

	const addBadge = () => {
		updateBadges([...safeBadges, createBadge()]);
		setAddMenuAnchor(null);
	};

	const removeBadge = (badgeId) => {
		updateBadges(safeBadges.filter((badge) => badge.id !== badgeId));
	};

```

