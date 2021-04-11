// unidirectional data flow

import { func } from 'prop-types';
import React, {createContext, useEffect, useRef, useState} from 'react';


export default function App()
{
    const [value, setState] = useState("");
    const [items, setItems] = useState(["foo", "bar"]);

    function handleChange(e) {
        // whne handle change is empty 
        //tthen when you enter typeingin the input text
        // still see nothing

        // but if when we have body of handlechange
        // we can see what we type
        setState(e.target.value);
    }


    function Child(props) {
        return <GrandChild value={props.value}/>
    }
    function GrandChild(props) {
        return <h1>{props.value}</h1>
    }


    /////////////////////////////
    // lift the state up
    ///////////////////////////////
    function List(props){
        return (
            <div>
             {props.items.map((item, index)=> {
                 return <h1 key={index}>{item}</h1>
             })}
            </div>
        )

        
    }


    function ItemCount(props){
        return <h1>{props.count}</h1>
    }

    /////////////////////////////
    // Control, uncontrol componets
    // Controled: bound by the STATE
    //UNControlled: reference
    //////////////////////////////


    function UnControlled() {
        const inputRef = useRef();

        function alertValue() {
            alert(inputRef.current.value);
        }

        return (
            <div>
                <input type="text" ref={inputRef} />
                <button onClick={alertValue}>Click Me</button>
            </div>
        )
    }


    /////////////////
    // REFS 
    /////////////////

    useEffect(()=>{
        inputRef.current.focus();
    }, [] );


    ////////////////
    /// KEY
    /////////////
    // unique key to id items
    // why? 


    // context
    // pass down data from one compo to next comp
    // props passed down to next compo

    const context = React.createContext()

    function Child(props){
        return <GrandChild />
    }

    function GrandChild(props) {
        cosnt value = useContext(context)
        return <h1>{value}</h1>
    }



/////////////////////////
    // 8-High Order Compo
    // still use today
    // a function that receive PARAM as COMPO and return a new COMPO
    // widely used
    // 
    ///////////////////////


    function detectHover(Component)
    {
        return function(props) {
            const [hovered, setHovered] = useState(false)

            return (
                <div 
                    onMouseOver={()=>setHovered(true)}
                    onMouseLeave={()=>setHovered(false)}
                >
                    <Component hovered={hovered} {...props} />
                </div>
            )
        }
    }
    function App(props)
    {
        const style = {
            backgroundcolor:props.hoverd ? "red" : ""
        }

        return (
            <div style={style} >
                <h1>Hello Snadbox</h1>
                <h2> start edit</h2>
            </div>
        )
    }
    export default detectHover(App);



    // render

    function App(props)
    {
        function render(hovered)
        {
            const style = {
                bgcolor: hovered? "red" : ""
            };

            return (
                <div style={style} className="App">
                    <h1> hello</h1>
                </div>
            )
        }

        // pass render function render to render JSX
        return <DetectHover render={render}></DetectHover>
    }

    function DetectHover(props)
     {
         const [hover, setHover] = useState(false)
         return (
             <div   
                onMouseOver={()=> setHover(true)}
                onMouseLeave={()=>setHover(false)}

                >
                    {props.render(hovered)}
                </div>
         )
     }
    // what are hook
    // hook to liftcycle within component
     function App() {
         const [hoverRef, hovered] = useHover();

         const style = {
             bgcolor: hovered? "red" :""
         }

         return (
             <div ref={hoverRef} stypel={style} className="App">
                 <h1>
                 </h1>
                 
                <h2></h2>     
            </div>
         )
     }

    // useEffect
    // connect didmount, didupdate, unmount

    function handldDocClick(){
        alert("Click")
    }

    const [number, setNumber] = useState(0);
    // like didmount
    useEffect(()=> {
        document.addEventListener("click", handldDocClick);

        // like didunmount
        return ()=>
        {
            document.removeEventListener(handleDocClick)
        }
    }, [number]) // everytime number is updated, I use the number again


    // react.MEMO

    // callback hook
    // useCallback hook


    // useMemo

    // to performance optimiziation
    // https://www.youtube.com/watch?v=4BranN3qnDU

    
    return (
        <div className="App">
            <context.Provider value={1}>
                <Child />
            </context.Provider>




            <input type="text" value={value}
                onClick={handleChange} />

            <Child value={value}/>
                


            // lift the state
            // siblings, same parent
            <List items={items}/>
            <ItemCount count={items.length}/>
        </div>
    )
}


// PROPS : can not be changed
// STATE: can change, mutated 



// LIFT the STATE UP


Coding With Chaim
2.96K subscribers
In this video I break down 7 react interview questions I would ask candidates now in 2020 to see if they have the react chops!

refs video: https://youtu.be/wAKr94b9U0s
react interview questions part 2: https://youtu.be/Fp4PlygdV5E

If you would like to schedule a mock interview with me, you can email me at
codingwithchaim@gmail.com for price and details.

Follow me on Twitter: https://twitter.com/CodingWithChaim
Subscribe to the channel: https://www.youtube.com/c/codingwithc...

---SUPPORT THE CHANNEL---
If you would like to support the channel you can use the below link.
I would like to stress that while it would be greatly appreciated, in no way is this required!
link: paypal.me/codingwithchaim


https://www.youtube.com/watch?v=Fp4PlygdV5E

n this video I break down 7 react interview questions I would ask candidates now in 2020 to see if they have the react chops! Some of the questions include, useEffect, higher order components, render props and more.

React Interview Questions Part 1: https://youtu.be/JOa41r3Fr4s
React memo vs useMemo vs useCallback: https://youtu.be/uojLJFt9SzY

If you would like to schedule a mock interview with me, you can email me at
codingwithchaim@gmail.com for price and details.

Follow me on Twitter: https://twitter.com/CodingWithChaim
Subscribe to the channel: https://www.youtube.com/c/codingwithc...

---SUPPORT THE CHANNEL---
If you would like to support the channel you can use the below link.
I would like to stress that while it would be greatly appreciated, in no way is this required!
link: paypal.me/codingwithchaim
