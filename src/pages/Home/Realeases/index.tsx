import React, {useEffect} from 'react';
import "./Releases.scss";
import {topList} from "../../../store/service";
import {Swiper, SwiperSlide} from "swiper/react";
import {useRecoilState} from "recoil";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const Realeases = () => {

    const [list, setList] = useRecoilState(topList);
    const navigate = useNavigate();

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://jikan1.p.rapidapi.com/top/anime/1/bypopularity',
            headers: {
                'X-RapidAPI-Key': '69ceed32c9msh526975afd6f4d95p10cc17jsn195dc89bbd83',
                'X-RapidAPI-Host': 'jikan1.p.rapidapi.com'
            }
        };
        axios.request(options).then(function (response) {
            setList(response.data.top)
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    return (
        <div className="realeases">
            <h2 className="realeases__title">Most Popular:</h2>
            <div className="container">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={6}>
                    {list.length
                        ? list.map((item: any) => (
                            <SwiperSlide key={item.mal_id}>
                                <div onClick={()=>{
                                    navigate(`details/${item.mal_id}`)
                                }} className="realeases__card">
                                    <div className="realeases__card_blur"/>
                                    <img className="realeases__card_img" src={item.image_url} alt=""/>
                                    <span className="realeases__card_subtitle">{item.start_date}</span>
                                    <span
                                        className="realeases__card_title">{item?.title?.length > 30 ? item.title.slice(0, 30) + "..." : item.title}</span>
                                </div>
                            </SwiperSlide>
                        ))
                        : Array.from(Array(6).keys()).map((item)=>(
                            <SwiperSlide key={item}>
                                <div className="realeases__card">
                                    <div className="realeases__card_blur"/>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Realeases;