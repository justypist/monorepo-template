import { createRoot } from 'react-dom/client';
import { App } from './app';

const reactTemplateApp = document.getElementById('app');

if (reactTemplateApp) {
  const root = createRoot(reactTemplateApp);
  root.render(<App />);
}
