import React, { useState, useEffect } from 'react';
import './App.css';
import MyContext from './MyContext';
import Accordion from './components/Accordion';
import * as utils from './utils';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Referente from './components/Referente/Referente';
import NavBar from './components/NavBar/NavBar';
import MyTravel from './components/MyTravel/MyTravel';
import DayCard from './components/DayCard/DayCard';
import Dayline from './components/DayCard/Dayline/Dayline';
import Tariffa from './components/Tariffa/Tariffa';
import Note from './components/Note/Note';
import OnlyDescription from './components/OnlyDescription/OnlyDescription';

const urlJSON = 'http://51.77.82.133:86/api/quotations/QUO_5e5e2952ae57f#'

export default function App() {
	//sto creando una variabile di stato e la inizializzo ad un oggetto vuoto
	const [datiJson, setDatiJson] = useState(null);
	const [arrayCitta, setArrayCitta] = useState([]);
	useEffect(() => {
		const getDati = async () => {
			const dati$ = await fetch(urlJSON).then(res => res.json());
			setDatiJson(dati$.results.data);
			setArrayCitta(utils.mapCitta(dati$.results.data.rows));
		}
		getDati();
	}, []);

	return (
		(datiJson != null && arrayCitta.length > 0) ?
			<>
				<MyContext.Provider value={datiJson}> {/* Questo è il provider più esterno che racchiude tutti il data della fetch*/}

					<NavBar navlinks={
						[{ id: 'mappa', nome: 'MAPPA' },
						{ id: 'referente', nome: 'REFERENTE' },
						{ id: 'viaggio', nome: 'VIAGGIO' },
						{ id: 'info', nome: 'INFO' }]}>
					</NavBar>
					<MyContext.Provider value={{ titolo: datiJson.title, nomeCliente: datiJson.customerName, image: datiJson.images[0].image }}>
						<Header/>
					</MyContext.Provider>

					<div className="container-fluid">

{/**************************************INIZIO ACCORDION VIAGGIO*****************************************/}
						<MyContext.Provider value={{ citta: arrayCitta.map(citta => { return { nome: citta.nome, posizione: citta.coordinate } }), dateFrom: datiJson.dateFrom, dateTo: datiJson.dateTo, partecipanti: datiJson.partecipants }}>
							<div className="anchor" id="mappa" />
							<MyTravel></MyTravel>
						</MyContext.Provider>
						<MyContext.Provider value={{ operator: datiJson.operator, agency: datiJson.agency }}>
							<div className="anchor" id="referente" />
							<Referente></Referente>
						</MyContext.Provider>
						<div className="anchor" id="viaggio" />
						<div className="row">
							<div className="col col-12">
								{arrayCitta.map((citta, i) => {
									return (
										<div key={i + "div"}>
											<MyContext.Provider value={citta}>
												<Accordion key={citta.id} tipo="citta">
													{citta.giorni.map((giorno, i) => {
														return (
															<div key={i + "div"}>
																<MyContext.Provider value={{ giorno: giorno, numeroGiorni: citta.giorni.length }}>
																	<div className="row">
																		<div className="col-1 ">
																			<Dayline bordo={true} />
																		</div>
																		<div className="col-11">
																			<DayCard boleano={i < 1} key={giorno.id} />
																		</div>
																	</div>
																</MyContext.Provider>
															</div>
														)
													})}
												</Accordion>
											</MyContext.Provider>
										</div>
									)
								})}
							</div>
						</div>
{/****************************************FINE ACCORDION VIAGGIO*****************************************/}

{/****************************************INIZIO ACCORDION INFO******************************************/}

						<div className="anchor" id="info" />
						<div className="row mr-0 ml-0" id="info">
							<MyContext.Provider value={{ nome: "TARIFFE" }}>
								<Accordion tipo="info">
									<Tariffa dati={{
										partecipants: datiJson.partecipants, priceTotal: datiJson.priceTotal,
										included: datiJson.included, notIncluded: datiJson.notIncluded
									}} />
								</Accordion>
							</MyContext.Provider>
							<MyContext.Provider value={{ nome: "NOTE" }}>
								<Accordion tipo="info"><Note /></Accordion>
							</MyContext.Provider>
							<MyContext.Provider value={{ nome: "DOCUMENTI RICHIESTI" }}>
								<Accordion tipo="info">
									<OnlyDescription description={datiJson.documentsRequested.description} />
								</Accordion>
							</MyContext.Provider>
							<MyContext.Provider value={{ nome: "ASSICURAZIONE" }}>
								<Accordion tipo="info">
									<OnlyDescription description={datiJson.documentsInsurance.description} />
								</Accordion>
							</MyContext.Provider>
							<MyContext.Provider value={{ nome: "CONDIZIONI DI CANCELLAZIONE" }}>
								<Accordion tipo="info">
									<OnlyDescription description={datiJson.documentsCancellation.description} />
								</Accordion>
							</MyContext.Provider>
							<MyContext.Provider value={{ nome: "CONDIZIONI DI PAGAMENTO" }}>
								<Accordion tipo="info">
									<OnlyDescription name={datiJson.documentsPayment.name} description={datiJson.documentsPayment.description} />
								</Accordion>
							</MyContext.Provider>
						</div>
{/****************************************FINE ACCORDION INFO******************************************/}
					</div> {/*chiusura div container-fluid*/}
				</MyContext.Provider>
				<Footer></Footer>
			</>
			: <></>
	);
}