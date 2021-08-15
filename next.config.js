module.exports = {
  async rewrites() {
    return [
      [
        {
          source: "/carrinho/confirmacao",
          destination: "/cart/checkout",
        },
        {
          source: "/carrinho",
          destination: "/cart",
        },
        {
          source: "/esqueci-minha-senha",
          destination: "/forgot-password",
        },
        {
          source: "/login",
          destination: "/entrar",
        },
        {
          source: "/produtos",
          destination: "/products",
        },
        {
          source: "/registro",
          destination: "/register",
        }
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'pt-BR'],
  },
}
