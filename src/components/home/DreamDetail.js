import React from 'react';
import {Wrapper} from '../../styles/dreamDetail';
import {dreamList} from '../../utils/helper';

function DreamDetail() {
  return (
    <Wrapper>
      <div className="dream__title">
        <h2>Dream Market 에는 이런 꿈들이 있어요</h2>
        <p>
          자유롭게 다니지 못하는 요즘, 어디든지 여행도 가능하고, 비현실적인
          일들을 경험하거나, 사랑하는 사람, 내가 좋아하는 연예인과 짜릿한
          데이트를 할 수 있고, 사랑하는 사람이나 반려견과 보내는 소중한 하루를,
          한 여름날 더위를 식혀줄 공포 스릴러물까지 Dream Market이 함께 합니다!
        </p>
      </div>
      <div className="dream__list">
        {dreamList.map((item) => {
          const {id, title, text, icon} = item;
          return (
            <div key={id} className="dream__list-menu">
              <span>{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default DreamDetail;
