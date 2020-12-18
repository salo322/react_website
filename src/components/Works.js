import React, {useState, useEffect} from 'react';


const images = [
{id: '1', imageName:'image1.jpg', tag:'design', title:'really beautiful design simple website'},
{id: '2', imageName:'image2.jpg', tag:'photography', title:'own photography for website'},
{id: '3', imageName:'image3.jpg', tag:'design', title:'pretty design responsive website'},
{id: '4', imageName:'image4.jpg', tag:'web', title:'responsive and quality website'},
{id: '5', imageName:'image5.jpg', tag:'web', title:'any type of website'},
{id: '6', imageName:'image6.jpg', tag:'photography', title:'beautiful photography'},
{id: '7', imageName:'image7.jpg', tag:'web', title:'web development'},
{id: '8', imageName:'image8.jpg', tag:'design', title:'design development'}
]


const Works = () => {
   
    const [tag, setTag] = useState('all');
    const [filteredImages, setFilteredImages] = useState([]);


    useEffect( ()=>{
    tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter( image => image.tag === tag))
    }, [tag])


    return (
        <div id="works">
           <div className="works-container">
               <div className="works-title">
                   <h1>MY WORKS</h1>
                   <p>Here' my works. Beautiful, Quality and Responsive websites.</p>
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
                            <div className="middle">
                             <div className="text">{image.title}</div>
                             </div>
                         </div>)
                         
                     }</div>

               </div> 
               </div> 
        </div>
    );
}

const TagButton = ({name, handleSetTag, tagActive}) =>{
     return <button className={`tag ${tagActive ? 'active-button': null}`} onClick={()=>handleSetTag(name)}>{name.toUpperCase()}</button>
}

export default Works
