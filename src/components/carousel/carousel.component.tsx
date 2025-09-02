import type { ReactNode } from "react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./carousel.module.css";

type Props = {
  items: ReactNode[];
};

export default function CarouselComponent({ items }: Props): ReactNode {
  return (
    <div className={styles.carousel}>
      <Swiper spaceBetween={5} slidesPerView={"auto"} modules={[Pagination]}>
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
