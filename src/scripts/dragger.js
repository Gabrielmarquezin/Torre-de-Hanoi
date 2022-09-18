const towers = [[5, 4, 3, 2, 1], [], []]
const positions = ['p1', 'p2', 'p3', 'p4', 'p5', 't1', 't2', 't3']
const FromTower = []
const TowerStart = []

const disk = []

const dragItens = document.querySelectorAll('.drag-item')
const dropBox = document.querySelectorAll('.drop')


dragItens.forEach((element, index)=>{
    element.addEventListener('dragstart', dragstart)
    element.addEventListener('dragend', dragend)
})

dropBox.forEach((box)=>{
    box.addEventListener('dragover', dragOver)
    box.addEventListener('drop', drop)
    box.addEventListener('dragleave', drogLeave)
})

function dragstart(){
    const eleClasses = this.classList
    selectElement(eleClasses)
    
    setTimeout(()=>{
        this.classList.add('invisble')
    }, 0)

}

function dragend(e){
    e.preventDefault()
    this.classList.remove('invisble')
}

function dragOver(e){
    e.preventDefault()
    this.classList.add('enter')
}

function drop(e){
    e.preventDefault()
   
    console.log(a())
    const Classes = this.classList
     
    
    selectTower(Classes)
    init()

   
 
}

function drogLeave(e){
    e.preventDefault()
    this.classList.remove('drop')
    this.classList.remove('enter')
    
    const cls = this.classList

    selectTowerStart(cls)
}
//fim



//SELECIONANDO ELEMENTOS
function selectTower(arr){
    arr.forEach((element, index) =>{
       if(element == 'T1' || element == 'T2' || element == 'T3'){
          const numbert =  parseInt(element.split('').pop())
          
        }
    })
}

function selectTowerStart(arrStart){
    arrStart.forEach(element =>{
        if(element == 'T1' || element == 'T2' || element == 'T3'){
            const towerNumber =  parseInt(element.split('').pop())
            TowerStart.push(towerNumber)
            for (let i = TowerStart.length -1; i > 0; i--) {
                TowerStart.pop();
              }
         }
     })
}

function selectElement(item){
     item.forEach(element =>{
        if(element == 'd5' || element == 'd4' || element == 'd3' || element == 'd2' || element == 'd1'){
            disk.push(element)
        }
     })
}

//ESQUEMATIZANDO
function init(){
  
    

    /*
    ItemTower.forEach((tower, index)=>{
        towers.forEach(torre => {
            torre.forEach((t, position) => {

            })
        })
        const d = document.querySelector("."+disk[index])
        const cls = tower.toLowerCase()
        const i = parseInt(tower.split('').pop())
        console.log(i)
        positions.forEach(position =>{
            d.classList.remove(position)
        })

       d.classList.add(cls)
       d.classList.add('p'+(index+1))
       

       
    })
*/
}

const a = ()=>{
    
      console.log(TowerStart); 

}