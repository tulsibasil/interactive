console.log("Hello wikipedia");
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyz4f7sTDVVTaEif'}).base('appfoncJfUIp25hAk');


function SubmitToAirtable(){
var name= $('#Name').val();
    base('Leaderboardle').create([
      {
        "fields": {
          "Name": name,
          "Date": "2022-04-27",
          "Pasted result": "I solved Semantle #83 in 17 guesses. My first guess had a similarity of 21.11.  My first word in the top 1000 was at guess #2.  My penultimate guess h...",
          "Game": [
            "Semantle"
          ]
        }
      }
    ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    });
}