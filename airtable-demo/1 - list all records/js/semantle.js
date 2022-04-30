console.log("Hello semantle");

// var node = document.createElement("p");
// node.innerText = "random";
// document.body.appendChild(node);

// load the airtable library
var Airtable = require('airtable');

// configure the site to point to your Airtable
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyz4f7sTDVVTaEif'
});
var base = Airtable.base('appfoncJfUIp25hAk');

// set up a blank array for all your rows
const rows = [];

// this line of code says to get all the info from AirTable
base('Leaderboardle').select({
    // If you want to sort the records, include that here:
     sort: [
        {field: 'SemantleNumber', direction: 'asc'}
    ],
}).eachPage(gotPageofRows, gotAllRows);

// Here, we're going to get batches of rows from the airtable, 
// and add each row to our rows array.
function gotPageofRows(records, fetchNextPage) {
    console.log("gotPageofRows()");

    rows.push(...records);

    fetchNextPage();
}

// once we've got all rows in our array, the following code runs.
function gotAllRows(err) {
    console.log("gotAllRows()");

    // first, if there's an error we're going to log that.
    if (err) {
        console.log("Error loading rows");
        console.error(err);
        return;
    }

    // if no error, we're going to run two more functions.
    consoleLogRows();
    showRows();
}

// consoleLogRows simply logs each row to the console, 
// so you can see it's data and fields.
function consoleLogRows() {
    
    console.log("consoleLogRows()");
    
    rows.forEach((row) => {
        console.log("Row:", row);
    });

}

// function get_scores() {
  
// }

// showRows is what puts the content onto the HTML page
function showRows() {
    console.log("showRows()");

    // var today = new Date().toISOString().slice(0, 10);
    // var today2 = new Date().toISOString()
    // var tzoffset = (new Date()).getTimezoneOffset() * 60000; 
    // var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
    
    // console.log(localISOTime) 
    var april = new Date();
    var apriloffset = april.getTimezoneOffset() * 60000;
    var today = (new Date(Date.now() - apriloffset)).toISOString().slice(0, 10);
    console.log(april);
    console.log(apriloffset);
    console.log(today);
    // console.log(today)
    // console.log(today2)
    // sort the rows array by score

    rows.forEach((row) => {
        
        console.log(row.fields.Date);
        console.log(row.fields.Game);
        console.log(today);
        console.log("numberparse" + Number.isFinite(parseFloat(row.fields.SemantleNumber)));
        if (today == row.fields.Date) {
            if (Number.isFinite(parseFloat(row.fields.SemantleNumber))){
                const friend = document.createElement("h2");
            friend.innerText = row.fields.Name;
            friend.classList.add('friendz'); 
            document.body.appendChild(friend);
            

            if (row.fields.Game == "Semantle") {
                var sscore = document.createElement("h2");
                sscore.innerText = row.fields.SemantleNumber;
                sscore.classList.add('semz');
                document.body.appendChild(sscore);
                console.log(row.fields.Game);
            }
            }
            

        }

        });
        
// const wrapper, create a div, then create score element, instead of saying document.body.appendChild, append child to the wrapper (const name)

        // uncomment this code to add the description column from the table.
        // const div = document.createElement("div");
        // div.innerText = row.fields.Description;
        // document.body.appendChild(div);

        // uncomment this code to add the images from the table.
        // const image = document.createElement("img");
        // image.src = row.fields.icon[0].url;
        // document.body.appendChild(image);
    }