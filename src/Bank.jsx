import Atm from "./bank_components/Atm"
import Counter from "./bank_components/Counter"
import Pos from "./bank_components/Pos"
import { useState } from "react"
import Success from "./bank_components/Success"
import Warning from "./bank_components/Warning"
const Bank = () => {
    // let accountBalance= 1000;//if accountBalance will be changing, we should never store it in a variable. Because variables are immutable in React and won't trigger re-renders. React uses hooks to manage state. Example: const [accountBalance, setAccountBalance] = useState(1000);
    // re-renders are triggered when state changes 
    // react hooks are special functions created by react to provide additional functionality to functional components
    // they have to be imported too
    // HOOKS CAN NOT BE USED IN CONDITIONS, LOOPS, OR NESTED FUNCTIONS
    // following convention, when naming a function in a use state start it with set
    // what is prop drilling? It is passing data from parent to child component
    //a state to manage the account balance
    const [accountBalance, setAccountBalance] = useState(1000)
    // a state to manage what user is typing in input field
    const [amount, setAmount] = useState(0);
    function updateAmount(f) {
        setAmount(f.target.value);
    }
// diff btwn stateful and stateless components
// stateful components are components that have state
// stateless components are components that don't have state

  return (
    <div className="container">
      <h1>Bank Application: {accountBalance}</h1>
      {accountBalance > 1000 ? <Success /> : <Warning />}
      <button className="btn btn-danger" onClick={() => {
        setAccountBalance(accountBalance - Number(amount))}}>Withdraw</button>
      {/* react does not support diect update or mutation of a  */}
      <input type="number" value={amount} onChange={updateAmount} />
      <button className="btn btn-success" onClick={() => {
        setAccountBalance(accountBalance + Number(amount))}}>Deposit</button>
      <Atm ab= {accountBalance}/>
      <Counter ab={accountBalance}/>
      <Pos ab={accountBalance}/>
    </div>
  )
}

export default Bank