import Footer from "../components/_Layouts/Footer"
import Header from "../components/_Layouts/Header"
import Sidebar from "../components/_Layouts/Sidebar"
import "../styles/nomalize.css"

export default ({ Component, pageProps }) =>{
  return <>
    <div className="frame">
      <Header />
      <Sidebar />
      <div className="Layouts">
        <Component {...pageProps}/>   
        <Footer />
      </div>
    </div>
    <style jsx>{`
      .frame{
        width: 100%; height: 100%;
        background-color: black;
        {/*  min-height: 800px; */}
      }
      .Layouts{
        height: calc(100% - 70px);
        padding-left: 70px;
        display: flex; 
        {/* min-height: 630px;  */}
      }
   `}</style> 
  </>
}