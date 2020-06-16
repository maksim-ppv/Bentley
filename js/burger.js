const fullscreen = document.querySelectorAll('.fullscreen');
const body = document.querySelector('body');


fullscreen.forEach(item => {
   const menuWrapper = item.querySelector('.menu-wrapper')
   const itemLink = item.querySelectorAll('.item__link');
   const title = item.querySelector('.menu-content__title');
   const menuMobile = item.querySelector('.menu-mobile');
   const menu = item.querySelector('.menu');
   const menuNav = item.querySelector('.menu__nav');
   const menuTitle = item.querySelector('.menu__title');
   const menuContent = item.querySelector('.menu-content__body');
   const btn = item.querySelector('.menu__btn');   

   const remove = () => {
      if(!event.target.closest('.menu__items') && (menuContent.classList.contains('opacity_active'))){
         setTimeout(()=>{
            menuWrapper.style.background = '';
            menuWrapper.style.width = '0';
            menu.classList.remove('opacity_active');
            menuContent.classList.add('display-none');
            title.classList.add('display-none');
         },400)
      }else{
         menuWrapper.style.background = '';
         menuWrapper.style.width = '';
      }
      menu.classList.remove('opacity_active');
      menuContent.classList.add('display-none');
      title.classList.add('display-none');
      itemLink.forEach(item=>{
         item.classList.remove('item__link_active');               
      })
   }
   const active = (item) => {
      const target = event.target;        
      title.classList.remove('display-none');
      menuContent.classList.remove('display-none');
      menuContent.classList.add('opacity_active');
      title.classList.add('opacity_active');
      menu.classList.add('opacity_active');
      item.classList.add('item__link_active');
      menuWrapper.style.background = '#ffffff';
      menuWrapper.style.width = '100%';

   }
   item.addEventListener('click', event =>{
            event.preventDefault();
            const target = event.target;

            if((!target.closest('.menu__nav')) && menu.classList.contains('line_active') && !target.closest('.menu__btn') && !menu.classList.contains('opacity_active')){
               menuMobile.classList.remove('menu_active');
               menu.classList.remove('line_active');
               body.classList.remove('overflow-none');
            }
            if(target.closest('.menu__btn')){
               menuMobile.classList.toggle('menu_active');
               menu.classList.toggle('line_active');
               body.classList.toggle('overflow-none');
               if(menu.classList.contains('opacity_active')){
                  
                  remove();
               }
            }
            

            menuNav.addEventListener('mouseover', (event) => {
               const target = event.target;

                  itemLink.forEach(item => {
                     item.addEventListener('mouseover', () => {
                        itemLink.forEach(item=>{
                           item.classList.remove('item__link_active');               
                        })
                        active(item);
                        console.log('item: ', item);
                     });
                  console.log('xelloy')
                  
                  })

               if((!target.classList.contains('item__link'))){
                     remove();
               }

            })

   });
});



