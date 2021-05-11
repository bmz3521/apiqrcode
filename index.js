const express = require('express')
const app = express()
const port = 3001
const path = require("path");

const qrcode = require('qrcode')
const generatePayload = require('promptpay-qr')

const bankAccount = '0933788230'
const amount = 200

const payload = generatePayload(bankAccount, { amount })

qrcode.toFile('QrPaymeny/result.png', payload, {
    color: {
        dark: '#000000',
        light: '#ffffff',
    }
  }, function (err) {
    if (err) throw err
    console.log('done')
  })
  
app.get('/qr', (req, res) => {
    res.sendFile(path.join(__dirname, "./QrPaymeny/result.png"));
})

app.get('/', (req, res) => {
    const obj = { data : 12 , name : 'milo' ,age : 12}
    res.json(obj);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})