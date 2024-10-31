<?php
/**
* Plugin Name: NK - Progress Counter Block
* Plugin URI: https://about.me/nitishkaila
* Description: Progress Counter Block plugin provide to add circle or bar counter with color settings
* Author: Nitish Kaila
* Author URI: https://profile.wordpress.org/kailanitish90
* Version: 1.0.0
* License: GPL2+
* License URI: http://www.gnu.org/licenses/gpl-2.0.txt
*/

defined( 'ABSPATH' ) || exit;

/**
* Enqueue the block's assets for the editor.
*
* @since 1.0.0
*/
function nk_progress_counter_block_enqueue() {
    wp_register_script(
        'nk-progress-counter-block-script',
        plugins_url( 'js/block.build.js', __FILE__ ),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components') // Dependencies, defined above.
    );
    wp_register_style(
        'nk-progress-counter-block-style',
        plugins_url( '/css/admin-block.css', __FILE__ )
    );

    register_block_type('nk/progress-counter', array(
        'editor_script' => 'nk-progress-counter-block-script',
        'editor_style' => 'nk-progress-counter-block-style',
    ));
}

/**
 * Action for the register gutenberg custom block
 */
add_action('admin_init', 'nk_progress_counter_block_enqueue');

/**
 * Enqueue scripts and styles.
 */
function nk_progress_counter_enqueue_scripts() {

    wp_enqueue_script( 'nk-progress-script', plugins_url( 'js/progress-block.js', __FILE__ ), array('jquery'), false, true );
    wp_enqueue_style('nk-progress-style', plugins_url( 'css/progress-block.css', __FILE__ ) );
}
add_action( 'wp_enqueue_scripts', 'nk_progress_counter_enqueue_scripts' );