import { BrowserRouter } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'

import { Layout } from './Layout'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="bg-slate-900 w-screen h-screen text-slate-200">
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>     
  </div>
)
