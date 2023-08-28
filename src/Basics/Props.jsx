import './App.css';

const Person = (props) => {
  return (
    <>
      <p>Name: {props.name}</p>
      <p>Last name: {props.lastName}</p>
      <p>Age : {props.age}</p>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person
        name='john'
        lastName={'doe'
        }
        age={26}
      />
      <Person
        name='james'
        age={2 + 18}
        lastName='clarke'
      />
    </div>
  );
}

export default App;
