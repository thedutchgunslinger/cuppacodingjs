import '@/styles/globals.css'
import { useState, createContext} from 'react'
import IdContext from '@/components/IdContext'


export default function App({ Component, pageProps }) {
  const [ids, setIds] = useState([]);

  return (
    <IdContext.Provider value={{ ids, setIds }}>
      <Component {...pageProps} />
    </IdContext.Provider>
  );
}
