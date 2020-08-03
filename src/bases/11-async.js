const getImagenPromesa=()=> new  Promise(resolve => resolve('https://google.com'))
getImagenPromesa().then(console.log);

const GetImagen= async()=>{
try {
    const apiKey='YtR1Oq7fjYBcgrjmJ2fGHVXeYY0H7C34';
    const resp= await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data }= await resp.json();
    const {url}=data.images.original;
    console.log(url);
    const img = document.createElement('img');
    img.src=url;
    document.body.append(img);
} catch (error) {
    console.error(error)
}
}

GetImagen();