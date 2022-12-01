import React,{useState} from 'react'
import Error from './Error'
import Loading from './Loading';

export default function Main({data}) {
    const [load,setLoad]=useState(true);
    setTimeout(()=>{setLoad(false)},2000);
    console.log(data)
    return (
    <div className='main d-flex justify-content-center align-items-center'> 
    {load?<Loading/> :
            <div className="content d-flex justify-content-around py-3 flex-wrap">
            {data.Response=="True"?data.Search.map(item=>
                    <div className="card">
                    <img src={item.Poster} alt="img" className='card-img-top'/>
                    <div className="card-body">
                        <h4 className="card-title">{item.Title}</h4>
                        <p className="card-text">{item.Year}</p>
                        <p className='card-text'>{item.Type}</p>
                    </div>
                </div>
                ): <Error/>
            }

            </div>
    }
    </div>
    )
}
