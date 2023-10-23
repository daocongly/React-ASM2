import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import "./featured.css";

const Featured = ({fetchUrl}) => {


	const [hotels, setHotels] = useState([]);

  useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setHotels(request.data);
			// return request;
		}
		fetchData();
	}, [fetchUrl]);

  let numberHotelHanoi = hotels.filter((item) => item.city === 'Ha Noi').length;
  let numberHotelHochiminh = hotels.filter((item) => item.city === 'Ho Chi Minh').length;
  let numberHotelDanang = hotels.filter((item) => item.city === 'Da Nang').length;


  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ha Noi</h1>
          <h2>{numberHotelHanoi} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ho Chi Minh</h1>
          <h2>{numberHotelHochiminh} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Da Nang</h1>
          <h2>{numberHotelDanang} properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
