import { createRoot } from 'react-dom/client';
import App from './components/09_卖座选项卡'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App></App>)