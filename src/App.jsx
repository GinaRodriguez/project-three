import './App.css'
import icecream from './data/icecream.json'
import IceCream from './components/IceCream.jsx'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import Module from './components/Module.jsx'


const App = () => {
  console.log(icecream)
  return (
    <div className="App">
      <Navigation />
      <h1>Ice Cream Flavors</h1>
      <div className="grid">
        {icecream.results.map((icecreamitem, index) => (
          <IceCream key={index} icecreamitem={icecreamitem} />
        ))}
      </div>   
      <Module />
      <Footer />
    </div>
  )
}

export default App
