
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}


     const type= "service_account";
const project_id= "eatablesuser";
const private_key_id= "c9470b2ffb37421014872648039a990175473c62";
    const private_key= "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0Tz/hhr48HXld\nCOpI5iQD2bNsu0fevFujLQw9jHUPe43yLnXnr2UHGr2w5F1StfJiTkeQTC6mxboR\nphYOZy3ZeJZNrjSmO01i+RCroiX72y7und+znJYHcbRVkFwJVbfklUa7NZo/txQu\nXRcjmfYO7KMEhkD2sEoc12/NeOMrRiCUN3V/JbodF8FL7PAwZchlB2QUgMr5xF+v\nUIz3cvYGg+EGJVdUuZdHYOX1KWdh3ygsIgSn6bz/mgwUMp7bayNfyCRZ64GMzj3W\n+8o3NulRUBxBoOy7Lse0R7eUiKO/ZcZiUfjFqHinzeH8LgkOoeQEXdyhmAMG5vg2\nk/rNGoD5AgMBAAECggEATA8F9l89TeRs9ma1VUznMkyZ2Crj9TvlN97fw/LEymQn\nC1q316Rv7GBGViDukN45QWid3WuVXjoX9CvoL+ksOQkZ9eifQuPPEAnaE1xRw3zA\nvl0QKRbLXpaDKHi9qh5jdOPXM084Itpag/g2s4jVd5Qwa88qBiV1Ddd+zODKiszS\nowMbZNqe83+0PSfC7GAU0gY0z0H/3w745Dtjo+q5z6ppJ1tOE3SPNvR0dBZQ0HCI\nEysYd6sCM7MfX+ooifDwNmtYYMqWov+ngJl7Rz4YylNlm28krtqUrDc9OUR94m34\nd3uyquPZefswOe6JPgp5wAiuaJCVzYIUs3LMELuKFQKBgQDxWtEABD8lpvs2rXnn\n283u5zo7IpCnFybnCCH70BQAm8WzQiMds9INfAjrUw+g8uA7kO+v/dnmsy4a8rTP\nB6CxH+y87HAOubPd7D5VHSN2CUsuxYMbB+Lpl79/XUODLIA5bigJkX9QlMQqciCc\nXp8z5I08epGQTaSiVuyakY9CEwKBgQC/QCmf3VsOrV7kyZVqSMSMC/4VXVTC0Y8l\naSBTbmmLsFwH6W8248RVc1ZRUqGYqZBS+zI5FIXQZwX8WDuy132Q70ThWzZHl58k\nya5a5dqXjMQF6juLIx7w8t75lYOtzYZWaBduVRz+kklOJaektPCH0aLDwYFF21jk\nOg6h4gmyQwKBgG9PdA5u5vSlgzxfW1acX+hricaWFWKKYe2xKYMqHt989/vJZ8qe\nESUY7EAjqZSQDuxJ1tEy4Rjt0DircMn+eZTW5WboIHIaISMbfk/gxWb9uEfU3bdM\nttEGpFHIIIfRsT1LWXm4OaBfS+1Lf1C+ruvO33hiCtojhOc98ZcDxK8zAoGADTC3\nrjbuGM0MRmtAytvJ8n7BP2f4eJdLcCEYAakTznaTYlhPO1HqMJqL0YAJdSX8tjxs\n8lLgB8eTOhw7wdHq7xwRfBl2XOmwKDFgvRQtR1aGDoJhKO97KtMVXdFaC5qpMTxs\noUdtgIFGXQVr0ohILpXey/GEoPTH5LW8XJ3iXVECgYEAmWuaeqZC1qAh8+RXmSDq\nd9wTc2aJIA42FxI7B96ttnXF8uCW+3/z5SCbjRq2aBsHVeoi3c+xq9NdjR+dfqMc\nOMOho7uZe92JQHEJbMyoJYKf7jI42qcrsb4vwIU+Go7Hl3xMz26rg1Dy0t9RpSGc\ncY4vu7XL8k1Im9RUbhcE5r0=\n-----END PRIVATE KEY-----\n";
    const client_email= "firebase-adminsdk-6kr1d@eatablesuser.iam.gserviceaccount.com";
    const client_id= "106604848248521920876";
        const auth_uri= "https://accounts.google.com/o/oauth2/auth";
    const token_uri= "https://oauth2.googleapis.com/token";
    const  auth_provider_x509_cert_url= "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url= "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-6kr1d%40eatablesuser.iam.gserviceaccount.com"


module.exports = {
    type:type,
    project_id:project_id,
    private_key:private_key,
    private_key_id:private_key_id,
    client_email:client_email,
    client_id:client_id,
    auth_uri:auth_uri,
    token_uri:token_uri,
    auth_provider_x509_cert_url:auth_provider_x509_cert_url,
    client_x509_cert_url:client_x509_cert_url
}