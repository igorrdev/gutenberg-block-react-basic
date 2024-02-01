<?php
/**
 * Plugin Name: My Block
 * Plugin URI:
 * Description: Gutenberg Block
 * Author:
 * Author URI:
 */

 function tst_myblock_init(){
    register_block_type_from_metadata( __DIR__ );
 }
 add_action('init','tst_myblock_init');