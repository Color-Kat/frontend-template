import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@scss/index.scss'
import { AppContextProvider } from "@/context/AppContextProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <AppContextProvider>
        <App />
    </AppContextProvider>,
)
