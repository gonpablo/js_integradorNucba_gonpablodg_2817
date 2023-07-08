// Captura botones
const btnCard = document.querySelector("#btn-navmenu-cart");
const btnMenuMobile = document.querySelector("#btn-menu-mobile");
const btnMenuDesktop = document.querySelector("#btn-menu-desktop");
const btnMenuSearch = document.querySelector("#btn-navmenu-search");
const btnCloseMenuMobile = document.querySelector("#btn-close-menu-mobile");
const btnCloseMenuCart = document.querySelector("#btn-close-menu-cart");
const btnIconQuantityCart = document.querySelector("#navbar-icon__link__count"); 
const btnClearCart = document.querySelector("#btn-clear-cart");
const btnFinishCart = document.querySelector("#btn-finish-cart");
const btnListTabs = document.querySelectorAll(".tabs-primary__item__btn");
const spinner = document.querySelector(".spinner");
const btnModalOk = document.querySelector("#modal__btn__ok");


// Captura contenedores 
const messageContent = document.querySelector("#message-content");
const cartContent = document.querySelector(".menu-dropdown__nav__list");
const tabsContent = document.querySelector(".tabs-primary__content");
const productsContent = document.querySelector("#products-content");
const cartItemContent = document.querySelector("#menu-cart-list");
const filtersContent = document.querySelector(".tabs-primary__inner");
const productsCartQuantity = document.querySelector("#checkout__summary__items");
const productsCartTotal = document.querySelector("#checkout__summary__total");
const productsCartTotalContent = document.querySelector("#checkout__summary__content");
const modal = document.querySelector(".modal");
const modalInner = document.querySelector(".modal__inner");
const modalInnerText = document.querySelector("#modal__inner__text");




// Captura elementos formulario
const contactForm = document.querySelector(".contact__form");
const nameInput = document.getElementById("name");
const lastnameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const messageSucess = document.querySelector(".info-text--sucess")


// Captura menu / overlay
const menuDesktop = document.querySelector("#menu-desktop");
const menuMobile = document.querySelector("#menu-mobile");
const menuCart = document.querySelector("#menu-cart"); 
const menuSearch = document.querySelector("#menu-search"); 
const menuOverlay = document.querySelector(".menu-dropdown__overlay");



// GUARDAR EN LOCALSTORE
let cartList = JSON.parse(localStorage.getItem("cart")) || [];

const saveCartProducts = () => {
	localStorage.setItem("cart", JSON.stringify(cartList));
};


// FUNCIONES AUXILIARES
const isBtnCategory = (btn) => {
	return (btn.classList.contains("tabs-primary__item__btn"));
};


const captureProduct = (id) => {
  return productFind = productsBD.find((item) => {
    return item.id === id;
  });
}

const isExistingCartProduct = (id) => {
  return cartList.find((item) => {
    return item.id === id;
  })
}

const setValueInput = (input) => {
  return input.classList.add("--valid");
};

const removeValueInput = (input) => {
  return input.classList.remove("--valid");
}

const IsLengthInput = (input) => {
  if(input.value.trim().length) {
    setValueInput(input);
  } else {
    removeValueInput(input);
  }
  
  return input.value.trim().length;
}

const IsValidEmailInput = (input) => {
  const RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	return RegExp.test(input.value.trim());
}


const clearCart = () => {
  return cartList = [];
}

const enabledOrDisabledBtnCart = () => {
  if(cartList.length) {
    btnClearCart.classList.remove("button--disabled");
    btnFinishCart.classList.remove("button--disabled");
    return true;
  }
  btnClearCart.classList.add("button--disabled");
  btnFinishCart.classList.add("button--disabled");
  return false;  
};


// FUNCIONES PRINCIPALES 
const openMenuDesktop = () => {
  menuDesktop.classList.toggle("--active");
  menuOverlay.classList.toggle("--active");
};


const openMenuMobile = () => {
  menuMobile.classList.toggle("--active");
};

const openMenuCart = () => {
  menuCart.classList.toggle("--active");
  menuOverlay.classList.toggle("--active");
};

const closeMenuClickOverlay = () => {
  menuDesktop.classList.remove("--active");
  menuOverlay.classList.remove("--active");
  menuCart.classList.remove("--active");
  menuSearch.classList.remove("--active");
};


const closeMenuMobile = () => {
  menuMobile.classList.remove("--active");
};

const closeMenuCart = () => {
  menuCart.classList.remove("--active");
  menuOverlay.classList.remove("--active");
};

const openMenuSearch = () => {
  menuSearch.classList.add("--active");
  menuOverlay.classList.toggle("--active");
};

const showModal = (message) => {
  modal.classList.add("--active");
  modalInner.classList.add("--active");
  modalInnerText.innerHTML = `${message}`

  btnModalOk.addEventListener("click", function() {
    modal.classList.remove("--active");
    modalInner.classList.remove("--active");
    return true;
  });
}


// Template mensaje exitoso del carrito
const templateMessageSucessCart = (textMessage) => {
  messageContent.classList.add("--active");
  messageContent.innerHTML = `<i class="ri-check-double-line --icon"></i><span>${textMessage}</span>`;

  setTimeout(() => {
    messageContent.classList.remove("--active");
    messageContent.innerHTML = ``;
  }, 2500);
};


// Template Mensaje error input
const templateMessageErrorInput = (textMessage, input) => {
  const formItem = input.parentElement;
  const formItemLast = formItem.parentElement;
  const getSpamError = formItemLast.querySelector(".input-alert");
  getSpamError.innerHTML = `<i class="ri-error-warning-line"></i>${textMessage}`;  
  input.classList.add("input--error");
};


// Template Mensaje exitoso input 
const templateMessageSucessInput = (input) => {
  const formItem = input.parentElement;
  const formItemLast = formItem.parentElement;
  const getSpamError = formItemLast.querySelector(".input-alert");
  getSpamError.innerHTML = ``;  
  input.classList.remove("input--error");
};


// Template Mensaje exitoso formulario 
const templateMessageSucessForm = (textMessage) => {
  messageSucess.classList.remove("--hidden");
  messageSucess.innerHTML = `<i class="ri-error-warning-line --icon"></i>${textMessage}`;
  
  setTimeout(() => {
    messageSucess.classList.add("--hidden");
    messageSucess.innerHTML = ``;
  }, 3500);
};



// Template productos
const createCardTemplate = (productList) => {
  const {id, productImg, category, name, priceNormal, priceDiscount, textOffert, featured } = productList;
  return `<div class="card-shop card-shop--small">
            <div class="card-shop__image">
                <img class="card-shop__image__figure" src=${productImg}>` +
                (featured ? `<span class="tags tags--featured-bg">Recomendado</span>` : `` ) +
                `<button class="button button--quick-view button--small" 
                data-id="${id}" 
                data-img="${productImg}"
                data-category="${category}"
                data-name="${name}"
                data-pricenormal="${priceNormal}"
                data-pricediscount="${priceDiscount}"
                data-textoffert="${textOffert}"
                data-featured="${featured}"><i class="ri-shopping-cart-2-line"></i>Agregar al carrito</button>
            </div>
            <div class="card-shop__content">
                <div class="card-shop__categories">${category}</div>
                  <p class="card-shop__title">${name}</p>
                  <div class="card-shop__price">` +
                       (priceDiscount != null ? `<p class="card-shop__price__discount">$${priceDiscount.toFixed(3)}</p>` : ``) +
                      `<p class="card-shop__price__normal">$${priceNormal.toFixed(3)}` +
                       (textOffert != null ? `<span class="text-discount text-discount--small">${textOffert}</span>` : ``) +
                      `</p>
                  </div>
                <button class="button button--icon button--grey --desktop"><i class="ri-arrow-right-s-line"></i></button>
                <button class="button button--primary button--small --mobile"
                data-id="${id}" 
                data-img="${productImg}"
                data-category="${category}"
                data-name="${name}"
                data-pricenormal="${priceNormal}"
                data-pricediscount="${priceDiscount}"
                data-textoffert="${textOffert}"
                data-featured="${featured}"><i class="ri-shopping-cart-2-line"></i></button>
            </div> 
          </div>`;
};


// Renderizar productos
const renderCardProducts = (productList) => {
  productList.sort(function() { return Math.random() - 0.5 });
  productsContent.innerHTML = productList.map(createCardTemplate).join("");
};


// Template productos del carrito
const createCartTemplate = (productCart) => {
  const {id, productImg, name, priceNormal, priceDiscount, textOffert, quantity} = productCart;

  return `
    <div class="menu-dropdown__nav__item">
      <div class="card-shop-horizontal card-shop-horizontal--small">
        <div class="card-shop-horizontal__image">
            <img class="card-shop-horizontal__image__figure" src=${productImg}>
        </div>
        <div class="card-shop-horizontal__content">
          <button data-id="${id}" class="ri-delete-bin-line button button--link button--ultra-big button--link-grey --no-underline"></button>
          <div class="card-shop-horizontal__top">
              <p class="card-shop-horizontal__title">${name}</p>
          </div> 

          <div class="card-shop-horizontal__bottom">
            <div class="card-shop-horizontal__price">
                <p class="card-shop-horizontal__price__normal">
                <span class="card-shop-horizontal__price__normal__count">${quantity} x</span>` + 
                (priceDiscount != null ?` $${priceDiscount.toFixed(3)}` : `$${priceNormal.toFixed(3)}`) +
                (textOffert != null ? `<span class="text-discount text-discount--small --desktop">${textOffert}</span>` : ``) +
                `</p>
            </div>
            <div class="quantity-input">
              <button data-id="${id}" class="quantity-input__btn --down">-</button>
              <input type="number" value="${quantity}" step="1" min="1" max="99" readonly="readonly">
              <button data-id="${id}" class="quantity-input__btn --up">+</button>
            </div>
          </div>
        </div> 
      </div>
    </div>`
};

// Renderizar productos del carrito
const renderCartProducts = () => {
  if (!cartList.length) {
		cartContent.innerHTML = `<p class="section__text">No hay productos en el carrito.</p>`;
		return;
	}
  cartContent.innerHTML = cartList.map(createCartTemplate).join("");
};

// Filtro p/cambio de categoria
const changeCategoryFilter = ({target}) => {
  tabsContent.classList.remove("--active");
  let categoryActive = target.dataset.category;

  
  setTimeout(() => {
    if (isBtnCategory(target)) {
      tabsContent.classList.add("--active");
      changeBtnState(categoryActive);
      
      if(categoryActive === "Todos") {
        renderCardProducts(productsBD);
      } else {
          const filterProducts = productsBD.filter((product) => {
          return product.category === categoryActive;
        });
        renderCardProducts(filterProducts);
      }
    }
  }, 150);
};


// Cambio estado de boton categoria
const changeBtnState = (category) => {
	const categories = [...btnListTabs];
	categories.forEach((btn) => {
		if (btn.dataset.category !== category) {
			btn.classList.remove("--active");
			return;
		}
		btn.classList.add("--active");
	});
};


// Agregado de campo "Cantidad" al producto
const createCartProduct = (product) => {
	cartList = [
		...cartList,
		{
			...product,
			quantity: 1,
		},
	];
};


// Agregar una unidad al producto
const addUnitCartProduct = (product) => {
  cartList = cartList.map((item) => {
		return item.id === product.id
			? { ...item, quantity: item.quantity + 1 }
			: item;
	});
  incrementUnitPrice(product);
  templateMessageSucessCart("Se ha agregado una unidad del producto");
};


// Sacar una unidad al producto
const removeUnitCartProduct = (product) => {
  const searchProduct = cartList.find((item) => item.id === product.id);

    if(searchProduct.quantity > 1) {
      cartList = cartList.map((item) => {
        return item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
      decrementUnitPrice(product);
      templateMessageSucessCart("Se ha quitado una unidad del producto");
    } 
    return;
};



// Incrementar precio del producto
const incrementUnitPrice = (product) => {
  cartList = cartList.map((item) => {
    if (product.priceDiscount === null) {
      return item.id === product.id 
      ? { ...item, priceNormal: item.priceNormal + product.priceNormal }
        : item;
    } else {
      return item.id === product.id 
      ? { ...item, priceDiscount: item.priceDiscount + product.priceDiscount }
        : item;
    }
	});
};


// Decrementar precio del producto
const decrementUnitPrice = (product) => {
  cartList = cartList.map((item) => {
    if (product.priceDiscount === null) {
      return item.id === product.id 
      ? { ...item, priceNormal: item.priceNormal - product.priceNormal }
        : item;
    } else {
      return item.id === product.id 
      ? { ...item, priceDiscount: item.priceDiscount - product.priceDiscount }
        : item;
    }
	});
};


// Calcular precio total de items del carrito
const totalCartPrice = () => {
  let prodTotal = 0;

  if (cartList.length) {
    cartList.map((item) => {
      if (item.priceDiscount === null) {
        return prodTotal = prodTotal + item.priceNormal;
      } else {
        return prodTotal = prodTotal + item.priceDiscount;
      }
    });
    productsCartTotal.innerHTML = (`$${prodTotal.toFixed(3)}`);
    productsCartTotalContent.classList.remove("--hidden");
    return;
  }
  
  productsCartTotal.innerHTML = '';
  productsCartTotalContent.classList.add("--hidden");
};


// Calcular cantidad de items del carrito
const totalCartItems = () => {
  if (cartList.length) {
    btnIconQuantityCart.classList.remove("--hidden");
    btnIconQuantityCart.innerHTML = `${cartList.length}`;
    productsCartQuantity.innerHTML = `(${cartList.length} items)`;
    return;
  }    
  btnIconQuantityCart.classList.add("--hidden");
  productsCartQuantity.innerHTML = "";
};


// Agregar un producto al carrito
const addProductToCart = (e) => {
  if (!e.target.classList.contains("button--small")) {
		return;
	}

  // Filtrar producto
  const productCapture = captureProduct(Number(e.target.dataset.id));
  // Ver si el id del producto existe en el carrito 
  if (isExistingCartProduct(Number(e.target.dataset.id))) {
    // agregar unidad al producto en carrito
    addUnitCartProduct(productCapture);
    templateMessageSucessCart("Se ha agregado una nueva unidad del producto al carrito");
  } else {
    // crear nuevo producto en carrito
    createCartProduct(productCapture);
    templateMessageSucessCart("Se ha agregado un nuevo producto al carrito");
  }

  updateCart();
};


// Remover un producto del carrito
const removeProductToCart = (e) => {

  if (!e.target.classList.contains("button--link-grey")) {
		return;
	}

  if (window.confirm("¿Desea eliminar el producto?")) {
    const productCapture = captureProduct(Number(e.target.dataset.id));

    spinner.classList.add("--active");

    cartList = cartList.filter((item) => {
      return item.id !== productCapture.id;
    }); 

    setTimeout(() => {
      updateCart();
      spinner.classList.remove("--active");
      templateMessageSucessCart("Se ha eliminado el producto");
    }, 2500);
  }
};


// Limpiar carrito
const clearProductsCart = () => {
  if (enabledOrDisabledBtnCart()) {
    if (window.confirm("¿Desea limpiar el carrito?")) {
      spinner.classList.add("--active");
      
      setTimeout(() => {
        spinner.classList.remove("--active");
        clearCart();
        updateCart();
        templateMessageSucessCart("Se ha limpiado el carrito");
      }, 2500);
    }
  }
};

// Completar compra
const completePayCart = () => {
  if (enabledOrDisabledBtnCart()) { 
 
      if (window.confirm("¿Desea completar la compra?")) { 
        spinner.classList.add("--active");
        setTimeout(() => {
          spinner.classList.remove("--active");
          clearCart();
          updateCart();
        }, 2000);

        setTimeout(() => {
          showModal("La compra ha sido finalizada");
          closeMenuCart();
        }, 2500);
      }
  }
};

// Agregar o quitar unidades al producto
const addOrRemoveQuantity = (e) => {
  const productCapture = captureProduct(Number(e.target.dataset.id));

  if (e.target.classList.contains("--up") || e.target.classList.contains("--down")) {
    spinner.classList.add("--active");
  }
  
  setTimeout(() => {
    if (e.target.classList.contains("--up")) {
      addUnitCartProduct(productCapture);
    } else if (e.target.classList.contains("--down")) {
      removeUnitCartProduct(productCapture);
    }
    spinner.classList.remove("--active");
    updateCart();
  }, 700);
};

// Limpiar inputs
const clearInputs = (input) => {
  IsLengthInput(input);
  templateMessageSucessInput(input);
};

// Validar input texto
const checkTextInput = (input) => {
  let valid = false;
  const RegExp = /^[A-Z]+$/i;


  if (!IsLengthInput(input)) {
    templateMessageErrorInput("El campo esta vacio", input);
    return;
  } 
  
  if (!RegExp.test(input.value)) {
    templateMessageErrorInput("El campo no debe contener numeros", input);
    return;
  }

  if (input.value.length < 5 ) {
    templateMessageErrorInput("El campo debe tener al menos 5 caracteres", input);
    return;
  }

  templateMessageSucessInput(input);
  valid = true;
  return valid;
};

// Validar input email
const checkEmailInput = (input) => {
  let valid = false;

  if (!IsLengthInput(input)) {
    templateMessageErrorInput("El campo esta vacio", input);
    return;
  } 

  if(!IsValidEmailInput(input)) {
    templateMessageErrorInput("El email no es valido", input);
    return;
  }

  templateMessageSucessInput(input);
  valid = true;
  return valid;
}


// Validar input mensaje
const checkMessageInput = (input) => {
  let valid = false;

  if (!IsLengthInput(input)) {
    templateMessageErrorInput("El campo esta vacio", input);
    return;
  } 

  if (input.value.length < 20 ) {
    templateMessageErrorInput("El campo mensaje debe tener al menos 20 caracteres", input);
    return;
  }

  templateMessageSucessInput(input);
  valid = true;
  return valid;
};


// Validacion y almacenamiento de datos
const updateCart = () => {
    renderCartProducts();
    totalCartPrice();
    totalCartItems();
    enabledOrDisabledBtnCart();
    saveCartProducts();
};

// Validacion de input y envio formulario
const sendContactForm = (e) => {
  e.preventDefault();

  let nameText = checkTextInput(nameInput);
  let lastName = checkTextInput(lastnameInput);
  let email = checkEmailInput(emailInput);
  let message = checkMessageInput(messageInput);

  if(nameText && lastName && email && message) {
    templateMessageSucessForm("El mensaje se ha enviado exitosamente");
    contactForm.reset();
    removeValueInput(nameInput);
    removeValueInput(lastnameInput);
    removeValueInput(emailInput);
    removeValueInput(messageInput);
  }
};


// Inicializacion de eventos
const init = () => { 
  btnMenuDesktop.addEventListener("click", openMenuDesktop);
  btnMenuSearch.addEventListener("click", openMenuSearch);
  btnCard.addEventListener("click", openMenuCart);
  btnMenuMobile.addEventListener("click", openMenuMobile);
  menuOverlay.addEventListener("click", closeMenuClickOverlay);
  btnCloseMenuMobile.addEventListener("click", closeMenuMobile);
  btnCloseMenuCart.addEventListener("click", closeMenuCart);
  filtersContent.addEventListener("click", changeCategoryFilter);
  productsContent.addEventListener("click", addProductToCart);
  cartItemContent.addEventListener("click", removeProductToCart);
  cartItemContent.addEventListener("click", addOrRemoveQuantity);
  document.addEventListener("DOMContentLoaded", renderCartProducts);
  document.addEventListener("DOMContentLoaded", renderCardProducts(productsBD));
  document.addEventListener("DOMContentLoaded", totalCartItems);
  document.addEventListener("DOMContentLoaded", totalCartPrice);
  btnClearCart.addEventListener("click", clearProductsCart);
  btnFinishCart.addEventListener("click", completePayCart);
  enabledOrDisabledBtnCart();
  contactForm.addEventListener("submit", sendContactForm);
  nameInput.addEventListener("input", () => clearInputs(nameInput));
	lastnameInput.addEventListener("input", () => clearInputs(lastnameInput));
	emailInput.addEventListener("input", () => clearInputs(emailInput));
	messageInput.addEventListener("input", () => clearInputs(messageInput));
};

init();
