import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';
import { useTranslation } from 'next-i18next';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {
  const { t } = useTranslation(['common']);
  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide page-intro__banner_collection1">
            <div className="container">
              <div className="page-intro__slide__content">
                {/* <h2>{t('pageIntro_Slide1')}</h2> */}
                <a href="#" className="btn-shop"><i className="icon-right"></i>{t('pageIntro_seeCollectionButton')}</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide page-intro__banner_collection2">
            <div className="container">
              <div className="page-intro__slide__content">
                {/* <h2>Make your house into a home</h2> */}
                <a href="#" className="btn-shop"><i className="icon-right"></i>{t('pageIntro_seeCollectionButton')}</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
};

export default PageIntro