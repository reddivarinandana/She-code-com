import React from "react";
import {useState,useEffect} from 'react';
//import './Intro.css';
import './livebooks.css';

// const [data, setData] = useState([]);

const Intro = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
      fetchData();
    },[])
    const fetchData = () =>{
      fetch("http://localhost:5500/data").then((res)=>{
        return res.json();
      }).then((res)=>{
        setData(res);
        console.log(res);
      })
    }
}

    function Livebooks(){
        return(
            <div>
                <div className="MainLayout">
                    <div className="sideNavbar">
                        <h4><img  className="pic2" src="/resources/pic2.jpeg" alt="" /></h4>
                        <h4><img className="image2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRemg1s-VTn973yTFW5GaZ37KZx38bicpkiGA&usqp=CAU" alt="" /></h4>
                        <h4 className="tools">Tools</h4>
                        <h4><img className="image4" src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" /></h4>
                    </div>
                    <div className="NAVBAR">
                        <div>
                            <h2 className="align-left">Learn the ways of the future</h2>
                            <p className="align-left">With Shecodes, learn computer science with a world-class curriculum designed with  the tech world.</p>
                        </div>
                        <div>
                            <img className="navimage" src="https://kalvium.community/images/livebooks_hero_img.svg" alt="" />
                        </div>
                    </div>
                </div>

                <div className="displaycourse">
                    <div className="python">
                            {/* {
                        data.map(({Topic_Name,Content})=><div>
                            <h1 className="topic">{Topic_Name}</h1>
                            <div className='content'>{Content}</div>
                        </div>)
                            } */}
                        <h1 className="hovering">Python</h1>
                    </div>

                    <div>
                        <img className="courseimage" src="https://kalvium.community/assets/course_zero_state.7d43f632.svg" alt="" />
                        <p className="imgtext">Choose Python to get Started</p>
                    </div>

                </div>
            </div>
        )
    }


export default Livebooks;