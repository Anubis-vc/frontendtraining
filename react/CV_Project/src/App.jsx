import { useState, useEffect } from 'react';
import './styles/App.css';
import Form from './components/Form';

function App() {
  const [cvReady, setCvReady] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(true);
  const [isEditingEducation, setIsEditingEducation] = useState(true);

  useEffect(() => {
    if (!isEditingEducation && !isEditingContact) {
      setCvReady(true);
    }
    else {
      setCvReady(false);
    }
  }, [setCvReady, isEditingContact, isEditingEducation]);

  const handlePrinting = () => {
    const noPrint = document.querySelectorAll('.no-print');
    noPrint.forEach((element) => (element.style.display = 'none'));

    const experiences = document.querySelectorAll('.experience');
    experiences.forEach((experience) => experience.style.marginTop = '-30px');

    const fields = document.querySelectorAll('.fields');
    fields.forEach((fieldsElement) => fieldsElement.style.gap = '8px');

    window.print();

    noPrint.forEach((element) => (element.style.display = 'block'));
    experiences.forEach((experience) => experience.style.marginTop = '0');
    fields.forEach((fieldsElement) => fieldsElement.style.gap = '0');
  };


  return (
    <>
      <Form
        isEditingContact={isEditingContact}
        isEditingEducation={isEditingEducation}
        setIsEditingContact={bool => setIsEditingContact(bool)}
        setisEditingEducation={bool => setIsEditingEducation(bool)}
      />
      <button
        disabled={!cvReady}
        onClick={handlePrinting}
        className="generate-cv no-print"
      >
        Generate CV
      </button>
    </>
  );
}

export default App
