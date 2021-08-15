const Logo = ({ onTop }) => {
  return (
    <img
      alt="Karina Santelo logo"
      src={onTop ? '/images/logo_white.png' : '/images/logo_black.png'}
      className="site-logo"
    />
  );
};

export default Logo;
