let count = 1;
let colorCount = 1;
let projectCount = 0;
let opac_2 = 1;
let opac_3 = 1;
let opac_4 = 1;

let root = document.documentElement;

var descriz_carlo = "Ciao! Sono Carlo Andrea, studio progettazione grafica<br>"
					+"e comunicazione visiva. Ho tanti interessi, dormo poco,<br>"
					+"lavoro come freelancer per design digitale e cartaceo.<br>"
					+"Credo fermamente che, con le giuste quantità di tempo<br>"
					+"e di Coca-Cola, sia possibile fare qualunque cosa.<br>"
					+"Questo sito, ad esempio, mi è costato nove Coca-Cole.<br>"
					+"Tocca il mio nome in alto per vedere i miei contatti!"
var descriz_parade = "Showcase online per ISIA U con podcast, immagini,<br>"
					+"video e materiale raccolto da professori e studenti.<br>"
					+"Durante i tre giorni di durata dell'evento, uno script<br>"
					+"rendeva disponibili nuovi materiali ogni ora."
var descriz_deepfu = "Il progetto fotografico raccoglie esperimenti e ricerche<br>"
					+"su Deep Fusion, software Apple sviluppato nel 2019<br>"
					+"per migliorare le immagini scattate al buio da iPhone.<br>"
					+"La mostra virtuale è aperta dal tramonto all'alba."
var descriz_urbesp = "Guida turistica non convenzionale alle infrastrutture<br>"
					+"telecomunicative di Urbino: tutto il centro storico<br>"
					+"è stato mappato, fotografato e ripensato come meta<br>"
					+"di un Internet Tour con l'artista Mario Santamaría."
var descriz_viapas = "Per questo negozio di arredamenti e oggettistica<br>"
					+"ho impostato comunicazione e presenza su Internet,<br>"
					+"dai biglietti da visita alla configurazione dello shop<br>"
					+"online su sito, Instagram e Facebook Marketplace."
var descriz_unconv = "Progetto di ricerca ispirato dai temi dell’Agenda ONU<br>"
					+"2030 sul pubblico accesso all’informazione. Una guida<br>"
					+"all’uso non convenzionale di Internet, tra easter egg<br>"
					+"e cifrari, al fine di sviluppare le propria libertà online."
var descriz_hayao = "Ispirato dalle forme, dai personaggi e dalle atmosfere<br>"
					+"dei lungometraggi d’animazione dello studio Ghibli,<br>"
					+"questo carattere morbido come Totoro e scoppiettante<br>"
					+"come Calcifer è dedicato al grande Hayao Miyazaki."

/*var nome = ["Schlatter Carlo Andrea", "@schlatterca su Instagram", 
                "Carlito Andreito e poi Schlatterito", "Anche detto Andrea Carlo",
                "Scachler, Sacher, Screecher, dai lui", "Anche detto Swiss Army Man",
                "Quello col cognome difficile", "L‘amico tuo! Ah, non era tuo amico?",
                "Quello col nome da vecchio", "DAI! Carlo! Non hai presente?",
                "Il tizio con la maglia bianca", "Per gli amici, Carl",
                "Un italiano molto svizzero", "Alla sua età io già lavoravo",
                "Uno svizzero molto italiano", "Dai non puoi non averlo presente",
                "Il proprietario di questo sito", "Quello che si crede simpatico",
                "Eh poverino, andarsene così…", "Ricordo solo che era alto alto",
                "Lui, insomma, non lui, l'altro", "Non ce l'hai presente?"];*/
var nome = ["Carlo Andrea Schlatter", "Instagram: <a target='_blank' href='https://www.instagram.com/schlatter.ca/'>@schlatterca</a>",
				"Facebook: <a target='_blank' href='https://www.facebook.com/c.a.schlatter'>Carlo Schlatter</a>", "Mail: <a target='_blank' href='mailto: schlatterca@gmail.com'>schlatterca@gmail.com</a>",]
var impiego = ["studente di Graphic Design", "copywriter freelance<br>per belle aziende",
				"appassionato di enigmistica", "grande fan di Fabri Fibra",
				"cuoco improvvisato ma pulito", "patito della politica americana",
				"intenditore di caramelle<br>gommose e cioccolata", "amatore a livello amatoriale",
				"programmatore nel tempo<br>libero (molto poco)", "avido lettore, anzi<br>diciamo avido e basta",
				"bevitore di Mojito<br>con la tequila", "illustratore di grandi piani",
				"fotografo soltanto<br>dopo il tramonto", "filosofo per tre anni a Bologna",
				"accarezzatore di idee<br>strane e bislacche", "domatore di leoni nani",
				"curatore di bonsai giganti", "sul libro paga della Chiquita"]
var rightnow = ["ISIA Urbino, Italia", "laureato in Filosofia<br>all'Università di Bologna",
				"viene da Gambettola,<br>Forlì-Cesena", "è in viaggio verso est",
				"è al lavoro sul suo sito", "sta giocando a Metal Slug",
				"immerso in un libro triste", "all’ascolto di rap italiano",
				"sta facendo esercizi<br>di ginnastica ritmica", "sta soffiando il vetro",
				"sta costruendo un mobile<br>in legno massello", "è in una chat con il bot<br>di Steve Jobs",
				"nel mezzo di un film d’azione", "ha appena vinto la lotteria",
				"sta scrivendo un’autobiografia", "sta salvando il Natale",
				"lo stanno incoronando<br>Papa proprio adesso", "è ai casting di Masterchef",
				"è stato rapito dagli alieni", "è in giro con Massimo<br>Pericolo e tutta la gang"]
var activity = ["tra i suoi ultimi lavori:", "guarda mamma che bravo:",
				"vedi anche alla voce:", "chiudi gli occhi e clicca:",
				"NON È UN VIRUS:", "si è dedicato a:",
				"enlarge your graphics:", "non si vergogna affatto di:",
				"crede che dovresti vedere:", "il suo progetto preferito:",
				"è un po’ ateo, ma crede in:", "con gli amici si vanta di:",
				"ha lavorato fino a tardi per:", "tiene come a un figlio a:",
				"forse potrebbe piacerti:", "inizia a conoscerlo da:",
				"potrebbe spiegarti tutto su:", "un vecchio saggio gli ispirò:",
				"ha visto in sogno:", "tornato da Narnia ha fatto:",
				"vorrebbe venderti i diritti di:", "dai un’occhiata a:"]
var colori = ["rgb(30,140,255,.8)", "rgb(150,55,155,.8)",
				"rgb(225,55,55,.8)", "rgb(245,130,0,.8)",
				"rgb(255,185,0,.8)", "rgb(95,190,60,.8)"]
var projects = ["Deep Fusion", "Parade 2020", "Urbino Esposta",
				"Unconventional Posting", "Via Pascucci Spazio 14",
				"Hayao Typeface"
				/*"Dorli Typeface", "Filtri RA x Studio Dallas",*/]

//START PUSHBUTTON
function pushButton_1() {
	document.getElementsByClassName("nome")[0].innerHTML = nome[count];

	if (count < nome.length-1) {
		count += 1;
	} else {
		count = 0;
	}

	document.getElementsByClassName("nome")[0].classList.add("rotation");
    setTimeout(function() {
        document.getElementsByClassName("nome")[0].classList.remove("rotation");
    }, 300);

    if (document.getElementsByClassName("nome")[0].innerHTML == "Carlo Andrea Schlatter") {
		document.getElementsByClassName("nome")[0].style.background = "var(--mainColor)";
		console.log(root);
	} else {
		document.getElementsByClassName("nome")[0].style.background = "rgb(100, 230, 120,.8)";
	}

}

function pushButton_2() {
	document.getElementsByClassName("impiego")[0].innerHTML = impiego[Math.floor(Math.random() * impiego.length)];

	document.getElementsByClassName("impiego")[0].classList.add("rotation");
	setTimeout(function() {
    	document.getElementsByClassName("impiego")[0].classList.remove("rotation");
		}, 300);

	if (document.getElementsByClassName("impiego")[0].innerHTML == "studente di Graphic Design") {
		document.getElementsByClassName("impiego")[0].style.background = "var(--mainColor)";
	} else {
		document.getElementsByClassName("impiego")[0].style.background = "rgb(100, 230, 120,.8)";
	}

	checkIfRap();
}

function pushButton_3() {
	document.getElementsByClassName("rightnow")[0].innerHTML = rightnow[Math.floor(Math.random() * rightnow.length)];

	document.getElementsByClassName("rightnow")[0].classList.add("rotation");
	setTimeout(function() {
    	document.getElementsByClassName("rightnow")[0].classList.remove("rotation");
		}, 300);

	if (document.getElementsByClassName("rightnow")[0].innerHTML == "ISIA Urbino, Italia") {
		document.getElementsByClassName("rightnow")[0].style.background = "var(--mainColor)";
	} else {
		document.getElementsByClassName("rightnow")[0].style.background = "rgb(100, 230, 120,.8)";
	}

	checkIfRap();
}

function pushButton_4() {
	document.getElementsByClassName("activity")[0].innerHTML = activity[Math.floor(Math.random() * activity.length)];

	document.getElementsByClassName("activity")[0].classList.add("rotation");
	setTimeout(function() {
    	document.getElementsByClassName("activity")[0].classList.remove("rotation");
		}, 300);

	if (document.getElementsByClassName("activity")[0].innerHTML == "tra i suoi ultimi lavori:") {
		document.getElementsByClassName("activity")[0].style.background = "var(--mainColor)";
	} else {
		document.getElementsByClassName("activity")[0].style.background = "rgb(100, 230, 120,.8)";
	}
}

function pushButton_proj() {
	document.getElementById("underName").children[0].innerHTML = projects[projectCount];

	if (projectCount < projects.length-1) {
		projectCount += 1;
	} else {
		projectCount = 0;
	}

	document.getElementById("underName").classList.add("rotation");
    setTimeout(function() {
        document.getElementById("underName").classList.remove("rotation");
    }, 300);
	
	if (document.getElementById("underName").children[0].innerHTML == "Parade 2020") {
		root.style.setProperty('--gifUrl', "url('../img/PA.gif')")
		document.getElementById("underName").children[0].href = "http://www.progetti-isiau.net/parade2020";
		document.getElementById("underName").children[1].innerHTML = descriz_parade;
	
	} else if (document.getElementById("underName").children[0].innerHTML == "Deep Fusion"){
		root.style.setProperty('--gifUrl', "url('https://digitazon.com/wp-content/uploads/2020/05/60f6e7294309c3ec67855e35eb1912da.gif')")
		document.getElementById("underName").children[0].href = "https://schlatterca.com/deepfusion/index.html";
		document.getElementById("underName").children[1].innerHTML = descriz_deepfu;
	
	} else if (document.getElementById("underName").children[0].innerHTML == "Urbino Esposta"){
		root.style.setProperty('--gifUrl', "url('https://lh3.googleusercontent.com/proxy/EgYmobsn4jM30I84CZ809RzRVCuOYmEHnUdXSIEBt6Xvg2zEOka6SFoyybemb8mWgod1xfrKkSLrEauN_rZye6Tx2YgHLTr7GvHx7AI1uaaDFn0Y8E0c5tt63SVgFCc')")
		document.getElementById("underName").children[0].href = "https://www.instagram.com/p/CInX92VB4vD/";
		document.getElementById("underName").children[1].innerHTML = descriz_urbesp;
	
	} else if (document.getElementById("underName").children[0].innerHTML == "Via Pascucci Spazio 14"){
		root.style.setProperty('--gifUrl', "url('https://raw.githubusercontent.com/schlatterca/schlatterca.com/main/img/vp14.gif')")
		document.getElementById("underName").children[0].href = "https://www.vp-spazio14.com/";
		document.getElementById("underName").children[1].innerHTML = descriz_viapas;

	} else if (document.getElementById("underName").children[0].innerHTML == "Unconventional Posting"){
		root.style.setProperty('--gifUrl', "url('https://raw.githubusercontent.com/schlatterca/Unconv-Posting/master/Gif_Unconv_4fps.gif')")
		document.getElementById("underName").children[0].href = "https://unconv-posting.com/";
		document.getElementById("underName").children[1].innerHTML = descriz_unconv;
	
	} else if (document.getElementById("underName").children[0].innerHTML == "Hayao Typeface"){
		root.style.setProperty('--gifUrl', "url('https://raw.githubusercontent.com/schlatterca/schlatterca.com/main/img/hayao.gif')")
		document.getElementById("underName").children[0].href = "https://www.instagram.com/p/B_pYEQUIxpE/";
		document.getElementById("underName").children[1].innerHTML = descriz_hayao;
	
	} else {
		root.style.setProperty('--gifUrl', "url('https://www.verdict.co.uk/wp-content/uploads/2017/09/giphy-downsized-large.gif')")
	}
}
//END PUSHBUTTON

function loadOpacity() {

	projects = projects.sort(() => Math.random() - 0.5)
	projectCount += Math.floor(Math.random() * projects.length);
	pushButton_proj();

	document.getElementsByClassName("nome")[0].classList.add("makeAppear_1");
	setTimeout(function() {
        	document.getElementsByClassName("nome")[0].classList.remove("makeAppear_1");
			document.getElementsByClassName("nome")[0].style.opacity = 1;
    	}, 300);

	document.getElementsByClassName("impiego")[0].classList.add("makeAppear_2");
	setTimeout(function() {
        	document.getElementsByClassName("impiego")[0].classList.remove("makeAppear_2");
			document.getElementsByClassName("impiego")[0].style.opacity = 1;
    	}, 600);

	document.getElementsByClassName("rightnow")[0].classList.add("makeAppear_3");
	setTimeout(function() {
        	document.getElementsByClassName("rightnow")[0].classList.remove("makeAppear_3");
        	document.getElementsByClassName("rightnow")[0].style.opacity = 1;
    	}, 900);

	document.getElementsByClassName("activity")[0].classList.add("makeAppear_4");
	setTimeout(function() {
        	document.getElementsByClassName("activity")[0].classList.remove("makeAppear_4");
        	document.getElementsByClassName("activity")[0].style.opacity = 1;
    	}, 1200);
}

function reloadPage() {
	location = location;
}

function changeColors() {
	
	root.style.setProperty('--mainColor', colori[colorCount]);

	if (colorCount < colori.length-1) {
		colorCount += 1;
	} else {
		colorCount = 0;
	}
}

function moreInfo() {
	if (document.getElementsByClassName("infoClose")[0].classList.contains("infoOpen")){
		document.getElementsByClassName("infoClose")[0].classList.remove("infoOpen");
		document.getElementsByClassName("infoClose")[0].innerHTML = "💬";
	} else {
		document.getElementsByClassName("infoClose")[0].classList.add("infoOpen");
		document.getElementsByClassName("infoClose")[0].innerHTML = descriz_carlo;
	}
}

function checkIfRap() {
	//EASTER EGG RAP
	if ((document.getElementsByClassName("impiego")[0].innerHTML == "grande fan di Fabri Fibra")&&((document.getElementsByClassName("rightnow")[0].innerHTML == "all’ascolto di rap italiano")||(document.getElementsByClassName("rightnow")[0].innerHTML == "è in giro con Massimo<br>Pericolo e tutta la gang"))){
		root.style.setProperty('--gifUrl', "url('https://media1.tenor.com/images/ba6a863b50713b654a7189c9bff75913/tenor.gif')")
		root.style.setProperty('--mainColor', "rgb(0,0,0,.8)")
	} else if (colorCount == 0) {
		root.style.setProperty('--mainColor', colori[colorCount+5]);
	} else {
		root.style.setProperty('--mainColor', colori[colorCount-1]);
	}
}
