import { createPageEdit, heroAction, heroBadge } from '../page-pattern';

const TEMPLATE = [
	[
		'slav-bank/hero-simple',
		{
			title: 'Тарифы на обслуживание корреспондентских счетов',
			kicker: 'Тарифы',
			description:
				'Редактируемый раздел для тарифов по корреспондентским счетам кредитных организаций.',
			pillItems: [
				heroBadge( 'Тарифы банка', '/tarify-banka.html/' ),
				heroBadge(
					'Кредитным организациям',
					'/tarify-na-uslugi-kreditnym-organizacziyam.html/'
				),
			],
			actions: [
				heroAction( 'Содержание', '#content' ),
				heroAction( 'На главную', '/' ),
			],
		},
	],
	[ 'slav-bank/body-correspondent-account-tariffs-bento', {} ],
];

export default createPageEdit( TEMPLATE );
