<?php include 'inc/header.php'; ?>

<section class="header-page header-page--checkout --success">
    <div class="header-page__holder">
        <div class="header-page__item">
            <i class="header-page__icon --mb15 ri-login-box-line"></i>
            <h2 class="section__title section__title--ultra-big --c-grey-0 --mb9 --desktop">Iniciar sesión</h2>
            <h2 class="section__title section__title--big --c-grey-0 --mb9 --mobile">Iniciar sesión</h2>
        </div>
    </div>
</section>

<section class="section section--checkout">
    <div class="section__holder">
        <div class="section__inner section__inner--width50">
            <div class="section__item section__item--background --center">
                <p class="section__text section__text--big --text-center --mb30">Por favor ingresa tus datos para <strong>ingresar al panel</strong></p>
                <form class="contact__form --mb25">
                    <div class="form-item --full">
                        <div class="form-item__input">
                            <input type="email" id="cod1" class="input input--secondary" required="">
                            <label class="form-item__label">Email</label>
                        </div>
                    </div>

                    <div class="form-item --full">
                        <div class="form-item__input">
                            <input type="pass" id="cod1" class="input input--secondary" required="">
                            <label class="form-item__label">Contraseña</label>
                        </div>
                    </div>

                    <div class="form-item --full --center --mt25">
                        <button class="button button--primary">Ingresar</button>
                    </div>
                </form>
                <a href="register.php" class="button button--link button--link-primary">¿Sos nuevo?. Registrate</button>
            </div>
        </div>

    </div>
</section>


 
<?php include 'inc/footer.php'; ?>