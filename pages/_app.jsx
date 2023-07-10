import Footer from "../components/Layouts/Footer"
import Header from "../components/Layouts/Header"
import Sidebar from "../components/Layouts/Sidebar"
import "../styles/nomalize.css"

export default ({ Component, pageProps }) =>{
  return <>
    <div className="frame">
      <Header />
      <Sidebar />
      <Component {...pageProps} />   
      <Footer />
    </div>
    <style jsx>{`
      .frame{
        background-color: black;
      }
   `}</style> 
  </>
}