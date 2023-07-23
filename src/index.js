import { createRoot } from 'react-dom/client';
import App from './components/08_Todolist'

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App></App>)