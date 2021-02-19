import logo from './logo.svg';
import './App.css';
import MovableComponent from "./Components/MovableComponent";

function App() {
    return (
        <div className="App">
            <MovableComponent
                id='target1'
            />
            <MovableComponent
                id='target2'
            />
        </div>
    );
}

export default App;
