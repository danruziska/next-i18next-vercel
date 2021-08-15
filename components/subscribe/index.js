import { useTranslation } from 'next-i18next';

const Subscribe = () => {
  const { t } = useTranslation(['common']);
  return (
    <section className="subscribe">
      <div className="container">
        <div style={{backgroundImage: 'url(/images/subscribe.png)'}} className="subscribe__content">
          <h4>{t('pageIntro_subscribe_text')}</h4>

          <form className="subscribe__form">
            <input type="email" placeholder={t('emailAddress')} />
            <button type="submit" className="btn btn--rounded btn--yellow">{t('pageIntro_subscribe_button_text')}</button>
          </form>
        </div>
      </div>
    </section>
  )
};


export default Subscribe