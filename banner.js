document.write(`
<div id="home-banner" class="carousel slide text-bg-dark carousel-banner carousel-fullscreen" data-bs-ride="carousel">
   <div class="carousel-indicators">
      <button type="button" data-bs-target="#home-banner" data-bs-slide-to="0" class="active" aria-current="true"
         aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#home-banner" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#home-banner" data-bs-slide-to="2" aria-label="Slide 3"></button>
   </div>
   <div class="carousel-inner">
      <div class="carousel-item active" style="background-image: url(assets/img/banner/banner1.jpg);">
         <div class="carousel-caption h-100 text-start">
            <div class="container-xxl h-100">
               <div class="row h-100 align-items-center">
                  <div class="col-lg-7">
                     <h1 class="carousel-title fw-bold text-capitalize">
                        belajar framework laravel dasar 1.0
                     </h1>
                     <p class="lead">
                        Belajar membuat website modern dengan menggunakan Framework Laravel
                     </p>
                     <a class="btn btn-primary" href="#">
                        Detail Kelas <i class="bi bi-chevron-right"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="carousel-item" style="background-image: url(assets/img/banner/banner2.jpg);">
         <div class="carousel-caption h-100 text-start">
            <div class="container-xxl h-100">
               <div class="row h-100 align-items-center">
                  <div class="col-lg-7">
                     <h1 class="carousel-title fw-bold text-capitalize">
                        belajar framework laravel dasar 2.0
                     </h1>
                     <p class="lead">
                        Belajar membuat website modern dengan menggunakan Framework Laravel
                     </p>
                     <a class="btn btn-primary" href="#">
                        Detail Kelas <i class="bi bi-chevron-right"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="carousel-item" style="background-image: url(assets/img/banner/banner3.jpg);">
         <div class="carousel-caption h-100 text-start">
            <div class="container-xxl h-100">
               <div class="row h-100 align-items-center">
                  <div class="col-lg-7">
                     <h1 class="carousel-title fw-bold text-capitalize">
                        belajar framework laravel dasar 3.0
                     </h1>
                     <p class="lead">
                        Belajar membuat website modern dengan menggunakan Framework Laravel
                     </p>
                     <a class="btn btn-primary" href="#">
                        Detail Kelas <i class="bi bi-chevron-right"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <button class="carousel-control-prev display-4" type="button" data-bs-target="#home-banner" data-bs-slide="prev">
      <span class="bi bi-chevron-left" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
   </button>
   <button class="carousel-control-next display-4" type="button" data-bs-target="#home-banner" data-bs-slide="next">
      <span class="bi bi-chevron-right" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
   </button>
</div>
<style>
   .carousel-banner .carousel-item {
      height: 60vh;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
   }

   .carousel-banner .carousel-item::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, .25);
   }

   .carousel-banner .carousel-caption {
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0 15%;
   }

   @media (max-width: 1599.98px) {

      .carousel-banner .carousel-caption>div,
      .carousel-banner .carousel-caption>div>div,
      .carousel-banner .carousel-caption>div>div>div {
         padding: 0;
         margin: 0;
      }
   }
</style>
`)