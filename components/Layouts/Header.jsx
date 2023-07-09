import ButtonBasic from "../../modules/button/ButtonBasic"
import InputText from "../../modules/input/InputText"

export default () =>{
  return <>
  <header>
    <div className="flex">
      <img src="/compoenets/header/logo.svg" alt="로고이미지" />
      <InputText placeholder={"거주하시는 지역을 검색하여 주세요."}/>
      <div className="flex">
        <ButtonBasic value={`랭킹`}/>
        <ButtonBasic value={`1st`}/>
        <span>광주광역시</span>
      </div>
    </div>

    <div className="flex">
      <img src="/compoenets/header/user.svg" alt="유저아이콘" />
      <ButtonBasic value={`노상운`}/>
    </div>
  </header>
  <style jsx>{`
    header{
      height: 60px;
      background-color: #C8C8C8;
      display: flex; justify-content: space-between; align-items: center;
      padding: 0px 5px;
    }
    .flex{
      display: flex; justify-content: center; align-items: center;
    }
  `}</style> 
  </>
}