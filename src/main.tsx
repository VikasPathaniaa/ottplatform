import { ThemeProvider } from '@material-tailwind/react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

import { Provider } from "react-redux"
import { store } from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
  
)


