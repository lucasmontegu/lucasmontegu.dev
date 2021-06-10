import { Chakra } from "../src/components/Chakra";
import type { AppProps } from "next/app";
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Component {...pageProps} />
    </Chakra>
  );
}

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from "../src/components/Chakra";
