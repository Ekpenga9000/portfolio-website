import {useState, useEffect} from 'react'; 
import "./Modal.scss";
import experienceDetails from "../../assets/data/experienceDetails.json";

const Modal = ({ id, deactivateModal }) => {
    const [experience, setExperience] = useState({
        title: "",
        company: "", 
        dates: "",
        role: "", 
        responsibilities:[]
    })

    useEffect(() => {
        const filterData = () => {
            const data = experienceDetails.experience.find((experience) => experience.id === id); 
            setExperience(data);
        }
        filterData();  
    },[id])
    

    const { title, company, dates, role, responsibilities } = experience; 
  return (
      <div className='modal'>
          <div className="modal__container">
              <div className='modal__close-div'>
              <i className="uil uil-multiply modal__close-icon" onClick={()=>deactivateModal()}></i>
              </div>
              <div className="modal__content-div">
                  <h3>{title}</h3>
                  <p className='modal__company'>{company}</p>
                  <p className='modal__role'>{role}</p>
                  <p className="modal__dates"><i className="uil uil-calendar-alt"></i> {dates}</p>

                  <h4 className='modal__desc'>Description</h4>
                  <ul>
                      {
                          responsibilities.map((responsibility, index) => {
                              return <li className='modal__item' key={index}> <i className="uil uil-check-circle"></i> {responsibility}</li>;
                          })
                      }
                  </ul>
              </div>
          </div>
    </div>
  )
}

export default Modal;