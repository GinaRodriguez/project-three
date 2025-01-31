import './App.css'
import icecream from './data/icecream.json'
import IceCream from './components/IceCream.jsx'

const App = () => {
  console.log(icecream)
  return (
    <div className="App">
      <h1>Ice Cream Flavors</h1>
      {icecream.results.map((icecreamitem, index) => (
        <IceCream key={index} icecreamitem={icecreamitem} />
      ))}
    </div>
  )
}

export default App
