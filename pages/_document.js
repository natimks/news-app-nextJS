import Document, { Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <html lang='pt-BR'>
        <head>
          <meta charSet='UTF-8' />
          <meta name='keywords' content='next react seo' />
          <link rel='stylesheet' href='/static/styles.css'></link>
          <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
            integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
            crossOrigin='anonymous'
          ></link>
          <meta name='author' content='Natalia Maria' />
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
