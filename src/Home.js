
import {useEffect, useState} from "react";
import TopBarProgress from "react-topbar-progress-indicator";
const Home = () =>{
   // Set loading state to true initially
   const [loading, setLoading] = useState(true);
     
   useEffect(() => {
    // Loading function to load data or 
    // fake it using setTimeout;
    const loadData = async () => {

      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));

      // Toggle loading state
      setLoading((loading) => false);
    };
      
    loadData();
  }, [])
  console.log(loading);
    TopBarProgress.config({
      /*barColors: {
        "0": "#fff",
        "1.0": "#fff"
      },*/
      shadowBlur: 5
    });
    if(loading){
    return(<TopBarProgress />);
    }else{
    return(
        <>
        <section className="bgimage" id="home">
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                    <h2 className="hero_title">Hi, it's me Brad</h2>
                    <p className="hero_desc">I am a professional freelancer in New York City</p>
                </div>
                </div>
            </div>
        </section>
       </>
     );
    }
}
export default Home;