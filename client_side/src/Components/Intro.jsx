import {useState,useEffect} from 'react';
import './Intro.css';
const Intro = () => {
    const [course, setCourse] = useState([]);
    const [topics, setTopics] = useState([]);
    // useEffect(()=>{
    //   fetchData();
    // },[])
    const displayCourse = () =>{
      fetch("http://localhost:5050/course").then((res)=>{
        return res.json();
      }).then((res)=>{
        setCourse(res);
        console.log(res);
      })
    }

  const displayTopic = () => {
      fetch("http://localhost:5050/topics").then((res)=>{
        return res.json();
    }).then((res)=>{
      setTopics(res);
      console.log(res);
    })
  }

//   const displayContent = () => {
//     fetch("http://localhost:5050/topics").then((res)=>{
//       return res.json();
//   }).then((res)=>{
//     setTopics(res);
//     console.log(res);
//   })
// }
      



    return (<div>

              <div className="MainLayout">
                    <div className="sideNavbar">
                        <h4><img  className="pic2" src="/resources/pic2.jpeg" alt="" /></h4>
                        <h4><img className="image2" src="resources/livebboks.png" alt="" onClick={()=>displayCourse()} /></h4>
                        <h4 className="tools">Tools</h4>
                        <h4><img className="image4" src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" /></h4>
                    </div>
                    <div className="NAVBAR">
                        <div>
                            <h2 className="align-left">Learn the ways of the future</h2>
                            <p className="align-left">With Shecodes, learn Programming with Joy</p>
                        </div>
                        <div>
                            <img className="navimage" src="https://kalvium.community/images/livebooks_hero_img.svg" alt="" />
                        </div>
                    </div>
              </div>
             <div className='display'>
              
                  <div className='coursedata'>
                    {
                      course.map(({Course_Name})=>
                        <div className='coursediv'>
                            <div onClick={()=>displayTopic()} id='course'>{Course_Name}</div>
                        </div>
                      )
                    }
                  </div>
                 
              <div className='alltopics'>
                  {
                      topics.map(({Topic_Name})=><div className='onetopic'>
                          <p className="topic">{Topic_Name}</p>
                          {/* <div className='content'>{Content}</div> */}
                      </div>)
                  }
              </div>
               {/* <div>
                    {
                          topics.map(({Content})=><div>
                              <p onClick={()=>displayContent()}>{Content}</p>
                          </div>)
                    }
              </div>  */}
            </div>
    </div>)
}
export default Intro;