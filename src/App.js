// stay with index.css/js, app.js, remove reportWebVitals and his function from index.js,
// strictMode from index.js, imports on app.js/index.js and clean index.css
import { useEffect, useState } from 'react';
import './index.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';



function App() {

  const [dogImg, setDogImg] = useState('')

  const getDogImg = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const dog = await response.json()
    return dog.message
  }

  const generateDog = async () => {
    setDogImg(await getDogImg())
  }
  useEffect(() => {
    generateDog()
  }, [])

  return (
    <>
      <div className='container'>
        <div className="style-content">

          <h1><strong className='btn' onClick={generateDog}>CLICK</strong> TO SEE A NEW DOG</h1>
          <div className='img-div'>
            <LazyLoadImage alt="" src={dogImg}  loading='lazy'/>
          </div>
        </div>
      </div>


    </>
  );
}

export default App;
