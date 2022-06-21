import react from "react";
import "./App.css";
import SlotMachine from "./SlotMachine";

const App = () =>{
    return(
        <>
            <h1 className="heading_style">🎰 Welcome to <span style={{ fontWeight: "bold"}} >Slot Machine Game </span>🎰</h1>
            <SlotMachine  x="😃" y="😃" z="😃"/>
            <SlotMachine  x="🍊" y="🍌" z="🍎"/>
            <SlotMachine  x="🌹" y="🌹" z="🌹"/>
        </>
    )
}


export default App;