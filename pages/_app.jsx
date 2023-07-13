import Footer from "../components/_Layouts/Footer"
import Header from "../components/_Layouts/Header"
import Sidebar from "../components/_Layouts/Sidebar"
import "../styles/nomalize.css"

export default ({ Component, pageProps }) =>{
  return <>
    <div className="frame">
      <Header />
      <div className="scfLayout">
        <Sidebar />
        <div className="cfLayout">
          <div className="cLayout">
            <Component {...pageProps}/>
          </div>
          <Footer />
        </div>
      </div>
    </div>
    <style jsx>{`
      .frame{
        width: 100%; height: 100%;
        background-color: black;
      }
      .scfLayout{
        position: absolute;
        min-height: calc(100% - 60px);
        min-width: 100%;
        display: flex; 
      }
      .cfLayout{
        position: absolute;
        min-width: calc(100% - 70px); min-height: 100%;
        padding-left: 70px;
      }
      .cLayout{
        position: absolute;
        min-width: calc(100% - 70px); min-height: calc(100% - 200px);
      }
   `}</style> 
  </>
}