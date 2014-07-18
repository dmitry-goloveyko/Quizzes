(function ($) {
    $('*').error(function () {
        $('body').prepend('<div id="errorMessage" style="position:fixed; float:right; background-color:red;">There is an unexpected error on page</div>');
    });
})(jQuery);