const array = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ];
function render (arr){
  let body = document.querySelector('body')
  arr.forEach((row) => {
    let myRow = document.createElement('div')
    row.forEach((item) => {
        let mySquer = document.createElement('div')
        myRow.appendChild(mySquer)
        if (item === 3) {
            mySquer.setAttribute('class', 'person')
        } else if (item === 1) {
            mySquer.setAttribute('class', 'tree')
        } else {
            mySquer.setAttribute('class', 'field')
        }
    })
    myRow.setAttribute('class', 'row')
    body.appendChild(myRow)
});
};
render(array);