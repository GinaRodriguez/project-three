const Contact = (props) => {
  console.log(props)
  return (
    <div class="IceCream">
      <img src={props.picture} />
      <h1>
        {props.first} {props.last}
      </h1>
      <h2> Name: {props.name}</h2>
      <h5> Year: {props.year}</h5>
    </div>
  )
}

export default Contact
