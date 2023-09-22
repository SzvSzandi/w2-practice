console.log('loaded');

let rootElement = document.querySelector('#root')
//console.log(rootElement)


/* let htmlContent = */

/* let counter= 0;
while (counter <20) {
rootElement.insertAdjacentElement('beforeend', htmlContent);
counter++;
} */

/* for (let counter = 1; counter <10; counter++) {
    rootElement.insertAdjacentHTML("beforeend", htmlContent);
} */

fetch('https://restcountries.com/v3.1/all')
.then(function(response) { 
    return response.json()
})
.then(function(data){
    console.log(data)  // ITT TUDUNK A KAPOTT ADATTAL DOLGOZNI
                       // A DATA EGY 250 ELEMBŐL ÁLLÓ ARRAY

    for (let index = 0; index < data.length; index++) {
        let countryName = data[index].name.common
        let countryPop = data[index].population
        let countryArea = data[index].area

        rootElement.insertAdjacentHTML('beforeend', `
        <div class = "country">
            <h2> ${countryName} </h2>
            <p2> population: ${countryPop} </p>
            <p> area: ${countryArea} km2 </p>
        </div>
        `
        );
    }   
});