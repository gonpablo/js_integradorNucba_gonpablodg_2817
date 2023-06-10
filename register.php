<?php include 'inc/header.php'; ?>

<section class="header-page header-page--checkout --success">
    <div class="header-page__holder">
        <div class="header-page__item">
            <i class="header-page__icon --mb15 ri-user-add-line"></i>
            <h2 class="section__title section__title--ultra-big --c-grey-0 --mb9 --desktop">Registrate</h2>
            <h2 class="section__title section__title--big --c-grey-0 --mb9 --mobile">Registrate</h2>
        </div>
    </div>
</section>

<section class="section section--checkout">
    <div class="section__holder">
        <div class="section__inner section__inner--width50">
            <div class="section__item section__item--background">
                <p class="section__text section__text--big --text-center --mb30">Por favor completa los siguientes datos <strong>para registrarte</strong></p>
                <form class="contact__form">
                    <div class="form-item --full">
                        <div class="form-item__input">
                            <input type="text" id="cod1" class="input input--secondary" required="">
                            <label class="form-item__label">Nombre</label>
                        </div>
                    </div>

                    <div class="form-item --full">
                        <div class="form-item__input">
                            <input type="text" id="cod1" class="input input--secondary" required="">
                            <label class="form-item__label">Apellido</label>
                        </div>
                    </div>

                    <div class="form-item --full">
                        <div class="form-item__input">
                            <input type="email" id="cod1" class="input input--secondary" required="">
                            <label class="form-item__label">Email</label>
                        </div>
                    </div>

                    <div class="form-item --full">
                        <div class="form-item__input">
                            <input type="password" id="cod1" class="input input--secondary" required="">
                            <label class="form-item__label">Contraseña</label>
                        </div>
                    </div>

                    <div class="form-item --full --center --mt25">
                        <button class="button button--primary">Registrarse</button>
                    </div>
                </form>
                
            </div>
        </div>

    </div>
</section>


 
<?php include 'inc/footer.php'; ?>