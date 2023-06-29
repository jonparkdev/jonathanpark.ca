// pages/index.tsx
import { Container } from '@/components/Container';
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';

export default function Home() {
  const { isLoading, error, data, getData } = useVisitorData(
    { extendedResult: true },
    { immediate: true },
  );

  return (
    <Container className="mt-16">
      <button onClick={() => getData({ ignoreCache: true })}>Reload data</button>
      <p>VisitorId: {isLoading ? 'Loading...' : data?.visitorId}</p>
      <p>Full visitor data:</p>
      <pre>{error ? error.message : JSON.stringify(data, null, 2)}</pre>
    </Container>
  );
}
