<div class="scrollit" style="/*float: left;
                             width: 95%;*/">

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>


    <!-- The blog -->

   <!-- If other sidebar exists = full width of column -->
    <div class="col-lg-12">
    
       <?php var_dump(get_post_meta(get_the_ID()),'', true); ?>
        <article class="post">

            <div class="">

                <img class="img-responsive" src="http://www.thisisyourkingdom.co.uk/wp-content/uploads/2012/10/SKYE-PROVISIONS-290PX.jpg">

                </a>

            <h2 style="color: #ffad26;"><?php the_title(); ?></h2>
            <p> <?php the_content(); ?></p>
            <p><span style="color: #ffad26;"><a style="color: #ffad26;" href="<?php the_permalink(); ?>">read more</a></span></p>
            <?php 
                previous_post_link( '%link', 'Nästa', true );
                next_post_link( '%link', 'Tidigare', true );
            ?>
            </div>


        </article>
    <?php      


    // If comments are open or we have at least one comment, load up the comment template.
    if ( comments_open() || get_comments_number() ) {
        comments_template();
    }?>
</div>



<?php endwhile; else : ?>
//The name of the theme folder
<p><?php _e( 'Sorry, no posts found.', "Qlique" ); ?></p>

<?php endif; ?>
</div>