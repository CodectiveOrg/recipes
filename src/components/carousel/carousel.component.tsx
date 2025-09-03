import type { ReactNode } from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "@/styles/swiper.css";

import styles from "./carousel.module.css";

type Props = {
  children: ReactNode[];
};

export default function CarouselComponent({ children }: Props): ReactNode {
  return (
    <div className={styles.carousel}>
      <Swiper spaceBetween={16} slidesPerView={1.5} modules={[Pagination]}>
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
