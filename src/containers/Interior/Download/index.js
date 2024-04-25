import appleImage from "common/assets/image/interior/flavorick_apple.png"
import playImage from "common/assets/image/interior/Flavorick_play.png"
function Download() {
    console.log(playImage)
    return ( 
        <>
        <div className="container p-4" id="download">
           <div className="row">
            <div className="col-md-6 d-flex mt-sm-5">
                <img src="/_next/static/media/Flavorick_play.5aa8350b.png" style={{height:"160px"}}/>
                <div className="d-flex align-item-center mt-xl-5 mt-sm-1 ms-2 fw-bolder fs-2">Scan to download Flavorick on Google Play Store</div>
            </div>
            <div className="col-md-6 d-flex mt-5">
            <img src="/_next/static/media/flavorick_apple.bfe8b0d6.png" style={{height:"160px"}}/>
            <div className="d-flex align-item-center mt-xl-5 mt-sm-1 ms-2 fw-bolder fs-2">Scan to download Flavorick on App  Store</div>
            </div>
           </div>
        </div>
        </>
     );
}

export default Download;