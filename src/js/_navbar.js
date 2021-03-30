const navbar = `
<nav class="navbar navbar-expand-lg sticky-top navbar-custom">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Verba Maximus</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="https://www.facebook.com/verbamaximus" >
            <i class="fab fa-facebook-square"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.youtube.com/channel/UC3eomI73rnwHqKK5j7aR-qw" >
            <i class="fab fa-youtube"></i>
          </a>
        </li>
        <li>
          <a class="nav-link" href="https://twitter.com/VerbaMaximus" >
            <i class="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;

const navbarContainer = document.getElementById('navbar-container');

export const loadNavbar = () => {
	if (navbarContainer) {
		navbarContainer.insertAdjacentHTML('afterbegin', navbar);
	}
};
