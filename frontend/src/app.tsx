
import { LoadingContextProvider } from './hooks/loading';
import { Router } from './routes/routes';
import { GlobalStyle } from './style/GlobalStyle';

export const App = () => {
    return (
        <LoadingContextProvider>
            <Router />
            <GlobalStyle />
        </LoadingContextProvider>
    )
}