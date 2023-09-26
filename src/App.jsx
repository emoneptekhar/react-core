
import './App.css'
import Counter from './Counter'
import Users from './User';

function App() {

  function handel(){

    alert("Button Click ")
  }

  let count = 0;
  console.log(count);
  const handel2 = () =>{
    count= count+1;
    // alert (count);
    // return count;
  }
  

  return (
    <>
      <h1>Hello React Part 2</h1>
      <button onClick={handel}>Clickd 1</button>
      <button onClick={()=>{alert("Button Click")}}>Click me 2</button>
      <button onClick={handel2}>Count</button>
      <h3>Display: {count}</h3>
      <Counter></Counter>

      <br />
      <Users></Users>
    </>
  )
}

export default App
