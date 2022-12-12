$( ".customer-list" ).slick( {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  prevArrow: `<button type="button" class="slick-prev pull-left"><img src="./Assets/img/Vector-pre.svg"></button>`,
  nextArrow: `<button type="button" class="slick-next pull-right"><img src="./Assets/img/Vector-next.svg"></button>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
} );


const toggle = document.querySelector( ".menu-toggle" )
const menu = document.querySelector( ".menu" )
const isShow = "isShow"

toggle.addEventListener( 'click', () => {
  menu.classList.add( isShow )
} )
window.addEventListener( 'click', function ( e ) {
  if ( !menu.contains( e.target ) && !e.target.matches( ".menu-toggle" ) )
  {
    menu.classList.remove( isShow )
  }
} );