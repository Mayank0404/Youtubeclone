import Video from "./Video"

const   VideoList =({videoList,setMainVideo}) =>{
return videoList.length===0 ? <h1>Loading...</h1> : <div className="mt-5">
    {videoList.map((vid,idx)=><Video videoDetail={vid} key={idx} setMainVideo={setMainVideo}/>) }

    </div> 
        
} 

export default VideoList