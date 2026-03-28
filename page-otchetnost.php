<?php get_header(); ?>

<main id="main">
  <section class="block">
    <div class="container">
      <div class="hero-wrap" style="padding: var(--s-5)">
        <div class="row" style="align-items: flex-start; gap: var(--s-4); flex-wrap: wrap">
          <div style="min-width: 280px; flex: 1 1 520px">
            <div class="kicker">Информация банка</div>
            <h1 style="margin: 8px 0 10px">Отчетность</h1>
            <p class="muted" style="max-width: 78ch">
              Бухгалтерская (финансовая) отчетность раскрывается в ограниченном
              объёме в соответствии с Решением Совета директоров Банка России от
              24 декабря 2024 года.
            </p>

            <div class="row" style="margin-top: var(--s-4); flex-wrap: wrap">
              <a class="btn primary" href="#content">Содержание</a>
              <a class="btn outline" href="<?php echo esc_url(sb_alpha_url('home')); ?>">На главную</a>
            </div>
          </div>

          <div class="pill" style="align-self: flex-start">
            <span class="badge">Переход</span>
            <a href="<?php echo esc_url(sb_alpha_url('requisites_bank')); ?>" class="mono">Реквизиты</a>
            <span class="muted">·</span>
            <a href="<?php echo esc_url(sb_alpha_url('info-bank-page')); ?>">Информация банка</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="block dashv2" id="content">
    <div class="container">

      <div class="bento">
        <div class="bento-card" style="padding: var(--s-4); position: relative">
          <div class="section-flow">
            <div>
              <div class="kicker">Отчетность банка</div>
              <h2 style="margin: 8px 0 10px"><strong>ОТЧЕТНОСТЬ АО НКБ «СЛАВЯНБАНК»</strong></h2>
              <p class="has-text-align-center has-gray-color has-text-color">
                <strong>ГОДОВАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ</strong>
              </p>
            </div>

            <div class="doc-shelf">
              <?php foreach (sb_alpha_get_reporting_annual_reports() as $item) : ?>
                <a class="doc-card" href="<?php echo esc_url($item['url']); ?>" target="_blank" rel="noopener">
                  <span class="doc-ext">PDF</span>
                  <div class="doc-body">
                    <div class="doc-title"><?php echo esc_html($item['title']); ?></div>
                    <div class="muted" style="font-size: 10px"><?php echo esc_html($item['footer']); ?></div>
                  </div>
                  <span class="doc-arrow">→</span>
                </a>
              <?php endforeach; ?>
            </div>

            <div class="prose">
              <div class="entry-content">
                <h3 class="kicker"><strong>ПРОМЕЖУТОЧНАЯ БУХГАЛТЕРСКАЯ (ФИНАНСОВАЯ) ОТЧЕТНОСТЬ</strong></h3>
                <h4 class="kicker"><strong>ПОКАЗАТЕЛИ ДЕЯТЕЛЬНОСТИ БАНКА</strong></h4>
              <details
                class="wp-block-details has-gray-color has-text-color has-link-color wp-elements-6094be1a884f101d248f9383e4fde2d5 is-layout-flow wp-block-details-is-layout-flow">
                <summary>
                  
                  <strong>Промежуточная бухгалтерская (финансовая) отчетность за 2025
                    год</strong>
                </summary>
                <figure class="wp-block-table is-style-stripes">
                  <table class="has-fixed-layout">
                    <tbody>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/otchet-publ-i-2025.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Промежуточная бухгалтерская (финансовая)
                              отчетность за I квартал 2025 г.</strong><br /><sub>(опубликовано 16.05.2025г.)</sub></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/otchet-publ-ii-2025.pdf"><strong>Промежуточная
                              бухгалтерская (финансовая)
                              отчетность за I полугодие 2025 г.</strong><br /><sub>(опубликовано-07.08.2025г.)</sub></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/otchet-publ-9-2025.pdf"><strong>Промежуточная
                              бухгалтерская (финансовая)
                              отчетность за 9 месяцев 2025 г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/otchet-publ-ii-2025.pdf"><sub>(опубликовано-12.11.2025г.)</sub></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
              </details>

              <details
                class="wp-block-details has-gray-color has-text-color has-link-color wp-elements-36bfd15810dc3d28eb02eb981aa728cc is-layout-flow wp-block-details-is-layout-flow">
                <summary>
                  
                  <strong>Промежуточная бухгалтерская (финансовая) отчетность за 2024
                    год</strong>
                </summary>
                

                <figure class="wp-block-table is-style-stripes">
                  <table class="has-fixed-layout">
                    <tbody>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/otchet_publ-1-24-1.pdf"><strong><u>Промежуточная
                                бухгалтерская (финансовая)
                                отчетность за I квартал 2024 г.</u></strong><br /><sub>(опубликовано
                              16.05.2024г.)</sub></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/na-sajt-otchet-2-2024-publ.pdf"><strong>Промежуточная
                              бухгалтерская (финансовая)
                              отчетность за I полугодие 2024 г.</strong><br /><sub>(опубликовано 09.08.2024г.)</sub></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/otchet-publ-9-2024.pdf"><strong>Промежуточная
                              бухгалтерская (финансовая)
                              отчетность за 9 месяцев 2024 г.</strong><br /><sub>(опубликовано 08.11.2024г.)</sub></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
              </details>

              <details
                class="wp-block-details has-gray-color has-text-color has-link-color wp-elements-1c0cbaf2f381b6c793a3227c14c7ed14 is-layout-flow wp-block-details-is-layout-flow">
                <summary>
                  
                  <strong>Промежуточная бухгалтерская (финансовая) отчетность за 2023
                    год</strong>
                </summary>
                

                <figure class="wp-block-table is-style-stripes">
                  <table class="has-fixed-layout">
                    <tbody>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/otchet-i-2023-for-publ.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Промежуточная бухгалтерская (финансовая)
                              отчетность за I квартал 2023 г.</strong><br /><sub>(опубликовано 15.05.2023г.)</sub></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/otchet-6-2023-publ.pdf" target="_blank"
                            rel="noreferrer noopener"><strong><u>Промежуточная бухгалтерская (финансовая)
                                отчетность за I полугодие 2023 г.</u></strong><br /><sub>(опубликовано
                              02.08.2023г.)</sub></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/publ-otchet-9-2023.pdf"><strong><u>Промежуточная
                                бухгалтерская (финансовая)
                                отчетность за 9 месяцев 2023 г.</u></strong><br /><sub>(опубликовано
                              07.11.2023г.)</sub></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
              </details>

              <details
                class="wp-block-details has-gray-color has-text-color has-link-color wp-elements-29cde331b4598194bb67c11ac475a8e9 is-layout-flow wp-block-details-is-layout-flow">
                <summary>
                  
                  <strong>Промежуточная бухгалтерская (финансовая) отчетность за 2022
                    год</strong>
                </summary>
                

                <figure class="wp-block-table is-style-stripes">
                  <table class="has-fixed-layout">
                    <tbody>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pocaz_01012022.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.01.2022 г.</strong><br /><sub>дата
                              размещения 18.01.2022г.</sub></a>
                        </td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pocaz_01022022.pdf"><strong>Показатели на
                              01.02.2022 г.</strong><br /><sub>дата размещения 09.02.2022г.</sub>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center"></td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
              </details>

              <details
                class="wp-block-details has-gray-color has-text-color has-link-color wp-elements-389ec5414216c11d23133fcef6fd05fa is-layout-flow wp-block-details-is-layout-flow">
                <summary>
                  
                  <strong>Промежуточная бухгалтерская (финансовая) отчетность за 2021
                    год</strong>
                </summary>
                

                <figure class="wp-block-table is-style-stripes">
                  <table class="has-navy-blue-color has-text-color">
                    <tbody>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pr_pokaz_01012021.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Предварительные показатели на 01.01.2021
                              г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/pr_pokaz_01012021.xls" target="_blank"
                            rel="noreferrer noopener"><sub>дата размещения</sub> <sub>18.01.2021</sub></a>&nbsp;&nbsp;
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01022021.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.02.2021 г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/pokaz_01022021.xls" target="_blank"
                            rel="noreferrer noopener"><sub>дата размещения 17.02.2021</sub></a>&nbsp;
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pokaz_01032021.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.03.2021 г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/pokaz_01032021.xls" target="_blank"
                            rel="noreferrer noopener"><sub>дата размещения 10.03.2021&nbsp;&nbsp;</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pocaz_01042021.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.04.2021 г.</strong><br /><sub>дата
                              размещения 08.04.2021г.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pocaz_01052021.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.05.2021 г.</strong><br /><sub>дата
                              размещения 12.05.2021г.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <strong><a href="https://slavbank.ru/wp-content/uploads/otchet-1-2021.pdf" target="_blank"
                              rel="noreferrer noopener"><strong>Промежуточная бухгалтерская (финансовая)
                                отчетность за I квартал 2021 г.</strong><br /></a></strong><a
                            href="https://slavbank.ru/wp-content/uploads/otchet-1-2021.pdf" target="_blank"
                            rel="noreferrer noopener"><sub>(опубликовано 12.05.2021г.)&nbsp;&nbsp;</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pocaz_01062021.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.06.2021 г.</strong><br /><sub>дата
                              размещения 07.06.2021г</sub></a><a
                            href="https://slavbank.ru/wp-content/uploads/pocaz_01052021.xls"><sub>.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pokazateli-na-1.07.2021-1.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.07.2021 г.</strong><br /><sub>дата
                              размещения 08.07.2021г</sub></a><a
                            href="https://slavbank.ru/wp-content/uploads/pocaz_01052021.xls"><sub>.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <strong><a href="https://slavbank.ru/wp-content/uploads/otchet-2-2021.pdf" target="_blank"
                              rel="noreferrer noopener">Промежуточная бухгалтерская (финансовая)
                              отчетность за I полугодие 2021 г.<br /></a></strong><sub><a
                              href="https://slavbank.ru/wp-content/uploads/otchet-2-2021.pdf">(опубликовано
                              30.07.2021г.)</a></sub>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pocaz_01082021.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.08.2021 г.</strong><br /><sub>дата
                              размещения 10.08.2021г.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pokaz_01092021.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.09.2021 г.</strong><br /><sub>дата
                              размещения 08.09.2021г.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pokaz_01102021.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.10.2021 г.</strong><br /><sub>дата
                              размещения 12.10.2021г.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/otchet-3-2021.pdf" target="_blank"
                            rel="noreferrer noopener"><strong><u>Промежуточная бухгалтерская (финансовая)
                                отчетность за 9 месяцев 2021 г.</u></strong><br /><sub>(опубликовано
                              10.11.2021г.)&nbsp;&nbsp;</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pokaz_01112021.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.11.2021 г.</strong><br /><sub>дата
                              размещения 15.11.2021г.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pokaz_01122021.pdf" target="_blank"
                            rel="noreferrer noopener">
                            <strong>Показатели на 01.12.2021 г.</strong><br /><sub>дата размещения
                              09.12.2021г.</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
              </details>

              <details
                class="wp-block-details has-gray-color has-text-color has-link-color wp-elements-c72bfe4d7d46303c55a244e13cddbea0 is-layout-flow wp-block-details-is-layout-flow">
                <summary>
                  
                  <strong>Промежуточная бухгалтерская (финансовая) отчетность за 2020
                    год</strong>
                </summary>
                

                <figure class="wp-block-table is-style-stripes">
                  <table class="has-navy-blue-color has-text-color">
                    <tbody>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pr_pokaz_01012020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Предварительные показатели на
                              01.01.2020г.</strong></a><br /><sub><a
                              href="https://slavbank.ru/wp-content/uploads/pr_pokaz_01012020.xls" target="_blank"
                              rel="noreferrer noopener">дата размещения 15.01.2020г.</a>&nbsp;</sub>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pokaz_01022020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.02.2020 г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/pokaz_01022020.xls" target="_blank"
                            rel="noreferrer noopener"><sub>дата размещения 14.02.2020</sub></a>&nbsp;
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01032020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.03.2020 г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/pokaz_01032020.xls" target="_blank"
                            rel="noreferrer noopener"><sub>дата размещения 10.03.2020</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01042020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.04.2020 г.</strong></a><br /><sub><a
                              href="https://slavbank.ru/wp-content/uploads/pokaz_01042020.xls" target="_blank"
                              rel="noreferrer noopener">дата размещения 13.04.2020</a>&nbsp;</sub>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/pokaz_01052020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.05.2020 г.</strong></a><br /><sub><a
                              href="https://slavbank.ru/wp-content/uploads/pokaz_01052020.xls" target="_blank"
                              rel="noreferrer noopener">дата&nbsp;размещения 13.05.2020</a>&nbsp;</sub>&nbsp;
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          <a href="https://slavbank.ru/wp-content/uploads/2021/03/otchet04-2020.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Промежуточная бухгалтерская (финансовая)
                              отчетность за I квартал 2020 года&nbsp;</strong></a><br /><sub><a
                              href="https://slavbank.ru/wp-content/uploads/2021/03/otchet04-2020.pdf" target="_blank"
                              rel="noreferrer noopener">(опубликовано 18.05.2020г)</a>&nbsp;</sub>&nbsp;
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01072020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.07.2020 г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/pokaz_01072020.xls" target="_blank"
                            rel="noreferrer noopener"><sub>дата размещения 15.07.2020</sub></a>&nbsp;
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/2021/03/1h-2020.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Промежуточная бухгалтерская (финансовая)
                              отчетность за I полугодие 2020 года</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/2021/03/1-2018.pdf" target="_blank"
                            rel="noreferrer noopener"><sub>(опубликовано 29.07.2020г)&nbsp;&nbsp;</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01082020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.08.2020 г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/pokaz_01082020.xls" target="_blank"
                            rel="noreferrer noopener"><sub>дата размещения&nbsp;26.08.2020</sub></a>&nbsp;
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01092020.xlss" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.09.2020 г.</strong></a><br /><sub><a
                              href="https://slavbank.ru/wp-content/uploads/pokaz_01092020.xlss" target="_blank"
                              rel="noreferrer noopener">дата размещения 08.09.2020</a>&nbsp;</sub>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01102020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.10.2020 г.</strong></a><br /><sub><a
                              href="https://slavbank.ru/wp-content/uploads/pokaz_01102020.xls" target="_blank"
                              rel="noreferrer noopener">дата размещения 15.10.2020</a>&nbsp;&nbsp;</sub>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/2021/03/pbo9m2020.pdf" target="_blank"
                            rel="noreferrer noopener"><strong>Промежуточная бухгалтерская (финансовая)
                              отчетность за 9 месяцев 2020 г.</strong></a><br /><sub><a
                              href="https://slavbank.ru/wp-content/uploads/2021/03/pbo9m2020.pdf" target="_blank"
                              rel="noreferrer noopener">(опубликовано 28.10.2020г.)</a>&nbsp;&nbsp;</sub>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01112020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.11.2020 г.</strong></a><br /><sub><a
                              href="https://slavbank.ru/wp-content/uploads/pokaz_01112020.xls" target="_blank"
                              rel="noreferrer noopener">дата размещения 13.11.2020</a>&nbsp;&nbsp;</sub>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="has-text-align-center" data-align="center">
                          &nbsp;<a href="https://slavbank.ru/wp-content/uploads/pokaz_01122020.xls" target="_blank"
                            rel="noreferrer noopener"><strong>Показатели на 01.12.2020 г.</strong></a><br /><a
                            href="https://slavbank.ru/wp-content/uploads/pokaz_01122020.xls" target="_blank"
                            rel="noreferrer noopener"><sub>дата размещения 14.12.2020</sub></a>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </figure>
              </details>
            </div>
          </div>
        </div>
        <?php get_template_part('template-parts/home', 'stack'); ?>
      </div>
    </div>
  </section>

</main>

<?php get_footer(); ?>
