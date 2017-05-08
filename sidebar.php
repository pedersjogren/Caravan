<div id="sidebar-wrapper">
   <!-- <p><a id="menu-toggle-back"><i class="ion-minus-circled" style="font-size: 24px;"></i></a></p> -->

    <ul class="sidebar-nav">
        <li><a class="navbar text-center" href="<?php echo home_url(); ?>">
            <?php bloginfo('name'); ?>
            </a></li>
        <?php
        /*
            $categories = get_categories(); 
            foreach ($categories as $category) {

                echo "<li id=". $category->cat_ID ." style='font-size: 24px; line-height: 40px;/* border-radius: 50%; */ /*border: 1px solid #ccc;margin: 0px 8px;color: inherit;'> <a href=" . get_option('home').'/category/'.$category->slug. ">" . $category->cat_name . "</a></li>";
            }
            */

        $categories = get_categories(); 
        foreach ($categories as $category) {

            echo "<li data-type=". $category->cat_ID ." class='sidebar-categories' style='font-size: 24px; line-height: 40px;/* border-radius: 50%; */ /*border: 1px solid #ccc;margin: 0px 8px;color: inherit;'>". $category->cat_name . "</li>";
        }
        ?>

    </ul>
</div>