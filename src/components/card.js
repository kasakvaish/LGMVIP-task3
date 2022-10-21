import React from 'react'
import './card.css'

const Users = ({loading,users}) => {
    return loading ? (
          <div id="main">
            <img src="" alt="Loading.." className="loader"/>
          </div>
        ) :
        (
          <div className='row' id="main">  
          {users.map(user =>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="profile">
                        <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                        <p>ID- {user.id}</p>
                        <h1 className="name">{user.first_name} {user.last_name}</h1>
                        <p className="email">{user.email}</p>
                    </div>
                </div>
            )
          }
          </div>
        )
}

export default Users