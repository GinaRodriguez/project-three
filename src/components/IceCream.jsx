const Contact = (props) => {
  console.log(props)
  return (
    <div class="IceCream">
      <img src={props.picture} />
      <h1>
        {props.first} {props.last}
      </h1>
      <h2> email: {props.email}</h2>
      <h5> mobile: {props.mobile}</h5>
    </div>
  )
}

export default Contact
