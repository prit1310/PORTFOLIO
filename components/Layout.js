import Head from "next/head"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children, title = "Prit Senjaliya - Portfolio" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Personal portfolio of Prit Senjaliya - Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
