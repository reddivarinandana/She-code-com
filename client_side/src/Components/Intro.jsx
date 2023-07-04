import { useState, useEffect } from 'react';
import './Intro.css';
const Intro = () => {
  const [course, setCourse] = useState([]);
  const [topics, setTopics] = useState([]);
  const [subtopic, setSubtopic] = useState([]);
  const [subtopicClick, setSubtopicClick] = useState([false]);
  const [subTopicContent, setSubTopicContent] = useState([]);
  // useEffect(()=>{
  //   fetchData();
  // },[])

  const displayCourse = () => {
    fetch("http://localhost:5050/course").then((res) => {
      return res.json();
    }).then((res) => {
      setCourse(res);
      console.log(res);
    })
  }

  const displayTopic = () => {
    fetch("http://localhost:5050/topics").then((res) => {
      return res.json();
    }).then((res) => {
      setTopics(res);
      console.log(res);
    })
  }

  const displaySubtopic = () => {
    setSubtopicClick(!subtopicClick);
    if (subtopicClick) {
      fetch("http://localhost:5050/subtopic").then((res) => {
        return res.json();
      }).then((res) => {
        setSubtopic(res);
        console.log(res);
      })
    }
  }
  const displaySubtopicContent = () => {
    fetch("http://localhost:5050/subTopicContent").then((res) => {
      return res.json();
    }).then((res) => {
      setSubTopicContent(res);
      console.log(res);
    })
  }
  

  return (


    <div>
      <div className="MainLayout">
        <div className="sideNavbar">
          <h4><img className="pic2" src="/resources/pic2.jpeg" alt="" /></h4>
          <h4><img className="image2" src="resources/livebboks.png" alt="" onClick={() => displayCourse()} /></h4>
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
          <div className='a'>
          {
            course.map(({ Course_Name }) =>
              <div className='coursediv'>
                <div onClick={() => displayTopic()} id='course'>{Course_Name}</div>
              </div>
            )
          }
          </div>
        </div>


        <div className='entire'>
          {
            topics.map(({ Topic_Name }) =>
              <div  className='topics'>
                <img  onClick={() => displaySubtopic()} className="rhombus" src="/resources/rhomb.png" alt="" />
                <p className='topic'>{Topic_Name}</p>  
                <div onClick={() => displaySubtopic()} id="drop"><img className="downimage" src="/resources/down.png" alt="" />
                </div>
                
                {
                  subtopicClick ?

                    <div className='sub'>
                      {
                        subtopic.map(({ SubTopic_Name }) =>
                          <div className='subtopic'>
                            <img className="empty" src="/resources/empty.png" alt="" />
                            <p className='subTopic' onClick={() => displaySubtopicContent()}>{SubTopic_Name} </p>
                            
                          </div>)
                        
                      }
                    </div> : " "
                }
              </div>
            )
          }
        </div>

        <div>
          {
            subTopicContent.map(({ SubTopic_Content  }) =>
              <div>
                <div>{SubTopic_Content }</div>
              </div>
            )
          }
        </div>

       

      </div>
    </div>)
}
export default Intro;