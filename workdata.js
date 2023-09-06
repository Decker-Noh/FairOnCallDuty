const { app } = require('./main.js');
const fs = require('fs');
const path = require('path');

let work = {
    "work" : [
        {
            "year" : 2023,
            "month" : 9,
            "day" : 12,
            "dow" : 0,
            "red" : false,
            "worker" : "순건",
        }
    ]
}

const filePath = path.join(app.getPath('userData'), 'data.json')
console.log("파일경로 : " + filePath);
function saveData(data) {
    const text = JSON.stringify(data)
    fs.writeFile(filePath, text, err => {
        if (err) {
            console.error(err)
        }
    })
}


