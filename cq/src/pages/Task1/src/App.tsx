import React, { useState, useEffect } from 'react';
import { Lock, Clock } from 'lucide-react';

interface TaskProps {
  taskNumber: number;
  isUnlocked: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

const TaskCard: React.FC<TaskProps> = ({ taskNumber, isUnlocked, isCompleted, onClick }) => {
  return (
    <div 
      className={`relative cursor-pointer transition-all duration-300 hover:scale-105 ${
        isUnlocked ? 'opacity-100' : 'opacity-60'
      }`}
      onClick={onClick}
    >
      <div className={`
        relative bg-gradient-to-br from-amber-600 to-orange-700 
        rounded-xl p-6 shadow-2xl border-2 
        ${isUnlocked ? 'border-amber-400' : 'border-gray-600'}
        ${isCompleted ? 'from-green-600 to-emerald-700 border-green-400' : ''}
      `}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white tracking-wider">
            TASK {taskNumber}
          </h2>
          <div className="relative">
            {taskNumber === 1 && (
              <Search className="w-8 h-8 text-amber-200" />
            )}
            {taskNumber === 2 && (
              <>
                <Search className="w-8 h-8 text-white" />
                {!isUnlocked && (
                  <Lock className="w-4 h-4 text-gray-400 absolute -top-1 -right-1" />
                )}
              </>
            )}
          </div>
        </div>
        
        {/* Status indicator */}
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 border-2 border-white shadow-lg">
          {isCompleted && (
            <div className="w-full h-full rounded-full bg-green-400 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          )}
        </div>

        {/* Geometric decoration */}
        <div className="absolute bottom-2 left-2 w-8 h-8 border-2 border-amber-300 rotate-45 opacity-20"></div>
        <div className="absolute top-2 right-8 w-4 h-4 bg-amber-300 rotate-45 opacity-30"></div>
      </div>
    </div>
  );
};

const Timer: React.FC = () => {
  const [time, setTime] = useState(3599); // 59:59 in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) return 0;
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-black/80 backdrop-blur-sm border-2 border-amber-500 rounded-lg px-6 py-3 shadow-2xl">
      <div className="flex items-center space-x-2">
        <Clock className="w-5 h-5 text-amber-400" />
        <span className="text-amber-400 font-mono text-sm font-medium">TIME :</span>
        <span className="text-white font-mono text-lg font-bold tracking-wider">
          {formatTime(time)}
        </span>
      </div>
    </div>
  );
};

const PathConnector: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="flex items-center justify-center relative">
      <div className={`
        h-1 w-32 relative overflow-hidden rounded-full
        ${isActive ? 'bg-gradient-to-r from-amber-500 to-orange-600' : 'bg-gray-600'}
        transition-all duration-500
      `}>
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
        )}
      </div>
      <div className="absolute flex space-x-4">
        <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-amber-400' : 'bg-gray-500'} transition-colors duration-300`}></div>
        <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-orange-400' : 'bg-gray-500'} transition-colors duration-300 delay-100`}></div>
        <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-amber-400' : 'bg-gray-500'} transition-colors duration-300 delay-200`}></div>
      </div>
    </div>
  );
};

function App() {
  const [task1Completed, setTask1Completed] = useState(false);
  const [task2Unlocked, setTask2Unlocked] = useState(false);

  const handleTask1Click = () => {
    if (!task1Completed) {
      setTask1Completed(true);
      setTask2Unlocked(true);
    }
  };

  const handleTask2Click = () => {
    if (task2Unlocked) {
      console.log('Task 2 started!');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/BACKGROUND (2).png')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <img src="/10x logo.png" alt="10x Logo" className="h-12 w-auto" />
        </div>
        
        <Timer />
        
        <div className="text-right">
          <img src="/Main CQ heading.png" alt="Campus Quest" className="h-16 w-auto ml-auto" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-6">
        {/* Frame 125 Image */}
        <div className="w-full max-w-6xl mx-auto">
          <img 
            src="/Frame 125 (1).png" 
            alt="Campus Quest Tasks" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Interactive overlay for tasks - positioned over the image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center space-x-32 md:space-x-48 max-w-4xl w-full">
            {/* Task 1 Interactive Area */}
            <div 
              className="w-32 h-32 cursor-pointer transition-all duration-300 hover:scale-110 rounded-full"
              onClick={handleTask1Click}
              title="Click to complete Task 1"
            >
              {/* Invisible clickable area */}
            </div>

            {/* Task 2 Interactive Area */}
            <div 
              className={`w-32 h-32 cursor-pointer transition-all duration-300 hover:scale-110 rounded-full ${
                task2Unlocked ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
              }`}
              onClick={handleTask2Click}
              title={task2Unlocked ? "Click to start Task 2" : "Complete Task 1 first"}
            >
              {/* Invisible clickable area */}
            </div>
          </div>
        </div>
      </div>

      {/* Status indicator */}
      {task1Completed && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-pulse">
          Task 1 Completed! Task 2 is now unlocked.
        </div>
      )}
    </div>
  );
}

export default App;