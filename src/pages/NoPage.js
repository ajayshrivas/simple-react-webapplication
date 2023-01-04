import {useEffect, useState} from "react";
import TopBarProgress from "react-topbar-progress-indicator";
const NoPage = () => {
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
        <div className="container margintops">
            <div className="row">
               <h1>404</h1>
            </div>
        </div>
       </>
     )
    }
       
  };
export default NoPage;