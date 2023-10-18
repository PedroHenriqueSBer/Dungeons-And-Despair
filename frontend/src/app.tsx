
import { UserProviderContext } from './hooks/useUser';
import { Router } from './routes/routes';
import { GlobalStyle } from './style/GlobalStyle';

export const App = () => {
    return (
        <UserProviderContext>
            <Router />
            <GlobalStyle />
        </UserProviderContext>
    )
}