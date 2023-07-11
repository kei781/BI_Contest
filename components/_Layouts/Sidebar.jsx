import { useState } from "react"
import Distans from "../../modules/assets/Distans";

const WIDTH = 12

export default () =>{
  const [widthExtension, setWidthExtension] = useState(false);

  return <>
  <div className="frame">
    <div className="Btn">
      <img src="/compoenets/_Layouts/sidebar/burger.svg" alt="menuOpen" className="img" onClick={() => {setWidthExtension(true)}}/>
      {
        widthExtension ? <><span>Menu</span> <img src="/compoenets/_Layouts/sidebar/xbox.svg" alt="menuClose"  height={21} width={21} onClick={() => {setWidthExtension(false)}}/> </>: ''
      }
    </div>
    <a href="#" className="BtnTest">
      <img src="/compoenets/_Layouts/sidebar/enterprise.svg" alt="" className="img"/> 
      {
        widthExtension ? <><Distans width={WIDTH}/> <span>todo</span></> : ''
      }
    </a>
    <div className="contents">
      <a href="#" className="BtnTest">
        <img src="/compoenets/_Layouts/sidebar/community.svg" alt="community" className="img"/> 
        {
          widthExtension ? <><Distans width={WIDTH}/> <span>todo</span></> : ''
        }
      </a>
      <a href="#" className="BtnTest">
        <img src="/compoenets/_Layouts/sidebar/info.svg" alt="info" className="img"/> 
        {
          widthExtension ? <><Distans width={WIDTH}/> <span>todo</span></> : ''
        }
      </a>
      <a href="#" className="BtnTest">
        <img src="/compoenets/_Layouts/sidebar/payment.svg" alt="payment" className="img"/> 
        {
          widthExtension ? <><Distans width={WIDTH}/> <span>todo</span></> : ''
        }
      </a>
    </div>
  </div>
  <style jsx>{`
    .frame{
      width: ${widthExtension ? 180 : 70}px; height: calc(100% - 60px); 
      display: flex; flex-direction: column;
      gap: 15px;
      z-index: 3;
      box-sizing: border-box; padding: 20px 20px;
      flex-shrink: 0;
      border-radius: 0px 5px 0px 0px;
      border-top: 2px solid rgba(255, 255, 255, 0.50);
      border-right: 2px solid rgba(255, 255, 255, 0.50);
      position: absolute;
      background-color: #222;
    }
    .img{
      width : 30px; height: 30px;
    }
    .Btn{
      display: flex; justify-content: space-between; align-items: center;
    }
    .BtnTest{
      display: flex; align-items: center;
    }
    .contents{
      display: flex; flex-direction: column;
      gap: 10px;
    }
    
    
  `}</style> 
  </>
}