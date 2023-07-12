import { useEffect, useRef } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import PlausibleProvider from 'next-plausible';
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';

import '@/styles/tailwind.css';
import 'focus-visible';

function usePrevious(value) {
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname);

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <PlausibleProvider domain="jonathanpark.ca">
            <FpjsProvider
              loadOptions={{
                apiKey: 'Q9Tin0Pcy5Mgsw04VNvQ',
                scriptUrlPattern: 'https://jonathanpark.ca/39wGgI707VIKmG7U/O7y3kMque0DaVX7s?apiKey=<apiKey>&version=<version>&loaderVersion=<loaderVersion>',
                endpoint: 'https://jonathanpark.ca/39wGgI707VIKmG7U/nyVRNqHm5JGxgESd',
              }}
            >
              <Component previousPathname={previousPathname} {...pageProps} />
            </FpjsProvider>
          </PlausibleProvider>
        </main>
        <Footer />
      </div>
    </>
  );
}
