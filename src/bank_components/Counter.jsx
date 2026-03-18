
const Counter = ({ab}) => {
    // you can mutate a destructured parameter
    // but it's not recommended
  return (
    <div className="row">
      <div className="col-md-10">
        <h1>Counter Balance: {ab}</h1>
      </div>
    </div>
  )
}

export default Counter