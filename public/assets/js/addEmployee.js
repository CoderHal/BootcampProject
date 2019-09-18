$('window').ready(function(){
    $('#addEmployee').on('click', ()=>{
        event.preventDefault()
        alert('hi');
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let department = $('#department').val();
        let email = $('#email').val();
        let password = $('#passWord').val();
        $.ajax({
                url: 'http://localhost:3000/employee',
                method: 'post',
                data: {
                    firstName,
                    lastName,
                    department,
                    email,
                    password
                }
    }).done((response)=>{
        console.log(response)
    })
})

})
