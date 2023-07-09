import Footer from "../components/Layouts/Footer"
import Header from "../components/Layouts/Header"
import Sidebar from "../components/Layouts/Sidebar"
import ButtonBasic from "../modules/button/ButtonBasic"
import InputText from "../modules/input/InputText"

export default () =>{

  return <>
    <div>
      <InputText />
      <ButtonBasic value={'글자'}/>
      <Header />
      <Sidebar />
      <Footer />
    </div>
    <style jsx>{`

   `}</style> 
  </>
}