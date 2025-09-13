import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SeoMeta = ({ title, description, image }) => {
  const location = useLocation();
  const currentUrl = `https://yourdomain.com${location.pathname}`;
  const ogImage = image || 'https://yourdomain.com/default-image.png';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SeoMeta;
