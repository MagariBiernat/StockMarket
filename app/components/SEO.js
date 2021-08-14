import Head from "next/head"

const SEO = ({ title = "Stock Market App", description = "hello" }) => {
  return (
    <Head>
      <title key="title">{title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content={description} />
      <meta name="og:type" property="og:type" content="website" />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
    </Head>
  )
}

export default SEO
