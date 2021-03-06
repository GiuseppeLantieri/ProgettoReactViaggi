import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './accordion.css'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import MyContext from '../MyContext'
import * as utils from '../utils';

export default function Accordion({ tipo, children }) {
    const contesto = React.useContext(MyContext);
    const [opened, setOpened] = useState(false)

    const toggleAccordion = () => {

        setOpened(!opened)
    }

    console.log("Ciao sono il contesto dell'accordion", contesto);

    return (
        <>
            <div className="col-12 shadow accordion my-4">
                <div className="title-accordion row">
                    <div className="d-flex align-items-center justify-content-between col-12 col-md-10 offset-md-1">
                        <p className={"titoloAccordion m-0" + ((tipo === "info") && (" text-primary"))}>{contesto.nome.toUpperCase()} {tipo === "citta" && <span className="date-text">{utils.getDateDalAlNoYear(contesto.giorni[0].data, contesto.giorni[contesto.giorni.length - 1].data)}</span>}</p>
                        <FontAwesomeIcon onClick={toggleAccordion} className="icon-arrow" rotation={(opened ? 180 : 0)} icon={faAngleDown} />
                    </div>
                </div>

                <div className={'separatore'+((!opened) ? 'd-block' : 'd-none')}> </div>
                <div className="row">
                    <div className={`col-12 col-md-10 offset-md-1 body-accordion m-auto  ${opened ? 'open' : 'close'}  `}>
                        {(opened ? (
                            <div className="body-props">
                                {
                                    children
                                }
                            </div>
                        ) : '')}

                    </div>
                </div>
            </div>
        </>
    )
}