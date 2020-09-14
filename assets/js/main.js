//Navbar
  
  let header = $(`
  <nav>
  <div class="nav-wrapper">
      <a href="#!" class="brand-logo"><img src="./assets/images/logo.png"></a>
      <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"><i
              class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
          <li><a class="white-text" href="index.html">Home</a></li>
          <li><a class="white-text" href="#">About</a></li>
          <li><a class="white-text" href="#">Team</a></li>
          <li><a class="white-text" href="#">Contact</a></li>
          <li><a class="white-text" href="#">Editor</a></li>
      </ul>
  </div>
  </nav>
  
  <!--Side Nav Bar -->
  <ul class="sidenav" id="mobile-demo">
  <li><a href="index.html">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Team</a></li>
  <li><a href="#">Contact</a></li>
  <li><a href="#">Editor</a></li>
  </ul>`);
  let bodyElement = $(`body`);
  bodyElement.prepend(header);


//common side navbar call

  $(document).ready(function () {
    $(".sidenav").sidenav();
  });
  
//water wave Footer

let footer = $(`<!--Footer-->
<footer>
<svg viewBox="0 0 120 28">
 <defs> 
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9" result="goo" />
      <xfeBlend in="SourceGraphic" in2="goo" />
    </filter>
     <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
  </defs> 

   <use id="wave3" class="wave" xlink:href="#wave" x="0" y="-2" ></use> 
   <use id="wave2" class="wave" xlink:href="#wave" x="0" y="0" ></use>
 
 
  <g class="gooeff" filter="url(#goo)">
  <circle class="drop drop1" cx="20" cy="2" r="8.8"  />
  <circle class="drop drop2" cx="25" cy="2.5" r="7.5"  />
  <circle class="drop drop3" cx="16" cy="2.8" r="9.2"  />
  <circle class="drop drop4" cx="18" cy="2" r="8.8"  />
  <circle class="drop drop5" cx="22" cy="2.5" r="7.5"  />
  <circle class="drop drop6" cx="26" cy="2.8" r="9.2"  />
  <circle class="drop drop1" cx="5" cy="4.4" r="8.8"  />
  <circle class="drop drop2" cx="5" cy="4.1" r="7.5"  />
  <circle class="drop drop3" cx="8" cy="3.8" r="9.2"  />
  <circle class="drop drop4" cx="3" cy="4.4" r="8.8"  />
  <circle class="drop drop5" cx="7" cy="4.1" r="7.5"  />
  <circle class="drop drop6" cx="10" cy="4.3" r="9.2"  />
  
  <circle class="drop drop1" cx="1.2" cy="5.4" r="8.8"  />
  <circle class="drop drop2" cx="5.2" cy="5.1" r="7.5"  />
  <circle class="drop drop3" cx="10.2" cy="5.3" r="9.2"  />
    <circle class="drop drop4" cx="3.2" cy="5.4" r="8.8"  />
  <circle class="drop drop5" cx="14.2" cy="5.1" r="7.5"  />
  <circle class="drop drop6" cx="17.2" cy="4.8" r="9.2"  />
  <use id="wave1" class="wave" xlink:href="#wave" x="0" y="1" />
 </g>  
</svg>

  <div>Made with <a class="btn-floating pulse red"><i class="material-icons">favorite</i></a> in India for the students of the world.</div>
</footer>`);

bodyElement.prepend(footer);