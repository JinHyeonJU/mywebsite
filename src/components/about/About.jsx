import "./about.css";
import AboutMe from "../../img/aboutme.png";

const About = () => {
  return (
    <div className="a">
     <div className="a-left">
       <div className="a-card bg"></div>
       <div className="a-card">
         <img src={AboutMe} alt="" className="a-img" />
       </div>
     </div>
     <div className="a-right">
        <h1 className="a-title">ABOUT ME</h1>
        <p className="a-sub">
          <strong>이름</strong> : 진현주<br />
          <strong>나이</strong> : 2001년생<br />
          <strong>경력</strong> : 2020.10 ~ 2021.03 솔데스크<br/>
          JAVA 웹 개발자 양성 과정 수료(6개월)<br />
          복무관리 솔루션 구축, 유지보수(5개월)<br />
          전자결재 연동<br />
          시청 보안성검토 프로그램 개발<br />
        </p>
        <div className="a-award">
          <div className="a-award-texts">
            <h4 className="a-award-title">추후의 다짐</h4>
            <p className="a-award-desc">
              새로운 기술을 배우는 것에 대해 거부감이 전혀 없으며 오히려 흥미를 느끼는 성격입니다<br />
              정체되지 않고 꾸준히 발전해 나가는 모습을 보여드리겠습니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;