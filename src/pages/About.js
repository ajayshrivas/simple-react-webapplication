import {useEffect, useState} from "react";
import TopBarProgress from "react-topbar-progress-indicator";
import about_image from './images/about_image.jpg';
const About = () => {
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
      <section id="about">
        <div className="container mt-4 pt-4">
            <h1 className="text-center">About Me</h1>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <img src={about_image} className= "imageAboutPage" alt="" />
                </div>

                <div className="col-lg-8">
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                        
                    </p>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <ul>
                                <li>Name: David Parker</li>
                                <li>Age: 28</li>
                                <li>Occupation: Web Developer</li>

                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>Name: David Parker</li>
                                <li>Age: 28</li>
                                <li>Occupation: Web Developer</li>

                            </ul>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>
            </div>
         </div>
        </section>
     </>
     );
    }
  };
export default About;