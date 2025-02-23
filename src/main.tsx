import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routes/index';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { Container } from './styles/CommonLayout';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/loader';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

createRoot(document.getElementById('root')!).render(
   
      <StrictMode>
        <GlobalStyle />
        <Container>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={true} />
          </QueryClientProvider>
        </Container>
      </StrictMode>
)
