
async function dataCountriesApi(){
    let apiUrl = 'https://restcountries.com/v3.1/region/asia?fields=name,flags,idd'; 
    const response = await fetch(apiUrl)
    .then(function(response) {
        if (!response.ok) {
            throw new Error('La solicitud no tuvo éxito');
        }
        return response.json();
    })
    .then(function(data) {
        
        return data
    })
  
    return response
}

const DataApi = await dataCountriesApi();

function random(data){
    const copyData = []
    let random = 0
    let length = data.length

    for (let index = 0; index < length; index++) {
        random = Math.floor(Math.random() * data.length);
        copyData[index] = data[random];
        data.splice(random, 1)
    }
    return copyData
}

function randomDataSelectionApi( num ){
    const copyDataApi = [...DataApi]
    const copyData = []
    let random = 0

    for (let index = 0; index < num; index++) {
        random = Math.floor(Math.random() * copyDataApi.length);
        copyData.push(copyDataApi[random])
        copyData.push(copyDataApi[random])
        copyDataApi.splice(random,1);
    }
    return copyData
}

function getApi(numCard){
    const data = random(randomDataSelectionApi(numCard));
    return data;
}

export default getApi;