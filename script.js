
const empties = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

empties.forEach(function(empty){
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('drop', drop)
})

function dragStart(){
    this.classList.add('hold')
    setTimeout(() => this.style.visibility = 'hidden', 0)
}
function dragLeave(){
    this.classList.remove('hovered')
}
function dragEnter(e){
    e.preventDefault()

}
function dragOver(e){
    e.preventDefault()
    this.classList.add('hovered')
}
function drop(){
    this.classList.remove('hovered')
    this.append(fill)
}
function dragEnd(){
    this.style.visibility = 'visible'
    this.classList.remove('hold')
}
