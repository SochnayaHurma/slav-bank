
home
href="<?php echo esc_url(sb_alpha_url('home')); ?>"
юр лицам
href="<?php echo esc_url(sb_alpha_url('write-to-bank')); ?>#form"

href="<?php echo esc_url(sb_alpha_url('currency-control')); ?>"

href="<?php echo esc_url(sb_alpha_url('fx-account-service')); ?>"

href="<?php echo esc_url(sb_alpha_url('account-service')); ?>"

href="<?php echo esc_url(sb_alpha_url('business-lending')); ?>"
href="<?php echo esc_url(sb_alpha_url('business-deposits')); ?>"
href="<?php echo esc_url(sb_alpha_url('aml-fatca')); ?>"

href="<?php echo esc_url(sb_alpha_url('zapros-na-otkrytie-raschetnogo-scheta')); ?>"
href="<?php echo esc_url(sb_alpha_url('zapros-na-kreditovanie-msp')); ?>"

href="<?php echo esc_url(sb_alpha_url('business-lending')); ?>"
контакты
href="<?php echo esc_url(sb_alpha_url('contacts')); ?>"
безопасность
href="<?php echo esc_url(sb_alpha_url('security')); ?>"

href="<?php echo esc_url(sb_alpha_url('client-bank-online')); ?>"

href="<?php echo esc_url(sb_alpha_url('appeal-123-fz')); ?>"

href="<?php echo esc_url(sb_alpha_url('faq')); ?>"
href="<?php echo esc_url(sb_alpha_url('tariffs_slavny')); ?>"
href="<?php echo esc_url(sb_alpha_url('tariff_privetstvenny')); ?>"
href="<?php echo esc_url(sb_alpha_url('tariff-depositny')); ?>"
href="<?php echo esc_url(sb_alpha_url('tariffs')); ?>"
href="<?php echo esc_url(sb_alpha_url('vacancies')); ?>"
href="<?php echo esc_url(sb_alpha_url('info_bank')); ?>"
href="<?php echo esc_url(sb_alpha_url('requisites_bank')); ?>"
href="<?php echo esc_url(sb_alpha_url('instruction')); ?>"
href="<?php echo esc_url(sb_alpha_url('private-persons')); ?>"
href="<?php echo esc_url(sb_alpha_url('ecp-regeneration')); ?>"
href="<?php echo esc_url(sb_alpha_url('payment-demands')); ?>"
href="<?php echo esc_url(sb_alpha_url('cashless-payments')); ?>"
href="<?php echo esc_url(sb_alpha_url('cash-payments')); ?>"
href="<?php echo esc_url(sb_alpha_url('crs')); ?>"
href="<?php echo esc_url(sb_alpha_url('support')); ?>"
href="<?php echo esc_url(sb_alpha_url('legal-entities')); ?>"
href="<?php echo esc_url(sb_alpha_url('covid19')); ?>"



<?php get_template_part('template-parts/home', 'stack'); ?>


              <a class="v3-chip" href="<?php echo esc_url(sb_alpha_url('tariffs')); ?>">Тарифы</a>
              <a class="v3-chip" href="<?php echo esc_url(sb_alpha_url('contacts')); ?>">Контакты</a>
              <a class="v3-chip" href="<?php echo esc_url(sb_alpha_url('novosti')); ?>">Новости</a>



                  <?php foreach ($tariffs_view as $item) : ?>
                    <a class="doc-card" href="<?php echo esc_url((string) $item['url']); ?>">
                      <span class="doc-ext"><?php echo esc_html((string) $item['kind']); ?></span>
                      <div class="doc-body">
                        <div class="doc-title"><?php echo esc_html((string) $item['title']); ?></div>
                        <div class="muted"><?php echo esc_html((string) $item['date']); ?></div>
                      </div>
                      <span class="doc-arrow">→</span>
                    </a>
                  <?php endforeach; ?>



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