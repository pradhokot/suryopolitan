document.write(`
<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm d-block">
   <!-- gunakan class "container-fluid" untuk full width dan "container" untuk menyesuaikan dengan standar template -->
   <div class="container">

      <a href="index.html" class="navbar-brand">
         <!-- <img src="" width="200" height="auto" alt=""> -->
         <span style="font-size: calc(1.5rem + .5vw);"><strong>INDRA</strong>CODE</span>
      </a>

      <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol">
         <span class="navbar-toggler-icon"></span>
      </button>

      <!-- class "order" digunakan untuk merubah urutan struktur -->

      <div class="collapse navbar-collapse" id="navcol">
         <div class="pt-1 mb-2 order-lg-1 pt-lg-0 mb-lg-0 mr-lg-auto">
            <form class="input-group border rounded" action="">
               <input type="text" class="form-control border-secondary border-0 d-lg-none" placeholder="Search...">
               <div class="input-group-append">
                  <button class="btn"><i class="bi bi-search"></i></button>
               </div>
            </form>
         </div>

         <div class="d-flex flex-nowrap mb-3 order-lg-3 mb-lg-0" style="grid-gap: .5rem;">
            <a href="#" class="btn btn-block btn-success">LOGIN</a>
            <a href="#" class="btn btn-block btn-primary active mt-0">REGISTER</a>
         </div>

         <ul class="navbar-nav order-lg-2 mr-lg-3">

            <li class="nav-item dropdown">
               <a href="#" class="nav-link text-uppercase dropdown-toggle"
                  data-toggle="dropdown"><strong>courses</strong></a>
               <div class="dropdown-menu text-capitalize">
                  <div class="multi-dropdown">
                     <div class="dropdown-list">
                        <a class="dropdown-item" href="#">kategori</a>
                        <a class="dropdown-item" href="#">teknologi komputer</a>
                        <a class="dropdown-item" href="#">kelas terbaru</a>
                        <a class="dropdown-item" href="#">android</a>
                     </div>
                     <div class="dropdown-list">
                        <a class="dropdown-item" href="#">kategori</a>
                        <a class="dropdown-item" href="#">teknologi komputer</a>
                        <a class="dropdown-item" href="#">kelas terbaru</a>
                        <a class="dropdown-item" href="#">android</a>
                     </div>
                  </div>
               </div>
            </li>

            <li class="nav-item dropdown">
               <a href="#" class="nav-link text-uppercase dropdown-toggle"
                  data-toggle="dropdown"><strong>explore</strong></a>
               <div class="dropdown-menu text-capitalize">
                  <a class="dropdown-item media" href="#">
                     <i class="bi bi-apple mr-2"></i>
                     <div class="media-body">kategori</div>
                  </a>
                  <a class="dropdown-item media" href="#">
                     <i class="bi bi-bell-fill mr-2"></i>
                     <div class="media-body">teknologi komputer</div>
                  </a>
                  <a class="dropdown-item media" href="#">
                     <i class="bi bi-heart-fill mr-2"></i>
                     <div class="media-body">kelas terbaru</div>
                  </a>
                  <a class="dropdown-item media" href="#">
                     <i class="bi bi-heart-pulse-fill mr-2"></i>
                     <div class="media-body">android</div>
                  </a>
               </div>
            </li>

            <li class="nav-item dropdown">
               <a href="#" class="nav-link text-uppercase dropdown-toggle"
                  data-toggle="dropdown"><strong>courses</strong></a>
               <div class="dropdown-menu text-capitalize">
                  <div class="multi-dropdown">
                     <div class="dropdown-list">
                        <a class="dropdown-item media" href="#">
                           <i class="bi bi-apple mr-2"></i>
                           <div class="media-body">kategori</div>
                        </a>
                        <a class="dropdown-item media" href="#">
                           <i class="bi bi-bell-fill mr-2"></i>
                           <div class="media-body">teknologi komputer</div>
                        </a>
                        <a class="dropdown-item media" href="#">
                           <i class="bi bi-heart-fill mr-2"></i>
                           <div class="media-body">kelas terbaru</div>
                        </a>
                        <a class="dropdown-item media" href="#">
                           <i class="bi bi-heart-pulse-fill mr-2"></i>
                           <div class="media-body">android</div>
                        </a>
                     </div>
                     <div class="dropdown-list">
                        <a class="dropdown-item media" href="#">
                           <i class="bi bi-apple mr-2"></i>
                           <div class="media-body">kategori</div>
                        </a>
                        <a class="dropdown-item media" href="#">
                           <i class="bi bi-bell-fill mr-2"></i>
                           <div class="media-body">teknologi komputer</div>
                        </a>
                        <a class="dropdown-item media" href="#">
                           <i class="bi bi-heart-fill mr-2"></i>
                           <div class="media-body">kelas terbaru</div>
                        </a>
                        <a class="dropdown-item media" href="#">
                           <i class="bi bi-heart-pulse-fill mr-2"></i>
                           <div class="media-body">android</div>
                        </a>
                     </div>
                  </div>
               </div>
            </li>

            <li class="nav-item dropdown">
               <a href="#" class="nav-link text-uppercase dropdown-toggle"
                  data-toggle="dropdown"><strong>partnership</strong></a>
               <div class="dropdown-menu text-capitalize">
                  <a class="dropdown-item" href="#">kategori</a>
                  <a class="dropdown-item" href="#">teknologi komputer</a>
                  <a class="dropdown-item" href="#">kelas terbaru</a>
                  <a class="dropdown-item" href="#">android</a>
               </div>
            </li>

         </ul>
      </div>
   </div>
</nav>
`)