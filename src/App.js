import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EvendBind from './components/EvendBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import './components/appStyles.css';
import styles from './components/appStyles.module.css';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Greet name="Gopi" surname="Savaliya">
        <p>Hello everyone....</p>
      </Greet>
      <Greet name="Prakruti" surname="Gandhi" />
      <Greet name="Daya" surname="Yadav" /> */}
      {/* <Welcome /> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EvendBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <h1 className='error' >Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Stylesheet primary={true} /> */}
      <Form />
    </div>
  );
}

export default App;
