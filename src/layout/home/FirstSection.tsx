// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Ad from './Ad';
import "./first-section.css"
import useMediaQuery from '../../hooks/useMediaQuery';
export const ArrowRight = ({ color = "white" }: { color: string }) => {
    return (
        <svg width="38" height="20" viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.5833 2.33325L36.25 9.99992M36.25 9.99992L28.5833 17.6666M36.25 9.99992H1.75" stroke={color}
                strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}
const FirstSection = () => {
    const isSmallerThan860 = useMediaQuery("(max-width:860px)")
    return (
        <section className={`${isSmallerThan860 ? "mt-10" : ""} my-20`}>
            <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                navigation
                loop={true}
                className="w-[95vw]"
            >
                <SwiperSlide className="flex justify-center"><Ad /></SwiperSlide>
            </Swiper>
        </section>
    )
}

export default FirstSection