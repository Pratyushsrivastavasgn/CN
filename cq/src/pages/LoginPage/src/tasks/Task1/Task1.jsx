import React, { useState, useEffect } from 'react';
import './Task1.css';

const bgImage = '/bg.png';
const logoImage = '/heading.png';
const taskTitleImage = '/logo1.png';
const walletImage = '/pg.png';

export default function Task1() {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="task1-container" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Top bar */}
      <div className="top-bar">
        <img src={logoImage} alt="Campus Quest 4.0" className="logo" />
        <img src={taskTitleImage} alt="Task 1" className="task-title-image" />
        <div className="top-right-container">
          <div className="timer-wrapper">
            <div className="timer">
              TIME : <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
          <div className="wallet-wrapper">
            <img src={walletImage} alt="Wallet" className="wallet-image" />
          </div>
        </div>
      </div>

      {/* Instructions styled like desired image */}
      <div className="task-instructions styled-box">
        <p><span className="highlight">Time</span> is your true adversary in this challenge.</p>
        <ul>
          <li>⏱️ Crack the case in under 25 minutes, and you’ll earn an extra <span className="gold">£20,000</span> reward for razor-sharp thinking.</li>
          <li>⏱️ Take between 25 to 40 minutes, and you pass through unchanged... but under quiet observation.</li>
          <li>⏱️ Cross the 40-minute mark, and the trail begins to fade – expect a <span className="red">£20,000</span> deduction for your delay.</li>
        </ul>
        <p>Regardless of your timing, if you manage to qualify the round, a <span className="gold">£50,000</span> reward still awaits.</p>
        <p>
          You’ll face five games each crafted to test your wits and nerve.<br />
          Click the Start button to begin. Complete or skip each challenge to unlock the next.
        </p>
      </div>

      {/* Start button */}
      <button className="start-button">Start</button>
    </div>
  );
}
