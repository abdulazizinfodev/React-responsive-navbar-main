// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./NavBar.css";
// import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
// import logo from '../images/sdsd.png';


// function NavBar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);


//   const [isModalOpen, setModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setModalOpen(true);
//   };
//   const handClick = () => {
//     // Lot Calculator NavLink ga bosilganda modalni ochish
//     handleOpenModal();
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
  
//   };
//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-container">
//           <NavLink exact to="/" className="nav-logo">
//             <img src={logo} alt="" className="mylogo"/>
//             {/* <i className="fas fa-code"></i> */}
            
//           </NavLink>

//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/"
//                 // activeClassName="active"
//                 className="nav-links"
//                 onClick={handClick}
//               >
//                 Calendar
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/"
//                 // activeClassName="active"
//                 className="nav-links"
//                 onClick={handClick}
//               >
//                 Lot Calculator
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/contact"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Kirish
//               </NavLink>
//             </li>
//           </ul>
//           <div className="nav-icon" onClick={handleClick}>
//             {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

//             {click ? (
//               <span className="icon">
//                 <HamburgetMenuClose />{" "}
//               </span>
//             ) : (
//               <span className="icon">
//                 <HamburgetMenuOpen />
//               </span>
//             )}
//           </div>
         
//         </div>{isModalOpen && (
//             <div className="modal">
//               <h1>Tez kunda</h1>
//               <button onClick={handleCloseModal}>yopish</button>
//             </div>
//           )}
//       </nav>
//     </>
//   );
// }

// export default NavBar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import logo from '../images/sdsd.png';

function NavBar() {
  const [click, setClick] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setClick(!click);
    if (isModalOpen) {
      setModalOpen(false);
    }
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handClick = () => {
    handleOpenModal();
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOutsideClick = (e) => {
    // Agar modal oynasi tashqarisidan boshqa joyga bosilsa, modalni yopish
    if (isModalOpen && !e.target.closest(".modal") && !e.target.closest(".modal-toggle")) {
      setModalOpen(false);
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="" className="mylogo"/>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                onClick={handClick}
              >
                Calendar
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                onClick={handClick}
              >
                Lot Calculator
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="https://www.noxonfx-platform.com"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Kirish
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>

      {isModalOpen && (
        <div className="modal" onClick={handleOutsideClick}>
          <h1>Tez kunda</h1>
          <button onClick={handleCloseModal} className="modal-toggle">yopish</button>
        </div>
      )}
    </>
  );
}

export default NavBar;
