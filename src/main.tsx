import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TSExample from './components/TSExample.tsx'

// .js => .ts
// .jsx => .tsx

createRoot(document.getElementById('root')!).render(
  <>
    {/* <TSExample /> */}
    <StrictMode>
      <App />
    </StrictMode>,
  </>
)
