

const Footer = (props) => {
    // props.accountBalance = 3000; THIS IS NOT ALLOWED becuase props are immutable or cannot be changed by a child component
    return (
        <footer className="bg-dark text-white text-center py-3 shadow-lg h-90">
            <p>Footer</p>
            <p className="text-dark">Account Balance: {props.accountBalance}</p>
        </footer>
    )
}

export default Footer