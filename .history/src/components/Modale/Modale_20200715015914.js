import React, {useState, useEffect} from 'react';
import './modale.css';

export default function Modale({children,click}){
    const [opened, setOpened] = useState(false);

    const chiudiModale = ()=>{
        setOpened(false);
    }
    useEffect(() => {
        click && setOpened(true);
    }, [click]);

    return(
        opened ? (
            <div className="containermodale">
            <div className="modale shadow">
                <button className="btn btn-danger" onClick={chiudiModale}>X</button>
            </div>
            <div>
                {children}
            </div>
            </div>
        )
        : <></>)
}