import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"

const isDevelopment = import.meta.env.VITE_ENVIRONMENT === "DEVELOPMENT";

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <div className={`max-w-4xl lg:max-w-5xl mx-auto px-4 py-8 ${isDevelopment ? "border border-dashed border-gray-500" : ""}`}>
  //     <App />
  //   </div>
  //   <Toaster />
  //   <Analytics />
  // </StrictMode>,
  <>
    <div className={`max-w-4xl lg:max-w-5xl mx-auto px-4 py-8 ${isDevelopment ? "border border-dashed border-gray-500" : ""}`}>
      <App />
    </div>
    <Toaster />
    <Analytics />
  </>
)
