import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';

const InvoiceItem = (props) => {
    let getItemValue = [
        {label: 'printer', value: 'printer'},
        {label: 'monitor', value: 'monitor'},
        {label: 'laptop', value: 'laptop'},
        {label: 'keyboard', value: 'keyboard'},
    ]

    const {onInputChange, handleInvoiceDelete, invoice} = props
    const { id, item, description, qty, unitcost} = props

    function handleChange(changes) {
        onInputChange(invoice.id, {...invoice, ...changes})
    }

    const onSelect = (data) => {
        handleChange({item: data})
    }

    return (
        <>
            <tr>
                <td>1</td>
                <td className="center">
                    <AutoComplete
                        onInput={e => handleChange({item: e.target.value})}
                        value={item}
                        style={{
                            width: 100,
                        }}
                        options={getItemValue}
                        onSelect={onSelect}
                        filterOption={getItemValue}
                    />
                </td>
                <td className="left strong">
                    <input 
                        name="description"
                        onInput={e => handleChange({description: e.target.value})}
                        value={description}
                    />
                </td>
                <td className="right">
                    <input 
                        name="qty"
                        onInput={e => handleChange({qty: e.target.value})}
                        value={qty}
                    />
                </td>
                <td className="center">
                    <input 
                        name="unitcost"
                        onInput={e => handleChange({unitcost: e.target.value})}
                        value={unitcost}
                    />
                </td>
                <td className="right">${qty * unitcost}</td>
                        <button 
                            className="right" 
                            onClick={() => handleInvoiceDelete(id)}
                        >
                            &times;
                        </button>
            </tr>
        </>
    )
}

export default InvoiceItem;