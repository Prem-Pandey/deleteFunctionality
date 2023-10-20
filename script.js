let delbtn = document.getElementById('delete')
    delbtn.style.display = 'none'
       function saveToLocalStorage(event)
       {
        event.preventDefault()
       
        let arr;
        const object = {
             name : event.target.name.value,
             email : event.target.email.value,
             phone : event.target.phone.value,
              age :  event.target.age.value
        }
        const localStorageContent = localStorage.getItem('object')
        
        if(localStorageContent===null)
        {
            arr = []
        }
        else{
            arr = JSON.parse(localStorageContent)
        }
        
        arr.push(object)
        
        
        const stringifiedArr  = JSON.stringify(arr)
        
        localStorage.setItem(object.email, stringifiedArr)
        showUserOnScreen(object)
       
     
       }
        function showUserOnScreen(object)
        {
            const parentEle = document.getElementById('listItems')
            const childEle = document.createElement('li')

            childEle.textContent = object.name + '-' + object.phone + '-'+ object.email + '-'+ object.age
            const delBtn = document.createElement('input')
            delBtn.type = 'button'
            delBtn.value = 'delete'
            delBtn.onclick = () => {
                localStorage.removeItem(object)
                localStorage.removeItem(object.phone)
                localStorage.removeItem(object.email)
                localStorage.removeItem(object.age)
                parentEle.removeChild(childEle)
            }
            childEle.appendChild(delBtn)
            parentEle.appendChild(childEle)

        }
    
       