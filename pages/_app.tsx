import "@/styles/global.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import config from "site.config";
import { AnimatePresence, motion } from "framer-motion";
import { usePanelbear } from "@/lib/usePanelBear";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, router }: AppProps) {
  usePanelbear(config.panelbear);
  useEffect(() => {
    //CAT
    console.log(
      `%c
           /\\_____/\\ \r
          /  o   o  \\ \r
         ( ==  ^  == ) \r
          )         ( \r
         (           ) \r
        ( (  )   (  ) ) \r
       (__(__)___(__)__)
    `,
      "font-weight:bold; font-size:15px;color:#ff4747"
    );
  }, []);
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <DefaultSeo
        description={config.description}
        defaultTitle="Hi i'm Wisesa."
        titleTemplate={`%s · Wisesa.dev`}
        openGraph={{
          title: "Hi i'm Wisesa.",
          description: config.description,
          images: [
            {
              url: `${config.baseUrl}/favicon/og-default.jpg`,
            },
          ],
        }}
        twitter={{
          handle: "@svspcs",
          cardType: "summary_large_image",
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name="Anvaqta Tangguh Wisesa"
        url={config.baseUrl}
        sameAs={[
          "http://www.linkedin.com/in/anvaqta",
          "https://github.com/kelilipan",
          "https://svspicious.medium.com/",
          "https://instagram.com/anvaqta",
        ]}
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <motion.main
            key={router.route}
            className="flex flex-col h-full flex-grow"
            animate="enter"
            exit="exit"
            initial="initial"
            variants={{
              initial: { opacity: 0, y: 5 },
              enter: { opacity: 1, y: 0, transition: { duration: 0.2 } },
              exit: { opacity: 0, transition: { duration: 0.1 } },
            }}
          >
            <Component {...pageProps} />
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default MyApp;
