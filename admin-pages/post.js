let form = document.querySelector('form')
let Uname = document.getElementById('name')
let time = document.getElementById('createdAt')
let price = document.getElementById('price')
let desc = document.getElementById('Description')
let img = document.getElementById('img-link')
let userSection = document.getElementById('user_section')
let userCategory = document.getElementById('user_category') 
let userCategorySection = document.getElementById('user_category_section')

form.addEventListener('submit', (e)=>{
        e.preventDefault()

        let obj = {
            name:Uname.value,
            createdAt : time.value,
            price : price.value,
            avatar : img.value,
            Description: desc.value,
            user_category:userCategory.value,
            user_category_section: userCategorySection.value,
            user_section: userSection.value

        }

        let val = userSection.value
        val = val.toString().toLowerCase()
        if(val=='men'){
            val = 'mens'
        }
        fetch(`https://weary-bee-train.cyclic.app/${val}`, {
            method:"POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then((res)=>res.json())
        .then((data)=>console.log(data))
        .catch((err)=>console.log(err))
})