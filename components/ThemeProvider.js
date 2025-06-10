import { ThemeProvider } from "next-themes"

export default function CustomThemeProvider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  )
}
