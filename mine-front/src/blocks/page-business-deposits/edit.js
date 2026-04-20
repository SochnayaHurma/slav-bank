import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Депозиты для юридических лиц',
			kicker: 'Раздел',
			description: 'Депозитные продукты для бизнеса. Ставка до 14,5%.',
			pillItems: [
				heroBadge( 'Юр. лицам', '/yuridicheskim-liczam' ),
				heroBadge( 'Кредитование', '/yuridicheskim-liczam-html/kreditovanie-yuridicheskih-licz.html/' ),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
				heroAction( 'Связаться', '/forma-obratnoj-svyazi.html/#form' ),
			],
		},
	],
	[ 'slav-bank/body-business-deposits-bento', {} ],
];

export default createPageEdit( TEMPLATE );
