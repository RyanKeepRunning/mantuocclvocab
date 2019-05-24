import React from 'react';
import Homepage from './pages/Homepage';
import businessVocab from './components/businessVocab';
import centrelinkVocab from './components/centrelinkVocab';
import educationVocab from './components/educationVocab';
import immigrationVocab from './components/immigrationVocab';
import lawVocab from './components/lawVocab';
import medicalVocab from './components/medicalVocab';
import allVocab from './components/allVocab';

const vocabs = [];
vocabs.push(businessVocab);
vocabs.push(centrelinkVocab);
vocabs.push(educationVocab);
vocabs.push(immigrationVocab);
vocabs.push(lawVocab);
vocabs.push(medicalVocab);
vocabs.push(allVocab);

function App() {
  return (
    <Homepage vocabs = {vocabs}/>
  );
}

export default App;
