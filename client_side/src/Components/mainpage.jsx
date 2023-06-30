import React from "react";
import './mainpage.css';

function MainPage(){
    return(
        <div>
            <div className="MainLayout">
                <div className="SideNavbar">
                    <h4><img src="/resources/pic2.jpeg" alt="" /></h4>
                    <h4><img className="image2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRemg1s-VTn973yTFW5GaZ37KZx38bicpkiGA&usqp=CAU" alt="" /></h4>
                    <h4 className="tools">Tools</h4>
                    <h4><img className="image4" src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" /></h4>
                </div>
                <div className="layout">
                    <div className="sublayout">
                        <img className="welcome" src="https://kalvium.community/images/home_hero.gif" alt="" />
                        <h2></h2>
                        <p>Welcome to this amazing place where you can have lots of fun and learn new things! It's a special spot where you'll experience the joy of learning and discover the wonders of magic. Enjoy every moment of your journey here!</p>
                        <p>To begin learning the courses, simply go to Livebooks. It's a platform where you can access educational materials and resources. It's like a virtual library for learning. Once you're there, you'll find a variety of courses and materials to explore and study. It's a great place to start your learning journey and access the knowledge you need. Enjoy your learning experience on Livebooks!</p>
                        
                    </div>     
                </div>
            </div>
        </div>
    )
}

export default MainPage