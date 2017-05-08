<?php
include 'classes/wp_bootstrap_navwalker.php';
add_theme_support( 'menus' );   
add_theme_support( 'post-thumbnails' );


function qlique_theme_styles(){


    wp_enqueue_style( 'bootstrap_css' , get_template_directory_uri() . '/css/bootstrap.css' );
    wp_enqueue_style('main_css', get_template_directory_uri() . '/style.css');

}

add_action( 'wp_enqueue_scripts', 'qlique_theme_styles' ); 



function my_body_classes($classes) {
	

	is_front_page()       		? $classes[] = 'home' : null;
    /*
	is_page_template('your-template.php')	? $c[] = 'your-template-class'	: null; */
	is_404()        		? $classes[] = 'error404'     	: null; 
    wp_is_mobile()        		? $classes[] = 'is_mobile'     	: null; 
    return $classes;
}
add_filter('body_class','my_body_classes');

function qlique_theme_js(){

    global $wp_scripts; 

    wp_register_script( 'html5_shiv' , 'https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js' , '' , '' , false );
    wp_register_script( 'respond_js' , 'https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js' , '' , '' , false );

    // Conditionally load this only for IE < 9
    $wp_scripts->add_data( 'html5_shiv', 'conditional', 'lt IE 9' );    
    $wp_scripts->add_data( 'respond_js', 'conditional', 'lt IE 9' );

    wp_enqueue_script( 'modernizr_js', get_template_directory_uri(). '/js/modernizr-custom.js', '', '', true );

    wp_enqueue_script( 'bootstrap_js' , get_template_directory_uri() . '/js/bootstrap.min.js' , array('jquery') , '' , true );
    
    wp_enqueue_script( 'main_js', get_template_directory_uri(). '/js/main.js', '', '', true );
    //Base url
    wp_localize_script('main_js', 'main_url', array( 'siteurl' => get_option('siteurl') ));
    
    wp_localize_script('main_js', 'current_id', array( 'id' => get_the_ID()));


}
add_action( 'wp_enqueue_scripts', 'qlique_theme_js' ); 


add_action( 'wp_enqueue_scripts', 'bg_enqueue_ionicons' );
function bg_enqueue_ionicons() {
	wp_enqueue_style( 'ionicons', '//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css', array(), 'CHILD_THEME_VERSION' );
}

function wpt_create_widget( $name, $id, $description ) {

	register_sidebar(array(
		'name' => __( $name ),	 
		'id' => $id, 
		'description' => __( $description ),
		'before_widget' => '<div class="widget">',
		'after_widget' => '</div>',
		'before_title' => '<h2 class="module-heading">',
		'after_title' => '</h2>'
	));

}

wpt_create_widget( 'Page Sidebar', 'page', 'Displays on the side of pages with a sidebar' );

function most_popular_posts($id){
    
    $new_key = 'get_page_views';
    $count = get_post_meta($id, $new_key, true);
    var_dump($count);
    
    if($count){
        $count = 0; 
    }
}

/*
function get_pagination_in_json( $post_response, $post, $context ) {

    $post = get_post($post['ID']);

    $previous_post = get_adjacent_post( true, '', true, 'my_custom_taxonomy_name' );
    $next_post = get_adjacent_post( true, '', false, 'my_custom_taxonomy_name' );

    if ( is_a( $previous_post, 'WP_Post' ) ) {
        $previous = get_permalink($previous_post->ID);
        $post_response['pagination']['previous'] = $previous;
    }

    if ( is_a( $next_post, 'WP_Post' ) ) {
        $next = get_permalink($next_post->ID);
        $post_response['pagination']['next'] = $next;
    }

    return $post_response;
}
add_filter( 'json_prepare_post', 'get_pagination_in_json', 10, 3 );
*/

?>