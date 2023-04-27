import type { AppProps } from "next/app";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { globalStyles } from "src/styles/global";

import AOS from "aos";
import "aos/dist/aos.css";

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
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
