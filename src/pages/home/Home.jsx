import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import requests from "../../utils/requests";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured fetchUrl = {requests.fetchHotels}/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList fetchUrl = {requests.fetchHotels}/>
        <h1 className="homeTitle">Homes guests love</h1>
        {/* chua xu ly api */}
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
