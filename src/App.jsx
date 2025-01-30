import './App.css'
import icecream from './data/icecream.json'
import IceCream from './components/IceCream.jsx'

const App = () => {
  console.log(icecream)
  return (
    <div className="App">
      <h1>Flavors</h1>
      {icecream.results.map((contact) => (
        <IceCream
          name={icecream.name}
          year={icecream.year}
          color={icecream.color}
          origin={icecream.origin}
          picture={contact.picture.url}
        />
      ))}
    </div>
  )
}

export default App
