import './App.css'
import icecream from './data/icecream.json'
import IceCream from './components/IceCream.jsx'
import Button from './components/Button.jsx'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  console.log(icecream)
  return (
    <div className="App">
      <body>
        <Navigation />
      </body>
      <h1>Ice Cream Flavors</h1>
      <main>
        <Button />
      </main>
      {icecream.results.map((icecreamitem, index) => (
        <IceCream key={index} icecreamitem={icecreamitem} />
      ))}
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
