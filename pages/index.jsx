import Bar from "../modules/assets/Bar"

export default () =>{

  return <>
    <div className="frame">
      <a className="box" href="/data/enterprise/">
        <img src="/welcome/enterprise.svg" alt="enterprise_img"/>
        <p>기업 회원</p>
      </a>
      <Bar width={4} heigth={332} />
      <a className="box" href="/data/person/">
        <img src="/welcome/person.svg" alt="person_img"/>
        <p>개인 회원</p>
      </a>
    </div>
    <style jsx>{`
      .frame{
        width: 100%; height: 100%;
        position: absolute;
        display: flex; justify-content: center; align-items: center;
        gap: 100px;
      }
      .box{
        width: 200px; height: 200px;
        display: flex; justify-content: center; align-items: center; flex-direction: column;
        gap: 10px;
        flex-shrink: 0;
        border: 2px solid #FFF; border-radius: 10px;
        background-color: #222;
      }
      p{
        padding-bottom: 4px;
        border-bottom: 1px solid #50A0FF;
        font-family: Noto Sans KR;
        font-size: 14px; font-weight: 700;
        
      }
    `}</style> 
  </>
}