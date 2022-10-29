import HomepageView from '../view/homepage.js'
import dist from '../model/model.js'

//คำสั่งที่ทำให้ Render ภาพขึ้น Homepage ได้
export function renderHomepage(req, res) {
	//Set Variable
	let view = new HomepageView()
	let lati = +req.query.lati
	let longi = +req.query.longi
	let ns = req.query.NS
	let we = req.query.WE

	//Check direction if south = -lati or west = -longi
	if(ns == "s"){
		lati = -lati
	}
	if(we == "w"){
		longi = -longi
	}

	if(!lati || !longi){
		view.summary = ''
	}else{
		//Send info to Homepage	
		let summary = dist(lati, longi)
		view.summary = summary
	}

	//Render file homepage in view
	res.render('homepage', view)
}