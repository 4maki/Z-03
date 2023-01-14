import React from 'react';
import AddNewUser from './AddNewUser';
import { User } from './user';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'Ivan', years: 30 },
        { id: 2, name: 'Marko', years: 35 },
        { id: 3, name: 'Ana', years: 25 },
      ],
      newUser:{
        name:"",
        years:""
      }
    };
  }

  handleButtonPress = () => {
    const { users,newUser} = this.state;

    const newUsers = users.map(user => {
      return { ...user, years: user.years+= 1 }
               ;
    });
const userYears = {...newUser, years : newUser.years ++}
    
    this.setState({ users: newUsers, newUser: userYears});
  };

  handleNameChange = (event, index) => {
    const { users } = this.state;
    const newUsers = [...users];

    newUsers[index].name = event.target.value;
    this.setState({ users: newUsers });
  };

  handleAddNewUser=(event)=> {
    event.preventDefault();
    const newUser = {
      id: this.state.users.length + 1,
      name: this.state.newUser.name,
      years: parseInt(this.state.newUser.years)
    };
    this.setState(prevState => {
      return {
        users: [...prevState.users, newUser],
        newUser: { name: "", years:null }
      };
    });
  }

  handleNewUserNameChange= (event) => {
    this.setState({ newUser: { ...this.state.newUser, name: event.target.value } });
  }

  handleNewUserYearsChange= (event) =>{
    this.setState({ newUser: { ...this.state.newUser, years: event.target.value } });
  }

  render() {
    const { users,newUser } = this.state;

    return (
      <div>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <AddNewUser
          name={newUser.name}
          years={newUser.years}
          onNameChange={this.handleNewUserNameChange}
          onYearsChange={this.handleNewUserYearsChange}
          onSubmit={this.handleAddNewUser}
        />
        <br/>

        <button onClick={this.handleButtonPress}>Promjena godina</button>

        {users.map((user, index) => (
          <User
            key={user.id}
            name={user.name}
            years={user.years}
            onNameChange={event => this.handleNameChange(event, index)}
          />
        ))}
        
      </div>
    );
  }
}
