

const CurrentlyReading = ({info}) =>{
    console.log(info)
    const Author = () =>{
        if(info.volumeInfo.authors !== undefined){
            if(info.volumeInfo.authors.length >= 1){            
          return info.volumeInfo.authors.map && info.volumeInfo.authors.map((author) => author)
       }
         }
    }


    return(
        <div>
            <img src={info.volumeInfo.imageLinks.smallThumbnail}/>
            <h2>{info.volumeInfo.title}</h2>
            <h3>{Author() }</h3>  
            <p>rating</p>
            <p>review</p>
        </div>
    )
};
export default CurrentlyReading;
