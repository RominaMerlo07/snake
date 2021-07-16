/*que diferencias existen entre onclic y addEventListerner*/


$(function() {

    var username,
        password,
        btnClose = document.getElementById('close'),
        btnLogin = document.getElementById('login'),
        btnIngresar = document.getElementById('ingresar');
    // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
    /*     var emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            name = $("#name"),
            username = $("#username"),
            email = $("#email"),
            password = $("#password"),
            allFields = $([]).add(name).add(username).add(email).add(password),
            tips = $(".validateTips"); */

    function showModal() {
        $('.container-modal').addClass('show');
        $('.modal').addClass('show');
    };

    function showSnake() {
        $('.container-flex').addClass('showSnake');
    };

    btnClose.addEventListener("click", function(e) {
        e.preventDefault();
        $('.container-modal').removeClass('show');
        $('.modal').removeClass('show');
    });


    btnLogin.addEventListener('click', showModal);

    //$(".btnLogin").button().on("click", showModal);

    btnIngresar.addEventListener("click", function(e) {
        e.preventDefault();
        username = $('#username').val();
        password = $('#password').val();
        if (username === "admin" && password === "admin") {
            alert("BIENVENIDO " + username);
            $('.container-modal').removeClass('show');
            $('.modal').removeClass('show');
            showSnake();
            $("#login").html(username); // pensar como hacer para que no renderice el login de nuevo
        }
    });
});


/* $(function() {
    var dialog, form,

        // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
        emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        name = $("#name"),
        user = $("#user"),
        email = $("#email"),
        password = $("#password"),
        allFields = $([]).add(name).add(user).add(email).add(password),
        tips = $(".validateTips");

    function updateTips(t) {
        tips
            .text(t)
            .addClass("ui-state-highlight");
        setTimeout(function() {
            tips.removeClass("ui-state-highlight", 1500);
        }, 500);
    }

    function checkLength(o, n, min, max) {
        if (o.val().length > max || o.val().length < min) {
            o.addClass("ui-state-error");
            updateTips("Length of " + n + " must be between " +
                min + " and " + max + ".");
            return false;
        } else {
            return true;
        }
    }

    function checkRegexp(o, regexp, n) {
        if (!(regexp.test(o.val()))) {
            o.addClass("ui-state-error");
            updateTips(n);
            return false;
        } else {
            return true;
        }
    }

    function addUser() {
        var valid = true;
        allFields.removeClass("ui-state-error");

        valid = valid && checkLength(name, "username", 3, 16);
        valid = valid && checkLength(user, "nombre", 3, 100);
        valid = valid && checkLength(email, "email", 6, 80);
        valid = valid && checkLength(password, "password", 5, 16);

        valid = valid && checkRegexp(name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter.");
        valid = valid && checkRegexp(user, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter.");
        valid = valid && checkRegexp(email, emailRegex, "eg. ui@jquery.com");
        valid = valid && checkRegexp(password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9");

        if (valid) {
            $("#users tbody").append("<tr>" +
                "<td>" + name.val() + "</td>" +
                "<td>" + user.val() + "</td>" +
                "<td>" + email.val() + "</td>" +
                "<td>" + password.val() + "</td>" +
                "</tr>");
            dialog.dialog("cerrar");
        }
        return valid;
    }

    dialog = $("#dialog-form").dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Crear Usuario": addUser,
            Cancel: function() {
                dialog.dialog("Cancelar");
            }
        },
        close: function() {
            form[0].reset();
            allFields.removeClass("ui-state-error");
        }
    });

    form = dialog.find("form").on("submit", function(event) {
        event.preventDefault();
        addUser();
    });

    $("#create-user").button().on("click", function() {
        dialog.dialog("open");
    });
}); */