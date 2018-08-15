import React, { Component } from 'react';
import NavBar from './NavBar';
import UserCard from './UserCard';

class UserPage extends Component {
  state = {
    people: [{id: 1, name: 'kim', color: 'red'}, {id: 2, name:'nik', color: 'blue'}, {id: 3, name: 'john', color: 'red'}]
  };

  render() {
    return (
      <div className="UserCard">
        <NavBar />
        {this.state.people.map(person =>
          <UserCard key={person.id} name={person.name} color={person.color} />
        )}
      </div>
    );
  }
}

export default UserPage;
