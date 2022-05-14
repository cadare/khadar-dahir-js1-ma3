// Question 1

// const getRemainder = (a, b) => a % b;

// Question 2


const YOUR_API_KEY = "e626a1adec1346da9bfa19fba634f432"

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${YOUR_API_KEY}`;


async function getData() {
    const response = await fetch(url);
    const result = await response.json();
    // console.log(result);


    for (let i = 0; i < result.results.length; i++) {
        console.log(result.results[i])
        if (i === 7) {
            break;
        }
        const newResult = result.results[i];

        const game =
            `Name: ${newResult.name} </br>
        Rating: ${newResult.rating}  </br>
        Tags: ${newResult.tags.length}`;
        // console.log(game);

        document.getElementById("game").innerHTML += `<p>${game}</p>`;



    }

}
getData()