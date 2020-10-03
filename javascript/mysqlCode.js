// EVERYTHING UNDERNEATH HERE WAS USED TO PULL DATA FROM AN API INTO MYSQL





// API CALL TO VISITOR CENTER (NODE AXIOS)
// function visitCenterData(){
//     app.get("/visitCent", function (req, res) {

//         axios({
//             "method": "GET",
//             "url": "https://jonahtaylor-national-park-service-v1.p.rapidapi.com/visitorcenters",
//             "headers": {
//                 "content-type": "application/octet-stream",
//                 "x-api-key": "6727sriJf42hRfVeWh3bB2fwA9diSYaDr6Iumhbw",
//                 "x-rapidapi-host": "jonahtaylor-national-park-service-v1.p.rapidapi.com",
//                 "x-rapidapi-key": "d237132199msh7d9da0744506a46p1efb39jsn760cb365fe66",
//                 "useQueryString": true
//             },"params":{
//                 "limit":"300"
//                 }
//         })
//             .then((response) => {
//                 const vcData = response.data.data

//                 res.send("hello!")

// for loop for the Visitor Center Array
//                 for (let index = 0; index < vcData.length; index++) {
//                     const vcArray = vcData[index];
//                     const name = vcArray.name
//                     const stateCode = vcArray.addresses[0].stateCode
//                     const long = vcArray.longitude
//                     const lat = vcArray.latitude
//                     const url = vcArray.url

//                     connection.query(
//                         "INSERT INTO visitorCenters SET ?",
//                         {
//                             name: name,
//                             stateCode: stateCode,
//                             longitude: long,
//                             latitude: lat,
//                             url: url
//                         })    
//                 }
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     });
// }






//Names of states in mysql database

// function createStates() {
//     console.log("you have created the states!")
//     let stateArr = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
//     let stateAbbrArr = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];
//     stateArr.forEach((state, index) => {
//         const stateAbbr = stateAbbrArr[index]
//         console.log(state, stateAbbr)
//         connection.query(
//             "INSERT INTO UsaStates SET ?",
//             {
//                 state: state,
//                 abbr: stateAbbr
//             }
//         )
//     })
// }


// axios call to gas prices API
// function gasPrices() {
//     app.get("/getgasprices", (req, res) => {
//         axios({
//             url: "https://api.collectapi.com/gasPrice/allUsaPrice", method: "GET", headers: {
//                 "content-type": "application/json",
//                 "authorization": "apikey 5cJSktDuSvYa35G5QLZx56:7JkuRLDJYLeoCxIMqIB6ka"
//             }
//         }).then((data) => {

//             // console.log's the objects which are in the result Array
//             console.log(data.data.result)

//             // for loop for the gasArr
//             const gasArr = data.data.result
//             for (let index = 0; index < gasArr.length; index++) {
//                 const element = gasArr[index];
//                 // console.log(element.name)


//                 // elements from gasArr that populate mysql
//                 const elementCurrency = element.currency
//                 const elementName = element.name
//                 const elementGasoline = element.gasoline
//                 const elementMid = element.midGrade
//                 const elementPrem = element.premium
//                 const elementDies = element.diesel

//                 // inserts information from the array into mysql
//                 connection.query(
//                     "INSERT INTO stateGasPrices SET ?",
//                     {
//                         currency: elementCurrency,
//                         name: elementName,
//                         gasoline: elementGasoline,
//                         midGrade: elementMid,
//                         premium: elementPrem,
//                         diesel: elementDies
//                     },
//                 )

//             }

//             res.json(gasArr)
//         })
//             .catch((err) => {
//                 console.log(err)
//             })

//     })
// }


