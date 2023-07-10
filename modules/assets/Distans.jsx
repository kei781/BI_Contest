export default ({width=1, heigth=1}) =>{
  return <>
  <div className="frame">
  </div>
  <style jsx>{`
    .frame{
      width: ${width}px;
      height: ${heigth}px;
      display: inline-block;
    }
  `}</style> 
  </>
}