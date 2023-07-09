export default ({value, onChange, placeholder, width, height}) =>{

  return <>
    <div className="frame">
      <input type="text" className="textArea" placeholder={placeholder} value={value} onChange={onChange}/>
      <img className="icon" src="/modules/input/ic_search.svg" alt="검색아이콘"/>
    </div>
    <style jsx>{`
      .frame{
        width: ${width? width :`180px`}; height: ${height? height : `32px`};
        display: flex; justify-content: flex-end; align-items: center;
        padding: 4px 0px 4px 2px;
        gap: 5px;
        border: 1px solid #000; border-radius: 5px;
        background: #FFF;
      }
      .textArea{
        width: calc(100% - 5px - 24px);
        height: 100%;
        border: 0;
        outline: none;
      }
      input::placeholder{
        color: rgba(0, 0, 0, 0.20);
        font-family: Noto Sans KR;
        font-size: 8px;            
        font-weight: 700;
      }
      .textArea:focus{
        border: 0;
      }
      .icon{
        width: 24px; height: 24px;
        padding: 0;
      }
    `}</style> 
  </>
}