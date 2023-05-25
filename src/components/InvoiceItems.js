import React from 'react';
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
        </Fragment>
    )
}