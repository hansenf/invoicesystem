import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import InvoiceItems from './components/InvoiceItems'
import Address from './components/Address'
import GeneratedInvoice from './components/GeneratedInvoice'
import SignIn from './components/SignIn'

function App(){
  return <>
  <Router>
    <Navbar />
      <Switch>
        <Route exact path="/" component={InvoiceItems} />
        <Route path="/signin" component={SignIn} />
        <Route path="/address" component={Address} />
        <Route path="/generateinvoice" component={GeneratedInvoice} />
      </Switch>
  </Router>
  </>
}

export default App;