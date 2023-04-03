document.write(`
<nav class="navbar navbar-expand-xl">
   <div class="container">
      <a class="navbar-brand" href="index.html">
         <img src="assets/img/logo.svg" alt="">
      </a>
      <button class="navbar-toggler collapsed" data-bs-toggle="collapse" data-bs-target="#navcol">
         <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navcol">
         <div class="order-xl-2 py-2 py-xl-0 me-xl-2">
            <div class="input-group bg-white border rounded overflow-hidden">
               <input type="search" class="form-control border-0" placeholder="Pencarian">
               <button class="btn border-0">
                  <i class="bi bi-search"></i>
               </button>
            </div>
         </div>
         <div class="order-xl-3 mb-3 mb-xl-0">
            <div class="row gx-2">
               <div class="col">
                  <a class="btn btn-outline-primary d-block" href="#">LOGIN</a>
               </div>
               <div class="col">
                  <a class="btn btn-primary d-block" href="#">REGISTER</a>
               </div>
            </div>
         </div>
         <ul class="navbar-nav text-uppercase fw-medium order-xl-1 me-xl-auto">
            <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">course</a>
               <div class="dropdown-menu text-capitalize fw-normal">
                  <div class="row d-grid gap-4 gap-xl-0 d-xl-flex flex-nowrap gx-xl-5">
                     <div class="col">
                        <h6 class="dropdown-title fw-bold text-nowrap mb-3">kategori</h6>
                        <a class="dropdown-item" href="#">web development</a>
                        <a class="dropdown-item" href="#">mobile development</a>
                        <a class="dropdown-item" href="#">studi kasus</a>
                        <a class="dropdown-item" href="#">fundamental</a>
                        <a class="dropdown-item" href="#">pemula</a>
                        <a class="dropdown-item" href="#">menengah</a>
                        <a class="dropdown-item" href="#">expert</a>
                        <a class="dropdown-item" href="#">framework</a>
                        <a class="dropdown-item" href="#">front end</a>
                        <a class="dropdown-item" href="#">back end</a>
                     </div>
                     <div class="col">
                        <h6 class="dropdown-title fw-bold text-nowrap mb-3">teknologi populer</h6>
                        <a class="dropdown-item" href="#">laravel</a>
                        <a class="dropdown-item" href="#">PHP</a>
                        <a class="dropdown-item" href="#">kotlin</a>
                        <a class="dropdown-item" href="#">android</a>
                        <a class="dropdown-item" href="#">javascript</a>
                        <a class="dropdown-item" href="#">wordpress</a>
                        <a class="dropdown-item" href="#">database</a>
                        <a class="dropdown-item" href="#">java</a>
                        <a class="dropdown-item" href="#">golang</a>
                     </div>
                     <div class="col">
                        <a class="dropdown-item d-flex align-items-center" href="#">
                           <div class="pe-2"><img src="assets/img/square.png" width="36" height="auto" alt=""></div>
                           <div>
                              <h6 class="fw-bold mb-0">kelas terbaru</h6>
                              kelas online terbaru
                           </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                           <div class="pe-2"><img src="assets/img/square.png" width="36" height="auto" alt=""></div>
                           <div>
                              <h6 class="fw-bold mb-0">kelas gratis</h6>
                              kelas online gratis
                           </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                           <div class="pe-2"><img src="assets/img/square.png" width="36" height="auto" alt=""></div>
                           <div>
                              <h6 class="fw-bold mb-0">flash sale</h6>
                              kelas online promo
                           </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                           <div class="pe-2"><img src="assets/img/square.png" width="36" height="auto" alt=""></div>
                           <div>
                              <h6 class="fw-bold mb-0">popular</h6>
                              kelas online popular
                           </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                           <div class="pe-2"><img src="assets/img/square.png" width="36" height="auto" alt=""></div>
                           <div>
                              <h6 class="fw-bold mb-0">mentor</h6>
                              dafatar mentor kelas
                           </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                           <div class="pe-2"><img src="assets/img/square.png" width="36" height="auto" alt=""></div>
                           <div>
                              <h6 class="fw-bold mb-0">roadmap</h6>
                              daftar roadmap belajar
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
            </li>
            <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">explore</a>
               <div class="dropdown-menu text-capitalize fw-normal">
                  <div class="row d-grid d-xl-flex flex-nowrap gx-xl-5">
                     <div class="col">
                        <a class="dropdown-item d-flex align-items-center" href="#">
                           <div class="pe-2"><img src="assets/img/square.png" width="36" height="auto" alt=""></div>
                           <div>
                              <h6 class="fw-bold mb-0">kelas terbaru</h6>
                              kelas online terbaru
                           </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                           <div class="pe-2"><img src="assets/img/square.png" width="36" height="auto" alt=""></div>
                           <div>
                              <h6 class="fw-bold mb-0">kelas gratis</h6>
                              kelas online gratis
                           </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                           <div class="pe-2"><img src="assets/img/square.png" width="36" height="auto" alt=""></div>
                           <div>
                              <h6 class="fw-bold mb-0">flash sale</h6>
                              kelas online promo
                           </div>
                        </a>
                     </div>
                     <div class="col">
                        <a class="dropdown-item d-flex align-items-center" href="#">
                           <div class="pe-2"><img src="assets/img/square.png" width="36" height="auto" alt=""></div>
                           <div>
                              <h6 class="fw-bold mb-0">kelas terbaru</h6>
                              kelas online terbaru
                           </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                           <div class="pe-2"><img src="assets/img/square.png" width="36" height="auto" alt=""></div>
                           <div>
                              <h6 class="fw-bold mb-0">kelas gratis</h6>
                              kelas online gratis
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
            </li>
            <li class="nav-item dropdown d-none">
               <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">explore</a>
               <div class="dropdown-menu text-capitalize fw-normal">
                  <div class="row row-cols-1 row-cols-xl-auto flex-xl-nowrap gx-xl-5">
                     <div class="col">
                        <a class="dropdown-item d-flex align-items-center" href="#">
                           <div class="pe-2"><img src="assets/img/square.png" width="36" height="auto" alt=""></div>
                           <div>
                              <h6 class="fw-bold mb-0">karir</h6>
                              temukan karirmu
                           </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                           <div class="pe-2"><img src="assets/img/square.png" width="36" height="auto" alt=""></div>
                           <div>
                              <h6 class="fw-bold mb-0">webinar</h6>
                              ikuti berbagai webinar
                           </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                           <div class="pe-2"><img src="assets/img/square.png" width="36" height="auto" alt=""></div>
                           <div>
                              <h6 class="fw-bold mb-0">leaderboard</h6>
                              ranking siswa codepolitan
                           </div>
                        </a>
                     </div>
                     <div class="col">
                        <a class="dropdown-item d-flex align-items-center" href="#">
                           <div class="pe-2"><img src="assets/img/square.png" width="36" height="auto" alt=""></div>
                           <div>
                              <h6 class="fw-bold mb-0">tutorial & artikel</h6>
                              temukan tutorial & artikel menarik
                           </div>
                        </a>
                        <a class="dropdown-item d-flex align-items-center" href="#">
                           <div class="pe-2"><img src="assets/img/square.png" width="36" height="auto" alt=""></div>
                           <div>
                              <h6 class="fw-bold mb-0">diskusi</h6>
                              diskusi antar programmer
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
            </li>
            <li class="nav-item"><a class="nav-link" href="#">partnership</a></li>
            <li class="nav-item"><a class="nav-link" href="#">contact</a></li>
         </ul>
      </div>
   </div>
</nav>
<style>
   #topbar {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 1020;
      background-color: #f8f9fa;
      border-bottom: solid 1px #dee2e6;
   }

   .navbar-brand img {
      width: 210px;
      height: auto;
   }

   @media (min-width: 1200px) {
      .navbar .input-group {
         max-width: 210px;
      }
   }

   @media (max-width: 1199.98px) {
      .dropdown-menu {
         max-height: 50vh;
         overflow-y: auto;
      }
   }

   .navbar .dropdown-menu {
      padding: 1.5rem;
   }

   .navbar .dropdown-item {
      padding: 0;
      background-color: transparent;
      margin-bottom: .5rem;
   }

   .navbar .dropdown-item:last-of-type {
      margin-bottom: 0;
   }

   .navbar .dropdown-item.d-flex {
      margin-bottom: .875rem;
   }

   @media (min-width: 1200px) {
      .navbar .dropdown-item.d-flex:last-of-type {
         margin-bottom: 0;
      }
   }

   .navbar .navbar-nav a,
   .navbar .dropdown .dropdown-title {
      color: rgba(0, 0, 0, .6);
   }

   .navbar .navbar-nav a:hover,
   .navbar .navbar-nav a.active,
   .navbar .nav-item:hover>a,
   .navbar .dropdown .col:hover>.dropdown-title {
      color: rgba(0, 0, 0, 1);
   }

   @media (min-width: 1200px) {
      .navbar .dropdown:hover>.dropdown-menu {
         display: block;
      }
   }

   .navbar .dropdown-item img {
      opacity: .6;
   }

   .navbar .dropdown-item:hover img,
   .navbar .dropdown-item.active img {
      opacity: 1;
   }
</style>
`)