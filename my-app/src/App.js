import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [isloading, setIsLoading]= useState(false)
  const [error, setError]= useState()
  const [posts, setPosts] = useState([]);
  useEffect(() => {

    const fetchPosts = async()=>{
     setIsLoading(true) 
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setPosts(data.results)
    } catch (e ) {
         setError(e)
    }
    finally{
      setIsLoading(false)
    }
     
     setIsLoading(false) 
    }

      fetchPosts();
   
  }, [])

  if(isloading){
    return <div className='text-center mt-5 fs-4'>Loading..</div>
  }
  if(error){
    return <div className='text-center mt-5 fs-4'>Something went wrong! please try again. </div>
  }

  return (
    <div className="container mt-5">

      <h1 className='text-center'>Rick & Morty  </h1>
      <div className='row row-cols-2 row-cols-md-4'>


        {

posts.map((ele) => {


            const { name, id, image } = ele

            console.log(ele)
            return (
              <div className='col'>
                <div className="card text-center  my-2" key={id}>
                  <img src={image} className="card-img-top" alt="..." />
                  <div className="card-body p-2">
                    <h5 className="card-title text-muted">{name.slice(0, 9)}..</h5>
                  </div>
                </div>
              </div>

            )


          })
        }

      </div>

    </div>
  );
}

export default App;
