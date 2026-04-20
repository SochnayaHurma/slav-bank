import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
} from '@wordpress/components';
import {
	DEFAULT_ANNUAL_REPORTS,
	DEFAULT_INTERIM_GROUPS,
	createAnnualReport,
	createInterimDocument,
	createInterimGroup,
	normalizeAnnualReports,
	normalizeInterimGroups,
} from './defaults';

const insertAfter = (items, afterId, nextItem) => {
	const list = Array.isArray(items) ? [...items] : [];

	if (!afterId) {
		list.push(nextItem);
		return list;
	}

	const index = list.findIndex((item) => item.id === afterId);

	if (index === -1) {
		list.push(nextItem);
		return list;
	}

	list.splice(index + 1, 0, nextItem);
	return list;
};

function ItemToolbar({
	onAdd,
	onRemove,
	addLabel = 'Добавить ниже',
	removeLabel = 'Удалить',
	canRemove = true,
}) {
	return (
		<div className="sb-reporting-item-toolbar">
			<Button variant="secondary" onClick={onAdd} isSmall>
				{addLabel}
			</Button>

			{canRemove && (
				<Button variant="secondary" isDestructive onClick={onRemove} isSmall>
					{removeLabel}
				</Button>
			)}
		</div>
	);
}


export default function Edit({ attributes, setAttributes, isSelected }) {
	const {
		contentAnchor = 'content',
		annualCardTitle = 'ОТЧЕТНОСТЬ АО НКБ «СЛАВЯНБАНК»',
		annualHeading = 'ГОДОВАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ',
		annualReports: rawAnnualReports = DEFAULT_ANNUAL_REPORTS,
		interimKickerTitle = 'ПРОМЕЖУТОЧНАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ,',
		interimSubTitle = 'ПОКАЗАТЕЛИ ДЕЯТЕЛЬНОСТИ БАНКА',
		interimGroups: rawInterimGroups = DEFAULT_INTERIM_GROUPS,
	} = attributes;

	const annualReports = normalizeAnnualReports(rawAnnualReports, DEFAULT_ANNUAL_REPORTS);
	const interimGroups = normalizeInterimGroups(rawInterimGroups, DEFAULT_INTERIM_GROUPS);



	const setField = (field, value) => setAttributes({ [field]: value });

	const updateAnnualReport = (reportId, patch) => {
		setAttributes({
			annualReports: annualReports.map((report) =>
				report.id === reportId ? { ...report, ...patch } : report
			),
		});
	};

	const addAnnualReport = (afterId = null) => {
		setAttributes({
			annualReports: insertAfter(
				annualReports,
				afterId,
				createAnnualReport()
			),
		});
	};

	const removeAnnualReport = (reportId) => {
		setAttributes({
			annualReports: annualReports.filter((report) => report.id !== reportId),
		});
	};

	const updateInterimGroup = (groupId, patch) => {
		setAttributes({
			interimGroups: interimGroups.map((group) =>
				group.id === groupId ? { ...group, ...patch } : group
			),
		});
	};

	const addInterimGroup = (afterId = null) => {
		setAttributes({
			interimGroups: insertAfter(
				interimGroups,
				afterId,
				createInterimGroup()
			),
		});
	};

	const removeInterimGroup = (groupId) => {
		setAttributes({
			interimGroups: interimGroups.filter((group) => group.id !== groupId),
		});
	};

	const updateInterimDocument = (groupId, docId, patch) => {
		setAttributes({
			interimGroups: interimGroups.map((group) => {
				if (group.id !== groupId) {
					return group;
				}

				return {
					...group,
					documents: group.documents.map((document) =>
						document.id === docId ? { ...document, ...patch } : document
					),
				};
			}),
		});
	};

	const addInterimDocument = (groupId, afterDocId = null) => {
		setAttributes({
			interimGroups: interimGroups.map((group) => {
				if (group.id !== groupId) {
					return group;
				}

				return {
					...group,
					documents: insertAfter(
						group.documents,
						afterDocId,
						createInterimDocument()
					),
				};
			}),
		});
	};

	const removeInterimDocument = (groupId, docId) => {
		setAttributes({
			interimGroups: interimGroups.map((group) => {
				if (group.id !== groupId) {
					return group;
				}

				return {
					...group,
					documents: group.documents.filter(
						(document) => document.id !== docId
					),
				};
			}),
		});
	};



	return (
		<>
			<InspectorControls>
				<PanelBody title="Общие настройки" initialOpen={true}>
					<TextControl
						label="Якорь секции"
						value={contentAnchor}
						onChange={(value) => setField('contentAnchor', value)}
						help="По умолчанию hero-кнопка ведет на #content."
					/>
				</PanelBody>

				<PanelBody title="Годовая отчетность" initialOpen={false}>
					<div className="sb-reporting-inspector-stack">
						<TextControl
							label="Малый заголовок"
							value={annualCardTitle}
							onChange={(value) => setField('annualCardTitle', value)}
						/>

						<TextControl
							label="Главный заголовок карточки"
							value={annualHeading}
							onChange={(value) => setField('annualHeading', value)}
						/>

						{annualReports.map((report, index) => (
							<div className="sb-reporting-inspector-card" key={report.id}>
								<strong>{`Документ #${index + 1}`}</strong>

								<TextControl
									label="Формат"
									value={report.ext}
									onChange={(value) =>
										updateAnnualReport(report.id, { ext: value })
									}
								/>

								<TextareaControl
									label="Заголовок"
									value={report.title}
									onChange={(value) =>
										updateAnnualReport(report.id, { title: value })
									}
								/>

								<TextareaControl
									label="Подпись"
									value={report.meta}
									onChange={(value) =>
										updateAnnualReport(report.id, { meta: value })
									}
								/>

								<TextControl
									label="URL"
									value={report.url}
									onChange={(value) =>
										updateAnnualReport(report.id, { url: value })
									}
								/>

								<ToggleControl
									label="Открывать в новой вкладке"
									checked={report.opensInNewTab}
									onChange={(value) =>
										updateAnnualReport(report.id, {
											opensInNewTab: value,
										})
									}
								/>

								<Button
									variant="secondary"
									isDestructive
									onClick={() => removeAnnualReport(report.id)}
								>
									Удалить документ
								</Button>
							</div>
						))}

						<Button variant="primary" onClick={() => addAnnualReport()}>
							Добавить годовой документ
						</Button>
					</div>
				</PanelBody>

				<PanelBody title="Промежуточная отчетность" initialOpen={false}>
					<div className="sb-reporting-inspector-stack">
						<TextControl
							label="Верхний заголовок"
							value={interimKickerTitle}
							onChange={(value) => setField('interimKickerTitle', value)}
						/>

						<TextControl
							label="Подзаголовок"
							value={interimSubTitle}
							onChange={(value) => setField('interimSubTitle', value)}
						/>

						{interimGroups.map((group, index) => (
							<div className="sb-reporting-inspector-card" key={group.id}>
								<strong>{`Группа #${index + 1}`}</strong>

								<TextControl
									label="Заголовок summary"
									value={group.title}
									onChange={(value) =>
										updateInterimGroup(group.id, { title: value })
									}
								/>

								<ToggleControl
									label="Раскрывать по умолчанию"
									checked={group.open}
									onChange={(value) =>
										updateInterimGroup(group.id, { open: value })
									}
								/>

								{group.documents.map((document, docIndex) => (
									<div
										className="sb-reporting-inspector-subcard"
										key={document.id}
									>
										<strong>{`Документ #${docIndex + 1}`}</strong>

										<TextareaControl
											label="Заголовок документа"
											value={document.title}
											onChange={(value) =>
												updateInterimDocument(group.id, document.id, {
													title: value,
												})
											}
										/>

										<TextareaControl
											label="Подпись"
											value={document.meta}
											onChange={(value) =>
												updateInterimDocument(group.id, document.id, {
													meta: value,
												})
											}
										/>

										<TextControl
											label="URL"
											value={document.url}
											onChange={(value) =>
												updateInterimDocument(group.id, document.id, {
													url: value,
												})
											}
										/>

										<ToggleControl
											label="Открывать в новой вкладке"
											checked={document.opensInNewTab}
											onChange={(value) =>
												updateInterimDocument(group.id, document.id, {
													opensInNewTab: value,
												})
											}
										/>

										<Button
											variant="secondary"
											isDestructive
											onClick={() =>
												removeInterimDocument(group.id, document.id)
											}
										>
											Удалить документ
										</Button>
									</div>
								))}

								<div className="sb-reporting-inspector-actions">
									<Button
										variant="secondary"
										onClick={() => addInterimDocument(group.id)}
									>
										Добавить документ
									</Button>

									<Button
										variant="secondary"
										isDestructive
										onClick={() => removeInterimGroup(group.id)}
									>
										Удалить группу
									</Button>
								</div>
							</div>
						))}

						<Button variant="primary" onClick={() => addInterimGroup()}>
							Добавить группу
						</Button>
					</div>
				</PanelBody>

			</InspectorControls>

						<div className="bento-card sb-reporting-main-card" style={{ padding: 'var(--s-4)' }}>
							<RichText
								tagName="h3"
								className="wp-block-heading kicker"
								value={annualCardTitle}
								onChange={(value) => setField('annualCardTitle', value)}
							/>

							<p className="has-text-align-center">
								<strong>
									<RichText
										tagName="span"
										value={annualHeading}
										onChange={(value) => setField('annualHeading', value)}
									/>
								</strong>
							</p>

							{isSelected && (
								<div className="sb-reporting-section-toolbar">
									<Button variant="primary" onClick={() => addAnnualReport()}>
										{__('Добавить годовой документ', 'slav-bank')}
									</Button>
								</div>
							)}

							<div className="doc-shelf">
								{annualReports.map((report) => (
									<div className="doc-card sb-reporting-editor-card" key={report.id}>
										<span className="doc-ext">{report.ext || 'PDF'}</span>
										<div className="doc-body">
											<RichText
												tagName="div"
												className="doc-title"
												value={report.title}
												onChange={(value) =>
													updateAnnualReport(report.id, { title: value })
												}
											/>
											<RichText
												tagName="div"
												className="muted"
												style={{ fontSize: '10px' }}
												value={report.meta}
												onChange={(value) =>
													updateAnnualReport(report.id, { meta: value })
												}
											/>
										</div>
										<span className="doc-arrow">→</span>

										{isSelected && (
											<ItemToolbar
												onAdd={() => addAnnualReport(report.id)}
												onRemove={() => removeAnnualReport(report.id)}
												canRemove={annualReports.length > 1}
											/>
										)}
									</div>
								))}
							</div>

							<div className="prose">
								<div className="entry-content">
									<div className="dashv2">
										<div
											className="bento-card sb-reporting-inner-card"
											style={{ padding: 'var(--s-4)', position: 'relative' }}
										>
											<div className="prose">
												<div className="entry-content">
													<h3 className="kicker">
														<strong>
															<RichText
																tagName="span"
																value={interimKickerTitle}
																onChange={(value) =>
																	setField('interimKickerTitle', value)
																}
															/>
														</strong>
													</h3>

													<h4 className="kicker">
														<strong>
															<RichText
																tagName="span"
																value={interimSubTitle}
																onChange={(value) =>
																	setField('interimSubTitle', value)
																}
															/>
														</strong>
													</h4>

													{interimGroups.map((group) => (
														<details
															className="wp-block-details has-gray-color has-text-color has-link-color is-layout-flow wp-block-details-is-layout-flow"
															open={group.open}
															key={group.id}
														>
															<summary>
																<strong>
																	<RichText
																		tagName="span"
																		value={group.title}
																		onChange={(value) =>
																			updateInterimGroup(group.id, {
																				title: value,
																			})
																		}
																	/>
																</strong>
															</summary>

															{isSelected && (
																<div className="sb-reporting-section-toolbar">
																	<Button
																		variant="secondary"
																		onClick={() =>
																			updateInterimGroup(group.id, {
																				open: !group.open,
																			})
																		}
																	>
																		{group.open ? 'Свернуть' : 'Раскрыть'}
																	</Button>
																	<Button
																		variant="secondary"
																		onClick={() => addInterimDocument(group.id)}
																	>
																		Добавить документ
																	</Button>
																	<Button
																		variant="secondary"
																		onClick={() => addInterimGroup(group.id)}
																	>
																		Добавить группу ниже
																	</Button>
																	<Button
																		variant="secondary"
																		isDestructive
																		onClick={() => removeInterimGroup(group.id)}
																		disabled={interimGroups.length === 1}
																	>
																		Удалить группу
																	</Button>
																</div>
															)}

															<figure className="wp-block-table is-style-stripes">
																<table className="has-fixed-layout">
																	<tbody>
																		{group.documents.map((document) => (
																			<tr key={document.id}>
																				<td className="has-text-align-center" data-align="center">
																					<strong>
																						<RichText
																							tagName="span"
																							value={document.title}
																							onChange={(value) =>
																								updateInterimDocument(
																									group.id,
																									document.id,
																									{ title: value }
																								)
																							}
																						/>
																					</strong>

																					<br />

																					<RichText
																						tagName="sub"
																						value={document.meta}
																						onChange={(value) =>
																							updateInterimDocument(
																								group.id,
																								document.id,
																								{ meta: value }
																							)
																						}
																					/>

																					{isSelected && (
																						<ItemToolbar
																							onAdd={() =>
																							addInterimDocument(group.id, document.id)
																						}
																							onRemove={() =>
																							removeInterimDocument(group.id, document.id)
																						}
																							canRemove={group.documents.length > 1}
																						/>
																					)}
																				</td>
																			</tr>
																		))}
																	</tbody>
																</table>
															</figure>
														</details>
													))}

													{isSelected && (
														<div className="sb-reporting-section-toolbar">
															<Button variant="primary" onClick={() => addInterimGroup()}>
																Добавить еще одну группу
															</Button>
														</div>
													)}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
		</>
	);
}
