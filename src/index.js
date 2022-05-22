import AWS from 'aws-sdk'
import DOTENV from 'dotenv'
DOTENV.config()

const SES = new AWS.SES({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_KEY,
    region: 'us-east-1',
})
    
const params = {
    Destination: {
        ToAddresses: ['allissonmateus89@gmail.com'],
    },
    Message: {
        Body: {
        Html: {
            Charset: 'UTF-8',
            Data: '<p>Olá Allisson Mateus,</p><p>Node.js and <strong>Amazon SES</strong> test e-mail</p>',
        },
        },
        Subject: {
        Charset: 'UTF-8',
        Data: 'This is a test!',
        },
    },
    Source: 'allissonmateus89@gmail.com',
}

  
try {
    await SES.sendEmail(params).promise()
    console.log('success: ', 'E-mail sent successfully!')
} catch (error) {
    console.log('error: ', error)
}