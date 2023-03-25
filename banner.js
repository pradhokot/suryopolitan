document.write(`
<div id="home-banner" class="carousel slide text-bg-dark carousel-fullscreen" data-bs-ride="carousel">
    <ol class="carousel-indicators">
        <li data-bs-target="#home-banner" data-bs-slide-to="0" class="active" aria-current="true"
            aria-label="First slide"></li>
        <li data-bs-target="#home-banner" data-bs-slide-to="1" aria-label="Second slide"></li>
        <li data-bs-target="#home-banner" data-bs-slide-to="2" aria-label="Third slide"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <div class="carousel-caption h-100">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-lg-6">
                            <h1 class="display-5">Lorem Ipsum Sit Amet 01.</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <a href="#" class="btn btn-primary mt-4">
                                READ MORE <i class="bi bi-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="carousel-caption h-100">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-lg-6">
                            <h1 class="display-5">Lorem Ipsum Sit Amet 02.</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <a href="#" class="btn btn-primary mt-4">
                                READ MORE <i class="bi bi-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="carousel-caption h-100">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <div class="col-lg-6">
                            <h1 class="display-5">Lorem Ipsum Sit Amet 03.</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                            <a href="#" class="btn btn-primary mt-4">
                                READ MORE <i class="bi bi-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button class="carousel-control carousel-control-prev display-3" type="button" data-bs-target="#home-banner"
        data-bs-slide="prev">
        <span class="bi bi-chevron-left" aria-hidden="true"></span>
    </button>
    <button class="carousel-control carousel-control-next display-3" type="button" data-bs-target="#home-banner"
        data-bs-slide="next">
        <span class="bi bi-chevron-right" aria-hidden="true"></span>
    </button>
</div>
<style>
    #home-banner .carousel-item {
        height: 75vh;
    }

    #home-banner .carousel-caption {
        position: unset;
        margin-left: 15%;
        margin-right: 15%;
        text-align: left;
        padding: 0;
    }

    @media (min-width: 1200px) {
        #home-banner .carousel-caption {
            margin-left: 10%;
            margin-right: 10%;
        }
    }

    @media (min-width: 1200px) {
        #home-banner .carousel-control {
            width: 10%;
            width: 10%;
        }

    }

    @media (max-width: 1599.98px) {

        #home-banner .carousel-caption .container,
        #home-banner .carousel-caption .container .row>div {
            padding-left: 0;
            padding-right: 0;
        }

        #home-banner .carousel-caption .container .row {
            margin-left: 0;
            margin-right: 0;
        }
    }
</style>
`)