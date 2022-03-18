import React from 'react'
import CardItem from './CardItem'
import Spinner from './Spinner'

const CardGrid = ({ items, isLoading }) => {
    return (
        <>
            {isLoading ? (<Spinner />) : (
                <section className='cards'>
                    {items.map(item => <CardItem key={item.id} item={item} />)}
                </section>
            )}
        </>
    )
}

export default CardGrid