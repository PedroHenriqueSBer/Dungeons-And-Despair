import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './style/GlobalStyle';
import { Router } from './routes/routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <Router />
        <GlobalStyle/>
    </>
);