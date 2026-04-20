import { __ } from '@wordpress/i18n';
import {
	RichText,
} from '@wordpress/block-editor';

import {
	DEFAULT_ANNUAL_REPORTS,
	DEFAULT_INTERIM_GROUPS,

	normalizeAnnualReports,
	normalizeInterimGroups,
} from './defaults';



export default function Edit({ attributes}) {
	const {
		annualCardTitle = 'ОТЧЕТНОСТЬ АО НКБ «СЛАВЯНБАНК»',
		annualHeading = 'ГОДОВАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ',
		annualReports: rawAnnualReports = DEFAULT_ANNUAL_REPORTS,
		interimKickerTitle = 'ПРОМЕЖУТОЧНАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ,',
		interimSubTitle = 'ПОКАЗАТЕЛИ ДЕЯТЕЛЬНОСТИ БАНКА',
		interimGroups: rawInterimGroups = DEFAULT_INTERIM_GROUPS,
	} = attributes;

	const annualReports = normalizeAnnualReports(rawAnnualReports, DEFAULT_ANNUAL_REPORTS);
	const interimGroups = normalizeInterimGroups(rawInterimGroups, DEFAULT_INTERIM_GROUPS);

	return (
	<div className="bento-card sb-reporting-main-card" style={{ padding: 'var(--s-4)' }}>
		<RichText.Content
			tagName="h3"
			className="wp-block-heading kicker"
			value={annualCardTitle}
		/>

		<p className="has-text-align-center">
			<strong>
				<RichText.Content
					tagName="span"
					value={annualHeading}
				/>
			</strong>
		</p>


		<div className="doc-shelf">
			{annualReports.map((report) => (
				<a 
				rel={report?.openInNewTab ? 'noopener noreferrer' : undefined}
				blank={report?.openInNewTab ? '_blank' : undefined}
				href={report.url} 
				className="doc-card sb-reporting-editor-card" key={report.id}>
					<span className="doc-ext">{report.ext || 'PDF'}</span>
					<div className="doc-body">
						<RichText.Content
							tagName="div"
							className="doc-title"
							value={report.title}

						/>
						<RichText.Content
							tagName="div"
							className="muted"
							style={{ fontSize: '10px' }}
							value={report.meta}
						/>
					</div>
					<span className="doc-arrow">→</span>

				</a>
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
										<RichText.Content
											tagName="span"
											value={interimKickerTitle}

										/>
									</strong>
								</h3>

								<h4 className="kicker">
									<strong>
										<RichText.Content
											tagName="span"
											value={interimSubTitle}

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
												<RichText.Content
												
													tagName="span"
													value={group.title}

												/>
											</strong>
										</summary>


										<figure className="wp-block-table is-style-stripes">
											<table className="has-fixed-layout">
												<tbody>
													{group.documents.map((document) => (
														<tr key={document.id}>
															<td className="has-text-align-center" data-align="center">
																<strong>
																	<RichText.Content
																					rel={document?.openInNewTab ? 'noopener noreferrer' : undefined}
				blank={document?.openInNewTab ? '_blank' : undefined}
				href={document?.url} 
																		tagName="a"
																		value={document.title}

																	/>
																</strong>

																<br />

																<RichText.Content
																	tagName="sub"
																	value={document.meta}

																/>

															</td>
														</tr>
													))}
												</tbody>
											</table>
										</figure>
									</details>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	);
}
