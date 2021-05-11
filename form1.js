function myFunction() {
    const radio = document.getElementsByName("gender");
    for(let i=0; i<radio.length;i++)
    {
        if(radio[i].checked)
        {
            gender_selected = radio[i].value;
        }
    }
    const result = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          gender: gender_selected,
          age: document.getElementById('age').value  
        }
    console.log(result);
}

