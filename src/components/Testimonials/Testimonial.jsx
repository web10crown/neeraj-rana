import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Neeraj transformed our e-commerce experience! His expertise in web development brought our site to life. Seamless navigation, user-friendly design, and flawless transactions. Neeraj exceeded our expectations with timely communication and top-notch service. Highly recommend for anyone seeking exceptional e-commerce solutions!",
    },
    {
      img: profilePic2,
      review:
        "Our stationary website underwent a remarkable transformation under Neeraj's expertise. The site now boasts an engaging and user-friendly interface, reflecting his keen eye for design. Neeraj's commitment to delivering a seamless online shopping experience has greatly improved our customer engagement. Highly recommended for anyone seeking a polished and effective stationary website.",
    },
    {
      img: profilePic3,
      review:
        "Our food website experienced a delightful transformation thanks to Neeraj's expertise. The visually enticing design and user-friendly interface crafted by Neeraj have elevated our online dining experience. His commitment to delivering a seamless and appetizing journey for users is commendable. For those in search of a tastefully designed food website, Neeraj is the expert you need!",
    },
    {
      img: profilePic4,
      review:
        "Neeraj worked wonders on our website, addressing critical bugs and restoring full functionality. His systematic approach to bug fixing and troubleshooting expertise ensured a smooth and efficient resolution process. Neeraj's commitment to making our site work seamlessly is truly commendable. For those seeking a reliable problem solver, Neeraj is the go-to expert in the field!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
