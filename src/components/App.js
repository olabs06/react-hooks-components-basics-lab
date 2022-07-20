import React from "react";


function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">Home</div>
  );
}

{/* write an <About> component here */}
function About () {
  return (
    <div id = "about">About</div>
  );
}


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      {/* add the <Home> component here */}
      {/* add your <About> component here */}
    </div>
  );
}

export default App;
