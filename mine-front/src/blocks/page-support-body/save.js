import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save({
		className: 'theme-shell',
	});

	return (

	<div
		className="bento-card"
		style={ { padding: 'var(--s-4)', position: 'relative' } }>
	<InnerBlocks.Content/>
							<div className="prose">
								<div className="entry-content">


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

	);
}