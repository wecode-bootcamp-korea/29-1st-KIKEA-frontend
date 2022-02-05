import React from 'react';
import './Footer.scss';
import { FaFacebook, FaGlobe, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-menu">
          <div className="footer-menu-item">
            <h3>KIKEA FAMILY</h3>
            <p>
              지금 KIKEA Family에 무료로 가입하고
              <br />
              다양한 멤버 전용 혜택을 누리세요.
            </p>
            <span>자세히 보기</span>
            <button>KIKEA Family 가입하기</button>
          </div>
          <div className="footer-menu-item">
            <h3>고객문의</h3>
            <ul>
              <li>고객지원</li>
              <li>자주 묻는 질문</li>
              <li>문의하기</li>
              <li>배송조희</li>
              <li>교환환불</li>
              <li>품질보증</li>
              <li>제품리콜</li>
              <li>피드백</li>
              <li>부품신청</li>
            </ul>
          </div>
          <div className="footer-menu-item">
            <h3>쇼핑하기</h3>
            <ul>
              <li>쇼핑하기</li>
              <li>전화 주문</li>
              <li>KIKEA for Business</li>
              <li>셀프 플래닝</li>
              <li>KIKEA 모바일 앱</li>
              <li>제품 사용 팁/가이드</li>
              <li>결제 옵션</li>
              <li>기프트 카드</li>
            </ul>
          </div>
          <div className="footer-menu-item">
            <h3>서비스</h3>
            <ul>
              <li>KIKEA 서비스</li>
              <li>배송 서비스</li>
              <li>조립 서비스</li>
              <li>설치 서비스</li>
              <li>주방 서비스</li>
              <li>플래닝 서비스</li>
              <li>인테리어 디자인 서비스</li>
              <li>플바이백 서비스</li>
            </ul>
          </div>

          <div className="footer-menu-item">
            <h3>KIEA 이야기</h3>
            <ul>
              <li>브랜드 소개</li>
              <li>집에서의 삶</li>
              <li>지속가능한 생활</li>
              <li>내가 아끼는 집, 나를 아끼자!</li>
              <li>열심히 해요!</li>
              <li>다같이!</li>
            </ul>
          </div>
        </div>
        <div className="footer-button">
          <div className="footer-social">
            <button>
              <FaFacebook />
            </button>
            <button>
              <FaInstagram />
            </button>
            <button>
              <FaYoutube />
            </button>
          </div>
          <div className="footer-lang">
            <button>
              <FaGlobe /> &nbsp;국가 변경
            </button>
            <button>한국어 변경</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-top">
          <p> @ Inter KIKEA Systems W.E 2022</p>
          <ul>
            <li>개인정보처리방침</li>
            <li>쿠키 정책</li>
            <li>쿠기 설정</li>
            <li>웹사이트 이용약관</li>
            <li>KIKEA</li>
          </ul>
        </div>
        <div className="footer-bottom-bottom">
          <ul>
            <li> KIKEA 코리아</li>
            <li>주소 : 서울특별시 관악구 보라매동</li>
            <li>사업자 등록번호 : 무허가</li>
            <li>대표자 : KIKEA</li>
            <li>통신판매업 신고 : 무허가</li>
            <li>TEL : 112</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
