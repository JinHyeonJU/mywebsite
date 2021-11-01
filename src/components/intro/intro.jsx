import "./intro.css"
import Me from "../../img/me.png"


const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">웹 개발자</h2>
          <h1 className="i-name">진현주</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">JAVA</div>
              <div className="i-title-item">HTML</div>
              <div className="i-title-item">JSP</div>
              <div className="i-title-item">CSS</div>
              <div className="i-title-item">JAVASCRIPT</div>
              <div className="i-title-item">ORACLE, MYSQL</div>
            </div>
          </div>
          <p className="i-desc">
            안녕하세요. 저는 웹 개발자 진현주입니다. <br />
            백엔드가 주 담당이며 여기서 멈추지 않고 <br />
            프론트엔드 쪽으로도 성장해 풀스택 개발자가 되는 것이 목표입니다.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro