import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routes/index';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { Container } from './styles/CommonLayout';

createRoot(document.getElementById('root')!).render(
   
      <StrictMode>
        <GlobalStyle />
        <Container>
          <RouterProvider router={router} />
        </Container>
      </StrictMode>
)
