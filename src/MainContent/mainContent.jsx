import { BrowserRouter ,Route,Routes,Link,useNavigate } from "react-router-dom";
import HomePage from "../HomePage/homepage";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import { useState,useEffect } from "react";
import Categories from "../Categories/categories";
import Movies from "../Movies/movies";




export default function MainContent(){
    



    return(
        <div style={{width:"100%"}}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/movies" element={<HomePage/>}/>
                <Route path="/categories" element={<Categories/>}/>
                <Route path="/movies/:id" element={<Movies/>}/>
                <Route path="*" element={<div style={{width:"50vw",height:"50vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <h1 style={{color:"white"}}>404 Page Not Found</h1>
                </div>}/>

            </Routes>
        </div>
    );
}