import React, { useState } from 'react'
import classes from './Providers.module.css'

const Providers = (props) => {

    const { selectProv } = props
    const [selectedId, setSelectedId] = useState(null)

    const list = [
        {id: 1, name: 'Farmatodo'},
        {id: 2, name: 'Maraplus'},
        {id: 3, name: 'Saas'}
    ]

    const handleSelected = (provider) => {
        setSelectedId(provider.id)
        selectProv(provider)
    }

    return (
        <div className={classes.container}>
            <div className={classes.find}>
                <div>Proveedores</div>
                <div>lupa</div>
            </div>
            {list.map(provider => {
                return (
                    <button 
                        className={selectedId ? selectedId === provider.id ? classes.providerSelected : classes.provider : classes.provider }
                        onClick={()=>handleSelected(provider)}
                        > 
                        <div>{provider.name.toUpperCase()}</div>
                    </button>
                )
            })}
        </div>
    )

}

export default Providers