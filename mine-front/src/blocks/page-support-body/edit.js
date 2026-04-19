import { InnerBlocks, RichText, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';




export default function Edit({attributes, setAttributes}) {
	const [addMenuAnchor, setAddMenuAnchor] = useState(null);

  const {
    title,
    titleFaqRefs
  } = attributes;

  
  const blockProps = useBlockProps({
		className: 'bento-card',
	});

const TEMPLATE = [
  [
    'slav-bank/title',
    {
      title: 'Данный раздел создан для поддержки клиентов АО НКБ «СЛАВЯНБАНК».',
      level: '2'
    }
  ],
  [
    'slav-bank/kicker', {text: 'Популярные темы'}
  ],
  [
    'slav-bank/tile-container', {
      tiles: [
        {
          "title": "Часто задаваемые вопросы",
          "urlTitle": "Открыть раздел →",
          "url": ""
        },
        {
          "title": "Перегенерация ЭЦП",
          "urlTitle": "Открыть раздел →",
          "url": ""
        },
        {
          "title": "Рекомендации по безопасности",
          "urlTitle": "Открыть раздел →",
          "url": ""
        }
      ]
    }
  ],
  [
    'slav-bank/kicker', {text: 'Документы'}
  ],
  [
    'slav-bank/tile-file-container', {}
  ],
    [
    'slav-bank/title',
    {
      title: 'В случае возникновения вопросов вы можете связаться с\nнами по телефонам, указанным ниже:',
      level: '3'
    }
  ],
    [
    'slav-bank/simple-card',
    {
      title: "Телефоны технической поддержки:",
      description: "(8162) 66-51-95,\n66-52-47,\n+7921-690-17-00"
    }
  ],
    [
    'slav-bank/one-row-card',
    {
      title: "Режим работы:",
      description: "с 8.30 до 17.30 (пт. – до 16.30), обед с 13.00 до 14.00, (выходной суб., вск.)"
    }
  ],
    [
    'slav-bank/title-ref',
    {
      title: "Электронная почта:&nbsp;",
      description: "nkb@slavbank.ru",
      url: "mailto:nkb@slavbank.ru"
    }
  ],
];

	return (
        <div className="bento-card" >
          <InnerBlocks 
                template={TEMPLATE}
                templateLock={'all'}/>

          <div className="prose">
            <div className="entry-content">

              <hr/>
              <h2><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Здесь вы найдете полезную информацию, инструкции, ссылки для
                  работы с системами банка.</strong></h2>
              <p><strong>&nbsp; &nbsp; &nbsp; <span>&gt;&gt; <a href="esc_url(sb_alpha_url('faq'))">Часто задаваемые вопросы</a>&nbsp;
                  </span>— ответы на вопросы, возникающие при работе в системе Клиент-Банк (данный раздел сайта
                  постоянно обновляется и редактируется).&nbsp;</strong></p>
              <p><strong><span>&nbsp; &nbsp; &nbsp; &gt;&gt; Вход в Клиент-Банк &nbsp;</span>— <a
                    href="https://dbo.slavbank.ru:20101/">https://dbo.slavbank.ru:20101 </a> (для доступа возможно
                  потребуется установка плагина).<br/>&nbsp; &nbsp; &nbsp; <span>Система&nbsp;<span className="emphasis">«ДБО
                      BS-Client x64»</span></span> – это современная и удобная система интернет-банкинга, позволяющая
                  клиентам Банка осуществлять полноценное информационное и платежно-расчетное обслуживание в Банке без
                  личного присутствия с использованием персонального компьютера и сети Интернет.&nbsp;</strong></p>
              <p><strong><span>&nbsp; &nbsp; &nbsp; &nbsp; &gt;&gt; Резервный вход в Клиент-Банк —</span> <a
                    href="https://dbo1.slavbank.ru:20101/">https://dbo1.slavbank.ru:20101</a>&nbsp;— необходим для входа
                  в Клиент-Банк в случае, если&nbsp; <span>вход в Клиент-Банк</span> по обычной ссылке
                  &nbsp;<span>недоступен</span>.&nbsp; Данной ссылкой можно воспользоваться <span>только после
                    подтверждения банка</span> о переходе на <span>Резервный вход</span>, позвонив в техническую
                  поддержку Банка.</strong></p>
              <p><strong><span> &nbsp; &nbsp; &nbsp; &nbsp; &gt;&gt; Руководство пользователя «Интернет-Клиент»</span>
                  —&nbsp; полная подробная инструкция по работе в системе «Клиент-Банк». <a
                    href="https://slavbank.ru/wp-content/uploads/internet-klient.-rukovodstvo-polzovatelya.pdf"><span>Скачать
                      здесь &gt;&gt;</span></a></strong></p>
              <p><strong>&nbsp; &nbsp; &nbsp; <span>&gt;&gt; </span><a href="ecp-regeneration.html"><span>Перегенерация
                      ЭЦП</span> </a>– продление прав доступа в Клиент-Банк. Здесь представлена подробная пошаговая
                  инструкция по перегенерации ЭЦП.&nbsp;</strong></p>
              <p><strong>&nbsp; &nbsp; &nbsp; <span>&gt;&gt; <a href="https://www.ammyy.com/ru/">Удаленное
                      управление</a></span> – здесь вы сможете скачать последнюю версию программы <span>Ammyy
                    Admin</span> удаленного доступа (адрес сайта <span>https://www.ammyy.com/ru</span>/,
                  наименование&nbsp; файла программы <span>AA_v3.exe</span>)</strong></p>
              <p><strong>&nbsp; &nbsp; &nbsp; <span>&gt;&gt; <a href="esc_url(sb_alpha_url('security'))">Рекомендации по
                      безопасности&nbsp;</a></span>— обращаем Ваше внимание на соответствие доменного имени сайта&nbsp;—
                  <a href="esc_url(sb_alpha_url('home'))">href="echo esc_url(sb_alpha_url('home'))"</a>&nbsp;или &nbsp;<a
                    href="https://dbo.slavbank.ru:20101/">dbo.slavbank.ru</a>.</strong></p>


              <p></p>
            </div>
          </div>

        </div>
	);
}