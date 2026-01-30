import React from 'react'

function Container({children}) {
  return (
    <div className='bg-gray-100'>
        <div id='main-content'>
            {children}
        </div>
    </div>
  )
}

export default Container
