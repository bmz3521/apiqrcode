const express = require('express')
const app = express()
const port = 3001
const path = require("path");

const qrcode = require('qrcode')
const generatePayload = require('promptpay-qr')

// const bankAccount = '0933788230'
// const amount = 200
// const desciption = 'รายการสั่งยา Roxytro mizyn'

// const payload = generatePayload(bankAccount, { amount , desciption})
const CRC = '37C6'

const codePayment = `00020101021230570016A00000067701011201153110400394751010206REF0010304REF253037645406555.555802TH62100706SCB0016304${CRC}`;

qrcode.toFile('QrPaymeny/result.jpg', codePayment, {
    color: {
        dark: '#000000',
        light: '#ffffff',
    }
  }, function (err) {
    if (err) throw err
    console.log('done')
  })
  
app.get('/qr', (req, res) => {
    res.sendFile(path.join(__dirname, "./QrPaymeny/result.jpg"));
})

app.get('/', (req, res) => {
    const obj = { data : 12 , name : 'milo' ,age : 12}
    res.json(obj);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})