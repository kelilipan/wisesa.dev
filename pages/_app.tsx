import type { AppProps } from "next/app";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Flex minH="100vh" direction="column">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}
export default MyApp;
