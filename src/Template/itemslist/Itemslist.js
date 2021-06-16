import Template from "../Template";

const data = [
    {
        "title": "Wolf",
        "img": "https://bigpicture.ru/wp-content/webp-express/webp-images/uploads/2015/11/nophotoshop29-800x532.jpg.webp",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur debitis iste itaque perferendis provident quam rem rerum tempore tenetur."
    },
    {
        "title": "Beach",
        "img": "https://pix10.agoda.net/hotelImages/301716/-1/fe9724d8fb4da3dd4590353bd771a276.jpg?s=1024x768",
        "text": "Kas ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur debitis iste itaque perferendis provident quam rem rerum tempore tenetur."
    },
    {
        "title": "Nature",
        "img": "https://assets.unenvironment.org/s3fs-public/styles/topics_content_promo/public/2021-05/alberta-2297204_1920.jpg?itok=aim5GFuY",
        "text": "Kas ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur debitis iste itaque perferendis provident quam rem rerum tempore tenetur."
    }
]

function Itemslist() {
    return(
        data.map(elem =>{
            return <Template img ={elem.img} title = {elem.title} text = {elem.text}/>
        })
    )
}

export default Itemslist;