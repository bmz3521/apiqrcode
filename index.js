const express = require('express')
const app = express()
const port = 3001
const path = require("path");

const qrcode = require('qrcode')


const accountNumber = '|099400016602811'
const HN = '370086811'
const VN = '640337789'
const amount = '10000' // 10000 = 100.00 Bath
const codePayment = `${accountNumber} 
${HN}
${VN}
${amount}`; // จำเป็นต้องเว้นบรรทัดแบบนี้ครับ  ACCOUNTNUMBER HN VN AMOUNT ต้องแยกกัน

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