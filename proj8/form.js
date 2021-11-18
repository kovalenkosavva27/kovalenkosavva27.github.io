const getItemsFromLocalStorage = () => {
    if (localStorage.getItem('name') !== null)
      $('#name').val(localStorage.getItem('name'));
    if (localStorage.getItem('email') !== null)
      $('#email').val(localStorage.getItem('email'));
    if (localStorage.getItem('message') !== null)
      $('#message').val(localStorage.getItem('message'));
    if (localStorage.getItem('checkbox') !== null) {
      $('#checkbox').prop('checked', localStorage.getItem('checkbox') === 'true');
      if ($('#checkbox').prop('checked')) $('#sendBtn').removeAttr('disabled');
    }
  };
  
  const setItemsToLocalStorage = () => {
    localStorage.setItem('name', $('#name').val());
    localStorage.setItem('email', $('#email').val());
    localStorage.setItem('message', $('#message').val());
    localStorage.setItem('checkbox', $('#checkbox').prop('checked'));
  };
  
  const clearLocalStorage = () => {
    localStorage.clear();
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
    $('#checkbox').prop('checked', false);
  };
  
  $(document).ready(function () {
    getItemsFromLocalStorage();
  
    $('.openBtn').click(() => {
      $('.hiddenDiv').css('display', 'flex');
      history.pushState(true, '', './form');
      clearLocalStorage();
    });

    $('.closeBtn').click(function () {
      $('.hiddenDiv').css('display', 'none');
      history.pushState(false, '', '.');
      clearLocalStorage();
      $('#sendBtn').attr('disabled', '');
    });

    $('#form').submit(function (e) {
      e.preventDefault();
      $('.hiddenDiv').css('display', 'none');
      $('#sendBtn').attr('disabled', '');
      let data = $(this).serialize();
      let name;
      if ($('#name').val() !== '') name = $('#name').val();
      else name = 'user';
      let email;
      if ($('#email').val() !== '') email = $('#email').val();
      else email = 'none';
      let message;
      if ($('#message').val() !== '') msg = $('#message').val();
      else message = 'none';
      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'https://formcarry.com/s/bpETTVmoGY2',
        data: data,
        success: function (error) {
          setTimeout(() => {
            $('.hiddenResponse').css('display', 'flex');
          }, 1500);
          if (error.meta.status === 'success') {
            $('.ans').text("Successful");
          } else alert('Error: ' + error.meta.status);
        },
      });
    });

    $('.close').click(function () {
      console.log('Loading...')
      $('.hiddenResponse').css('display', 'none');
      history.pushState(false, '', '.');
    });

    $('#checkbox').change(function () {
      if (this.checked) $('#sendBtn').removeAttr('disabled');
      else $('#sendBtn').attr('disabled', '');
    });

    $('#form').change(setItemsToLocalStorage);
  
    window.onpopstate = function (e) {
      if (e.state) $('.hiddenDiv').css('display', 'flex');
      else {
        $('.hiddenDiv').css('display', 'none');
      }
    };
  });
