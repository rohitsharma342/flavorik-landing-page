import appleImage from "common/assets/image/interior/flavorick_apple.png"
import playImage from "common/assets/image/interior/Flavorick_play.png"
import Link from "next/link";
function Download() {
    console.log(playImage)
    return ( 
        <>
       
        <div className="container p-4" id="download">
           <div className="row">
         
            <div className="col-md-6 d-flex mt-sm-5">
                <a href="https://play.google.com/store/apps/details?id=com.app.hey.chefy">
                <img src="/_next/static/media/Flavorick_play.5aa8350b.png" style={{height:"160px",width:"250px"}}/>
                </a>
                <div className="d-flex align-item-center mt-xl-5 mt-sm-1 ms-2 fw-bolder fs-2">Scan or Click to download Flavorick on Google Play Store</div>
            </div>
     
            <div className="col-md-6 d-flex mt-5">
                <a href="https://apps.apple.com/in/app/flavorick/id1636518565">
            <img src="/_next/static/media/flavorick_apple.bfe8b0d6.png" style={{height:"160px",width:"220px"}}/>
            </a>
            <div className="d-flex align-item-center mt-xl-5 mt-sm-1 ms-2 fw-bolder fs-2">Scan or Click to download Flavorick on App  Store</div>
            </div>
            
           </div>
        </div>
        </>
     );
}

export default Download;