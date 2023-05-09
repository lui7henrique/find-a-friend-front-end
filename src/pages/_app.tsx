import type { AppProps } from "next/app";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import NextNProgress from "nextjs-progressbar";

import { globalStyles } from "src/styles/global";

import AOS from "aos";
import "aos/dist/aos.css";
import { colors } from "src/styles/theme";
import { useRouter } from "next/router";

globalStyles();

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      duration: 250,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NextNProgress
        color={colors.yellow500}
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />

      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
