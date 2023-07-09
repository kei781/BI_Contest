export default ({value, onChange, width, heigth}) =>{
  return <>
  <div className="frame text" onClick={onChange}>
    {value}
  </div>
  <style jsx>{`
    .frame{
      width: ${width} ; height: ${heigth} ;
      display: flex; justify-content: center; align-items: center; flex-direction: column;
      padding: 2px 8px;
      border: 1px solid #FFF; border-radius: 8px;
      background: #C8C8C8;
    }
    .text{
      color: #000;
      font-family: Noto Sans KR;
      font-size: 12px;
      font-weight: 700;
    }
  `}</style> 
  </>
}