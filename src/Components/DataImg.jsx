import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "../plugin/css/navbar.css"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red",position:"absolute"  }}
        onClick={onClick}
      />
    );
  }
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
const DataImg =() => {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
      };
    return(
        <div className="App py-10">
            <Slider {...settings}>
            {/* {dataBestSeller.map((item) =>(
                <div className="card">
                    <div className="card-top">
                        <img src={item.linkImg} alt={item.title}/>
                    </div>
                    <div className="card-bottom"></div>
                </div>
            ))} */}
            <div className="brd">
              <img src="https://kulogroup.com/wp-content/uploads/2021/06/Kedai-Kopi-Kulo-Foto-Interior-2.jpg" alt="" />
            </div>
            <div className="brd">
              <img src="https://kulogroup.com/wp-content/uploads/2021/06/Kedai-Kopi-Kulo-Foto-Interior-1.jpg" alt="" />
            </div>
            <div className="brd">
              <img src="https://kulogroup.com/wp-content/uploads/2021/06/Kedai-Kopi-Kulo-Foto-Brand-Image-6.jpg" alt="" />
            </div>
            <div className="brd">
              <img src="https://kulogroup.com/wp-content/uploads/2021/06/Kedai-Kopi-Kulo-Foto-Brand-Image-5.jpg" alt="" />
            </div>
            <div className="brd">
              <img src="https://kulogroup.com/wp-content/uploads/2021/06/Kedai-Kopi-Kulo-Foto-Brand-Image-4.jpg" alt="" />
            </div>
            <div className="brd">
              <img src="https://kulogroup.com/wp-content/uploads/2021/06/Kedai-Kopi-Kulo-Foto-Brand-Image-3.jpg" alt="" />
            </div>
            <div className="brd">
              <img src="https://kulogroup.com/wp-content/uploads/2021/06/Kedai-Kopi-Kulo-Foto-Brand-Image-2.jpg" alt="" />
            </div>
            <div className="brd">
              <img src="https://kulogroup.com/wp-content/uploads/2021/06/Kedai-Kopi-Kulo-Foto-Brand-Image-1.jpg" alt="" />
            </div>
            </Slider>
        </div>
    )
}
export default DataImg