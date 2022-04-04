import Head from "next/head"

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="wrapper">
          <div className="header">
                <Head>
                  <title>learn next</title>
                  <meta name="keyword" content='web development, programming'/>
                </Head>
                <h1>Home</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
