<?php include 'inc/header.php'; ?>

<section class="hero">
    <div class="swiper-container hero__slider js-hero">
        <div class="swiper-wrapper">
            <div class="swiper-slide" style="background-image:url(images/img_hero_1.jpg)"></div>
            <div class="swiper-slide" style="background-image:url(images/img_hero_2.jpg)"></div>
        </div>

    </div>
    <div class="hero__holder">
      <div class="hero__holder__inner">
        <h1 class="hero__title">Mi Tienda Online</h1>
        <p class="hero__subtitle">La mayor variedad en productos de todo tipo</p>
        <a href="#" class="button button--small button--primary">Ver productos</a>
        <a href="#" class="button button--big button--primary">Ver productos</a>
      </div>
    </div>
    <div class="swiper-button-prev js-btn-hero-prev --desktop"></div>
    <div class="swiper-button-next js-btn-hero-next --desktop"></div> 
  </section>

  <section class="section">
    <div class="section__holder">
      <div class="swiper-container section__carrousel section__carrousel--w100 js-slider-hightlights">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="highlights-general">
                  <i class="highlights-general__icon ri-store-2-line"></i>
                  <p class="highlights-general__description">Comprando por caja tenés hasta un 30% de descuento en etiquetas seleccionadas</p>
                </div>
            </div>

            <div class="swiper-slide">
                <div class="highlights-general">
                  <i class="highlights-general__icon ri-takeaway-fill"></i>
                  <p class="highlights-general__description">Entregas a domicilio gratis y en el día para GBA y CABA</p>
                </div>
            </div>

            <div class="swiper-slide">
                <div class="highlights-general">
                  <i class="highlights-general__icon ri-cellphone-fill"></i>
                  <p class="highlights-general__description">De vinos, espumanes y destilados sin cargo. ¡Consultanos!</p>
                </div>
            </div>
          </div>
          <div class="swiper-pagination js-slider-hightlights-pagination --mobile"></div> 
        </div>
      </div>
    </div>    
  </section>

  <section class="section section--big section--featured">
    <div class="section__holder">
        <div class="section__inner section__inner--grid-2 --about-us">
          <div class="section__item">
              <h1 class="section__title --mb30">Mas de 17 años <strong>armando tu PC</strong></h1>
              <p class="section__text">
                  Full H4rd es una tienda con más 17 años dentro del rubro tecnológico en Argentina. Nos dedicamos a la venta de computadoras, notebooks, hardware y productos periféricos para consumidores particulares, empresas o revendedores.<br>
                  Marcas como Asus, SkullCandy, MSI, Gigabyte, Kingston, Intel, Nvidia, HP, Epson, Samsung y Western Digital nos han hecho sus representantes oficiales en el país.<br><br>
                  En Full H4rd encontrarás todo lo que compone la PC de tus sueños. Conocemos nuestros productos y por ello te asesoramos para que hagas una compra personalizada a la altura de tus necesidades.
              </p>
          </div>
          <img src="images/img_aboutus.jpg">
        </div>          
    </div>
  </section>


  <section class="section">
    <div class="section__holder">
        <div class="section__item__top">
          <h2 class="section__title --text-center">Nuestros <strong>productos</strong></h2>
        </div>

        <div class="tabs-primary"> 
            <fieldset class="tabs-primary__inner --margin-auto --mt40">
                <label class="tabs-primary__item">
                    <input type="radio" name="tab-products" value="" data-category="Todos" checked="checked">
                    <div class="tabs-primary__item__btn" data-category="Todos">Todos</div>
                </label>

                <label class="tabs-primary__item">
                    <input type="radio" name="tab-products" data-category="Procesadores" value="">
                    <div class="tabs-primary__item__btn" data-category="Procesadores">Procesadores</div>
                </label>

                <label class="tabs-primary__item">
                    <input type="radio" name="tab-products" data-category="Video" value="">
                    <div class="tabs-primary__item__btn" data-category="Video">Placas de video</div>
                </label>

                <label class="tabs-primary__item">
                    <input type="radio" name="tab-products" data-category="Perifericos" value="">
                    <div class="tabs-primary__item__btn" data-category="Perifericos">Perifericos</div>
                </label>
            </fieldset>

          <div class="tabs-primary__content --active">
            <div id="products-content" class="section__inner section__inner--grid-4 --cards-popular">

            </div>
            <div class="section__item --mt50 --center">
              <a href="#" class="button button--primary">Ver todos</a>
            </div> 
          </div>  
      </div>
    </div>
</section>

<hr class="section__separate">

  <section class="section section--slider-mobile">
    <div class="section__holder">
      <div class="section__item__top --mb20">
        <h2 class="section__title --text-center --desktop --mb20">Categorias&nbsp;<strong>destacadas</strong></h2>
        <h2 class="section__title section__title--small --text-center --mobile">Categorias&nbsp;<strong>destacadas</strong></h2>
      </div>

      <div class="highlights-categories">
          <a href="#" class="highlights-categories__item highlights-categories__item--big"> 
              <figure class="highlights-categories__item__figure" style="background-image:url(images/banner-categories-1.jpg);"></figure>
              <h2 class="highlights-categories__item__title">Placas de video<i class="ri-arrow-right-s-line"></i></h2>
          </a>

          <a href="#" class="highlights-categories__item"> 
              <figure class="highlights-categories__item__figure" style="background-image:url(images/banner-categories-2.jpg);"></figure>
              <h2 class="highlights-categories__item__title">Motherboard<i class="ri-arrow-right-s-line"></i></h2>
          </a>

          <a href="#" class="highlights-categories__item"> 
              <figure class="highlights-categories__item__figure" style="background-image:url(images/banner-categories-3.jpg);"></figure>
              <h2 class="highlights-categories__item__title">Perifericos<i class="ri-arrow-right-s-line"></i></h2>
          </a>
      </div>
    </div>    
  </section>

  <section class="section section--featured">
    <div class="section__holder">
        <div class="section__item__top --mb40">
          <h2 class="section__title --text-center --mb6">Contactate <strong>con nosotros</strong></h2>
          <p class="section__text --text-center">Para contactarse con nosotros, completa el <strong>siguiente formulario de contacto</strong></p>
        </div>

        <div class="section__inner section__inner--width50 contact">

          <form class="contact__form">
                <div class="form-item">
                    <div class="form-item__input">
                        <input type="text" id="cod1" class="input input--secondary" required="">
                        <label class="form-item__label">Nombre</label>
                    </div>
                </div>

                <div class="form-item">
                    <div class="form-item__input">
                        <input type="text" id="cod1" class="input input--secondary" required="">
                        <label class="form-item__label">Apellido</label>
                    </div>
                </div>

                <div class="form-item --full">
                    <div class="form-item__input">
                        <input type="text" id="cod1" class="input input--error input--secondary" required="">
                        <label class="form-item__label">Email</label>
                    </div>
                    <span class="input-alert"><i class="ri-error-warning-line"></i>El email es invalido</span>
                </div>

                <div class="form-item --full">
                    <div class="form-item__input">
                        <textarea id="" class="input input--secondary input--textarea" rows="4" cols="50" required></textarea>
                        <label class="form-item__label form-item__label--textarea">Mensaje</label>
                    </div>
                </div>

                <div class="form-item --full">
                    <div class="info-text">
                        <i class="ri-error-warning-line --icon"></i><span>El vendedor te respondera a traves del email que ingreses acá</span>
                    </div> 
                </div>

                <div class="form-item --full --center --mt25">
                    <button class="button button--primary">Enviar mensaje</button>
                </div>
            </form>
          </div>
    </div>    
  </section>


  <section class="section">
    <div class="section__holder">
      <div class="swiper-container section__carrousel section__carrousel--w100 js-slider-hightlights">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="highlights-general">
                  <i class="highlights-general__icon ri-store-2-line"></i>
                  <p class="highlights-general__description">Comprando por caja tenés hasta un 30% de descuento en etiquetas seleccionadas</p>
                </div>
            </div>

            <div class="swiper-slide">
                <div class="highlights-general">
                  <i class="highlights-general__icon ri-takeaway-fill"></i>
                  <p class="highlights-general__description">Entregas a domicilio gratis y en el día para GBA y CABA</p>
                </div>
            </div>

            <div class="swiper-slide">
                <div class="highlights-general">
                  <i class="highlights-general__icon ri-cellphone-fill"></i>
                  <p class="highlights-general__description">De vinos, espumanes y destilados sin cargo. ¡Consultanos!</p>
                </div>
            </div>
          </div>
          <div class="swiper-pagination js-slider-hightlights-pagination --mobile"></div> 
        </div>
      </div>
    </div>    
  </section>

  <div class="info-text info-text--fixed info-text--sucess">
    <i class="ri-check-double-line --icon"></i><span>Tu mensaje se ha enviado con exito y sera respondido a la brevedad.</span>
  </div> 

<?php include 'inc/footer.php'; ?>