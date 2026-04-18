import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';

export default function save() {
	const blockProps = useBlockProps.save({
		className: 'theme-shell',
	});

	return (
		<main { ...blockProps } id="main">
			<InnerBlocks.Content />

			<section className="block dashv2" id="content">
				<div className="container">
					<div className="bento">
						<div
							className="bento-card"
							style={ { padding: 'var(--s-4)', position: 'relative' } }
						>
							<h2>
								<strong>
									Данный раздел создан для поддержки клиентов АО НКБ
									«СЛАВЯНБАНК».
								</strong>
							</h2>

							<div className="kicker">Частые темы</div>

							<div className="tiles">
								<a
									className="tile"
									href="esc_url(sb_alpha_url('faq'))"
									target="_blank"
									rel="noopener"
								>
									<div className="tile-title">
										Часто задаваемые вопросы
									</div>
									<div
										className="muted"
										style={ { marginTop: '6px' } }
									>
										Открыть раздел →
									</div>
								</a>

								<a
									className="tile"
									href="ecp-regeneration.html"
									target="_blank"
									rel="noopener"
								>
									<div className="tile-title">
										Перегенерация ЭЦП
									</div>
									<div
										className="muted"
										style={ { marginTop: '6px' } }
									>
										Открыть раздел →
									</div>
								</a>

								<a
									className="tile"
									href="esc_url(sb_alpha_url('security'))"
									target="_blank"
									rel="noopener"
								>
									<div className="tile-title">
										Рекомендации по безопасности
									</div>
									<div
										className="muted"
										style={ { marginTop: '6px' } }
									>
										Открыть раздел →
									</div>
								</a>
							</div>

							<div
								className="kicker"
								style={ { marginTop: '12px' } }
							>
								Документы
							</div>

							<div className="doc-shelf">
								<a
									className="doc-card"
									href="https://slavbank.ru/wp-content/uploads/internet-klient.-rukovodstvo-polzovatelya.pdf"
									target="_blank"
									rel="noopener"
								>
									<span className="doc-ext">PDF</span>
									<span className="doc-title">
										Скачать здесь &gt;&gt;
									</span>
									<span className="doc-arrow">→</span>
								</a>
							</div>

							<div className="prose">
								<div className="entry-content">
									<h3>
										В случае возникновения вопросов вы можете связаться с
										нами по телефонам, указанным ниже:
										<br />
									</h3>

									<h4
										className="kicker doc-card"
										style={ {
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'start',
										} }
									>
										Телефоны технической поддержки:
										<strong style={ { fontStyle: 'italic' } }>
											<span
												className="fine"
												style={ { fontSize: '14px' } }
											>
												(8162) 66-51-95,
												<br />
												66-52-47,
												<br />
												+7921-690-17-00
											</span>
										</strong>
									</h4>

									<h4
										className="kicker doc-card"
										data-title="Заголовок"
									>
										<strong>
											Режим работы:
											<span
												className="fine"
												style={ { fontSize: '14px' } }
											>
												с 8.30 до 17.30 (пт. – до 16.30),
												обед с 13.00 до 14.00, (выходной суб.,
												вск.)
											</span>
										</strong>
									</h4>

									<h3>
										Электронная почта:&nbsp;
										<a href="mailto:nkb@slavbank.ru">
											<em data-rich-text-format-boundary="true">
												<strong>nkb@slavbank.ru</strong>
											</em>
										</a>
									</h3>

									<hr />

									<h2>
										<strong>
											&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Здесь вы найдете
											полезную информацию, инструкции, ссылки для
											работы с системами банка.
										</strong>
									</h2>

									<p>
										<strong>
											&nbsp; &nbsp; &nbsp; <span>&gt;&gt; </span>
											<a href="esc_url(sb_alpha_url('faq'))">
												Часто задаваемые вопросы
											</a>
											&nbsp; — ответы на вопросы, возникающие при работе
											в системе Клиент-Банк (данный раздел сайта
											постоянно обновляется и редактируется).&nbsp;
										</strong>
									</p>

									<p>
										<strong>
											<span>
												&nbsp; &nbsp; &nbsp; &gt;&gt; Вход в
												Клиент-Банк &nbsp;
											</span>
											—{' '}
											<a href="https://dbo.slavbank.ru:20101/">
												https://dbo.slavbank.ru:20101
											</a>{' '}
											(для доступа возможно потребуется установка
											плагина).
											<br />
											&nbsp; &nbsp; &nbsp; <span>Система&nbsp;</span>
											<span className="emphasis">
												«ДБО BS-Client x64»
											</span>{' '}
											– это современная и удобная система
											интернет-банкинга, позволяющая клиентам Банка
											осуществлять полноценное информационное и
											платежно-расчетное обслуживание в Банке без
											личного присутствия с использованием
											персонального компьютера и сети Интернет.&nbsp;
										</strong>
									</p>

									<p>
										<strong>
											<span>
												&nbsp; &nbsp; &nbsp; &nbsp; &gt;&gt; Резервный
												вход в Клиент-Банк —
											</span>{' '}
											<a href="https://dbo1.slavbank.ru:20101/">
												https://dbo1.slavbank.ru:20101
											</a>
											&nbsp;— необходим для входа в Клиент-Банк в
											случае, если&nbsp; <span>вход в Клиент-Банк</span>{' '}
											по обычной ссылке &nbsp;<span>недоступен</span>.
											&nbsp; Данной ссылкой можно воспользоваться{' '}
											<span>только после подтверждения банка</span> о
											переходе на <span>Резервный вход</span>,
											позвонив в техническую поддержку Банка.
										</strong>
									</p>

									<p>
										<strong>
											<span>
												&nbsp; &nbsp; &nbsp; &nbsp; &gt;&gt;
												Руководство пользователя «Интернет-Клиент»
											</span>
											—&nbsp; полная подробная инструкция по работе в
											системе «Клиент-Банк».{' '}
											<a href="https://slavbank.ru/wp-content/uploads/internet-klient.-rukovodstvo-polzovatelya.pdf">
												<span>Скачать здесь &gt;&gt;</span>
											</a>
										</strong>
									</p>

									<p>
										<strong>
											&nbsp; &nbsp; &nbsp; <span>&gt;&gt; </span>
											<a href="ecp-regeneration.html">
												<span>Перегенерация ЭЦП</span>
											</a>{' '}
											– продление прав доступа в Клиент-Банк. Здесь
											представлена подробная пошаговая инструкция по
											перегенерации ЭЦП.&nbsp;
										</strong>
									</p>

									<p>
										<strong>
											&nbsp; &nbsp; &nbsp; <span>&gt;&gt; </span>
											<a href="https://www.ammyy.com/ru/">
												Удаленное управление
											</a>{' '}
											– здесь вы сможете скачать последнюю версию
											программы <span>Ammyy Admin</span> удаленного
											доступа (адрес сайта{' '}
											<span>https://www.ammyy.com/ru</span>/,
											наименование&nbsp; файла программы{' '}
											<span>AA_v3.exe</span>)
										</strong>
									</p>

									<p>
										<strong>
											&nbsp; &nbsp; &nbsp; <span>&gt;&gt; </span>
											<a href="esc_url(sb_alpha_url('security'))">
												Рекомендации по безопасности&nbsp;
											</a>
											— обращаем Ваше внимание на соответствие
											доменного имени сайта&nbsp;—
											<a href="esc_url(sb_alpha_url('home'))">
												href="echo esc_url(sb_alpha_url('home'))"
											</a>
											&nbsp;или &nbsp;
											<a href="https://dbo.slavbank.ru:20101/">
												dbo.slavbank.ru
											</a>.
										</strong>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div
				className="toast"
				role="status"
				aria-live="polite"
				aria-atomic="true"
				hidden
			>
				Готово
			</div>
		</main>
	);
}