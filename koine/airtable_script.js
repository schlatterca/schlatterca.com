const airtableApiKey = process.env.SECRET_APIKEY;
console.log(airtableApiKey);

var Airtable = require('airtable');
// Get a base ID for an instance of art gallery example
var base = new Airtable({ apiKey: 'pattXNrg1dENKpkj9.f14b70198486e0fd16929cabdcbbdc199a487d68ca638f4f08a3a54a99bb313d' }).base('appPGNwsWUArcPG3U');

let index = 0;
var loadArtists = function() {
    $('#words').empty();

    base('database_A').select({
        sort: [
            {field: 'parola', direction: 'asc'}
        ]
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {

            //CHECK IF HAS ARTEFACT
            if (record.get('parola') === undefined){
                return;
            }

            //LIMIT TO THREE RECORDS
            index += 1;
            /*if (index > 3) {
                return;
            }*/

            //console.log('Retrieved ', record.get('title'));

            //console.log(record.get('definizione'));

            var $artistInfo = $('<div>');

            if(record.get('definizione') != undefined) {
                $artistInfo.append($('<p class="unclickable">').text(record.get('parola')));
            } else {
                $artistInfo.append($('<p onclick=openModal(this)>').text(record.get('parola')));
            }


            $artistInfo.attr('data-record-id', record.getId());

            $('#words').append($artistInfo);
        });

        fetchNextPage();

    }, function done(error) {
        //console.log(error);
    });
};

loadArtists();


/*MORE*/
function openModal(myWord) {
	let myWordText = myWord.innerText;
    let myWordId = myWord.parentElement.getAttribute('data-record-id');

	$('#modal').removeAttr("hidden");
	$('#modal p.chosenWord')[0].innerText = myWordText;
    $('#modal p.chosenWord')[0].setAttribute('data-record-id', myWordId);
}

function closeModal() {
	$('#modal').attr("hidden",true);
}

function sendDefinition(definit) {

    let myWord = $(definit).parent().find('.chosenWord')[0].innerText;
    let myId = $(definit).parent().find('.chosenWord')[0].getAttribute('data-record-id');
    let myDefinition = $(definit).siblings('#definition').val();
    let myName = $(definit).siblings('#nome').val();

	/*console.log(myWord);
	console.log(myId);
	console.log(myDefinition);
    console.log(myName.length);*/

    //console.log(new Date());

    base('database_A').update([
        {
          "id": myId,
          "fields": {
            "definizione": myDefinition,
            "autore": myName,
            "data": new Date()
          }
        }
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        } else {
            location.reload();
        }
    });

    closeModal();

}
