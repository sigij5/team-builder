import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import Member from './components/Member'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'

const MemberDiv = styled.div`
border: 1px solid black;
`


const initialFormValue = {
  id: uuid(),
  name: '',
  email: '',
  role: '',
};

const initialTeam = [
  {
  id: uuid(),
  name: 'Sigi',
  email: 'sigijaeckel5@gmail.com',
  role: 'React 1',
}
]

function App() {
  const [team, setTeam] = useState(initialTeam)
  const [formValues, setFormValues] = useState(initialFormValue)
  const [memberToEdit, setMemberToEdit] = useState('')



  const onInputChange = event => {
    const { name, value } = event.target

    setFormValues({
      ...formValues,
      [name]:value,
    })
  }

  const onEdit = event => {

  }

  const onSubmit = event => {
    event.preventDefault()

    const newMember ={ ...formValues, id:uuid()}

    setTeam(team => [newMember, ...team])

    setFormValues(initialFormValue);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Builder</h1>
      </header>
      <body>
        <Form 
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        />

        <h2>Current Team</h2>

        {team.map(member=> {
          return <Member key={member.id} details={member} />
        })}
      </body>
    </div>
  );
}

export default App;
