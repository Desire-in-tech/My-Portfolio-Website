import { StaticRouter } from 'react-router';
import { AppShell } from './App';

interface StaticAppProps {
  location: string;
}

/** Server-side router wrapper used only by the static HTML generator. */
export default function StaticApp({ location }: StaticAppProps) {
  return (
    <StaticRouter location={location}>
      <AppShell />
    </StaticRouter>
  );
}
