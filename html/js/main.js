const links = {
    SetColor:function(color){
    const alist = document.querySelectorAll('a');
    let i = 0;
    while(i < alist.length){
        alist[i].style.color= color;
        i = i + 1;
        }
    }
}

const body = {
    SetColor:function(color){
        document.querySelector('body').style.color=color;
    },
    SetBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor=color;
    }
}


function nightDayHandler(self){
const target = document.querySelector('body');
    if  (self.value === 'Night')
        {body.SetBackgroundColor('black');
         body.SetColor('white');
         self.value = 'Day';
         links.SetColor('white');
}
    else{body.SetBackgroundColor('white');
         body.SetColor('black');
         self.value = 'Night';
         links.SetColor('black');
   }
}