<!DOCTYPE html>
<html lang="en">
<?php include 'header-scripts.php'; ?>

<body class="theme">

  <!-- Header -->
  <?php if (stripos($_SERVER['REQUEST_URI'], '')) { ?>
    <div class="top-banner"><p class="top-banner__text">OFERTA: Entregas a domicilio sin cargo hasta 10km de distancia.</p></div>
  <?php } ?>

  <header class="header">
    <div class="header__holder">

        <div class="header__inner">
          <div class="header__inner__left">
              <nav class="navbar-icon">
                <ul class="navbar-icon__list">
                  <li class="navbar-icon__item"><button id="btn-menu-mobile" class="navbar-icon__link"><i class="ri-menu-2-line"></i></button></li>
                </ul>
              </nav>

            <div class="logo">
              <a href="index.php"><img src="images/logo-tienda.png"></a>
            </div>
          </div>

          <div class="header__inner__center">
              <nav class="navbar-primary">
                <ul class="navbar-primary__list">
                  <li class="navbar-primary__item --dropdown"><button id="btn-menu-desktop" class="navbar-primary__link navbar-primary__link--bold">Categorias<i class="ri-arrow-down-s-line --arrow"></i></button>
                    <div id="menu-desktop" class="menu-dropdown">
                      <div class="menu-dropdown__nav">
                        <ul>
                          <li><a href="#" class="navbar-primary__sublink">Placas de video</a></li>
                          <li><a href="#" class="navbar-primary__sublink">Motherboards</a></li>
                          <li><a href="#" class="navbar-primary__sublink">Perifericos</a></li>
                          <li><a href="#" class="navbar-primary__sublink">Fuentes de alimentación</a></li>
                          <li><a href="#" class="navbar-primary__sublink">Monitores</a></li>
                        </ul>
                      </div>
                    </div>
                
                  </li>
                  <li class="navbar-primary__item"><a href="#" class="navbar-primary__link">Nosotros</a></li>
                  <li class="navbar-primary__item"><a href="#" class="navbar-primary__link">Contacto</a></li>
                  <li class="navbar-primary__item"><a href="#" class="navbar-primary__link navbar-primary__link--featured">Ofertas</a></li>
                </ul>
              </nav> 
          </div>

          <div class="header__inner__right">
              <div class="social">
                <a class="social__item social__item--white" href=""><i class="ri-facebook-fill"></i></a>
                <a class="social__item social__item--white" href=""><i class="ri-twitter-fill"></i></a>
                <a class="social__item social__item--white" href=""><i class="ri-instagram-line"></i></a>
                <a class="social__item social__item--white" href=""><i class="ri-youtube-fill"></i></a>
              </div>

              <nav class="navbar-icon">
                <ul class="navbar-icon__list">
                  <li class="navbar-icon__item"><a href="login.php" class="navbar-icon__link"><i class="ri-user-line"></i></a></li>
                  <li class="navbar-icon__item --dropdown"><button id="btn-navmenu-search" class="navbar-icon__link"><i class="ri-search-line"></i></button></li>
                  <li class="navbar-icon__item"><button id="btn-navmenu-cart" class="navbar-icon__link"><i class="ri-shopping-cart-2-line"></i><span class="navbar-icon__link__count">2</span></button></li>
                </ul>
              </nav>
          </div>

          <div class="menu-search">
            <div class="menu-search__holder">
              <div class="form-item form-item--icon">
                <button><i class="ri-search-line"></i></button>
                <input type="text" autocomplete="off" id="nombre" class="input input--big" placeholder="¿Qué estás buscando?" aria-label="¿Qué estás buscando?" required="">
              </div>
            </div>
          </div>

            <div id="menu-cart" class="menu-dropdown menu-dropdown--cart">
              <div class="menu-dropdown__nav">
                <div class="menu-dropdown__top">
                  <p class="section__title section__title--small"><button id="btn-close-menu-cart" class="button button--icon-close"><i class="ri-close-line"></i></button>Tu carrito</p>
                </div>
                <div class="menu-dropdown__nav__list">
                  

                </div>
                <div class="menu-dropdown__nav__item --total">
                  <p class="checkout__summary__title --big">Total <span>(2 items)</span></p>
                  <strong class="checkout__summary__price --big">$200.000</strong>
                </div>
                  
                <div class="menu-dropdown__bottom">
                  <button class="button button--secondary">Seguir comprando</button>
                  <button class="button button--primary">Finalizar compra</button>
                </div>
              </div>           
            </div>
            <div class="menu-dropdown__overlay"></div>

        </div>
    </div>
    
  </header>
  <main>