import { Col, Container, Row ,Card} from "react-bootstrap"

const Video =({videoDetail,setMainVideo}) =>{
    console.log(videoDetail);
    return<Container className="mt-2 " onClick={()=>setMainVideo(videoDetail)}>
        <Row>
            <Col sm={4}>
            <Card.Img variant="top" src={videoDetail.snippet.thumbnails.high.url} />

            </Col>

            <Col sm={8}>
             <p>{videoDetail.snippet.channelTitle}</p> 
            </Col>
        </Row>
    </Container>
}

export default Video