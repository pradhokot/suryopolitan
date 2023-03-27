document.write(`
<nav id="navtop" class="navbar navbar-expand-lg">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="index.html">
            <img src="assets/img/logo.svg" height="auto" style="width: calc(175px + 4vw); max-width: 260px;" alt="">
        </a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navcol"
            aria-controls="navcol" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navcol">
            <form class="d-flex border rounded my-2 my-lg-0 ms-lg-auto">
                <input class="form-control bg-transparent border-0 rounded-0" type="text" placeholder="Search">
                <button class="btn" type="submit"><i class="bi bi-search"></i></button>
            </form>
            <ul class="navbar-nav my-3 text-uppercase fw-medium mx-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">courses</a>
                    <div class="dropdown-menu text-capitalize fw-normal py-4 px-2" id="dropdown-courses">
                        <div class="container-fluid">
                            <div class="row row-cols-1 row-cols-lg-3 gap-4 gap-lg-0 g-lg-3">
                                <div class="col">
                                    <h6 class="text-uppercase fw-medium mb-2 mb-lg-3">kategori 1</h6>
                                    <a class="dropdown-item px-0 d-flex flex-nowrap align-items-start" href="#">
                                        <img src="assets/img/square.png" class="img-fluid me-2" width="24" alt="">
                                        <span>menu dropdown sangat panjang</span>
                                    </a>
                                    <a class="dropdown-item px-0 d-flex flex-nowrap align-items-start" href="#">
                                        <img src="assets/img/square.png" class="img-fluid me-2" width="24" alt="">
                                        <span>menu dropdown</span>
                                    </a>
                                    <a class="dropdown-item px-0 d-flex flex-nowrap align-items-start" href="#">
                                        <img src="assets/img/square.png" class="img-fluid me-2" width="24" alt="">
                                        <span>menu dropdown</span>
                                    </a>
                                    <a class="dropdown-item px-0 d-flex flex-nowrap align-items-start" href="#">
                                        <img src="assets/img/square.png" class="img-fluid me-2" width="24" alt="">
                                        <span>menu dropdown</span>
                                    </a>
                                    <a class="dropdown-item px-0 d-flex flex-nowrap align-items-start" href="#">
                                        <img src="assets/img/square.png" class="img-fluid me-2" width="24" alt="">
                                        <span>menu dropdown</span>
                                    </a>
                                </div>
                                <div class="col">
                                    <h6 class="text-uppercase fw-medium mb-2 mb-lg-3">kategori 2</h6>
                                    <a class="dropdown-item px-0 d-flex flex-nowrap align-items-start" href="#">
                                        <i class="bi bi-apple me-2"></i> menu dropdown sangat panjang
                                    </a>
                                    <a class="dropdown-item px-0 d-flex flex-nowrap align-items-start" href="#">
                                        <i class="bi bi-apple me-2"></i> menu dropdown
                                    </a>
                                    <a class="dropdown-item px-0 d-flex flex-nowrap align-items-start" href="#">
                                        <i class="bi bi-apple me-2"></i> menu dropdown
                                    </a>
                                    <a class="dropdown-item px-0 d-flex flex-nowrap align-items-start" href="#">
                                        <i class="bi bi-apple me-2"></i> menu dropdown
                                    </a>
                                    <a class="dropdown-item px-0 d-flex flex-nowrap align-items-start" href="#">
                                        <i class="bi bi-apple me-2"></i> menu dropdown
                                    </a>
                                    <a class="dropdown-item px-0 d-flex flex-nowrap align-items-start" href="#">
                                        <i class="bi bi-apple me-2"></i> menu dropdown
                                    </a>
                                    <a class="dropdown-item px-0 d-flex flex-nowrap align-items-start" href="#">
                                        <i class="bi bi-apple me-2"></i> menu dropdown
                                    </a>
                                    <a class="dropdown-item px-0 d-flex flex-nowrap align-items-start" href="#">
                                        <i class="bi bi-apple me-2"></i> menu dropdown
                                    </a>
                                </div>
                                <div class="col">
                                    <h6 class="text-uppercase fw-medium mb-2 mb-lg-3">kategori 3</h6>
                                    <a class="dropdown-item px-0" href="#">menu dropdown</a>
                                    <a class="dropdown-item px-0" href="#">menu dropdown</a>
                                    <a class="dropdown-item px-0" href="#">menu dropdown</a>
                                    <a class="dropdown-item px-0" href="#">menu dropdown</a>
                                    <a class="dropdown-item px-0" href="#">menu dropdown</a>
                                    <a class="dropdown-item px-0" href="#">menu dropdown</a>
                                    <a class="dropdown-item px-0" href="#">menu dropdown</a>
                                    <a class="dropdown-item px-0" href="#">menu dropdown</a>
                                    <a class="dropdown-item px-0" href="#">menu dropdown</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">explore</a>
                    <div class="dropdown-menu text-capitalize fw-normal py-4 px-2">
                        <div class="container-fluid">
                            <a class="dropdown-item px-0" href="#">Action 1</a>
                            <a class="dropdown-item px-0" href="#">Action 2</a>
                            <a class="dropdown-item px-0" href="#">Action 3</a>
                            <a class="dropdown-item px-0" href="#">Action 4</a>
                            <a class="dropdown-item px-0" href="#">Action 5</a>
                            <a class="dropdown-item px-0" href="#">Action 6</a>
                        </div>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">program</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">partnership</a>
                </li>
            </ul>
            <div class="d-grid gap-2 d-lg-flex gap-lg-0">
                <a href="#" class="btn btn-secondary w-100 me-lg-2">LOGIN</a>
                <a href="#" class="btn btn-primary w-100">REGISTER</a>
            </div>
        </div>
    </div>
</nav>
<style>
    @media (max-width: 991.98px) {
        #navtop .navbar-nav .dropdown-menu {
            max-height: 50vh;
            overflow-y: auto;
        }
    }

    @media (min-width: 992px) {
        #navtop .navbar-nav .dropdown-menu {
            min-width: 210px;
        }

        #navtop .navbar-nav .dropdown:hover .dropdown-menu {
            display: block;
        }

        #dropdown-courses {
            width: 640px;
        }
    }

    #navtop .navbar-nav .dropdown-item {
        white-space: unset;
    }

    .navbar,
    #navtop .nav-link,
    #navtop .dropdown>.nav-link,
    #navtop .dropdown-item,
    #navtop h6 {
        background-color: transparent;
        color: rgba(0, 0, 0, .6);
    }

    #navtop .nav-link:hover,
    #navtop .dropdown:hover>.nav-link,
    #navtop .dropdown-item:hover,
    #navtop .col:hover>h6,
    #navtop .nav-link.active,
    #navtop .dropdown.active>.nav-link,
    #navtop .dropdown-item.active {
        color: rgba(0, 0, 0, 1);
    }

    #navtop .dropdown-item img {
        opacity: .6;
    }

    #navtop .dropdown-item:hover img {
        opacity: 1;
    }
</style>
`)