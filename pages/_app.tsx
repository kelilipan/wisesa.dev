import type { AppProps } from "next/app";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import theme from "@/theme";
import PrismTheme from "@/components/PrismTheme";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import { DefaultSeo } from "next-seo";
import config from "site.config";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        description="A computer science student and a software engineer."
        defaultTitle="Hi i'm Wisesa."
        titleTemplate={`%s · Wisesa.dev`}
        openGraph={{
          title: "Hi i'm Wisesa.",
          description: "A computer science student and a software engineer.",
          type: "website",
          site_name: "Wisesa.dev",
          images: [
            {
              url: `${config.baseUrl}/img/og-default.jpg`,
              width: 1200,
              height: 627,
              alt: "Wisesa.dev",
            },
          ],
        }}
      />
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
