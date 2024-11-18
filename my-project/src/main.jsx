
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import AuthProvider from './components/AuthProvider'

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <AuthProvider>
    <App />
    </AuthProvider>
 
)