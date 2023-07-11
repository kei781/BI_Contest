import 'normalize.css';
import Bar from '../../modules/assets/Bar';

export default () =>{

  return <>
  <footer>
    <div>
      <ul className='footerLinks'>
        <li><a href='#'>사이트 소개</a></li>
        <Bar />
        <li><a href='#'>이용약관</a></li>
        <Bar />
        <li><a href='#'>개인정보 처리 방침</a></li>
        <Bar />
        <li><a href='#'>문의/제휴</a></li>
      </ul>
      <div className='footerinfo'>
        <p>정해지지 않은 사명</p>
        <p>주소 : 미정</p>
        <p>대표번호: 123-1234-1234</p>
        <p>대표자 최현호</p>
        <p>사업자등록번호: 123-12-12345</p>
        <p>통신판매업 신고 : 1234-서울서울-12345</p>
      </div>
    </div>
    <div className='footerContens'>
      <span>본사이트는 전기절약을 위하여</span>
      <span>Only다크모드로 제작되었습니다.</span>
    </div>
  </footer>
  <style jsx>{`
    footer{
      width:  calc(100% - 70px) ;  min-width: calc(800px - 70px);
      display: flex; justify-content: space-between; align-items: center;
      box-sizing: border-box; padding: 20px;
      border-top: 0.5px solid #FFF;
      background-color: #222222;
      position: absolute; bottom: 0;
    }
    .footerLinks{
      display: flex; align-items: center;
      gap: 10px;
      padding: 10px;
      color: #FFF;
      font-size: 14px; font-weight: 500;
    }
    .footerinfo{
      display: flex; align-items: flex-start; flex-direction: column;
      gap: 5px;
      padding: 6px 10px;
      color: #FFF;
      font-size: 12px; font-weight: 400;
    }
    .footerContens{
      display: flex; justify-content: center; align-items: center; flex-direction: column;
      gap: 5px;      
      color: #FFF;
      font-size: 14px; font-weight: 700;
    }
  `}</style> 
  </>
}