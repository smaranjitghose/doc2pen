//Navbar
  
  let header = $(`
  <nav>
  <div class="nav-wrapper container">
      <a href="#!" class="brand-logo"><img src=""></a>
      <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"><i
              class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
          <li><a class="white-text" href="home.html">Home</a></li>
          <li><a class="white-text" href="about.html">About</a></li>
          <li><a class="white-text" href="team.html">Team</a></li>
          <li><a class="white-text" href="contact.html">Contact</a></li>
          <li><a class="white-text" href="editor.html">Editor</a></li>
      </ul>
  </div>
  </nav>
  
  <!--Side Nav Bar -->
  <ul class="sidenav" id="mobile-demo">
  <li><a href="home.html">Home</a></li>
  <li><a href="about.html">About</a></li>
  <li><a href="team.html">Team</a></li>
  <li><a href="contact.html">Contact</a></li>
  <li><a href="editor.html">Editor</a></li>
  </ul>`);
  let bodyElement = $(`body`);
  bodyElement.prepend(header);


//common side navbar call

  $(document).ready(function () {
    $(".sidenav").sidenav();
  });
  
