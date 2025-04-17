import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import App from './App.jsx';
import "./index.css"
import { LoadingProvider } from './Components/context/LoadingProvider.jsx';
import { ThemeProvider } from './Components/context/ThemeContext.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <LoadingProvider>
            <App />
          </LoadingProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot >
  </>
);
