import './App.css';
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const { loginWithRedirect, isAuthenticated, logout , user  } = useAuth0();

  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
      <li>
        {
      isAuthenticated && (
      <div>
        <p  > "Welcome   : " {user.name}</p>
      </div>
      )
        }
      </li>
    </ul>

    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      {
         isAuthenticated ? 
         ( <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out </button>  )
        :
        ( <button class="btn btn-outline-success my-2 my-sm-0" type="submit"  onClick={() => loginWithRedirect({ redirectUri: window.location.origin })}>Login</button> )
         
      }
    {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit"  onClick={() => loginWithRedirect()}>Login</button>
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out </button> */}
    </form>
  </div>
</nav>
    </>
  );
}

export default App;



