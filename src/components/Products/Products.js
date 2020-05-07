import React, { useState } from 'react'
import classes from './Products.module.css'

const Products = (props) => {

    const { selectProv } = props
    const [selectedId, setSelectedId] = useState(null)

    const list = [
        {id: 1, name: 'Gazas'},
        {id: 2, name: 'Guantes'},
        {id: 3, name: 'Mascarillas'},
        {id: 4, name: 'Jeringas'}
    ]

    const handleSelected = (product) => {
        // setSelectedId(product.id)
        // selectProv(product)
    }

    return (
        <div className={classes.container}>
            {list.map(product => {
                return (
                    <div 
                        className={ classes.product }
                        onClick={()=>handleSelected(product)}
                        > 
                        <div>{product.name}</div>
                        <div className={classes.buttons}>
                            <div>add</div>
                            <div>dots</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}

export default Products