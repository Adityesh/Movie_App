export async function getWallpaper() {
    
    const height = window.screen.height;
    const width = window.screen.width;

    const responseObj = {
        dimensions : {
            height : height,
            width : width
        },

        imagePath : 'https://i.redd.it/0ohv3srxzb631.jpg',
        error : '',
        message : ''
    }

    const url = `https://picsum.photos/${width}/${height}`

    try {
        const response = await fetch(url);
        responseObj.imagePath = response.url;
        responseObj.message = "Success";
        responseObj.error = false;

    } catch(err) {
        console.log(err);
        return responseObj;
    }

    return responseObj;
}
