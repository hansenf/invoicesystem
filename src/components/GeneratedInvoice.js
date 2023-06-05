import React, { useState, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'
import InvoiceItem from './InvoiceItem';
import Address from './Address';

const GeneratedInvoice = () => {
    let today = new Date().toISOString().slice(0, 10)

    const [invoice, setInvoice] = useState([])
    

    function handleInvoiceAdd() {
      const newInvoice = {
        id: Date.now().toString(),
        item: '',
        description: '',
        qty: 0,
        unitcost: 0
      }
      setInvoice([ ...invoice, newInvoice])
    }
    

 

   const onInputChange = (id,invoicee) => {
     const newInvioces = [...invoice]
     const index = newInvioces.findIndex(r => r.id === id)
     newInvioces[index] = invoicee
     setInvoice(newInvioces)
     };

     function handleInvoiceDelete(id){
       setInvoice(invoice.filter(invoice => invoice.id !== id))
     }

    return (
      
    <Fragment>

<div className="container" >
  <div className="card">
<div className="card-header">
Invoice
<strong>{today}</strong> 
  <span className="float-right"> <strong>Status:</strong> Pending</span>
</div>

<Address />



<div className="table-responsive-sm">
<table className="table table-striped">
<thead>
<tr>
<th className="center">#</th>
<th>Item</th>
<th>Description</th>

<th className="right">Unit Cost</th>
  <th className="center">Qty</th>
<th className="right">Total</th>
<th className="right">X</th>
</tr>
</thead>
<tbody>

{invoice.map(invoice => {
          return (
            <InvoiceItem key={invoice.id} invoice={invoice} handleInvoiceDelete={handleInvoiceDelete} onInputChange={onInputChange} {...invoice} />
          )
        })}
        
    </tbody>

</table>

</div>
<div className="row">
<div className="col-lg-4 col-sm-5">

</div>

<div className="col-lg-4 col-sm-5 ml-auto">
<table className="table table-clear">
<tbody>
<tr>
<td className="left">
<strong>Subtotal</strong>
</td>
      <td className="right" >${invoice.reduce((prev, cur) => (prev + (cur.qty * cur.unitcost)), 0)}</td>
</tr>
<>
<td className="left">
 <strong>VAT (10%)</strong>
</td>
<td className="right">$679,76</td>
</>
<tr>
<td className="left">
<strong>Total</strong>
</td>
<td  className="right">
<strong>${invoice.reduce((prev, cur) => (prev + (cur.qty * cur.unitcost)), 0)}</strong>
</td>
</tr>
</tbody>
</table>


</div>

</div>

</div>
</div>

</Fragment>
    )
      }

      
      


export default GeneratedInvoice;