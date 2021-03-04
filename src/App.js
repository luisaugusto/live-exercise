import { useEffect, useState } from 'react';

const fetchImage = (id) => {
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch(url)
        .then(resp => resp.json())
        .then(resp => resolve(resp))
    }, 200)
  })
}

const App = () => {
  const [idx, setIdx] = useState(1)
  const [image, setImage] = useState(null)
  
  useEffect(() => {
    let allowUpdates = true
    
    fetchImage(`https://jsonplaceholder.typicode.com/photos/:id`)
      .then(res => {
        allowUpdates && setImage(res)
      }) 
    
    return () => {
      allowUpdates = false
    }
  },[idx])
  
  return (
    <div className="container">
      <button className="btn" type="button" onClick={() => setIdx(state => state - 1)}>Prev</button>
      <div className="image-holder">
        { image && <img src={image.url} /> }
      </div>
      <button className="btn" type="button" onClick={() => setIdx(state => state + 1)}>Next</button>
     </div>
  )
}

export default App;
