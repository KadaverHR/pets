$(document).ready(function () {
  // new AirDatepicker('#date')

  //год
  document.getElementById("year").innerHTML = new Date().getFullYear();


  //высота элементов

  // try {
  //   let header = document.querySelector('.header')
  //   let footer = document.querySelector('.footer')
  //   let breadcrumb = document.querySelector('.breadcrumb-section')
  //   let errorImg = document.getElementById('errorImg')
  //   let wholeHeight = document.querySelector('.whole-height')
  //   let cont = wholeHeight.querySelector('.container')
  //   let screenHeight = document.documentElement.clientHeight

  //   let headerHeight = header.getBoundingClientRect().height
  //   let footerHeight = footer.getBoundingClientRect().height



  //   if (breadcrumb !== null) {
  //     let breadcrumbHeight = breadcrumb.getBoundingClientRect().height
  //     let contHeight = screenHeight - (headerHeight + footerHeight + breadcrumbHeight)
  //     if (contHeight < 469) {
  //       contHeight = screenHeight - headerHeight
  //     }

  //     wholeHeight.style.minHeight = contHeight + 'px'
  //     cont.style.minHeight = contHeight + 'px'

  //     if (errorImg !== null) {
  //       errorImg.style.minHeight = contHeight + 'px'
  //     }
  //     console.log('сработало с крошками')
  //   }

  //   else {
  //     let contHeight = screenHeight - (headerHeight + footerHeight)
  //     if (contHeight < 469) {
  //       contHeight = screenHeight - headerHeight
  //     }

  //     wholeHeight.style.minHeight = contHeight + 'px'
  //     cont.style.minHeight = contHeight + 'px'

  //     if (errorImg !== null) {
  //       errorImg.style.minHeight = contHeight + 'px'
  //     }
  //     console.log('сработало без крошек')
  //   }


  // } catch (err) {
  // }

  ////Горизонтальные карточки. Удаление стиля на мобилке
  try {
    let screenWhidth = document.documentElement.clientWidth
    let cardView = document.querySelector('.products-page__body-list')

    let btnHorizontalCard = document.getElementById('horizontalCard')
    let btnVerticalCard = document.getElementById('verticalCard')

    btnHorizontalCard.addEventListener('click', function () {
      this.classList.add('active')
      btnVerticalCard.classList.remove('active')
      cardView.classList.add('horizontal')
    })

    if (screenWhidth < 767) {
      cardView.classList.remove('horizontal')
    }

    btnVerticalCard.addEventListener('click', function () {
      this.classList.add('active')
      btnHorizontalCard.classList.remove('active')
      cardView.classList.remove('horizontal')
    })

  } catch (err) {
  }

  /// svg

  const Svg = () => {
    let x = [".svg"];
    x.forEach((item) => {
      $(item).each(function () {
        let $img = $(this);
        let imgClass = $img.attr("class");
        let imgURL = $img.attr("src");
        $.get(
          imgURL,
          function (data) {
            let $svg = $(data).find("svg");
            if (typeof imgClass !== "undefined") {
              $svg = $svg.attr("class", imgClass + " replaced-svg");
            }
            $svg = $svg.removeAttr("xmlns:a");
            if (
              !$svg.attr("viewBox") &&
              $svg.attr("height") &&
              $svg.attr("width")
            ) {
              $svg.attr(
                "viewBox",
                "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
              );
            }
            $img.replaceWith($svg);
          },
          ""
        );
      });
    });
  };
  Svg();



  // Fancybox.show([{ src: "#order", type: "inline" }]);



  // ymaps.ready(init);

  // function init() {
  //   // в этой версии координаты просто элементы массива (и они поменяны местами)
  //   if (document.getElementById('map') === null) return
  //   let destinations = {
  //     'MSK': [55.755864, 37.617698], //орел
  //   },

  //     // Создание экземпляра карты и его привязка к контейнеру с
  //     // заданным id ("map").
  //     myMap = new ymaps.Map('map', {
  //       // При инициализации карты обязательно нужно указать
  //       // её центр и коэффициент масштабирования.
  //       center: destinations['MSK'],
  //       zoom: 13.5
  //     });

  //   // Добавление метки
  //   // https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/
  //   let myPlacemark = new ymaps.Placemark([55.847861, 37.650055], {}, {
  //     //опции
  //     iconLayout: 'default#image',
  //     iconImageHref: '../assets/img/map-icon.png',
  //     iconImageSize: [44, 61],
  //     iconImageOffset: [-27, -54],
  //   });

  //   // После того как метка была создана, добавляем её на карту.
  //   myMap.geoObjects.add(myPlacemark);
  // }


  // меню


  let catalogMenu = document.querySelectorAll('.catalog-item')

  catalogMenu.forEach(element => {

    element.addEventListener('mouseover', () => {
      catalogData = element.querySelector('.catalog-drop')
      catalogData.classList.add('d-block')

      catalogData.addEventListener('mouseout', () => {
        catalogData.classList.remove('d-block')
      })
    })
    element.addEventListener('mouseout', () => {
      catalogData.classList.remove('d-block')
    })
  // })

});

/////мобильное меню

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }
// Бургер
// 



//слайдер баннер 

new Swiper(".swiper-banner", {
  loop: true,
  allowSlideNext: true,
  autoplay: {
    delay: 3000,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      // spaceBetweenSlides: 10
    },
    567: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      // spaceBetweenSlides: 10
    },
    767: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetweenSlides: 30,
    },
    1023: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      // spaceBetweenSlides: 50
    },
    1139: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      // spaceBetweenSlides: 60
    },
  },
});

new Swiper(".swiper-discounts", {
  loop: false,
  // navigation: {
  //   nextEl: ".swiper-discounts__swiper-button-next",
  //   prevEl: ".swiper-discounts__swiper-button-prev",
  // },
  autoHeight: true,
  pagination: {
    el: ".swiper-discounts__swiper-pagination ",
    clickable: true,
  },
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      // spaceBetweenSlides: 10
    },
    567: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1023: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1139: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

new Swiper(".swiper-seller", {
  loop: false,
  // navigation: {
  //   nextEl: ".swiper-discounts__swiper-button-next",
  //   prevEl: ".swiper-discounts__swiper-button-prev",
  // },
  autoHeight: true,
  pagination: {
    el: ".swiper-seller__swiper-pagination ",
    clickable: true,
  },
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      // spaceBetweenSlides: 10
    },
    567: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1023: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1139: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});



new Swiper(".swiper-catalog-banner", {
  loop: true,
  allowSlideNext: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      // spaceBetweenSlides: 10
    },
    567: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      // spaceBetweenSlides: 10
    },
    767: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetweenSlides: 30,
    },
    1023: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      // spaceBetweenSlides: 50
    },
    1139: {
      slidesPerView: 1,
      // slidesPerGroup: 1,
      spaceBetweenSlides: 30
    },
  },
});

new Swiper(".swiper-company", {
  loop: true,
  allowSlideNext: true,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-company__swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetweenSlides: 10
    },
    567: {
      slidesPerView: 2,

      spaceBetweenSlides: 10
    },
    767: {
      slidesPerView: 2,
      spaceBetweenSlides: 30,
    },
    1023: {
      slidesPerView: 2,
      spaceBetweenSlides: 30
      // spaceBetweenSlides: 50
    },
    1139: {
      slidesPerView: 2,
      // slidesPerGroup: 1,
      spaceBetweenSlides: 30
    },
  },
});




///корзина

let cardsBtns = document.querySelectorAll('.card__btn')

cardsBtns.forEach(element => {
  element.addEventListener('click', function () {
    console.log(element)
    element.classList.add('active')
    element.innerHTML = '<span class="card__btn-order">В корзинe</span>'
    console.log(element)

  });


})





///////
$(".range-price").slider({
  animate: "slow",
  range: true,
  values: [10, 1000],
  slide: function (event, ui) {
    $(".result-range-price > .from > input").val(ui.values[0]);
    $(".result-range-price > .to > input").val(ui.values[1]);
  },
});
$(".result-range-price > .from > input").val(
  $(".range-price").slider("values", 0)
);
$(".result-range-price > .to  > input").val(
  $(".range-price").slider("values", 1)
);




// Фильтр мобильная версия

let filter = $(".filter-mobile");
let filterNextStep = $(".filter-mobile-step-next");

$(".js-button-filter-mobile").click(function () {
  filter.addClass("filter-mobile--active");
  $("html").css("overflow-y", "hidden");
});

$(".js-filter-mobile-block__button-all").click(function () {
  filterNextStep.toggleClass("filter-mobile-step-next--active");
});

$(".js-filter-mobile-header-back").click(function () {
  filterNextStep.removeClass("filter-mobile-step-next--active");
});

$(".js-filter-mobile-close").click(function () {
  filter.removeClass("filter-mobile--active");
  filterNextStep.removeClass("filter-mobile-step-next--active");
  $("html").css("overflow-y", "auto");
});

$(".js-catalog-select").click(function () {
  $(".catalog-select__options").toggleClass(
    "catalog-select__options--active"
  );
});


let searchBtn = document.getElementById('search-btn')
let searchArea = document.getElementById('search-area')
let buttonClose = document.getElementById('button-close')
searchBtn.addEventListener('click', function () {
  searchArea.classList.add('active')
})

buttonClose.addEventListener('click', function () {
  searchArea.classList.remove('active')
})




  // let links = document.querySelectorAll('a')
  // let modal = document.getElementById('modal')
  // let modalClose = document.getElementById('modal-close')
  // let modalBody = document.getElementById('modal-body')

  // links.forEach(element => {
  //   element.addEventListener('click', () => {
  //     element.removeAttribute('href')
  //     modal.classList.remove('d-n')
  //   })
  // });

  // modalClose.addEventListener('click', () => {
  //   modal.classList.add('d-n')
  // })

  // $(document).mouseup(function (e) {
  //   var container = $(modalBody);
  //   if (container.has(e.target).length === 0) {
  //     modal.classList.add('d-n')
  //   }
  // });

})