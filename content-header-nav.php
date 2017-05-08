
<?php $args = array(
    'show_option_all'    => '',
    'show_option_none'   => '',
    'option_none_value'  => '-1',
    'orderby'            => 'ID',
    'order'              => 'ASC',
    'show_count'         => 0,
    'hide_empty'         => 1,
    'child_of'           => 0,
    'exclude'            => '',
    'include'            => '',
    'echo'               => 1,
    'selected'           => 0,
    'hierarchical'       => 0,
    'name'               => 'cat',
    'id'                 => '',
    'class'              => 'postform',
    'depth'              => 0,
    'tab_index'          => 0,
    'taxonomy'           => 'category',
    'hide_if_empty'      => false,
    'value_field'	     => 'term_id',
); ?>


    <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="<?php echo home_url(); ?>">
                    <?php bloginfo('name'); ?>
                </a>
            </div>
            <ul class="nav navbar-nav">
                <li>   <a href="#menu-toggle" id="menu-toggle">Kategorier</a></li>




            </ul>

            <div class="dropdown-container">
                <div class="dropdown">
                    <button class="btn btn-default navbar-btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
                        Kategorier
                        <span class="caret"></span>
                    </button>

                    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
                        <?php
                        $categories = get_categories(); 
                        foreach ($categories as $category) {

                            echo "<li role=presentation'><a role='menuitem' tabindex='-1' href=" . get_option('home').'/category/'.$category->slug. ">" . $category->cat_name . "</a></li>";
                        }
                        ?>

                    </ul>
                </div>
            </div>
        </div>
    </nav>