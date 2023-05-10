import './App.css';
import Card from './components/card/card'
import Button from './components/button/button'

function App() {
  return (
    <div className="App">
      <Card text='Primeiro Card - texto vermelho' color='#ff0000'/>
      <Card text='Segundo Card - texto verde' color='green'/>
      <Card text='Terceiro Card - sem cor passada' />
      <Button/>
      <Button label='Copiar texto'/>
    </div>
  )
}

export default App;