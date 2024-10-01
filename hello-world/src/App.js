import logo from './logo.svg';
import './App.css';
import FirstProgram from './components/first'
//import from named export 
// import {FirstProgram} from './components/first'
// import Second from './components/second';
// import { Ans } from './components/first'
// import { Hello } from './components/Hello';
import Printing from './components/props';
// import Properties from './props2';
import States from './components/state';
import Counter from './components/count';

import FunctionClick from './components/FunctionCLick';
import ClassClicked from './components/classClicked';
import EventBind from './components/EventBind';
import Parent from './components/Parent';
import ConRendering from './components/ConditionalRendering';
import StatusMessage from './components/switch';
import LifecycleA from './components/LifecycleA';


function App() {
  return (
    <div className="App">

      <LifecycleA/>
      {/* <StatusMessage status="false"/> */}
      {/* <ConRendering/> */}
      {/* <Parent/> */}
      {/* <FirstProgram />
      <Second /> */}
      {/* <Ans/> */}
      {/* <Hello/> */}
      {/* <Printing name="Diana" age="20">
        <button>click</button>
      </Printing>
      <Properties name="Jane" age="24">
        <button>click here</button>
      </Properties> */}

      {/* <States/> */}
      {/* <Counter/> */}
      {/* <FunctionClick />
      <ClassClicked /> */}
      {/* <EventBind/> */}
      

    </div>
  );
}

export default App;
