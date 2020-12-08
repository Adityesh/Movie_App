export async function getWallpaper() {
    const randomWords = ["space", "scenery", "cyberpunk", "landscape", "nature", "forest", "ocean", "planets", "cloud", "night", "sky", "snow", "winter", "rain", "underwater", "environment", "lightning", "iceberg"];

    const randomNumber = randomIndex(0, randomWords.length);

    const query = randomWords[randomNumber];

    const responseObj = {
        dimensions : {
            height : window.screen.height,
            width : window.screen.width
        },

        imagePath : 'https://i.redd.it/0ohv3srxzb631.jpg',
        error : '',
        message : ''
    }

    const url = `https://wallhaven.cc/api/v1/search?categories=100&q=${query}&atleast=${responseObj.dimensions.width}x${responseObj.dimensions.height}`

    try {
        const response = await fetch(url, {
            headers : {
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Credentials" : true 
            }
        });
        const result = await response.json();

        console.log(result);
    } catch(err) {
        console.log(err);
    }
}


const randomIndex = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}