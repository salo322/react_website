import React, {useState, useEffect} from 'react';


const images = [
{id: '1', imageName:'image1.jpg', tag:'design', title:'first'},
{id: '2', imageName:'image2.jpg', tag:'photography', title:'second'},
{id: '3', imageName:'image3.jpg', tag:'design', title:'third'},
{id: '4', imageName:'image4.jpg', tag:'web', title:'fourth'},
{id: '5', imageName:'image5.jpg', tag:'web', title:'fifth'},
{id: '6', imageName:'image6.jpg', tag:'photography', title:'sixth'},
{id: '7', imageName:'image7.jpg', tag:'web', title:'seventh'},
{id: '8', imageName:'image8.jpg', tag:'design', title:'eighth'}
]


const Works = () => {
   
    const [tag, setTag] = useState('all');
    const [filteredImages, setFilteredImages] = useState([]);


    useEffect( ()=>{
    tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter( image => image.tag === tag))
    }, [tag])


    return (
        <div>
           <div className="works-container">
               <div className="works-title">
                   <h1>OUR WORKS</h1>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ante nibh. Nunc purus diam, luctus placerat tempor at, pellentesque non magna.</p>
               </div>

            <div className="gallery-container">
                <div className="tags">
                 <TagButton name="all" handleSetTag={setTag} tagActive={ tag === 'all' ? true : false}/>
                 <TagButton name="design" handleSetTag={setTag} tagActive={ tag === 'design' ? true : false}/>
                 <TagButton name="photography" handleSetTag={setTag} tagActive={ tag === 'photography' ? true : false}/>
                 <TagButton name="web" handleSetTag={setTag} tagActive={ tag === 'web' ? true : false}/>
                </div>
                 
                 <div className="container">
                     {filteredImages.map(image => 
                     
                         <div key={image.id} className="image-card">
                            <img className="image" width='30%' src={process.env.PUBLIC_URL + `/${image.imageName}`} alt="image1" />
                            <div class="middle">
                             <div class="text">{image.title}</div>
                             </div>
                         </div>)
                         
                     }</div>

               </div> 
               </div> 
        </div>
    );
}

const TagButton = ({name, handleSetTag, tagActive}) =>{
     return <button className={`tag ${tagActive ? 'active': null}`} onClick={()=>handleSetTag(name)}>{name.toUpperCase()}</button>
}

export default Works
