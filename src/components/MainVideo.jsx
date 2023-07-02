 
import Card from 'react-bootstrap/Card';
const MainVideo =({videoRef}) =>{
  if(videoRef===undefined) return <h1>Loadingg...</h1>

console.log(videoRef);
const videoSrc = `https://www.youtube.com/embed/${videoRef.id.videoId}`

    return<Card className='mt-5'>
    <iframe  height="500px" width="100%" title="VideoTitle" src={videoSrc}/>

    <Card.Body>
      <Card.Title>{videoRef.snippet.channelTitle}</Card.Title>
      <Card.Text>{videoRef.snippet.description}</Card.Text>
     
    </Card.Body>
  </Card>   
}

export default MainVideo