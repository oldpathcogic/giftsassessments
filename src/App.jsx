import React from 'react';
import SpiritualGiftsAssessment from './components/SpiritualGiftsAssessment.jsx';
import AssessmentResultsViewer from './components/AssessmentResultsViewer.jsx';

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '');
  const isAdminView = path.endsWith('/admin');

  return isAdminView ? <AssessmentResultsViewer /> : <SpiritualGiftsAssessment />;
}
