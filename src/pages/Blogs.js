import {useEffect, useState} from "react";
import TopBarProgress from "react-topbar-progress-indicator";
const Blogs = () => {
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
            <section id="services">
                <div className="container">
                    <h1 className="text-center">Services</h1>
                    <div className="row">
                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className="fas servicesIcon fa-clock"></i>
                                    <h4 className="card-title mt-3">Website Development</h4>
                                    <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>  
                        </div>
                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className='fas servicesIcon fa-layer-group'></i>
                                    <h4 className="card-title mt-3">Website Design</h4>
                                    <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>  
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className='far servicesIcon fa-check-circle'></i>
                                    <h4 className="card-title mt-3">Website Deployment</h4>
                                    <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>  
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className='fas servicesIcon fa-search'></i>
                                    <h4 className="card-title mt-3">SEO</h4>
                                    <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>  
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className='fas servicesIcon fa-shield-alt'></i>
                                    <h4 className="card-title mt-3">DevOps</h4>
                                    <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>  
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card servicesText">
                                <div className="card-body">
                                    <i className='fas servicesIcon fa-wrench'></i>
                                    <h4 className="card-title mt-3">QA</h4>
                                    <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
           </>
          );
        }
  };
export default Blogs;