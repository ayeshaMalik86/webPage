import React from 'react';
import './EducationPage.css';

const EducationPage = () => {
  return (
    <div className="education-page">
      <div className="sidebar">
        <div className="logo">
            <img src="/icons/logo.png" alt="logo" className='logo-img'/>
            <div className='menu-icons'><img src="/icons/basket.png" alt="basket"/></div>
        </div>
        <div className="nav-menu">
            <div className='menu-icons'><img src="/icons/home.png" alt="home"/></div>
            <div className='menu-icons'><img src="/icons/calendar.png" alt="calendar"/></div>
            <div className='menu-icons'><img src="/icons/book.png" alt="book"/></div>
            <div className='menu-icons'><img src="/icons/menu-button.png" alt="menu-button"/></div>
        </div>
        <div className="profile-avatar">
            <div className='menu-icons'><img src="/icons/setting.png" alt="setting"/></div>
            <div className='avatar'><img src="/icons/avatar.png" alt="setting"/></div>
        </div>
      </div>

      <main className="main-content">
        <div className="header">
          <h1>Invest in your <br/>education</h1>
          <div className="categories">
            <button><div className='menu-icons'><img className='categories-img' src="/icons/menu-button.png" alt="menu-button"/></div>All</button>
            <button><div className='menu-icons'><img src="/icons/laptop.png" alt="laptop"/></div>IT & Software</button>
            <button><div className='menu-icons'><img src="/icons/video.png" alt="video"/></div>Media Training</button>
            <button><div className='menu-icons'><img src="/icons/envelope.png" alt="envelope"/></div>Business</button>
            <button><div className='menu-icons'><img src="/icons/cube.png" alt="cube"/></div>Interior</button>
          </div>
        </div>

        <section className="courses">
          <h2>Most popular</h2>
          <div className="course-grid">
            <div className="course-card pink">
            <div className='card-header'>
                <div className='card-header-content'>
                <div className='menu-icons'><img src="/icons/laptop.png" alt="laptop"/></div>
                    It and Software
                </div>
                <span className="rating">⭐ 4.8</span>
              </div>
              <h3>CCNA 2020 200-125 Video Boot Camp</h3>
              <p>9,530 students</p>
              
            </div>
            <div className="course-card yellow">
            <div className='card-header'>
                <div className='card-header-content'>
                <div className='menu-icons'><img src="/icons/envelope.png" alt="envelope"/></div>
                    Business
                </div>
                <span className="rating">⭐ 4.9</span>
              </div>
              <h3>Powerful Business Writing: How to Write Concisely</h3>
              <p>1,463 students</p>
            </div>
            <div className="course-card purple">
            <div className='card-header'>
                <div className='card-header-content'>
                <div className='menu-icons'><img src="/icons/video.png" alt="video"/></div>
                    Media Training
                </div>
                <span className="rating">⭐ 4.9</span>
              </div>
              <h3>Certified Six Sigma Yellow Belt Training</h3>
              <p>6,726 students</p>
            </div>
            <div className="course-card green">
            <div className='card-header'>
                <div className='card-header-content'>
                <div className='menu-icons'><img src="/icons/cube.png" alt="cube"/></div>
                    Interior
                </div>
                <div className=''>
                <span className="rating">⭐ 4.9</span>
                <span className="ranking">🎖️ Top 10</span>              
                </div>
              </div>
              <h3>How to Design a Room in 10 Easy Steps</h3>
              <p>8,735 students</p>
            </div>
          </div>
        </section>
      </main>

      <aside className="profile-section">
        <div className="profile-header">
          <div className='profile-header-icons'>
            <img src="/icons/bell.png" alt="bell" />
            <img src="/icons/setting.png" alt="setting" />
            </div>
          <img className='profile-header-avatar' src="/icons/avatar.png" alt="Profile" />
          <h3>Annette Black</h3>
          <div className='friends'>
          <img src="/icons/user.png" alt="user" />
            <p>274 Friends</p>
            </div>
        </div>
        <div className="activity">
          <div className='card-header'>
          <h4>Activity</h4>
          <select className='year'><option>Year</option></select>
          </div>
          <p>3.5h 🔥 Great result!</p>
          <div className="activity-chart">
            <div className="bar">Jan</div>
            <div className="bar">Feb</div>
            <div className="bar">Mar</div>
            <div className="bar">Apr</div>
            <div className="bar active">Dec</div>
          </div>
        </div>
        <div className="my-courses">
          <h4>My courses</h4>
          <div className="course-summary">
            <p>Flutter Masterclass</p>
            <span>⭐ 4.8</span>
          </div>
          <div className="course-summary">
            <p>Business Writing</p>
            <span>⭐ 4.9</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default EducationPage;
