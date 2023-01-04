import {useEffect, useState} from "react";
import TopBarProgress from "react-topbar-progress-indicator";
import axios from 'axios';
const Contact = () => {
    // Set loading state to true initially
   const [loading, setLoading] = useState(true);
   const [name, setName] = useState('');  
   const [email, setEmail] = useState('');  
   const [subject, setSubject] = useState('');  
   const [massage, setMassage] = useState('');   
   const [successm, setsuccessm] = useState(''); 
   const [users, setUsers] = useState([]);
   const [file, setFile] = useState();
   const handleSubmit = async (event) => {
     event.preventDefault();
    
     try {
      let res = await fetch("http://192.168.29.23/test/save.php", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          massage:massage
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        setName("");
        setEmail("");
        setSubject("");
        setMassage("");
        setsuccessm("User created successfully");
        fetchData();
      } else {
        setsuccessm("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
   }
   const fetchData = () => {
    fetch("http://192.168.29.23/test/send_data.php")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  function handleChange(event) {
    setFile(event.target.files[0])
  }
  function handleSubmitfiel(event) {
    event.preventDefault()
    const url = 'http://192.168.29.23/test/save.php';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }
  useEffect(() => {
    fetchData();
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
      console.log(users);
    return(
        <>
         <div className="container margintops">
            <div className="row">
                 <div className="col-lg-6">
                 <div style={{width: '100%'}}><iframe title="address" width="100%"  src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Malet%20St,%20London%20WC1E%207HU,%20United%20Kingdom+(Your%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed">&lt;a href="https://www.gps.ie/sport-gps/"&gt;gps watches&lt;/a&gt;</iframe></div>
                 </div>
                 <div className="col-lg-6">
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="form-control form-control-lg" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        <input type="email" className="form-control mt-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" className="form-control mt-3" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                        <div className="mb-3 mt-3">
                            <textarea className="form-control" rows="5" id="comment" name="text" value={massage} placeholder="Project Details" onChange={(e) => setMassage(e.target.value)}>{massage}</textarea>
                        </div>
                        <button type="submit" className="btn btn-success mt-3">Contact Me</button>
                    </form>
                    <div className="message">{successm ? <p>{successm}</p> : null}</div>
                 </div>
            </div>
            {users.length > 0 && (
            <div className="row">
              <table id="new_bale">
                <tbody>
                 <tr><th>Name</th><th>Email</th><th>Subject</th><th>Massage</th></tr>
                 {users.map(user => (
                 <tr><td>{user.name}</td><td>{user.email}</td><td>{user.subject}</td><td>{user.massage}</td></tr>
                 ))}
                </tbody>
              </table>
            </div>
            )}
          </div>
          {/*
          <form action="../../post" method="post" 
              className="form">
            <button type="submit"> Connected </button>
          </form>
          */
          }
          <div className="App">
          <form onSubmit={handleSubmitfiel}>
            <h1>React File Upload</h1>
            <input type="file" onChange={handleChange}/>
            <button type="submit">Upload</button>
           </form>
          </div>
         </>
       );
    }
  };
export default Contact;