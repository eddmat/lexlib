import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Helmet } from 'react-helmet'

export default class extends Document {
  static async getInitialProps(ctx: any) {
    const documentProps = await super.getInitialProps(ctx)
    return { ...documentProps, helmet: Helmet.renderStatic() }
  }

  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
