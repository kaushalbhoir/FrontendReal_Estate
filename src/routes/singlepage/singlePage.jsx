import "./singlePage.scss";
import Map from "../../components/map/Map"
import SLider from "../../components/slider/slider";
import { singlePostData, userData } from "../../lib/dummydata";

function SinglePage() {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <SLider images={singlePostData.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">{singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p> 
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is Responsibe</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">
            Sizes
            </p> 
             <div className="sizes">
          <div className="size">

              <img src="/size.png" alt="" />
              <span>80sqft</span>
             </div>
             <div className="size">
              <img src="/size.png" alt="" />
              <span>2 beds</span>
             </div>
             <div className="size">
              <img src="/size.png" alt="" />
              <span>1 Bathroom</span>
             </div>
          </div>
          <p className="title">
             NearBy Places
            </p> 
          <div className="listHorizontal">
          <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>250m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restuarant</span>
                <p>200m away</p>
              </div>
            </div>
            
            

          </div>
          <p className="title">Location</p> 
          <div className="mapContainer">
            <Map items={[singlePostData]}/>
          </div>
           <div className="buttons">
              <button>
              <img src="/chat.png" alt="" />
              Send a message
              </button>
              <button>
              <img src="/save.png" alt="" />
               Save the Place
              </button>

             
           </div>
          </div>
      </div>
    </div>
  );
}

export default SinglePage;
