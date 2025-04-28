import React from 'react'
import GenCard from './GenCard'
import Tagbar from '../../../../TaggedCategory/Tagbar'

function HomeGen() {
    return (
        <div className='bg-gradient-to-br from-[#eef3fd] to-[#d4deff]  w-full'>
            <Tagbar />
            <GenCard />
        </div>
    )
}

export default HomeGen
