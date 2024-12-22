import React, { useState } from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import Step1Form from "./components/Step1Form";
import Step2Review from "./components/Step2Review";
import "./styles/App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    class: "",
    division: "",
    rollNo: "",
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const goToNextStep = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="app-container">
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="main-content">
        <Header />
        <ProgressBar currentStep={currentStep} />
        {currentStep === 1 ? (
          <Step1Form
            formData={formData}
            handleInputChange={handleInputChange}
            goToNextStep={goToNextStep}
          />
        ) : (
          <Step2Review goToPreviousStep={goToPreviousStep} />
        )}
      </main>
    </div>
  );
}

export default App;
