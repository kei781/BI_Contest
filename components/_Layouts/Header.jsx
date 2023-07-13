import Distans from "../../modules/assets/Distans"
import ButtonBasic from "../../modules/button/ButtonBasic"
import InputText from "../../modules/input/InputText"

export default () =>{
  return <>
  <header className="frame">
    <div className="flex">
      <a href="/">
        <img src="/compoenets/_Layouts/header/logo.svg" alt="로고이미지" />
      </a>
      <Distans width={20} />
      <InputText placeholder={"거주 지역을 검색해 보세요!"} width={"150"}/>
      <Distans width={20} />
      <div className="flex">
        <ButtonBasic value={`랭킹`}/>
        <Distans width={5} />
        <ButtonBasic value={`1st`}/>
        <Distans width={5} />
        <span>광주광역시</span>
      </div>
    </div>

    <div className="flex">
      <img src="/compoenets/_Layouts/header/user.svg" alt="유저아이콘" />
      <Distans width={15} />
      <ButtonBasic value={`노상운 회원님`} heigth={27}/>
    </div>
  </header>
  <style jsx>{`
    .frame{
      min-width: calc(800px - 10px);
    }
    header{
      height: 60px;
      background-color: #222;
      display: flex; justify-content: space-between; align-items: center;
      box-sizing: border-box; padding: 0px 5px;
    }
    .flex{
      display: flex; justify-content: center; align-items: center;
    }
  `}</style> 
  </>
}