import { useState, useEffect } from 'react';
import './Intro.css';
const Intro = () => {
  const [course, setCourse] = useState([]);
  const [topics, setTopics] = useState([]);
  const [subtopic, setSubtopic] = useState([]);
  // useEffect(()=>{
  //   fetchData();
  // },[])

  const DropdownMenu = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  }
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
    fetch("http://localhost:5050/subtopic").then((res) => {
      return res.json();
    }).then((res) => {
      setSubtopic(res);
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
            {
              course.map(({ Course_Name }) =>
                <div className='coursediv'>
                  <div onClick={() => displayTopic()} id='course'>{Course_Name}</div>
                </div>
              )
            }
          </div>
          <div>
            {
              topics.map(({ Topic_Name }) =>
                <div onClick={() => displaySubtopic()} className='topics'>
                  <img className="rhombus" src="/resources/rhomb.png" alt="" />
                  <p className='topic'>{Topic_Name}</p>
                  <p id="drop"><img className="downimage" src="/resources/down.png" alt="" /></p>
                </div>
              )
            }
          </div>

      {/* <div className='alltopics'>
                  {
                      topics.map(({Topic_Name})=>
                      <div onClick={()=>displaySubtopic()} className='onetopic'>
                          <img className="rhombus" src="/resources/rhomb.png" alt="" />
                          <p className="topic">{Topic_Name} </p>
                          <div id='drop'>
                            <img className="downimage" src="/resources/down.png" alt="" />
                          </div>
                      </div>)
                  }
              </div> */}

      {/* <div className='sub'>
                  {
                          subtopic.map(({ SubTopic_Name })=>
                          <div className='subtopic'>
                              <img className="empty" src="/resources/empty.png" alt="" />
                              <p>{ SubTopic_Name } </p>
                          </div>)
                  }
              </div> */}

    </div>
    <div className='sub'>
      {/* <label htmlFor="dropdown">Select a subtopic:</label> */}
          <select className='selection' name="pets" id="pet-select">
          <option value="">--Introduction To Python--</option>
          {
            subtopic.map(({SubTopic_Name})=><option value={SubTopic_Name}>{SubTopic_Name}</option>) 
          }
      </select>
    </div>
  </div>)
}
export default Intro;