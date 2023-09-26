import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);

    const handelClick = () =>{

        const newCount = count+1;
        setCount(newCount)

    }

    const handelclick2 = () =>{

        // if(count !=0){
        //     const newdic = count -1;
        //     setCount(newdic);
        // }
        // else{
        //     alert("Is not possible");
        // }

        // count !== 0 ? setCount(count - 1) : alert("Is not possible");
        count !=0 ? setCount(count-1) : alert("Is not Possible");
        
        
    }

    return(

        <div>


            <button onClick={handelClick}>Increment</button>
            <button onClick={handelclick2}>Decriment</button>
            <h2>Display : {count} </h2>

        </div>

    )


}