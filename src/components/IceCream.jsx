const IceCream = ({ icecreamitem }) => {
  return (
    <div className="ice cream">
      {/* <img src={props.pictures} /> */}
      <h2>{icecreamitem.name}</h2>
      <h2> {icecreamitem.colors}</h2>
      <h2> {icecreamitem.year}</h2>
      <h2> {icecreamitem.origin}</h2>
      <img>{icecreamitem.pictures.url}</img>
      {/* <h2> Name: {props.name}</h2>
      <h5> Colors: {props.colors}</h5> */}
    </div>
  )
}

export default IceCream

// import the css into here from components
