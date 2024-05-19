<?php
/*
Plugin Name: Custom WooCommerce Fees
Description: Adds a Cash on Delivery fee to WooCommerce cart.
Version: 1.0
Author: Stamelos
*/

// Hook to WooCommerce cart calculate fees
function custom_woocommerce_fees($cart) {
    if (is_admin() && !defined('DOING_AJAX')) {
        return;
    }

    $cod_fee = 3.5;
    $international_fee = 10;
    $base_country = 'GR'; // Greece country code

    // Get chosen payment method and shipping country
    $chosen_gateway = WC()->session->get('chosen_payment_method');
    $shipping_country = WC()->customer->get_shipping_country();

    // Add COD fee if chosen payment method is COD and shipping country is Greece
    if ($chosen_gateway === 'cod' && $shipping_country === $base_country) {
        $cart->add_fee(__('Cash On Delivery Fee', 'woocommerce'), $cod_fee);
    } elseif ($chosen_gateway === 'cod') {
        // Add international fee for other shipping countries
        $cart->add_fee(__('Cash On Delivery Fee', 'woocommerce'), $international_fee);
    }
}

// Hook into WooCommerce cart calculation
add_action('woocommerce_cart_calculate_fees', 'custom_woocommerce_fees', 20, 1);
add_action('wp_ajax_update_order_review', 'custom_woocommerce_fees');
add_action('wp_ajax_nopriv_update_order_review', 'custom_woocommerce_fees');





