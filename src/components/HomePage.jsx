import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide_1 from '../components/Images/slide_1.jpg'
import slide_2 from '../components/Images/slide_2.jpg'
import slide_3 from '../components/Images/slide_3.jpg'







const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '100vh'
}
const slideImages = [
  {
    url: slide_1,
    caption: 'Slide 1'
  },
  {
    url: slide_2,
    caption: 'Slide 2'
  },
  {
    url: slide_3,
    caption: 'Slide 3'
  },
];

const HomePage = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default HomePage