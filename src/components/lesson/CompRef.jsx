import { useEffect, useRef, useState } from "react";

export const CompIter = () => {
    const [counter, setCounter] = useState(0);
    // const incrementCounter = () => setCounter((counter) => counter + 1);
    let btnRef = useRef(null);
    // useEffect(() => {
    //     if (intervaID.current === null) {
    //         intervaID.current = setInterval(() => {
    //             incrementCounter();
    //         }, 1000);
    //     }
    // }, []);
    // const stopInterval = () => {
    //     clearInterval(intervaID.current);
    // };
    useEffect(()=>{
        console.log(counter);
        return()=>{
            console.log("unmonting");
        }
    }, [counter])
    console.log(btnRef);
    return (
        <>
            <p>INTER: {counter}</p>
            <button onClick={() => setCounter((counter) => counter + 1)}>
                couner +
            </button>
            <button onClick={() => console.log(btnRef)} ref={btnRef}>
                Stop
            </button>
        </>
    );
};
export const CompRef = () => {
    const [visible, setVisible] = useState(true);
    return (
        <>
            <p>REF</p>
            <button onClick={() => setVisible(false)}>click</button>
            {visible && <CompIter />}
        </>
    );
};
