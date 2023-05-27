/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

 class UsersClass extends Component {
    constructor(prop){
        super(prop)
        this.state = {users:[]}
    }


     componentDidMount = () => {
         fetch("https://jsonplaceholder.typicode.com/users/")
         .then((response)=> response.json())
         .then((data)=>this.setState( {users: data}))
        .catch((error)=> {
            console.error(error)}
            )
      }

     

  render(){
    return (
      <div className='user-container'>
        {
            this.state.users.map((user, index)=> {
                return(
            
            <div className='user-card' key={index}>
                <h3> Name: {user.name}</h3>
                <h3> Username: {user.username}</h3>
                <h3> Email: {user.email}</h3>
            </div>
           )
            }
         )  
        }
      </div>
    )
  }
 }

export default UsersClass;