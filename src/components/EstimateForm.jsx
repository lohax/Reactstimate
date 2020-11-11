import React, { Component } from 'react'
import Item from './Item'
import { renderPDFInDom } from './PdfMaker'
import InputText from './InputText'

class EstimateForm extends Component {
    state = {
        id: '',
        title: '',
        customerFirstName: '',
        customerLastName: '',
        items: {}
    }

    /*
        item: {
            "123445": {
                id:""
                description:""
                quantity:
                taxe:
                amount
            }
        }
    */

    handleSubmit = evt => {
        evt.preventDefault()

    }

    handleChange = (evt, name) => {
        const value = evt.currentTarget.value;
        this.setState({
            [name]: value // les crochets permettent de recuperer la vaie valeur de name (computed properties)
        })

    }

    addItem = () => {
        const id = Date.now().toString();
        const items = { ...this.state.items }
        items[id] = {
            id: id,
            description: "",
            quantity: "1",
            taxe: 0.2,
            amount: 0
        }
        this.setState({ items })
    }

    handleItemChange = (evt, item, field) => { // revoir et retravailler cette partie
        const value = evt.currentTarget.value;
        const clonedItem = { ...item }
        clonedItem[field] = value
        const clonedItems = { ...this.state.items }
        clonedItems[clonedItem.id] = clonedItem
        this.setState({
            items: clonedItems
        })

    }

    render() {
        return (
            <>
                <div>Nouveau devis</div>
                <form onSubmit={this.handleSubmit}>

                    <InputText label="ID" name="id" value={this.state.id} onChange={this.handleChange} />
                    <InputText label="Titre" name="title" value={this.state.title} onChange={this.handleChange} />
                    <InputText label="Prénom du client" name="customerFirstName" value={this.state.customerFirstName} onChange={this.handleChange} />
                    <InputText label="Nom du client" name="customerLastName" value={this.state.customerLastName} onChange={this.handleChange} />

                    <br />

                    <button onClick={this.addItem}>Ajouter une ligne</button>

                    {Object.keys(this.state.items).map((itemId, index) => (
                        <Item key={index} item={this.state.items[itemId]} onItemChange={this.handleItemChange} />
                    ))}

                    <button onClick={() => renderPDFInDom(this.state)}>Générer le devis</button>

                </form>
            </>
        )
    }
}

export default EstimateForm