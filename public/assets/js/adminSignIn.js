$(function() {
    $('#adminLogin').submit((e) => {
        e.preventDefault();
        const adminMail = document.querySelector('.email').value;
        const adminPassword = document.querySelector('.password').value;
        $.ajax(
            {
                type:'GET',
                url: 'http://localhost:3000/admin',
                success:function(data){
                    console.log(data);
                    $.each(data, function(index,admin){
                        console.log(admin);
                        if(admin.email === adminMail && admin.password === adminPassword){
                            window.location.href = "../admin.html"
                        } else{
                            console.log('error')
                        }
                    })
                },
                error:function(){
                    console.log('Incorrect login details')
                }
            }
        )
    })
})
