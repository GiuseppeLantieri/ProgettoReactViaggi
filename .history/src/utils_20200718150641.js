/**********************ICONE MEZZI*******************************/
import { faCar, faTaxi, faBus } from '@fortawesome/free-solid-svg-icons';

export const arrayAssociativo = [];
arrayAssociativo['auto_privata'] = {icon:faCar, classe : 'icon icon-car'};
arrayAssociativo['transfer'] = {icon:faTaxi, classe : 'icon icon-taxi'};
arrayAssociativo['bus'] = {icon:faBus, classe : 'icon icon-bus'};


/*************************MAPPING ARRAY CITTA*****************************/
class Giorno {
	constructor(id, data, accomodations, activities, day, transports, included, notIncluded) {
		this.id = id;
		this.data = data;
		this.accomodations = accomodations;
		this.activities = activities;
		this.day = day;
		this.transports = transports;
		this.included = included;
		this.notIncluded = notIncluded;
	}
}
class Citta { //si passa in app
	constructor(id, nome, latitudine, longitudine, giorni) {
		this.id = id;
		this.nome = nome;
		this.coordinate = { latitudine: latitudine, longitudine: longitudine };
		this.giorni = giorni;
	}
}
export function mapCitta(righe) { // ci creiamo il json 
	const arrayCitta = [];
	let currentId = null;
	let id,nome, latitudine, longitudine, giorni = [];

	righe.forEach((riga, i) => {
		if (currentId == null) {
			currentId = riga.place.id;
		}

		if (currentId === riga.place.id) {
			id = currentId;
			nome = riga.place.name;
			latitudine = riga.place.latitude;
			longitudine = riga.place.longitude;
			let idGiorno = riga.id;
			let date = riga.dayDate;
			let accomodations = riga.accomodations;
			let activities = riga.activities;
			let day = riga.days[0]; //TODO chiedere a Nunzio
			let transports = riga.transports;
			let included = riga.included;
			let notIncluded = riga.notIncluded;

			giorni.push(new Giorno(idGiorno, date, accomodations, activities, day, transports, included, notIncluded))
		}

		if (i + 1 < righe.length) {
			if (currentId !== righe[i + 1].place.id) {
				currentId = null
				arrayCitta.push(new Citta(id, nome, latitudine, longitudine, giorni))
				giorni = [];
			}

		} else {
			arrayCitta.push(new Citta(id, nome, latitudine, longitudine, giorni))
		}


	})
	return arrayCitta;
}

/*******************GESTIONE VISUALIZZAZIONE DATE E NUM ADULTI/BAMBINI*****************************/
const nomiMesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
    "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
export function getDateDalAl(dateFrom,dateTo){
    let dataPartenza = new Date(dateFrom);
    let dataArrivo = new Date(dateTo);
    let annoPartenza = (dataPartenza.getFullYear() !== dataArrivo.getFullYear()) ? " "+dataPartenza.getFullYear() : "";
    let mesePartenza = (dataPartenza.getMonth() !== dataArrivo.getMonth()) ? " "+nomiMesi[dataPartenza.getMonth()] : "";
    return `dal ${dataPartenza.getDate()}${mesePartenza}${annoPartenza} al ${dataArrivo.getDate()} ${nomiMesi[dataArrivo.getMonth()]} ${dataArrivo.getFullYear()}`;
}

export function getDateDalAlNoYear(dateFrom,dateTo){
    let dataPartenza = new Date(dateFrom);
    let dataArrivo = new Date(dateTo);
    let mesePartenza = (dataPartenza.getMonth() !== dataArrivo.getMonth()) ? " "+nomiMesi[dataPartenza.getMonth()] : "";
    return `dal ${dataPartenza.getDate()}${mesePartenza} al ${dataArrivo.getDate()} ${nomiMesi[dataArrivo.getMonth()]}`;
}

export function getDayMonth(date){
    let retDate = new Date(date);
    return `${retDate.getDate()}${nomiMesi[retDate.getMonth()]}`;
}

export function calcolaNumAdultiBambini(partecipanti){
    let numeroAdulti = 0
    let numeroBambini = 0
    partecipanti.forEach( p => {
        p.type==="adulto" && (numeroAdulti++);
        p.type==="bambino" && (numeroBambini++);
    });
    return [numeroAdulti,numeroBambini];
}


/*************************GESTIONE MODALE*****************************/
export function funzioneApriModale(funzioneSet,parametro){
	funzioneSet(parametro+1);
}

/*************************CREAZIONE UTENTE DEFAULT*****************************/
class Utente{
	constructor(email,hash,salt){
		this.email=email;
		this.hash=hash;
		this.salt=salt;
	}
}
export var sha512 = require('js-sha512');
export function creaUtenteDef(){
	const utente = JSON.parse(window.localStorage.getItem('user'));
	if(utente === null){
		const marco = new Utente("marcoaiello@gmail.com",sha512('aaaa'+49),49);
		window.localStorage.setItem('user',JSON.stringify(marco));
		return marco;
	}else{
		return utente;
	}
}