import type { AppProps } from "next/app";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import theme from "@/theme";
import PrismTheme from "@/components/PrismTheme";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <PrismTheme>
        <Flex minH="100vh" direction="column">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Flex>
      </PrismTheme>
    </ChakraProvider>
  );
}
export default MyApp;
