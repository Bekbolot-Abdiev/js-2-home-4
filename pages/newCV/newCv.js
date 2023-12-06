const h3=document.querySelector('h3')
const inputs=document.querySelectorAll('input')
const jasooBtn=document.getElementById('create')
const root=document.querySelector('#root')


jasooBtn.onclick=(e)=>{
    // if(inputs.value === '') {

    // } else{
    //     return
    //     showInfo()
    // }
    e.preventDefault()
    showInfo()
}


function showInfo() {
    h3.innerHTML=`${inputs[0].value} ${inputs[1].value}`
    root.innerHTML=`
    <h2>Кесип: ${inputs[2].value}</h2>
    <h4>Тел: ${inputs[3].value}</h4>
    <img width="160px" src='${inputs[4].value}' />
    `
}