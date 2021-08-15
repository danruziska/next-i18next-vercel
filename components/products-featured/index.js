import ProductsCarousel from './carousel';
import useSwr from 'swr';
import { useTranslation } from 'next-i18next';

const ProductsFeatured = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSwr('/api/products', fetcher);
  const { t } = useTranslation(['common']);

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>{t('pageIntro_productsFeatured_title')}</h3>
          <a href="/products" className="btn btn--rounded btn--border">{t('pageIntro_productsFeatured_showAllButton')}</a>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  )
};

export default ProductsFeatured