import React from 'react';
import Person from './Person';

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce'];
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>);
  return (
    <div>
        {nameList}
    </div>
  );

    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Bruce',
    //         age: 30,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Clark',
    //         age: 25,
    //         skill: 'Angular'
    //     }
    // ];
    // const personList = persons.map(person => (
    //     <Person key={person.id} person={person}></Person>
    // ));
    // return <div>{personList}</div>
}

export default NameList;
