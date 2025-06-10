import "../styles/globals.css"
import CustomThemeProvider from "../components/ThemeProvider"

export default function App({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <Component {...pageProps} />
    </CustomThemeProvider>
  )
}
