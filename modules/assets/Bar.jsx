export default ({width=1, heigth=10}) =>{
  return <>
  <div className="frame">
  </div>
  <style jsx>{`
    .frame{
      width: ${width}px; height: ${heigth}px;
      background-color: #cfcfcf;
    }
  `}</style> 
  </>
}