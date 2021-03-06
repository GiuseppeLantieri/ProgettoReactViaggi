import React from "react";
import MyContext from "../../MyContext";
import "./referente.css";

export default function Referente() {
    const contesto = React.useContext(MyContext);
    const iconaAzienda = "./logo.png";
    return (
        <div className="reference-card shadow py-3 mb-4">
            <div className="row align-items-center">
                <div className="col-12 col-xl-5">
                    <div className="row">
                        <div className="col-5 col-xl-4">
                            <img
                                alt="immagine"
                                className="tiny-img"
                                src={contesto.operator.image}
                            ></img>
                        </div>
                        <div className="col-7 col-xl-6">
                            <div className="row h-100">
                                <div className="col-12">
                                    <span className="tinyText">
                                        Il tuo referente è{" "}
                                        <span className="mycolor-orange">{contesto.operator.name}</span></span>
                                </div>
                                <div className="col-12 mt-auto">
                                    <span className="tinyText">
                                        Tel: <a href={`tel: ${contesto.operator.contact.phone}`} >{contesto.operator.contact.phone}</a>
                                    </span>
                                        <br />
                                        <span className="tinyText">
                                            Email: <a href={`mailto: ${contesto.operator.contact.email}`} target="_blank" rel="noopener">{contesto.operator.contact.email}</a>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-1 separatore-card"></div>
                <div className="col-12 col-xl-6 agency-info">
                    <div className="row h-100 ml-2">
                        <div className="col-12">
                            <img alt="immagine" className="tiny-icon" src={iconaAzienda}></img>
                        </div>
                        <div className="col-12 mt-auto">
                            <p className="tinyText">
                                {contesto.agency.name}
                                <br />
                                {contesto.agency.contact.address}
                                <br />
                                {contesto.agency.contact.website}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
