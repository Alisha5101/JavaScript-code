const base_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const baseURL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/exchange-api@latest/v1/currencies`;

const URL = `${baseURL}/USD.json`;

// Use it in async func. obviously

    async function wheather  (){
        let response = await fetch(URL);

        let responseJSON = await response.json();

       let rate = responseJSON['USD']['INR'];
console.log(rate)
      
    }
  
    
    wheather()