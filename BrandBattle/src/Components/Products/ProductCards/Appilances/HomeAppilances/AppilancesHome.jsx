import React from 'react'
import AppilancesCard from './AppilancesCard'
import Tagbar from '../../../../TaggedCategory/Tagbar'
import SearchAppliances from './SearchAppilances'

function AppilancesHome() {
  return (
    <div className='bg-gradient-to-br from-[#eef3fd] to-[#d4deff]  w-full'>
        <Tagbar/>
        <SearchAppliances/>
      <AppilancesCard/>
    </div>
  )
}

export default AppilancesHome
