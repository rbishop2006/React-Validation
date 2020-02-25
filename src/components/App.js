import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Forms from "./Forms"
import Thankyou from "./Thankyou"

// import Thankyou from "./Thankyou"

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Forms}></Route>

        <Route path="/thankyou" component={Thankyou}></Route>
      </div>
    </Router>
  )
}
