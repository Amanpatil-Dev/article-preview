console.log('connected')

const Share=document.querySelector('.svg')
Share.addEventListener('click',(e)=>{
    const BtnShare=e.target.closest('.svg')
    const toolTip=document.querySelector('.tool-tip')
    console.log(toolTip)
    console.log(BtnShare)

    if(!BtnShare.classList.contains('share-active') && !toolTip.classList.contains('unhide')){

        BtnShare.classList.add('share-active')
        toolTip.classList.add('unhide')
        BtnShare.querySelector('path').setAttribute('fill','white')

    }else{
        BtnShare.classList.remove('share-active')
        toolTip.classList.remove('unhide')

        BtnShare.querySelector('path').setAttribute('fill','#6E8098')


    }
    
})