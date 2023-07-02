import SearchBar from './components/SearchBar'
import MainVideo from './components/MainVideo'

import VideoList from './components/VideoList'

import {Col, Container, Row} from 'react-bootstrap'
import youtube from './api/youtube'
import { useEffect, useState } from 'react'


const App =() =>{
   const [videos,setVideos]=useState([])
   const [mainVideo,setMainVideo]=useState(undefined)
   const handleSubmit =async(searchTerm)=>{
      const response =await youtube.get('search',{
        params:{
          part:'snippet',
          maxResults:5,
          key:'AIzaSyAIs3GoRdT3lQUmEYfj8-djtPpltavXQws',
          q:searchTerm
        }
  
      });
      setMainVideo(response.data.items[0])
      setVideos(response.data.items)
    }
    useEffect(()=>{
     handleSubmit('srk')
    },[])
   
 return<Container>
   <h1>YouTube</h1>
    <SearchBar onSubmit={handleSubmit}/>
   
 <Row>
    <Col sm={8}>
    <MainVideo videoRef={mainVideo}/>
    </Col>    
    <Col sm={4}>
    
 <VideoList videoList={videos} setMainVideo={setMainVideo}/>
    </Col>
 </Row>


</Container>

}
export default App