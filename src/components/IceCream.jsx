const IceCream = ({ icecreamitem }) => {
  return (
    <div className="card">
      <h2>{icecreamitem.name}</h2>
      <h2> Color: {icecreamitem.colors}</h2>
      <h4> Year: {icecreamitem.year}</h4>
      <h4> Origin: {icecreamitem.origin}</h4>
      <button>Buy Now</button>
      {icecreamitem.pictures.map((image) => (
        <img src={image.url} class="center" />
      ))}
    </div>
  )
}

export default IceCream
