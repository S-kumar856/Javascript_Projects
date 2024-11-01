const result = document.querySelector(".card-container");

const key = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=true"

async function Crypto() {
    const data = await fetch(key);
    const response = await data.json();

    console.log(response);

    response.map((item, index) => {
        result.innerHTML = result.innerHTML +
            `<div class="card">
                <div class="image">
                <img class="img" src=${item.image}/>
                </div>

                <div class="details">
                    <div class="row">
                        <span class="name">${item.name}</span>
                        <span class="price">${item.current_price}</span>
                    </div>

                    <div class="row">
                    <span class="symbol">${item.id}</span>
                    <span class="percent">${item.price_change_percentage_24h}</span>
                    </div>
                </div>
            </div>`
        //    `<ul>
        //    <li>${item.name}</li>
        //    <li>${item.id}</li>
        //    <img  src=${item.image}/>
        //    <li>${item.total_supply}</li>
        //    <li>${item.price_change_percentage_24h}</li>
        //    </ul>`

    })
}
console.log(Crypto())
