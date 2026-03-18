

const Atm = ({ab}) => {
  return (
    <div className="row">
        <div className="col-md-10">
            {/* have to use hooks to update the account balance */}
            {/* example of hooks: */}
            {/* const [accountBalance, setAccountBalance] = useState(1000); */}
            <h1> Account Balance: {ab}</h1>
        </div>    
    </div>
  )
}

export default Atm