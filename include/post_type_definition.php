<?php  
// Register Custom Post Type Accordion
function create_accordion_cpt() {

    $labels = array(
        'name' => _x( 'Accordion', 'Post Type General Name', 'accordio' ),
        'singular_name' => _x( 'Accordion', 'Post Type Singular Name', 'accordio' ),
        'menu_name' => _x( 'Accordion', 'Admin Menu text', 'accordio' ),
        'name_admin_bar' => _x( 'Accordion', 'Add New on Toolbar', 'accordio' ),
        'archives' => __( 'Accordion Archives', 'accordio' ),
        'attributes' => __( 'Accordion Attributes', 'accordio' ),
        'parent_item_colon' => __( 'Parent Accordion:', 'accordio' ),
        'all_items' => __( 'All Accordion', 'accordio' ),
        'add_new_item' => __( 'Add New Accordion', 'accordio' ),
        'add_new' => __( 'Add New', 'accordio' ),
        'new_item' => __( 'New Accordion', 'accordio' ),
        'edit_item' => __( 'Edit Accordion', 'accordio' ),
        'update_item' => __( 'Update Accordion', 'accordio' ),
        'view_item' => __( 'View Accordion', 'accordio' ),
        'view_items' => __( 'View Accordion', 'accordio' ),
        'search_items' => __( 'Search Accordion', 'accordio' ),
        'not_found' => __( 'Not found', 'accordio' ),
        'not_found_in_trash' => __( 'Not found in Trash', 'accordio' ),
        'featured_image' => __( 'Featured Image', 'accordio' ),
        'set_featured_image' => __( 'Set featured image', 'accordio' ),
        'remove_featured_image' => __( 'Remove featured image', 'accordio' ),
        'use_featured_image' => __( 'Use as featured image', 'accordio' ),
        'insert_into_item' => __( 'Insert into Accordion', 'accordio' ),
        'uploaded_to_this_item' => __( 'Uploaded to this Accordion', 'accordio' ),
        'items_list' => __( 'Accordion list', 'accordio' ),
        'items_list_navigation' => __( 'Accordion list navigation', 'accordio' ),
        'filter_items_list' => __( 'Filter Accordion list', 'accordio' ),
    );
    $args = array(
        'label' => __( 'Accordion', 'accordio' ),
        'description' => __( '', 'accordio' ),
        'labels' => $labels,
        'menu_icon' => 'dashicons-menu',
        'supports' => array('title', 'custom-fields'),
        'taxonomies' => array(),
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 5,
        'show_in_admin_bar' => true,
        'show_in_nav_menus' => false,
        'can_export' => true,
        'has_archive' => true,
        'hierarchical' => false,
        'exclude_from_search' => false,
        'show_in_rest' => true,
        'publicly_queryable' => true,
        'capability_type' => 'post',
    );
    register_post_type( 'accordion', $args );

}

add_action( 'init', 'create_accordion_cpt', 0 );
