document.write(`
<!-- hapus class "carousel-fade" agar animasi slider fade berubah ke animasi slide -->
<!-- add class "carousel-fullscreen" on carousel class to make carousel item full screen (image background add with "backgorund-image" way) -->
<div id="homeBanner" class="carousel slide carousel-fade carousel-banner" data-ride="carousel" data-interval="false"
   data-pause="false">
   <ol class="carousel-indicators">
      <li data-target="#homeBanner" data-slide-to="0" class="active"></li>
      <li data-target="#homeBanner" data-slide-to="1"></li>
      <li data-target="#homeBanner" data-slide-to="2"></li>
   </ol>
   <div class="carousel-inner">

      <!-- add class "carousel-caption-middle" to change position caption on middle screen area -->

      <!-- slider item -->
      <div class="carousel-item active">
         <img src="assets/img/portrait.png" class="d-block d-lg-none w-100 img-mobile" alt="...">
         <img src="assets/img/lanscape.png" class="d-none d-lg-block w-100 img-desktop" alt="...">
         <div class="carousel-caption carousel-caption-middle text-lg-left">
            <h1 class="caption-title">Home Banner 1</h1>
            <p class="caption-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a href="#" class="btn btn-primary">READ MORE <i class="bi bi-chevron-right"></i></a>
         </div>
      </div>

      <!-- slider item -->
      <div class="carousel-item">
         <img src="assets/img/portrait.png" class="d-block d-lg-none w-100 img-mobile" alt="...">
         <img src="assets/img/lanscape.png" class="d-none d-lg-block w-100 img-desktop" alt="...">
         <div class="carousel-caption carousel-caption-middle text-lg-left">
            <h1 class="caption-title">Home Banner 2</h1>
            <p class="caption-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a href="#" class="btn btn-primary">READ MORE <i class="bi bi-chevron-right"></i></a>
         </div>
      </div>

      <!-- slider item -->
      <div class="carousel-item">
         <img src="assets/img/portrait.png" class="d-block d-lg-none w-100 img-mobile" alt="...">
         <img src="assets/img/lanscape.png" class="d-none d-lg-block w-100 img-desktop" alt="...">
         <div class="carousel-caption carousel-caption-middle text-lg-left">
            <h1 class="caption-title">Home Banner 3</h1>
            <p class="caption-text">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a href="#" class="btn btn-primary">READ MORE <i class="bi bi-chevron-right"></i></a>
         </div>
      </div>

   </div>

   <button class="carousel-control carousel-control-prev" type="button" data-target="#homeBanner" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
   </button>
   <button class="carousel-control carousel-control-next" type="button" data-target="#homeBanner" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
   </button>
</div>
`)