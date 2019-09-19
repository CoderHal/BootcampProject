$('window').ready(function(){
    let userid = window.localStorage.getItem('employeeId');
    if(!userid) {
        $('#signIn').css('display' , 'block');
        $('#signOut').css('display' , 'none');
    } else {
        $('#signOut').css('display' , 'block');
        $('#signIn').css('display' , 'none');
    }
    let time = new Date().toLocaleString();
    $('#attendanceForm').on('submit', () =>{
        event.preventDefault();
        $.ajax({
            type:'GET',
            url: 'http://localhost:3000/employee',
            success:function(data){
                $.each(data, function(index,employee){
                    let employeeId = parseInt(employee.id);
                    let timeIn = time;
                    let timeOut = time;
                    let employeeEmail = $('#email').val();
                    let employeePassword = $('#password').val();

                    if(employee.email == employeeEmail && employee.password == employeePassword){
                        $.ajax({
                            method: 'POST',
                            url: 'http://localhost:3000/attendance',
                            data: {
                                employeeId,
                                timeIn,
                                timeOut
                            }
                            
                        }).done((response)=>{
                            window.location.href = "../index.html"
                            window.localStorage.setItem('employeeId', employeeId);
                            $('#signOut').css('display' , 'block');
                            $('#signIn').css('display' , 'none');
                        })
                    }
                });
            }
        });
    });
});
