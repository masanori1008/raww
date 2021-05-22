require(['jquery', 'jquery/ui'], function($) {
    jQuery('.field.qty .minus-btn').click(function() {
        var qty = parseInt(jQuery(this).next().val());
        if (qty > 0) {
            jQuery(this).next().val(qty - 1);
        }
    });
    jQuery('.field.qty .plus-btn').click(function() {
        var qty = parseInt(jQuery(this).prev().val());
        jQuery(this).prev().val(qty + 1);
    });
});
  