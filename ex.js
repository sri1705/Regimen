/*const list = document.querySelector('.list')
const listItems = document.querySelectorAll('.list-item')

// let dragIndex, dragSource

const getMouseOffset = (evt) => {
  const targetRect = evt.target.getBoundingClientRect()
  const offset = {
    x: evt.pageX - targetRect.left,
    y: evt.pageY - targetRect.top
  }
  return offset
}

const getElementVerticalCenter = (el) => {
  const rect = el.getBoundingClientRect()
  return (rect.bottom - rect.top) / 2
}

const appendPlaceholder = (evt, idx) => {
  evt.preventDefault()
  if (idx === dragIndex) {
    return
  }
  
  const offset = getMouseOffset(evt)
  const middleY = getElementVerticalCenter(evt.target)
  const placeholder = list.children[dragIndex]
  
  // console.log(`hover on ${idx} ${offset.y > middleY ? 'bottom half' : 'top half'}`)
  if (offset.y > middleY) {
    list.insertBefore(evt.target, placeholder)
  } else if (list.children[idx + 1]) {
    list.insertBefore(evt.target.nextSibling || evt.target, placeholder)
  }
  return
}

function sortable(rootEl, onUpdate) {
   var dragEl;
   
   // Making all siblings movable
   [].slice.call(rootEl.children).forEach(function (itemEl) {
       itemEl.draggable = true;
   });
   
   // Function responsible for sorting
   function _onDragOver(evt) {
       evt.preventDefault();
       evt.dataTransfer.dropEffect = 'move';
      
       var target = evt.target;
       if (target && target !== dragEl && target.nodeName == 'DIV') {
           // Sorting
       const offset = getMouseOffset(evt)
       const middleY = getElementVerticalCenter(evt.target)

      if (offset.y > middleY) {
        rootEl.insertBefore(dragEl, target.nextSibling)
      } else {
        rootEl.insertBefore(dragEl, target)
      }
     }
   }
   
   // End of sorting
   function _onDragEnd(evt){
       evt.preventDefault();
      
       dragEl.classList.remove('ghost');
       rootEl.removeEventListener('dragover', _onDragOver, false);
       rootEl.removeEventListener('dragend', _onDragEnd, false);


       // Notification about the end of sorting
       onUpdate(dragEl);
   }
   
   // Sorting starts
   rootEl.addEventListener('dragstart', function (evt){
       dragEl = evt.target; // Remembering an element that will be moved
       
       // Limiting the movement type
       evt.dataTransfer.effectAllowed = 'move';
       evt.dataTransfer.setData('Text', dragEl.textContent);


       // Subscribing to the events at dnd
       rootEl.addEventListener('dragover', _onDragOver, false);
       rootEl.addEventListener('dragend', _onDragEnd, false);


       setTimeout(function () {
           // If this action is performed without setTimeout, then
           // the moved object will be of this class.
           dragEl.classList.add('ghost');
       }, 0)
   }, false);
}
                       
// Using                    
sortable(list, function (item) {
   console.log(item);
});

.item.muuri-item-dragging {
    z-index: 3;
}
.item.muuri-item-releasing {         
    z-index: 2;
}
.item.muuri-item-hidden {
    z-index: 0;
}
.item-content{
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    color: #fff;
    background: #59687d;
    font-size: 40px;
    text-align: center;
}
.item.muuri-item-dragging .item-content{
   background: #899382;
}
.item.muuri-item-releasing .item-content{
   background: #152c43;
}
*/



      
/*var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  centeredSlides: true,
  fade: true,

  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
   dynamicBullets: true,
  },
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 60,
  loop: false,
  centerSlider: 'true',
  fade: 'true',
  grabCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0: {
      slidesPerView:1,
    },
    520: {
      slidesPerView:2,
    },
    950: {
      slidesPerView:3,
    },
  },
});*/

const app=document.querySelector('.weather-app');
const temp=document.querySelector('.temp');
const dateOutput=document.querySelector('.date');
const timeOutput=document.querySelector('.time');
const conditionOutput=document.querySelector('.conditon');
const nameOutput=document.querySelector('.name');
function dayOfTheWeek(day, month, year){
  const weekday=[
    "Sunday",
    "Monday",
    "tuesday",
    "Wednesday",
    "thursday",
    "Friday",
    "Saturday"
  ];
  return weekday[new Date(`${day}/${month}/${year}`).getDay()];
};
function fetchWeatherDate(){
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    temp.innerHTML=data.current.temp_c + "&#176;";
    conditionOutput.innerHTML = data.current.condition.text;
    const date = data.location.localtime;
    const y = parseInt(date.substr(0,4));
    const m = parseInt(date.substr(5,2));
    const d = parseInt(date.substr(8,2));
    const time =date.substr(11);

    dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${d}, ${m}, ${y}`;
    timeOutput.innerHTML = time;
    nameOutput.innerHTML=data.location.name;
    
    const id = data.current.id;
    if(id==200 || id==201 || id==202 || id==210 || id==211 || id==212 || id==221 || id==230 || id==231 || id==232){
      app.style.backgroundImage=`url(./images/thunderstorm)`;
    }
  });

};