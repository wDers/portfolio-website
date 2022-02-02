import { Layout } from "../components";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import "../styles/global.css";

function MyApp({ Component, pageProps, router }) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
  };

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} variants={variants} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
