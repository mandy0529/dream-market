import React from 'react';
import {BiMoon} from 'react-icons/bi';
import {Wrapper} from '../styles/pages/about';
import {ABOUT, MOBILE} from '../utils/images';

function About() {
  return (
    <Wrapper className="page section section-center">
      <img className="about1" src={ABOUT} alt="about1" />
      <img className="about2" src={MOBILE} alt="mobile-about" />

      <article>
        <div className="title">
          <span>
            <BiMoon />
          </span>
          <h1>꿈 마켓 스토리</h1>
          <div className="underline"></div>
        </div>
        <p>
          바빠서, 할 게 많아서, 성공하기 위해서 잠을 줄이는 요즘,
          <strong> 달러구트 꿈 백화점 </strong>이라는 책에서
          <strong> 잠</strong>은 어제와 오늘 사이의 신비로운 틈새, 기분 좋은
          상상으로 채워 넣는 작업이라 표현합니다.
          <br /> 항상 어렸을 때부터 <strong>꿈</strong>을 꾸며 자는 저에게 이
          책의 의미는 크게 다가왔고, 반복적인 일상을 조금이나마 풍요롭게 밝혀,
          매일의 숙면과 좋은 꿈을 꾸는데 보탬이 되었습니다.
          <br /> 이 마켓을 들어온 모두가 꿈에서의 상상이 현실과 가까워지는 것을
          느끼면서
          <strong> 하루의 소소하고 행복한 마음 </strong>으로 살아갔으면
          좋겠습니다.
        </p>
      </article>
    </Wrapper>
  );
}

export default About;
