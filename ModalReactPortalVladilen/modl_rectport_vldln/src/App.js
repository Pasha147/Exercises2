
import './App.css';
import EffectSection from './components/EffectSection';
import PrtTest from "./components/PrtTest";

function App() {
  const youtubRef='https://www.youtube.com/watch?v=kz23xxukY5s&t=5166s&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD'
  return (
    <div className="App">
      <h1>Creation of a Modal window</h1>
      <pre>{`Creation of a Modal window 
           with the createPortal 
           by Vladilen`}</pre>
      <a href={youtubRef}>{'React JS c Нуля - Курс для начинающих БЕЗ ВОДЫ [2024]'}</a>
      <EffectSection/>
      <button id='fff' >ffffffff</button>
      <PrtTest/>
    </div>
  );
}

export default App;
