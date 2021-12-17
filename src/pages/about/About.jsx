import "./about.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/Footer/footer"

export default function about() {
    return (
        <>
            <Header />
            <div className="aboutcontainer">
                <div className="aboutcontent">
                    <h1 className="aboutcontenttitle">Who are we?</h1>
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fimages%2Fpeople%2Flife&psig=AOvVaw3-C_Augyy6Cge9_PTM9FpF&ust=1637749595736000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjTuPSirvQCFQAAAAAdAAAAABAO" alt="aboutimg" className="image" />
                    <p className="aboutcontentdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, error?</p>
                </div>
                <div className="sidebar">

                    <Sidebar />
                </div>
            </div>

            <Footer />
        </>
    );
}