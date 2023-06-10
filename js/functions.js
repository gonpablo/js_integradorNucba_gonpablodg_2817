// Captura botones
const btnCard = document.querySelector("#btn-navmenu-cart");
const btnMenuMobile = document.querySelector("#btn-menu-mobile");
const btnMenuDesktop = document.querySelector("#btn-menu-desktop");
const btnCloseMenuMobile = document.querySelector("#btn-close-menu-mobile");
const btnCloseMenuCart = document.querySelector("#btn-close-menu-cart");
const btnAddToCart = document.querySelector(".button--small");


// Captura contenedores 
const cartContent = document.querySelector(".menu-dropdown__nav__list");
const tabsContent = document.querySelector(".tabs-primary__content");
const productsContent = document.querySelector("#products-content");
const filtersContent = document.querySelector(".tabs-primary__inner");


// Captura menu / overlay
const menuDesktop = document.querySelector("#menu-desktop");
const menuMobile = document.querySelector("#menu-mobile");
const menuCart = document.querySelector("#menu-cart"); 
const menuOverlay = document.querySelector(".menu-dropdown__overlay");





// Guardar en LocalStorage
/*let cart = JSON.parse(localStorage.getItem("cart")) || [];*/
let cartList = [];



// Funciones auxiliares 
const isBtnCategory = (btn) => {
  tabsContent.classList.add("--active");
	return (btn.classList.contains("tabs-primary__item__btn"));
};



const captureProduct = (id) => {
  return productFilter = productsBD.filter((item) => {
    return item.id === id;
  });
}

const isExistingCartProduct = (id) => {
  return cartList.find((item) => {
    return item[0].id === id;
  })
}



// Funciones principales 
const openMenuDesktop = () => {
  menuDesktop.classList.toggle("--active");
  menuOverlay.classList.toggle("--active");
};


const openMenuMobile = () => {
  menuMobile.classList.toggle("--active");
}

const openMenuCart = () => {
  menuCart.classList.toggle("--active");
  menuOverlay.classList.toggle("--active");
};

const closeMenuClickOverlay = () => {
  menuDesktop.classList.remove("--active");
  menuOverlay.classList.remove("--active");
  menuCart.classList.remove("--active");
};


const closeMenuMobile = () => {
  menuMobile.classList.remove("--active");
};

const closeMenuCart = () => {
  menuCart.classList.remove("--active");
  menuOverlay.classList.remove("--active");
};


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



const renderCardProducts = (productList) => {
  productList.sort(function() { return Math.random() - 0.5 });
  productsContent.innerHTML = productList.map(createCardTemplate).join("");
};


const createCartTemplate = (productCart) => {

  const {id, productImg, name, priceNormal, priceDiscount, textOffert} = productCart[0];
  const {quantity} = productCart;

  return `
    <div class="menu-dropdown__nav__item">
      <div class="card-shop-horizontal card-shop-horizontal--small">
        <div class="card-shop-horizontal__image">
            <img class="card-shop-horizontal__image__figure" src=${productImg}>
        </div>
        <div class="card-shop-horizontal__content">
          <button data-id="${id}" class="button button--link button--ultra-big button--link-grey --no-underline"><i class="ri-delete-bin-line"></i></button>
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
              <button class="quantity-input__btn">-</button>
              <input type="number" id="qty" name="qty" value="${quantity}" step="1" min="1" max="20" readonly="readonly">
              <button class="quantity-input__btn">+</button>
            </div>
          </div>
        </div> 
      </div>
    </div>`
}

const renderCartProducts = () => {
  if (!cartList.length) {
		cartContent.innerHTML = `<p class="section__text">No hay productos en el carrito.</p>`;
		return;
	}

  cartContent.innerHTML = cartList.map(createCartTemplate).join("");
}


const createCartProduct = (product) => {
	cartList = [
		...cartList,
		{
			...product,
			quantity: 1,
		},
	];
};

const addCartProduct = (product) => {
  cartList = cartList.map((item) => {
		return item.id === product.id
			? { ...item, quantity: item.quantity + 1 }
			: item;
	});
}


const changeCategoryFilter = ({target}) => {
  tabsContent.classList.remove("--active");
  let categoryActive = target.dataset.category;

  setTimeout(() => {
    if (isBtnCategory(target)) {
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
}





const addProductToCart = (e) => {
  if (!e.target.classList.contains("button--small")) {
		return;
	}

  // Capturar ID
  const productID = Number(e.target.dataset.id);

  // Filtrar producto
  const productCapture = captureProduct(productID);

  // Ver si el id del producto existe en el carrito 
  if (isExistingCartProduct(productID)) {
    // agregar unidad al producto en carrito
    addCartProduct(productCapture);
  } else {
    // crear nuevo producto en carrito
    createCartProduct(productCapture);
  }

  renderCartProducts();

  console.log(cartList);
}



// Validacion y almacenamiento de datos



// Inicializacion de eventos
const init = () => { 
  btnMenuDesktop.addEventListener("click", openMenuDesktop);
  btnCard.addEventListener("click", openMenuCart);
  btnMenuMobile.addEventListener("click", openMenuMobile);
  menuOverlay.addEventListener("click", closeMenuClickOverlay);
  btnCloseMenuMobile.addEventListener("click", closeMenuMobile);
  btnCloseMenuCart.addEventListener("click", closeMenuCart);
  document.addEventListener("DOMContentLoaded", renderCardProducts(productsBD));
  document.addEventListener("DOMContentLoaded", renderCartProducts);
  filtersContent.addEventListener("click", changeCategoryFilter);
  productsContent.addEventListener("click", addProductToCart);
};

init();
