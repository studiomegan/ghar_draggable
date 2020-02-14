const containers = document.querySelectorAll('.wrapper');


const droppable = new Draggable.Droppable(containers, { //register dropzones as containers
  draggable: '.draggable',
  dropzone: '.dropzone',
  delay: 10,  
  mirror: {
    constrainDimensions: true, //prevent element from shrinking while being dragged
    cursorOffsetX: 20,
    cursorOffsetY: 50,
  },
});

let droppableOrigin;
// --- Draggable events --- //
droppable.on('drag:start', (evt) => {
  //If drag then: 
  droppableOrigin = evt.originalSource.parentNode.dataset.dropzone;
});

droppable.on('drag:move', (evt) => {
   //If drag then: 
   droppableOrigin = evt.originalSource.parentNode.dataset.dropzone;
});

droppable.on('droppable:dropped', (evt) => {
  if (droppableOrigin !== evt.dropzone.dataset.dropzone) {
    //if dropped into wrong container then: 
    evt.cancel();
  } else {
    //this.initialDropzone = null;
    document.cookie = "location=word 1";
  }
   if (droppableOrigin === evt.dropzone.dataset.dropzone) {
    console.log('Dropped!');
   }
});


droppable.on('mirror:created', (evt) => {
});


droppable.on('droppable:out', () => console.log('droppable:out'));


// EVENT LISTENER FOR COMPLETING THE DRAG
/*
document.getElementById("drz1").addEventListener("drop", complete);

function complete() {
  this.body.style.backgroundColor = "red";
}
*/

// this will be called onload
/*jQuery(function($) {
    // changed .hover to .each
    $('.UniqueDropzone .BlockLayout--typeFlex .BlockWrapper a h3').each(function() {
        var a = Math.random() * 180 - 5;
        $(this).css('transform', 'rotate(' + a + 'deg)');
    });
});*/

jQuery(function($) {
    // changed .hover to .each
    $('.dropzone.occupied').each(function() {
        var b = Math.round(Math.random() * 80 );
        var c = Math.round(Math.random() * 30);
        $(this).css('bottom', b + 'vh');
        $(this).css('left', c + 'vw');
    });
});
