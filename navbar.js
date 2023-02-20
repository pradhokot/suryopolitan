document.write(`
<nav class='navbar navbar-expand-xl navbar-light'>
   <div class="container">
      <a href="index.html" class="navbar-brand">
         <img src="assets/img/logo.svg" width="210" height="auto" alt="">
      </a>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol">
         <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navcol">
         <div class="input-group border rounded">
            <div class="input-group-prepend">
               <button class="btn"><i class="bi bi-search"></i></button>
            </div>
            <input type="text" class="form-control border-0 bg-transparent" placeholder="Cari Disini..">
         </div>
         <ul class="navbar-nav text-uppercase font-weight-bold my-3 my-xl-0 mr-xl-3">
            <li class="nav-item dropdown">
               <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">courses</a>
               <div class="dropdown-menu text-capitalize">
                  <a href="#" class="dropdown-item">Lorem Ipsum</a>
                  <a href="#" class="dropdown-item">Lorem Ipsum</a>
                  <a href="#" class="dropdown-item">Lorem Ipsum</a>
                  <a href="#" class="dropdown-item">Lorem Ipsum</a>
                  <a href="#" class="dropdown-item">Lorem Ipsum</a>
               </div>
            </li>
            <li class="nav-item dropdown">
               <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">explore</a>
               <div class="dropdown-menu text-capitalize">
                  <a href="#" class="dropdown-item">Lorem Ipsum</a>
                  <a href="#" class="dropdown-item">Lorem Ipsum</a>
                  <a href="#" class="dropdown-item">Lorem Ipsum</a>
                  <a href="#" class="dropdown-item">Lorem Ipsum</a>
                  <a href="#" class="dropdown-item">Lorem Ipsum</a>
               </div>
            </li>
            <li class="nav-item"><a href="#" class="nav-link">program</a></li>
            <li class="nav-item"><a href="#" class="nav-link">partnership</a></li>
         </ul>
         <div class="d-xl-flex">
            <button class="btn btn-secondary btn-block mr-xl-2">LOGIN</button>
            <button class="btn btn-primary btn-block mt-xl-0">REGISTER</button>
         </div>
      </div>
   </div>
</nav>
`)