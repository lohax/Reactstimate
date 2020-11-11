import React from 'react';

const Item = (props) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <input
                            placeholder="Description"
                            type="text"
                            className="formControl"
                            name="description"
                            value={props.item.description}
                            onChange={evt => props.onItemChange(evt, props.item, "description")}
                        />
                    </div>
                    <div className="col">
                        <input
                            placeholder="Quantité"
                            type="number"
                            className="formControl"
                            name="quantité"
                            value={props.item.quantity}
                            onChange={evt => props.onItemChange(evt, props.item, "quantity")}
                        />
                    </div>
                    <div className="col">
                        <input
                            placeholder="Taxe"
                            type="text"
                            className="formControl"
                            name="taxe"
                            value={props.item.taxe}
                            onChange={evt => props.onItemChange(evt, props.item, "taxe")}
                        />
                    </div>
                    <div className="col">
                        <input
                            placeholder="Total"
                            type="text"
                            className="formControl"
                            name="amount"
                            value={props.item.amount}
                            onChange={evt => props.onItemChange(evt, props.item, "amount")}
                        />
                    </div>
                </div>

            </div>
        </>
    );
};

export default Item;