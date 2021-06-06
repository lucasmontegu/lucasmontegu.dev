import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
  extendTheme
} from "@chakra-ui/react"

export function Chakra({ cookies, children }:any) {

  const theme = extendTheme({
    styles: {
      global: ({ colorMode }: any) => ({
        body: {
          bg: colorMode === "dark" ? "#f5f6f9" : "#1a1a1a",
          color: colorMode === "dark" ? "#1a1a1a" : "#f5f6f9",
        },
      }),
    },
  })

  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManager(cookies)
      : localStorageManager
  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export function getServerSideProps({ req }:any) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  }
}