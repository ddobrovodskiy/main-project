Vue.component('menu-item', {
    props: ['href', 'name', 'active'],
    template: `<li class="nav-item active">
    <a v-if="active == 'yes'" class="nav-link my-menu-item my-menu-item--ative " :href="href">{{ name }}</a>
    <a v-if="active != 'yes'" class="nav-link my-menu-item " :href="href">{{ name }}</a>
  </li>`
  })

  Vue.component('main-menu', {
    props: ['active'],
    template: 
    `<div class="container"> 
      <nav class="navbar navbar-expand-lg navbar-light ">
        <a class="navbar-brand" href="index.html"><img src="images/main_logo.png"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav navigation ">
            
            <menu-item href='/index.html' name='Головна'></menu-item>
            <menu-item href='/gallery.html' name='Галерея'></menu-item>
            <menu-item href='/authors.html' name='Автори'></menu-item>
            <menu-item href='/background.html' name='Беґраунд'></menu-item>
            <menu-item href='/contacts.html' name='Контакти'></menu-item>

            
    

          </ul>
        </div>
      </nav>
     </div>
  </div>
  `
  })
  
  

  let hmenu = new Vue({
      el: '#hmenu',
      data: {

      }
  })

  let main_element  = new Vue({
    el: '#boom__element',
    data:{
      paintings: [{
        url: "asdkps",
        name: "Кури гриль",
        author: "Ніжність Полум'я",
        image: "./images/painting10.png",


      }]
    }

  })
  let app = new Vue({
    el: '#ghost',
    data:{
      lols: [{
      name: 'Кури',
      author: 'Василь Джічка',
      image: './images/paint1img.png',
      matherial: 'plastic',
      price: ' 40 грывень',
      urlButton: ''
      }]
    }
  })

  Vue.component('down',{
    template: `<div class="container-fluid footer__background">
    <div class="container">
  
      <div class="footer" id="foot">
        <img class="footer__logo" src="images/hlogo.png">
        <div class="footer__social">
          <a href="http://www.facebook.com"><img src="images/facebook.png"></a>
          <a href="http://www.instagram.com"><img src="images/instagram.png"></a>
        </div>
        
        
          <ul class="footer__navigation">
            <li><a href='/index.html'>Головна</a></li>
            <li><a href='/gallery.html'>Галерея</a></li>
            <li><a href='/authors.html'>Автори</a></li>
            <li><a href='/background.html'>Беґраунд</a></li>
            <li><a href='/contacts.html'>Контакти</a></li>
          </ul>
          <div class="aaa">
          <p > +38 098 295 1466 </p>
          <p > м. Тернопіль, бульвар  Шевченка, 1 </p>
        </div>
      </div>
  
      
    </div>
  </div>`
  })
  
let down = new Vue({
    el: '#foot',
    data: {

    }
  })