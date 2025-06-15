function Head() {
    return (
        <header className="header">
        <a href="#home" className="logo">M<span>BJ</span></a>
        
        <i className='bx bx-menu' id="menu-icon"></i>
        <style>
            {`
                .navbar {
                    height: 40px; /* Adjust the height as needed */
                    display: flex;
                    align-items: center;
                }
            `}
        </style>
        <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#info">Info</a>
            <a href="#gallery">Gallery</a>
            <a href="#proj">Projects</a>
        </nav>
    </header> 
    );
  }
  
  export default Head;
  