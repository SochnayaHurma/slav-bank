import { __ } from '@wordpress/i18n';
import { useEffect, useRef } from '@wordpress/element';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';

const ALLOWED_BLOCKS = [
	'core/heading',
	'core/paragraph',
	'core/list',
	'core/buttons',
	'core/image',
	'core/group',
	'core/spacer',
];


export default function Edit({ attributes, setAttributes }) {
	const { showSidebar = true, sidebarKind = 'rates' } = attributes;

	const blockProps = useBlockProps({
		className: `bento-shell-editor ${showSidebar ? 'has-sidebar' : 'no-sidebar'}`,
	});

	const detNewsRef = useRef(null);
	const detCategoriesRef = useRef(null);

	useEffect(() => {
		const setDetails = () => {
			[detNewsRef.current, detCategoriesRef.current].forEach((details) => {
				if (!details) return;

				if (window.innerWidth >= 769) {
					details.setAttribute('open', 'open');
				} else {
					details.removeAttribute('open');
				}
			});
		};

		setDetails();
		window.addEventListener('resize', setDetails);

		return () => {
			window.removeEventListener('resize', setDetails);
		};
	}, []);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Настройки Bento', 'mytheme')} initialOpen={true}>
					<ToggleControl
						label={__('Показывать сайдбар', 'mytheme')}
						checked={showSidebar}
						onChange={(value) => setAttributes({ showSidebar: value })}
					/>

					<SelectControl
						label={__('Тип сайдбара', 'mytheme')}
						value={sidebarKind}
						options={[
							{ label: __('Валюты', 'mytheme'), value: 'rates' },
							{ label: __('Home stack', 'mytheme'), value: 'home-stack' },
						]}
						onChange={(value) => setAttributes({ sidebarKind: value })}
						disabled={!showSidebar}
					/>
				</PanelBody>
			</InspectorControls>

				{showSidebar && (
					<div className="stack">
						<div className="bento-card reveal is-in">
							<h3 style={{ margin: '6px 0 10px' }}>
								Курсы обмена валют (Макет для визуала)
							</h3>

							<div className="kicker">на 05.04.2026 г.</div>

							<div className="fine" style={{ marginTop: '8px' }}>
								<b>Валюта:</b> покупка / продажа
							</div>

							<div className="rates">
								<div className="rate-row">
									<span className="mono">USD</span>
									<span className="muted">покупка</span>
									<span className="mono">78.00</span>
									<span className="muted">продажа</span>
									<span className="mono">819.00</span>
								</div>

								<div className="rate-row">
									<span className="mono">CNY</span>
									<span className="muted">покупка</span>
									<span className="mono">11.00</span>
									<span className="muted">продажа</span>
									<span className="mono">11.90</span>
								</div>
							</div>

							<div className="fine" style={{ marginTop: '8px' }}>
								АО НКБ "СЛАВЯНБАНК"
							</div>
						</div>

						<div className="bento-card reveal is-in">
							<div className="kicker">Полезная информация</div>
							<h3 style={{ margin: '6px 0 10px' }}>Последние публикации</h3>

							<div className="posts">
								<a className="post" href="/2026/04/06/tariffs/">
									<span className="muted">06.04.2026</span>
									<strong>tariffs</strong>
								</a>

								<a className="post" href="/2026/04/05/hello-world/">
									<span className="muted">05.04.2026</span>
									<strong>Hello world!</strong>
								</a>
							</div>
						</div>

						<details
							id="detCategories"
							className="reveal is-in"
							open
							ref={detCategoriesRef}
						>
							<summary style={{ cursor: 'pointer', fontWeight: '600' }}>
								Разделы сайта
							</summary>
							<div className="drawer-links" style={{ marginTop: '10px' }}>
								<a className="drawer-sub" href="/o-banke-slavyanbank-html-info_bank-html/">ИНФОРМАЦИЯ БАНКА</a>
								<a className="drawer-sub" href="/novosti.html/">НОВОСТИ</a>
								<a className="drawer-sub" href="/tarify-banka.html/">ТАРИФЫ БАНКА</a>
								<a className="drawer-sub" href="/yuridicheskim-liczam/">ЮРИДИЧЕСКИМ ЛИЦАМ</a>
								<a className="drawer-sub" href="/podderzhka.html/">ПОДДЕРЖКА</a>
								<a className="drawer-sub" href="/forma-obratnoj-svyazi.html/">НАПИСАТЬ В БАНК</a>
								<a className="drawer-sub" href="/kontakty.html/">КОНТАКТЫ</a>
							</div>
						</details>

						<details
							id="detNews"
							className="reveal"
							open
							ref={detNewsRef}
						>
							<summary style={{ cursor: 'pointer', fontWeight: '600' }}>
								Рубрики
							</summary>
							<div className="drawer-links" style={{ marginTop: '10px' }}>
								<a className="drawer-sub" href="/novosti.html/">
									Новости
								</a>
								<a className="drawer-sub" href="/novosti.html/">
									Полезная информация
								</a>
								<a className="drawer-sub" href="/category/arhiv" target="_blank" rel="noopener">
									АРХИВ
								</a>
								<a className="drawer-sub" href="/category/dokumenty-dlya-klientov" target="_blank" rel="noopener">
									ДОКУМЕНТЫ ДЛЯ КЛИЕНТОВ
								</a>
							</div>
						</details>
					</div>
				)}
		</>
	);
}