import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import 'swiper/css';
import './intro.css'

// To let the Login page know when to finish the Intro
interface ContainerProps {
  onFinish: () => void;
}

const SwiperButtonNext =({ children }: any) => {
  const swier = useSwiper();
  return <IonButton onClick={() => swier.slideNext()}>{children}</IonButton>
};

const Intro: React.FC<ContainerProps> = ({onFinish}) => {

  return (
    <Swiper>
      <SwiperSlide>
        <img src={'./src/images/fit1.webp'} alt='Intro 1' />
        <IonText>
          <h3>Create your own Fitnessplan!</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={'./src/images/fit2.webp'} alt='Intro 2' />
        <IonText>
          <h3>Share with Friends!</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={'./src/images/fit3.webp'} alt='Intro 3' />
        <IonText>
          <h3>Train together!</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>
      
      <SwiperSlide>
        <img src={'./src/images/fit4.webp'} alt='Intro 4' />
        <IonText>
          <h3>Become your best self!</h3>
        </IonText>
        <IonButton onClick={() => onFinish()}>Finish</IonButton>
      </SwiperSlide>

    </Swiper>
  );
};

export default Intro;