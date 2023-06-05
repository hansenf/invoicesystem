import React, { useState, Fragment, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import InvoiceItem from './InvoiceItem';
import Address from './Address';
import { Link } from 'react-router-dom';

const LOCAL_STORAGE = 'Invoice'
const InvoiceItems = () => {
    let today = new Date().toISOString().slice(0, 10)

    const [invoice, setInvoice] = useState([])

    useEffect(() => {
        const invoiceJSON = localStorage.getItem(LOCAL_STORAGE)
        if (invoiceJSON != null) setInvoice(JSON.parse(invoiceJSON))
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE, JSON.stringify(invoice))
    }, [invoice])

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

    const onInputChange = (id, invoice) => {
        const newInvoices = [...invoice]
        const index = newInvoices.findIndex(r => r.id === id)
        newInvoices[index] = invoice
        setInvoice(newInvoices)
    };

    function handleInvoiceDelete(id){
        setInvoice(invoice.filter(invoice => invoice.id !== id))
    }

    return (
        <Fragment>
            <div className="container">
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
                                <th className="center">Item</th>
                                <th className="center">Description</th>
                                <th className="center">Unit Cost</th>
                                <th className="center">Qty</th>
                                <th className="center">Total</th>
                                <th className="center">X</th>
                            </tr>
                        </thead>
                        <tbody>

                            {invoice.map(invoice => {
                                return(
                                    <InvoiceItem key={invoice.id} invoice={invoice} handleInvoiceDelete={handleInvoiceDelete} onInputChange={onInputChange} {...invoice} />
                                )
                            })}

                            <button
                                className="btn btn--primary"
                                onClick={handleInvoiceAdd}
                            >
                                Add Invoice
                            </button>

                        </tbody>
                    </table>
            </div>

            <div className="row">
                <div className="col-lg-4 col-sm-5"></div>
                <div className="col-lg-4 col-sm-5 ml-auto">
                    <table className="table table-clear">
                        <tbody>
                            <tr>
                                <td className="left">
                                    <strong>Subtotal</strong>
                                </td>
                                <td className="right">
                                    Rp{invoice.reduce((prev, cur) => (prev + (cur.qty * cur.unitcost)), 0)}
                                </td>
                            </tr>
                            <tr>
                                <td className="left">
                                    <strong>VAT (10%)</strong>
                                </td>
                                <td className="right">
                                Rp{invoice.reduce((prev, cur) => ((prev + (cur.qty * cur.unitcost))/10), 0)}
                                </td>
                            </tr>
                            <tr>
                                <td className="left">
                                    <strong>Total</strong>
                                </td>
                                <td className="right">
                                    <strong>Rp{invoice.reduce((prev, cur) => (prev + (cur.qty * cur.unitcost) + ((prev + (cur.qty * cur.unitcost))/10)), 0)}</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                <Link to='/generateinvoice'><h2>Generate Invoice</h2></Link>
                </div>
            </div>
        </div>
        </div>
        </Fragment>
    )
}

export default InvoiceItems;