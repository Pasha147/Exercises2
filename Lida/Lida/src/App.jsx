import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import Header from './components/header'
import Main from './components/main';
import Menu from './components/menu';
import Footer from './components/footer';

import { text } from '../public/dataArray'

function App() {
  const[lang, setLang]=useState('Ukr')
  let textCont= lang==='Ukr'? text.Ukr: text.En
  const[colorMenu, setColorMenu]=useState(
    text.Ukr.menu.links.map(()=>{return {ratio: 0}})
  )

  return (
<div className="App">
     <Header textCont={textCont.header} lang={lang} setLang={setLang}/>
     <Menu textCont={textCont.menu} colorMenu={colorMenu}/>
     <Main textCont={textCont.main} setColorMenu={setColorMenu}/>
      <Footer textCont={textCont.footer}/>
    </div>
  )
}

export default App
