$(function(){

    usersArr= [
        {
            id: 1,
            username: "Roman",
            birthday: "24.10.1988",
            city: "Dnepr"
        },

        {
            id: 2,
            username: "Igor",
            birthday: "10.08.1989",
            city: "Cracow"
        },

        {
            id: 3,
            username: "Danil",
            birthday: "15.01.1990",
            city: "London"
        },

        {
            id: 4,
            username: "Mihail",
            birthday: "06.11.1988",
            city: "Paris"
        }];




    var tableWrite = function() {
        var tableBody = '';
        for (i = 0; i < usersArr.length; i++) {
            tableBody += '<tr><td class="list_id">' + usersArr[i].id + '</td><td class="list_name">' + usersArr[i].username + '</td><td class="list_birthday">' + usersArr[i].birthday + '</td><td class="list_city">' + usersArr[i].city + '</td><td><input type="checkbox" name="option3" value="a3"></td><td><input type="checkbox" name="option3" value="a3"></td></tr>';
        }
        $('tbody').html(tableBody);
    };



    var homeInfo = function(){

        $('#home_information').show();
        $('.profile_info').hide();
        $('.form').hide();
        $('#profile').css({'background-color':'white', 'color':'#3d8bcd'});
        $('#home').css({'background-color':'#3d8bcd', 'color':'white'});
        $('.title').text('Dashboard');
        $('#nav_item_user_list').css('font-weight', 'bold');
        $('#nav_item_profile').hide();
        $('#nav_item_edit').hide();


        $('#username').val('');
        $('#birthday').val('');
        $('#city').val('');

    };

    var profileInfo = function(){

        $('.profile_info').show();
        $('#home_information').hide();
        $('.form').hide();
        $('#profile').css({'background-color':'#3d8bcd', 'color':'white'});
        $('#home').css({'background-color':'white', 'color':'#3d8bcd'});
        $('#nav_item_user_list').css('font-weight', '400').show();
        $('.title').text('Profile');
        $('#nav_item_edit').hide();
        $('#nav_item_profile').css({'font-weight':'bold', 'display':'inline'});

    };


    tableWrite();


    $('#nav_item_home').click(function(e){

        e.preventDefault();


        homeInfo()

    });

    $('#nav_item_user_list').click(function(e){

        e.preventDefault();

        homeInfo()


    });

    $('#nav_item_profile').click(function(e){

        e.preventDefault();

        profileInfo();


    });


    $('#edit').click(function (e){

        e.preventDefault();

        $('#home_information').hide();
        $('.profile_info').hide();
        $('.form').show();
        $('#nav_item_edit').css({'font-weight':'bold', 'display':'inline' });
        $('#nav_item_profile').css('font-weight','400');
        $('.title').text('Edit profile');
        $('#username').val($('#info_name').html());
        $('#birthday').val($('#info_birth').html());
        $('#city').val($('#info_city').html());
    });



    $('tbody').on('click', 'tr', function(e){

        e.preventDefault();
        profileInfo();
        $('#info_id').html($(this).find('.list_id').html());
        $('#info_name').html($(this).find('.list_name').html());
        $('#info_birth').html($(this).find('.list_birthday').html());
        $('#info_city').html($(this).find('.list_city').html());
        $('#nav_item_profile').html($(this).find('.list_name').html());



    });

    $('.btn-success').click(function (){

        for (i =0; i < usersArr.length; i++){
            if ($('#info_id').html() == usersArr[i].id){
                usersArr[i].username = $('#username').val();
                usersArr[i].birthday = $('#birthday').val();
                usersArr[i].city = $('#city').val();
            }

        }


        tableWrite();
        homeInfo();

    });
});