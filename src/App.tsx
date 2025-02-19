import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FeaturesPreview from './components/FeaturesPreview';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <FeaturesPreview />
      </main>
      <Footer />
    </div>
  );
}

export default App;
