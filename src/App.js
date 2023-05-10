import './App.css';
import Card from './components/card/card'

function App() {
  return (
    <div className="App">
      <Card text='Este é o texto do primeiro Card' color='blue'/>
      <Card text='Este é o texto do segundo Card' color='#ff0000'/>
      <Card text='Este é o texto do terceiro Card' color='coral'/>
      <Card text='Este é o texto do quarto Card' color='green'/>
    </div>
  )
}

export default App;