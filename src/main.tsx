import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Calculadora from './Calculadora';
import Listado from './Listado';
import Tabla from './Tabla';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Tabla/>
  </StrictMode>,
)
