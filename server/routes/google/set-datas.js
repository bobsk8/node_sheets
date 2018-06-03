const
  config = require('config'),
  google = require('googleapis'),
  privatekey = require("./privatekey.json"),
  spreadsheetId = config.spreadsheetId.ID,
  sheets = google.sheets('v4');

// configure a JWT auth client
  jwtClient = new google.auth.JWT(
    privatekey.client_email,
    null,
    privatekey.private_key,
    ['https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/calendar']);


module.exports = (req, res) => {
  let
    datas = req.body;

  datas = formatDatas(datas);
  auth();
  setValues(datas)
    .then(d => res.send(d));
}

function formatDatas(data) {
  let datasF = [];
  
  datasF[0] = 'Escreve a partirda célula A3';
  datasF[1] = 'Escreve a partirda célula B3'
  return datasF;
}

function setValues(datas) {
  let
    range = 'Página1!A3',
    valueInputOption = 'RAW',
    values = [
      datas,
      // Additional rows ...
    ],
    body = {
      values: values
    };

  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range: range,
      auth: jwtClient,
      valueInputOption: valueInputOption,
      resource: body
    }, function (err, result) {
      if (err) {
        // Handle error
        reject(err);
        console.log(err);
      } else {
        console.log('%d cells updated.', result.updatedCells);
        resolve({ sucess: result.updatedCells });
      }
    });
  })
}

function auth() {
  //authenticate request
  jwtClient.authorize(function (err, tokens) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Successfully connected!");
    }
  });
}