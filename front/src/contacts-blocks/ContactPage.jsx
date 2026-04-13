import { render, useEffect, useState, Fragment } from "@wordpress/element";

const pageData = window.SB_CONTACTS_PAGE_DATA || {};

async function copyText(value) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch (error) {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      return true;
    } catch {
      return false;
    }
  }
}

function clsx(...items) {
  return items.filter(Boolean).join(" ");
}

function HeroBlock({ hero }) {
  if (!hero) return null;

  return (
    <section className="sbc-block">
      <div className="sbc-container">
        <div className="sbc-hero">
          <img
            className="sbc-hero__image"
            src={hero.image}
            alt="Иллюстрация контактов банка"
          />
          <div className="sbc-hero__overlay" />
          <div className="sbc-hero__copy">
            <h1 className="sbc-hero__title">{hero.title}</h1>
            <p className="sbc-hero__text">{hero.description}</p>

            <div className="sbc-actions">
              {(hero.actions || []).map((action, index) => (
                <a
                  key={`${action.href}-${index}`}
                  className={clsx(
                    "sbc-btn",
                    action.variant === "glass-light"
                      ? "sbc-btn--glass-light"
                      : "sbc-btn--outline-light"
                  )}
                  href={action.href}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroAlert({ title, text }) {
  return (
    <div className="sbc-alert">
      <div className="sbc-alert__dot" aria-hidden="true" />
      <div>
        <div className="sbc-alert__title">{title}</div>
        <div className="sbc-muted sbc-alert__text">{text}</div>
      </div>
    </div>
  );
}

function ContactItem({ item, onToast }) {
  return (
    <div className="sbc-item">
      <div className="sbc-kicker">
        <b>{item.label}</b>
      </div>

      <div className="sbc-item__value">
        {item.href ? (
          <a href={item.href}>{item.value}</a>
        ) : (
          <span>{item.value}</span>
        )}
      </div>

      {item.note ? <div className="sbc-muted">{item.note}</div> : null}

      <div className="sbc-actions sbc-actions--wrap">
        <button
          type="button"
          className="sbc-btn sbc-btn--mini"
          onClick={async () => {
            const ok = await copyText(item.copy_value || item.value || "");
            onToast(ok ? "Скопировано" : "Не удалось скопировать");
          }}
        >
          Копировать
        </button>

        {item.href ? (
          <a className="sbc-btn sbc-btn--outline" href={item.href}>
            {item.action_label || "Открыть"}
          </a>
        ) : null}
      </div>
    </div>
  );
}

function AddressItem({ item, onToast }) {
  const mapLinks = item.map_links || {};

  return (
    <div className="sbc-item">
      <div className="sbc-kicker">
        <b>{item.label}</b>
      </div>

      <div className="sbc-item__value">
        <span>{item.value}</span>
      </div>

      {item.note ? <div className="sbc-muted">{item.note}</div> : null}

      <div className="sbc-actions sbc-actions--wrap">
        <button
          type="button"
          className="sbc-btn sbc-btn--mini"
          onClick={async () => {
            const ok = await copyText(item.copy_value || item.value || "");
            onToast(ok ? "Скопировано" : "Не удалось скопировать");
          }}
        >
          Копировать
        </button>

        {mapLinks.yandex ? (
          <a
            className="sbc-btn sbc-btn--outline"
            href={mapLinks.yandex}
            target="_blank"
            rel="noopener noreferrer"
          >
            Открыть в Яндекс Картах
          </a>
        ) : null}

        {mapLinks.google ? (
          <a
            className="sbc-btn sbc-btn--outline"
            href={mapLinks.google}
            target="_blank"
            rel="noopener noreferrer"
          >
            Открыть в Google Maps
          </a>
        ) : null}
      </div>
    </div>
  );
}

function HoursItem({ item }) {
  return (
    <div className="sbc-item">
      <div className="sbc-kicker">
        <b>{item.label}</b>
      </div>

      <div className="sbc-hours">
        {(item.alerts || []).map((alert, index) => (
          <Fragment key={`${alert.title}-${index}`}>
            <IntroAlert title={alert.title} text={alert.text} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function MiddleBlock({ middle, onToast }) {
  if (!middle) return null;

  return (
    <div className="sbc-main-card">
      <IntroAlert title={middle.intro_title} text={middle.intro_text} />

      <div className="sbc-items">
        {(middle.items || []).map((item, index) => (
          <Fragment key={item.id || index}>
            {item.type === "address" ? (
              <AddressItem item={item} onToast={onToast} />
            ) : item.type === "hours" ? (
              <HoursItem item={item} />
            ) : (
              <ContactItem item={item} onToast={onToast} />
            )}

            {index < middle.items.length - 1 ? (
              <hr className="sbc-divider" />
            ) : null}
          </Fragment>
        ))}
      </div>

      <div className="sbc-map">
        <div className="sbc-kicker sbc-center">
          <b>{middle.map_block?.title}</b>
        </div>

        <h3 className="sbc-map__title">{middle.map_block?.address}</h3>

        <div className="sbc-actions sbc-actions--wrap">
          {middle.map_block?.links?.yandex ? (
            <a
              className="sbc-btn sbc-btn--primary"
              href={middle.map_block.links.yandex}
              target="_blank"
              rel="noopener noreferrer"
            >
              Маршрут в Яндекс Картах →
            </a>
          ) : null}

          {middle.map_block?.links?.google ? (
            <a
              className="sbc-btn sbc-btn--outline"
              href={middle.map_block.links.google}
              target="_blank"
              rel="noopener noreferrer"
            >
              Маршрут в Google Maps →
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function SidebarBlock({ sidebar }) {
  if (!sidebar) return null;

  const currency = sidebar.currency_widget || {};
  const rates = (currency.rates || []).filter(
    (rate) => !Object.prototype.hasOwnProperty.call(rate, "visible") || rate.visible
  );

  return (
    <div className="sbc-stack">
      <div className="sbc-side-card">
        <h3 className="sbc-side-card__title">{currency.title}</h3>
        <div className="sbc-kicker">{currency.date_line}</div>

        <div className="sbc-fine">
          <b>{currency.legend_title}</b> {currency.buy_label} / {currency.sell_label}
        </div>

        <div className="sbc-rates">
          {rates.length ? (
            rates.map((rate) => (
              <div className="sbc-rate-row" key={rate.code}>
                <span className="sbc-mono">{rate.code}</span>
                <span className="sbc-muted">{currency.buy_label}</span>
                <span className="sbc-mono">{rate.buy}</span>
                <span className="sbc-muted">{currency.sell_label}</span>
                <span className="sbc-mono">{rate.sell}</span>
              </div>
            ))
          ) : (
            <div className="sbc-muted">{currency.empty_text}</div>
          )}
        </div>

        <div className="sbc-fine">{currency.footer_text}</div>
      </div>

      <div className="sbc-side-card">
        <div className="sbc-kicker">Полезная информация</div>
        <h3 className="sbc-side-card__title">Последние публикации</h3>

        {(sidebar.publications || []).length ? (
          <div className="sbc-posts">
            {(sidebar.publications || []).map((item, index) => (
              <a className="sbc-post" href={item.url} key={`${item.url}-${index}`}>
                <span className="sbc-muted">{item.date}</span>
                <strong>{item.title}</strong>
              </a>
            ))}
          </div>
        ) : (
          <div className="sbc-muted-card">
            Локальные новости ещё не опубликованы.
          </div>
        )}
      </div>

      <details className="sbc-details" open>
        <summary>Разделы сайта</summary>
        <div className="sbc-links">
          {(sidebar.sections || []).map((item, index) => (
            <a className="sbc-link" href={item.url} key={`${item.url}-${index}`}>
              {item.label}
            </a>
          ))}
        </div>
      </details>

      <details className="sbc-details" open>
        <summary>Рубрики</summary>
        <div className="sbc-links">
          {(sidebar.categories || []).map((item, index) => (
            <a
              className="sbc-link"
              href={item.url}
              key={`${item.url}-${index}`}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </details>
    </div>
  );
}

function ContactsPage({ data }) {
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(""), 1800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  return (
    <main className="sbc-page">
      <HeroBlock hero={data.hero} />

      <section className="sbc-block">
        <div className="sbc-container">
          <div className="sbc-layout">
            <MiddleBlock middle={data.middle} onToast={setToast} />
            <SidebarBlock sidebar={data.sidebar} />
          </div>
        </div>
      </section>

      <div className={clsx("sbc-toast", toast && "is-visible")}>
        {toast || "Готово"}
      </div>
    </main>
  );
}

const root = document.getElementById("sb-contacts-page-root");

if (root) {
  render(<ContactsPage data={pageData} />, root);
}