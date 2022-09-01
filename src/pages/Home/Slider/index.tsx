import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import "./swiper.scss"
import {useNavigate} from "react-router-dom"
import {useRecoilState} from "recoil";
import {randomAnimeState} from "../../../store/service";
import axios from "axios";


const Slider = () => {

    const navigate = useNavigate();
    const [randomAnime, setRandomAnime]: any = useRecoilState(randomAnimeState);

    const directDetails = (id: number)=>{
      navigate(`/details/${id}`)
    };

    useEffect(()=>{
        let arr: any = [];
        for (let i = 0; i < 3; i++) {
            axios.get("https://api.jikan.moe/v4/random/anime").then(function (response) {
                if(randomAnime.lenght === 0){
                    arr = ([...response.data.data])
                }
                else {
                    arr = ([...arr, response.data.data])
                }
                setRandomAnime(arr)
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, []);

    return (
        <>
            <Swiper
                slidesPerView={1}
            >
                {randomAnime && randomAnime.length > 0
                    ? randomAnime.map((anime: any)=>(
                        <SwiperSlide key={anime?.mal_id} onClick={()=> {
                            directDetails(anime?.mal_id)
                        }}>
                            <div className="blurEffect"> </div>
                            <h2 className="title">{anime?.title}</h2>
                            <h2 className="subtitle">{anime?.synopsis}</h2>
                            <img src={anime?.images?.jpg?.large_image_url} alt=""/>
                        </SwiperSlide>
                    ))
                    : <SwiperSlide>
                        <h2 className="title"></h2>
                        <h2 className="subtitle"></h2>
                    </SwiperSlide>
                }

            </Swiper>
        </>
    );
};

export default Slider;