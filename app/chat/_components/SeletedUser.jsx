import React from 'react'

const SelectedUser = ({user}) => {

    if(user.trim() === ''){
        console.log('Selected User not found');
    }

    

  return (
    <div>SelectedUser</div>
  )
}

export default SelectedUser