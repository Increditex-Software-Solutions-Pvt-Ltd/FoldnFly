import React from 'react'
import Hunger from './pages/Hunger'
import Runway from './pages/Runway'
import { Routes,Route} from 'react-router-dom';
import Planedetail from './pages/Planedetail';
import Launge from './pages/Launge';


const AllRoute = () => {
    return (
        <>
            <Routes>
                <Route path = '/' element={<Hunger />}/>
                <Route path='/runway' element={<Runway />}/>
                <Route path='/launge' element={<Launge />}/>
                <Route path='/plane/:name' element={<Planedetail />}/>
            </Routes>
        </>
    )
}

export default AllRoute