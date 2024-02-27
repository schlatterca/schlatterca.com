jQuery.get('projects.txt', function(data) {
	var myText = data;

	const projTitles = myText.match(/<title>.*?<\/>/g);
	const projLink = myText.match(/<link>.*?<\/>/g);
	const projDescr = myText.match(/<desc>.*?<\/>/g);
	const projMore = myText.match(/<more>.*?<\/>/g);
	const projImages = myText.match(/<images>.*?<\/>/g);

  	$(document).ready(function() {
  	
	  	for (i=0; i<projTitles.length; i++){

			if(i==0){
				$( "<div class='project proj_"+i+"'>"+
						"<div class='text'>"+
							"<p class='title'><a target='_blank' href='"+projLink[i].replaceAll('<link>','').replaceAll('</>','')+"'>"+projTitles[i].replaceAll('<title>','')+
							"&nbsp;↗</a></p>"+
							"<p class='more'>"+projMore[i].replaceAll('<more>','').replaceAll('</>','')+"</p>"+
							"<p class='descr'>"+projDescr[i].replaceAll('<desc>','').replaceAll('</>','')+"</p>"+
						"</div>"+
						"<div class='figure open'>"+
							"<img src='images/"+projImages[i].replaceAll('<images>','').replaceAll('</>','')+"'>"+
						"</div>"+
					"</div>"+
				"</div>" ).appendTo($('.projects'));
			} else if(projLink[i].replaceAll('<link>','').replaceAll('</>','').length < 2) {
				$( "<div class='project proj_"+i+"'>"+
						"<div class='text'>"+
							"<p class='title unactive'>"+projTitles[i].replaceAll('<title>','').replaceAll('</>','')+"</p>"+
							"<p class='more'>"+projMore[i].replaceAll('<more>','').replaceAll('</>','')+"</p>"+
							"<p class='descr'>"+projDescr[i].replaceAll('<desc>','').replaceAll('</>','')+"</p>"+
						"</div>"+
						"<div class='figure'>"+
							"<img src='images/"+projImages[i].replaceAll('<images>','').replaceAll('</>','')+"'>"+
						"</div>"+
					"</div>"+
				"</div>" ).appendTo($('.projects'));
			} else {
				$( "<div class='project proj_"+i+"'>"+
						"<div class='text'>"+
							"<p class='title'><a target='_blank' href='"+projLink[i].replaceAll('<link>','').replaceAll('</>','')+"'>"+projTitles[i].replaceAll('<title>','')+
							"&nbsp;↗</a></p>"+
							"<p class='more'>"+projMore[i].replaceAll('<more>','').replaceAll('</>','')+"</p>"+
							"<p class='descr'>"+projDescr[i].replaceAll('<desc>','').replaceAll('</>','')+"</p>"+
						"</div>"+
						"<div class='figure'>"+
							"<img src='images/"+projImages[i].replaceAll('<images>','').replaceAll('</>','')+"'>"+
						"</div>"+
					"</div>"+
				"</div>" ).appendTo($('.projects'));
			}
	  	};
		countProjects();
	});
});

let desc_eng = [];
let desc_ita = [];
jQuery.get('projects_descr.txt', function(data) {
	var myText = data;

	const desc_eng_all = myText.match(/<desc>.*?<\/>/g);
	const desc_ita_all = myText.match(/<desc_ita>.*?<\/>/g);

	for (i=0; i<desc_eng_all.length; i++){
		desc_eng.push(desc_eng_all[i].replaceAll('<desc>','').replaceAll('</>',''));
		desc_ita.push(desc_ita_all[i].replaceAll('<desc_ita>','').replaceAll('</>',''));
	}
});



function openAbout(e) {
	$(e).addClass('active');
	if(e.classList.contains('active')){
		$('main.about').addClass('open');
		$('footer').addClass('open');
		$('header').addClass('open');
		$('header .openWork').removeClass('active');
	}
}
function openWork(e) {
	$(e).addClass('active');
	if(e.classList.contains('active')){
		$('main.about').removeClass('open');
		$('footer').removeClass('open');
		$('header').removeClass('open');
		$('header .openAbout').removeClass('active');
	}
}

let aboutTextEng_1 = "I&nbsp;am&nbsp;Carlo, a&nbsp;graphic designer based in&nbsp;Italy. My&nbsp;educational background combines Philosophy (BA,&nbsp;UNIBO) with Graphic Design (BA + MA, ISIA U) as&nbsp;well&nbsp;as&nbsp;internships at&nbsp;Studio Armin Linke, Berlin and&nbsp;Studio Leonardo Sonnoli, Rimini.<br><br>I&nbsp;am&nbsp;particularly interested in the blending of&nbsp;different languages, especially when it&nbsp;comes to&nbsp;editorial design and&nbsp;coding.<br><br>Aside from my&nbsp;field of&nbsp;study and&nbsp;work, I&nbsp;am&nbsp;passionate about politics and&nbsp;sociology, breaking news and&nbsp;crosswords, marathons and&nbsp;unusual foods, black humor and&nbsp;odd&nbsp;pairings.<br><br>Once, for fun, I&nbsp;programmed an&nbsp;<a href='/ciao/'>introduction simulator</a>."
let aboutTextEng_2 = "Type: Fraktion + Neue Montreal (Pangram Pangram).<br>This website does not use cookies."
let aboutTextIta_1 = "Sono&nbsp;Carlo, un&nbsp;graphic designer italiano. Il&nbsp;mio&nbsp;percorso di&nbsp;studi comprende una&nbsp;Laurea Triennale in&nbsp;Filosofia (UNIBO) e&nbsp;un&nbsp;Diploma Accademico di&nbsp;primo&nbsp;e&nbsp;secondo livello in&nbsp;Progettazione Grafica e&nbsp;Comunicazione Visiva (ISIA U), oltre a&nbsp;stage presso lo&nbsp;Studio Armin Linke (Berlino) e&nbsp;lo&nbsp;Studio Leonardo Sonnoli (Rimini).<br><br>Sono particolarmente interessato alla&nbsp;fusione di&nbsp;linguaggi diversi, soprattutto quando ho&nbsp;la&nbsp;possibilità di&nbsp;unire progettazione editoriale e&nbsp;coding.<br><br>Oltre al&nbsp;mio&nbsp;settore di&nbsp;studio e&nbsp;di&nbsp;lavoro mi&nbsp;appassionano la&nbsp;politica e&nbsp;la&nbsp;sociologia, le&nbsp;notizie e&nbsp;i&nbsp;cruciverba, le&nbsp;maratone e&nbsp;i&nbsp;cibi insoliti, il&nbsp;black humor e&nbsp;gli&nbsp;abbinamenti strani.<br><br>Una volta, per&nbsp;divertimento, ho&nbsp;fatto un&nbsp;<a href='/ciao/'>simulatore di presentazioni</a>."
let aboutTextIta_2 = "Type: Fraktion + Neue Montreal (Pangram Pangram).<br>Questo sito web non utilizza cookie."

function changeLang(el, lang) {
	if(!$(el).hasClass('active')){
		if(lang == 'ita'){
			$('.aboutme')[0].innerHTML = aboutTextIta_1;
			$('.impressum')[0].innerHTML = aboutTextIta_2;
			$('main.about p .active').removeClass('active');
			$(el).addClass('active');
			for (i=0; i<$('.project .descr').length; i++){
				$('.project .descr')[i].innerText = desc_ita[i];
			}


		} else if (lang == 'eng') {
			$('.aboutme')[0].innerHTML = aboutTextEng_1;
			$('.impressum')[0].innerHTML = aboutTextEng_2;
			$('main.about p .active').removeClass('active');
			$(el).addClass('active');
			for (i=0; i<$('.project .descr').length; i++){
				$('.project .descr')[i].innerText = desc_eng[i];
			}
		}
	}
}

function countProjects() {
	let elements = $('.project');

	$(".projects").scroll(function() {
		$('.project > .figure').each(function() {$(this).removeClass('open')});

		var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
			this.clientHeight, this.scrollHeight, this.offsetHeight );
		var actualScroll = limit - document.querySelector('body').offsetHeight - document.querySelector('header').offsetHeight - document.querySelector('footer').offsetHeight;
		let percent = this.scrollTop / actualScroll;
		let steps = 1 / elements.length;
		let actualStep = Math.floor(percent/steps);
		//console.log(percent, actualStep);

		
		if((actualStep >= 0)&&(actualStep < elements.length)){
			$(elements[actualStep].querySelector('.figure')).addClass('open');
		} else {
			$(elements[elements.length-1].querySelector('.figure')).addClass('open');
		}

		/*clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function() {
			if((actualStep >= 0)&&(actualStep < elements.length)){
				$(elements[actualStep].querySelector('.figure')).addClass('open');
			} else {
				$(elements[elements.length-1].querySelector('.figure')).addClass('open');
			}
		}, 200));*/
	});
};