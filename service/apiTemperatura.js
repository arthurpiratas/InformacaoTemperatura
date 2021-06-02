import axios from "axios"; 


export const consultaTemperatura = async (cidade) => {



    const url = `https://goweather.herokuapp.com/weather/%7B${cidade}%7D`;

    const res = await axios.get(url);

    const temperatura = {
        temperatura: res.data.temperature, 
        vento: res.data.wind, 
        descricao: res.data.description,
        foto: buscarImagem(res.data.description),
        

    }

    return temperatura;


}

export const buscarImagem =  (stringFoto) => {
    
    switch (stringFoto) {
        case 'Clear':
            return 'https://s7d2.scene7.com/is/image/TWCNews/img_3214_jpg-2'
        case 'Partly cloudy':
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfirlCMdZiQH9jpxjyFFh8-PFbmFNl_X83aXNzMjOwwtuU5IsqQrAa528BtNS81UL86zA&usqp=CAU'
        case 'Cloudy':
            return 'https://img.freepik.com/fotos-gratis/chuva-preto-do-poder-escuro-abstrato_1127-2380.jpg?size=626&ext=jpg&ga=GA1.2.1149860058.1620432000'
        case 'Mostly cloudy':
            return 'https://uploads.bemparana.com.br/upload/image/noticia/noticia_792921_img1_00nublado.jpg'
        case 'Overcast':
            return 'https://miro.medium.com/max/11068/0*2WhDF45I5zNexaLR'
        case 'Rain':
            return 'https://d3hnfqimznafg0.cloudfront.net/images/Article_Images/ImageForArticle_983_15767666058228734.png'
        case 'Light rain shower':
            return 'https://images.radio.com/aiu-media/GettyImages1021628638-8b93150e-63ac-4282-af9b-67cdbc8635b6.jpg?width=800'
        case 'Torrential rain shower':
            return 'https://easypeasyremovals.com.au/wp-content/uploads/2020/01/Easy-Peasy-Removals_Tips-for-optimising-moving-in-the-rain-1200x675.jpg'
        case 'Heavy rain':
            return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAx2exLpNlURtQEUAiNPJakDzmo41P-hJDI_LMPOHaVlrsm7qPjL0s4Ij8Trbl1k4VTpU&usqp=CAU'
        case 'Light winds':
            return 'https://media.nationalgeographic.org/assets/photos/000/317/31751.jpg'
        case 'Winds':
            return 'https://i1.wp.com/timesofsandiego.com/wp-content/uploads/2015/03/windy.jpg?ssl=1'
        case 'Sunny':
            return 'https://www.trilhaseaventuras.com.br/wp-content/uploads/2014/02/bombinhas-16.jpg'
        case 'Patchy rain possible':
            return 'https://www.stourbridgenews.co.uk/resources/images/5218848.jpg?display=1&htype=54&type=responsive-gallery'
        case 'Light snow':
            return 'https://images.freeimages.com/images/premium/previews/1134/11345061-light-snow-on-the-lawn.jpg'
        case 'Snow':
            return 'https://www.rd.com/wp-content/uploads/2019/12/shutterstock_182286515-scaled.jpg'    
        default:
            return 'https://s3.envato.com/files/263532185/BLACK%20BEAR.jpg'
      }
}

