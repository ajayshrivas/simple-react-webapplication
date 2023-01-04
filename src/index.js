import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route} from "react-router-dom";
//import { useLoadingContext } from "react-router-loading";
//import { topbar } from "react-router-loading";
//import {useEffect, useState} from "react";
//import TopBarProgress from "react-topbar-progress-indicator";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Header';
//import App from './App';
import Footer from './Footer';
import Home from './Home';
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import reportWebVitals from './reportWebVitals';

const Menus = () => {
     // Set loading state to true initially
     /*const [loading, setLoading] = useState(true);
     
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
        barColors: {
          "0": "#fff",
          "1.0": "#fff"
        },
        shadowBlur: 5
      });
      if(loading){
      return(<TopBarProgress />);
      }else{*/
        return(
          <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <Header /> } >
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
        </BrowserRouter>3
        </>
        );
    //}

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Menus />
     <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
