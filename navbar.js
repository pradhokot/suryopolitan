document.write(`
<nav class='navbar navbar-expand-xl navbar-light py-xl-3'>
   <div class="container">
      <a href="index.html" class="navbar-brand">
         <img src="assets/img/logo.svg" class="img-auto" alt="">
      </a>

      <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol">
         <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="navcol">
         <div class="input-group border rounded mt-2 order-xl-2 mt-xl-0 mr-xl-2">
            <input type="text" class="form-control border-0 bg-transparent" placeholder="Cari Disini..">
            <div class="input-group-append">
               <button class="btn"><i class="bi bi-search"></i></button>
            </div>
         </div>

         <ul class="navbar-nav text-uppercase font-weight-bold my-3 my-xl-0 mr-xl-4 order-xl-1 mr-xl-auto">
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

         <div class="d-xl-flex order-xl-3">
            <button class="btn btn-light btn-block mr-xl-2 font-weight-bold">LOGIN</button>
            <button class="btn btn-primary btn-block mt-xl-0 font-weight-bold">REGISTER</button>
         </div>
      </div>
   </div>
</nav>
<style>
   .navbar-brand img {
      width: calc(175px + 2.5vw);
   }

   @media (min-width: 1200px) {
      .navbar .input-group {
         max-width: 235px;
      }
   }

   @media (min-width: 1400px) {
      .navbar-expand-xl .navbar-nav .nav-link {
         padding: .5rem .875rem;
      }
   }
</style>
`)