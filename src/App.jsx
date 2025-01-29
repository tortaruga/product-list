import { createRoot } from 'react-dom/client';
import Main from './components/Main';

function App() {
  return (
    <Main />
  )
}

createRoot(document.getElementById('root')).render(
 <App /> 
)