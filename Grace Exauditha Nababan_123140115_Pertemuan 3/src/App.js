import React, { useState } from 'react';
import { Book, BarChart2, Home, Menu, X } from 'lucide-react';
import { BookProvider } from './context/BookContext';
import HomePage from './pages/HomePage';
import StatsPage from './pages/StatsPage';
import './App.css'; 

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (view) => {
    setCurrentView(view);
    setIsMenuOpen(false); 
  };

  return (
    <BookProvider>
      <div className="app-container">
        
        {/* === NAVBAR === */}
        <nav className="navbar">
          <div className="navbar-container">
            
            {/* 1. Logo Area */}
            <div className="logo-area">
              <Book size={28} className="logo-icon" />
              <h1 className="font-heading" style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0, color: '#C8A165' }}>
                LibManager
              </h1>
            </div>

            {/* 2. Desktop Menu */}
            <div className="desktop-menu" style={{ gap: '2rem' }}>
              <button 
                onClick={() => navigateTo('home')} 
                className={`nav-btn ${currentView === 'home' ? 'active' : ''}`}
              >
                Koleksi Saya
              </button>
              <button 
                onClick={() => navigateTo('stats')} 
                className={`nav-btn ${currentView === 'stats' ? 'active' : ''}`}
              >
                Statistik
              </button>
            </div>

            {/* 3. Mobile Hamburger Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} color="#C8A165" /> : <Menu size={28} color="#C8A165" />}
            </button>
          </div>

          {/* === MOBILE MENU DROPDOWN === */}
          {isMenuOpen && (
            <div className="mobile-dropdown">
               <div className="mobile-menu-container">
                 <button 
                   onClick={() => navigateTo('home')} 
                   className={`mobile-menu-item ${currentView === 'home' ? 'active' : ''}`}
                 >
                   <Home size={20} /> Koleksi Saya
                 </button>
                 
                 <button 
                   onClick={() => navigateTo('stats')} 
                   className={`mobile-menu-item ${currentView === 'stats' ? 'active' : ''}`}
                 >
                   <BarChart2 size={20} /> Statistik
                 </button>
               </div>
            </div>
          )}
        </nav>

        {/* === MAIN CONTENT === */}
        <main className="main-content">
           <header className="page-header">
              <h2 className="page-title font-heading">
                {currentView === 'home' ? 'Daftar Pustaka' : 'Insight'}
              </h2>
              <p className="page-subtitle">
                {currentView === 'home' ? 'Kelola bacaanmu dengan gaya.' : 'Data di balik kebiasaan membacamu.'}
              </p>
            </header>
            
            {/* Render Halaman Sesuai State */}
            {currentView === 'home' ? <HomePage /> : <StatsPage />}
        </main>

      </div>
    </BookProvider>
  );
};

export default App;