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
  
