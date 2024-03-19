let cp = 'X';
const array = Array(9).fill(null);
function checkwinner(){
    if(    (array[0] !== null && array[0] == array[1] && array[1] == array[2])
    || (array[3] !== null && array[3] == array[4] && array[4] == array[5])
|| (array[6] !== null && array[6] == array[7] && array[7] == array[8])
|| (array[0] !== null && array[0] == array[3] && array[3] == array[6])
|| (array[1] !== null && array[1] == array[4] && array[4] == array[7])
|| (array[2] !== null && array[2] == array[5] && array[5] == array[8])
|| (array[0] !== null && array[0] == array[4] && array[4] == array[8])
|| (array[2] !== null && array[2] == array[4] && array[4] == array[6])
)
{
    alert("winner is " +cp);
    reset();
}
}
function reset(){
    const array = Array(9).fill(null);
    location.reload();
    
}
function handleclick(el){
    const value = el.id;
    const id = Number(value);
    if(array[id-1] === null){
        array[id-1] = cp;
        let set = document.getElementById(value);
        set.innerHTML = cp;
        checkwinner();
        cp = cp === 'X' ? '0' : 'X';
    }
    else{
        alert('Already written')
    }
    // value.innerHTML = "X";



    // if(x%2 == 0){
        // array[id] = "X";
        // x++;
    // }   
    // else{
        // set.innerHTML = "O";
        // array[id] = "O";
        // x++;
    // }
    console.log(value);
}