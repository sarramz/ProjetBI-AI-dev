import React from "react";
import "./profilepage.css"; // Import du fichier CSS

export default function ProfilePage() {
  return (
    <div className="profile-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="sidebar-menu">
          <li>
            <i className="icon-info"></i> my Informations
          </li>
          <li>
            <i className="icon-orders"></i> My Commands
          </li>
          <li>
            <i className="icon-wishlist"></i> My wishlist
          </li>
          <li className="active">
            <i className="icon-settings"></i> Settings
          </li>
        </ul>
        <div className="logout-section">
          <i className="icon-logout"></i> Log out
        </div>
      </aside>

      {/* Main Content */}
      <main className="profile-main">
        <div className="welcome">
          Welcome! <span className="username">Md Sarra</span>
        </div>

        <div className="profile-card">
          <h2>Edit Your Profile</h2>
          <form className="profile-form">
            <div className="row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Sarra" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Mzali" />
              </div>
            </div>

            <div className="row">
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="sarramzali@gmail.com" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" placeholder="Soukra,2036" />
              </div>
            </div>

            <h3>Password Changes</h3>
            <div className="form-group">
              <label>Current Password</label>
              <input type="password" placeholder="Current Password" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="New Password" />
            </div>
            <div className="form-group">
              
              <input type="password" placeholder="Confirm New Password" />
            </div>

            <div className="buttons">
              <button type="button" className="btn-cancel">Cancel</button>
              <button type="submit" className="btn-save">Save Changes</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
