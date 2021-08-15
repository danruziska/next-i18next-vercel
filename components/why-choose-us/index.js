import { useTranslation } from 'next-i18next';

const WhyChooseUs = () => {
  const { t } = useTranslation(['common']);
  return (
    <section className="section">
      <div className="container">
        <header className="section__intro">
          <h4>{t("pageIntro_whyChooseUsText")}</h4>
        </header>

        <ul className="shop-data-items">
          <li>
            <i className="icon-shipping"></i>
            <div className="data-item__content">
              <h4>{t('pageIntro_whyChooseUs_digitalShipping_title')}</h4>
              <p>
                All purchases over $199 are eligible for free shipping via USPS
                First Class Mail.
              </p>
            </div>
          </li>

          <li>
            <i className="icon-payment"></i>
            <div className="data-item__content">
              <h4>{t('pageIntro_whyChooseUs_multiplePaymentMethods_title')}</h4>
              <p>
                All payments are processed instantly over a secure payment
                protocol.
              </p>
            </div>
          </li>

          <li>
            <i className="icon-cash"></i>
            <div className="data-item__content">
              <h4>{t('pageIntro_whyChooseUs_security_title')}</h4>
              <p>
                If an item arrived damaged or you've changed your mind, you can
                send it back for a full refund.
              </p>
            </div>
          </li>

          <li>
            <i className="icon-materials"></i>
            <div className="data-item__content">
              <h4>{t('pageIntro_whyChooseUs_gallery_title')}</h4>
              <p>
                Designed to last, each of our products has been crafted with the
                finest materials.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
