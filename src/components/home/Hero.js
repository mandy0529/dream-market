import React from 'react';
import {Link} from 'react-router-dom';
import {Wrapper} from '../../styles/hero';
import {HERO_IMG1, HERO_IMG2, HERO_IMG5} from '../../utils/images';

function Hero() {
  return (
    <Wrapper>
      <div className="hero__main">
        <h1>
          주문하신 꿈은
          <br /> 매진입니다
        </h1>
        <p>내가 원하는 꿈을 사서 행복한 잠을 누려보세요.</p>
        <Link className="hero__btn" to="/products">
          <span>꿈 스토어</span>
        </Link>
      </div>
      <article className="img-container">
        <img className="hero__img1" src={HERO_IMG1} alt="hero-img1" />
        <img className="hero__img2" src={HERO_IMG2} alt="hero-img2" />
        <img className="hero__img5" src={HERO_IMG5} alt="hero-img5" />
      </article>
    </Wrapper>
  );
}

export default Hero;
