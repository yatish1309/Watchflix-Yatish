import { Carousel } from "react-responsive-carousel";
import axios from "axios";
// import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import { useParams , useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import Rating from "@mui/material/Rating";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const movieURL =
  "https://zee-demo.s3.ap-south-1.amazonaws.com/Mission_+Impossible+%E2%80%93+Dead+Reckoning+Part+One+_+Official+Trailer+(2023+Movie)+-+Tom+Cruise.mp4";

const baseURL = "https://image.tmdb.org/t/p/w500";
export default function HomePage() {
  let [data1, setData1] = useState({});
  let [data2, setData2] = useState({});
  let [data3, setData3] = useState({});
  
//   let [isPlaying, setIsPlaying] = useState(false);
  let [isDisplay, setIsDisplay] = useState("none");
  let navigate=useNavigate();
  
  let { moviename } = useParams();
  
  let config1 = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
      accept: "application/json",
    },
  };

  let config2 = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.themoviedb.org/3/trending/movie/day",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
      accept: "application/json",
    },
  };

  let config3 = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U",
      accept: "application/json",
    },
  };

  useEffect(() => {
    axios.request(config1).then((response) => {
      console.log("response is ", response.data);
      setData1(response.data);

      console.log("data is", data1);
    });
  }, []);

  useEffect(() => {
    axios.request(config2).then((response) => {
      console.log("response is ", response.data);
      setData2(response.data);

      console.log("data is", data2);
    });
  }, []);

  useEffect(() => {
    axios.request(config3).then((response) => {
      console.log("response is ", response.data);
      setData3(response.data);

      console.log("data is", data3);
    });
  }, []);

  function handleWatchNow() {
    setIsDisplay("block");
    // setIsPlaying(true);
    // setIsOpacity(0.3);
  }

  function handleClose() {
    setIsDisplay("none");
    // setIsPlaying(false);
    // setIsOpacity(1);
  }

  function handleMovieClick(id){
    navigate(`/movies/${id}`)
  }

  return (
    <div
      style={{
        display: "flex",
        marginTop: "10vh",
        flexDirection: "column",
        
      }}
    >
      <Carousel
        autoPlay
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        width={"100%"}
      >
        {data2?.results?.map((item, id) => {
          return (
            <div key={id} style={{ position: "relative", display: "flex" }}>
              <div style={{ width: "100%", height: "70vmin" }}>
                <img
                  style={{
                    maxWidth: "80%",
                    maxHeight: "70vmin",
                    flexShrink: "0",
                    borderRadius: "15px",
                    objectFit: "cover",
                    background:
                      "linear-gradient(92deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
                    opacity: "0.5",
                  }}
                  src={`${baseURL}/${item.backdrop_path}`}
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  left: "13vw",
                 
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <p
                 className="title"
                  style={{
                    width:"40vw",
                    color: "#FFF",
                    fontFamily: "Oswald",
                    fontSize: "7vmin",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    margin: "0",
                  }}
                >
                  {item?.original_title}
                </p>

                <p
                className="desc"
                  style={{
                    width: "40%",
                    height: "40%",
                    color: "#FFF",
                    fontFamily: "Overpass",
                    fontSize: "2vmin",
                    fontStyle: "normal",
                    fontWeight: "500",
                    
                    letterSpacing: "0.54px",
                    margin: "2vh 0",
                  }}
                >
                  {item?.overview}
                </p>
                <Rating
                  value={item?.vote_average / 2}
                  precision={0.1}
                  readOnly
                  style={{ width:"6vmin",height:"2vmin" }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "5vh",
                    width: "30%",
                  }}
                >
                  <button
                    style={{
                      width: "20vmin",
                      height:"6vmin",
                      border: "none",
                      display: "flex",
                      justifyContent: "center",
                      gap: "0.5em",
                      alignItems: "center",
                      
                      flexShrink: "0",
                     
                      borderRadius: "27px",
                      background: "#DA3714",
                      
                      cursor: "pointer",
                    }}
                    onClick={handleWatchNow}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                    >
                      <path
                        d="M14.75 7.70096C15.75 8.27831 15.75 9.72169 14.75 10.299L2.375 17.4438C1.375 18.0211 0.125 17.2994 0.125 16.1447L0.125 1.85529C0.125 0.700587 1.375 -0.0210977 2.375 0.556252L14.75 7.70096Z"
                        fill="white"
                      />
                    </svg>
                    <p
                      style={{
                        margin: "0",
                        color: "#FFF",
                        fontFamily: "Overpass",
                        fontSize: "2vmin",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "normal",
                        border: "none",
                        letterSpacing: "0.54px",
                      }}
                    >
                      Watch Now
                    </p>
                  </button>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      style={{ cursor: "pointer" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="10vmin"
                      height="3vmin"
                      viewBox="0 0 31 31"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_170)">
                        <path
                          d="M14.5 14.25V6.75H17V14.25H24.5V16.75H17V24.25H14.5V16.75H7V14.25H14.5Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_170">
                          <rect
                            width="30"
                            height="30"
                            fill="white"
                            transform="translate(0.75 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div
                      style={{
                        color: "#FFF",
                        fontFamily: "Overpass",
                        fontSize: "2vmin",
                        fontStyle: "normal",
                        fontWeight: "600",
                         /* 160% */
                        letterSpacing: "0.45px",
                      }}
                    >
                      Watchlist
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <svg
                      style={{ cursor: "pointer" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="10vmin"
                      height="2.9vmin"
                      viewBox="0 0 31 31"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_1_176)">
                        <path
                          d="M17.7408 21.3255L12.0933 18.2453C11.5512 18.7834 10.8619 19.149 10.1123 19.2959C9.36274 19.4429 8.58644 19.3646 7.88129 19.071C7.17614 18.7774 6.5737 18.2816 6.14992 17.6461C5.72614 17.0106 5.5 16.2638 5.5 15.5C5.5 14.7362 5.72614 13.9894 6.14992 13.3539C6.5737 12.7184 7.17614 12.2226 7.88129 11.929C8.58644 11.6354 9.36274 11.5571 10.1123 11.7041C10.8619 11.851 11.5512 12.2166 12.0933 12.7547L17.7408 9.67453C17.5471 8.76576 17.687 7.81765 18.1349 7.00355C18.5828 6.18946 19.3088 5.56379 20.1801 5.24097C21.0514 4.91814 22.0098 4.91973 22.88 5.24545C23.7502 5.57116 24.4741 6.19923 24.9193 7.01481C25.3645 7.83038 25.5012 8.77896 25.3045 9.68707C25.1078 10.5952 24.5908 11.4022 23.848 11.9604C23.1052 12.5186 22.1863 12.7909 21.2593 12.7273C20.3323 12.6637 19.4592 12.2686 18.7996 11.6141L13.152 14.6943C13.2647 15.2255 13.2647 15.7745 13.152 16.3057L18.7996 19.3859C19.4592 18.7314 20.3323 18.3363 21.2593 18.2727C22.1863 18.2091 23.1052 18.4814 23.848 19.0396C24.5908 19.5978 25.1078 20.4048 25.3045 21.3129C25.5012 22.221 25.3645 23.1696 24.9193 23.9852C24.4741 24.8008 23.7502 25.4288 22.88 25.7546C22.0098 26.0803 21.0514 26.0819 20.1801 25.759C19.3088 25.4362 18.5828 24.8105 18.1349 23.9964C17.687 23.1824 17.5471 22.2342 17.7408 21.3255Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_176">
                          <rect
                            width="30"
                            height="30"
                            fill="white"
                            transform="translate(0.25 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div
                      style={{
                        color: "#FFF",
                        fontFamily: "Overpass",
                        fontSize: "2vmin",
                        fontStyle: "normal",
                        fontWeight: "600",
                       
                        letterSpacing: "0.45px",
                      }}
                    >
                      Share
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div
        style={{ marginTop: "2vmin", marginLeft: "10vw", marginBottom: "2vmin" }}
      >
        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "1.5vmax",
            fontStyle: "normal",
            fontWeight: " 600",

            lineHeight: "normal",
          }}
        >
          Trending Now
        </div>

        <div
          className="TrendingNow"
          style={{
            display: "flex",
            gap: "2em",
            maxWidth: "90%",
            overflowX: "scroll",
            
          }}
        >
          {data2?.results?.map((item, id) => {
            return (
              <Card
                className="card-scale"
                style={{
                  width: "10vw",
                  height: "25vmin",
                  flexShrink: "0",
                }}
              >
                <img
                 onClick={()=>{handleMovieClick(item?.id)}}
                  style={{
                    width: "10vw",
                    height: "25vmin",
                    cursor: "pointer",
                    objectFit: "cover",

                    // flexShrink: "0",
                    // borderRadius: "15px",
                    // background:
                    //   "linear-gradient(92deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
                    // opacity: "0.5",
                  }}
                  src={`${baseURL}/${item.poster_path}`}
                />
              </Card>
            );
          })}
        </div>
      </div>

      <div
        style={{ marginTop: "2vh", marginLeft: "10vw", marginBottom: "2vh" }}
      >
        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "1.5vmax",
            fontStyle: "normal",
            fontWeight: " 600",

            lineHeight: "normal",
          }}
        >
          Horror
        </div>

        <div
          className="TrendingNow"
          style={{
            display: "flex",
            gap: "2em",
            maxWidth: "90%",
            overflow: "scroll",
          }}
        >
          {data1?.results?.map((item, id) => {
            return (
              <Card
                className="card-scale"
                style={{
                  width: "10vw",
                  height: "25vmin",
                  flexShrink: "0",
                }}
              >
                <img
                                 onClick={()=>{handleMovieClick(item?.id)}}

                  style={{
                    width: "10vw",
                    height: "25vmin",
                    cursor: "pointer",
                    objectFit: "cover",
                    // flexShrink: "0",
                    // borderRadius: "15px",
                    // background:
                    //   "linear-gradient(92deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
                    // opacity: "0.5",
                  }}
                  src={`${baseURL}/${item.poster_path}`}
                />
              </Card>
            );
          })}
        </div>
      </div>

      <div
        style={{ marginTop: "2vh", marginLeft: "10vw", marginBottom: "2vh" }}
      >
        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
            fontSize: "1.5vmax",
            fontStyle: "normal",
            fontWeight: " 600",

            lineHeight: "normal",
          }}
        >
          Sci-fi
        </div>

        <div
          className="TrendingNow"
          style={{
            display: "flex",
            gap: "2em",
            maxWidth: "90%",
            overflow: "scroll",
          }}
        >
          {data3?.results?.map((item, id) => {
            return (
              <Card
                className="card-scale"
                style={{
                  width: "10vw",
                  height: "25vmin",

                  flexShrink: "0",
                }}
              >
                <img
                                 onClick={()=>{handleMovieClick(item?.id)}}
                  style={{
                    width: "10vw",
                    height: "25vmin",
                    cursor: "pointer",
                    objectFit: "cover",
                    // flexShrink: "0",
                    // borderRadius: "15px",
                    // background:
                    //   "linear-gradient(92deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
                    // opacity: "0.5",
                  }}
                  src={`${baseURL}/${item.poster_path}`}
                />
              </Card>
            );
          })}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          display: isDisplay,
          top:"25vh",
          left:"25vw"
        }}
      >
        <button style={{ cursor: "pointer" , position:"absolute",right:"0",zIndex:"2" }} onClick={handleClose}>
          X
        </button>
        <ReactPlayer url={movieURL}  playing={true} width={"50vw"} height={"50vh"} light={<div style={{width:"50vw",height:"50vh"}}>
            <img src="https://dx35vtwkllhj9.cloudfront.net/paramountpictures/mission-impossible-7/images/regions/us/header.jpg" style={{ width:"50vw",height:"50vh",objectFit:"cover"}}/>
            </div>} muted controls={true} />
        
      </div>
    </div>
  );
}
