import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css';
import "./style.css";
import icon from './icon-check.png';

function Result() {
  const location = useLocation();
  const [buttonStates, setButtonStates] = useState(location.state.buttonStates || Array(8).fill(false));
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.buttonStates) {
      setButtonStates(location.state.buttonStates);
    }
  }, [location.state]);

  /*const toggleIcon = index => {
    const newButtonStates = [...buttonStates];
    newButtonStates[index] = !newButtonStates[index];
    setButtonStates(newButtonStates);
  };*/

  const back = () => {
    navigate('/', { state: { buttonStates: buttonStates } });
  };

  return (
    <div className="desktop">
      <div className="frame">
        {buttonStates.map((isVisible, index) => (
          <div className="box" key={index}>
            <button className="rectangle-button" /*onClick={() => toggleIcon(index)}*/>
              <div className="rectangle">
                {isVisible && <img className="icon-check" alt="Icon check" src={icon} />}
              </div>
            </button>
            <div className="ling" />
          </div>
        ))}
      </div>
      <div className="title">
        <div className="model-s">あなたはAIをだませた！</div>
      </div>
      <button className="input-field-button" onClick={back}>
        <div className="input-field">
          <div className="text-wrapper">BACK</div>
        </div>
      </button>
    </div>
  );
}

export default Result;