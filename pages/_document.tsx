import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head />
        <body className="bg-gray-100 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
