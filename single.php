<?php get_header(); ?>


<div id="wrapper">

    <!-- Sidebar -->
    <?php  get_sidebar(); ?>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->

    <div id="page-content-wrapper">

        <div class="container-fluid primary">




            <div class="row">

                <?php  get_template_part('partials/content','posts'); ?> 

            </div>
        </div>


        <div class="container-fluid checkout">

            <?php  //get_template_part('partials/content','slideshow'); ?> 



            <div class="row">
                <div class="col-lg-12">
                    <h3>Check out these!</h3>
                    <div id="load-back"></div>
                    <div id="load-forward"></div>
                    <div id="load-container">   

                    </div> 
                </div>
            </div>

        </div>
    </div>
</div>
<script>

    (function ($) {

        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
        $("#menu-toggle-back").click(function(e) {

            $("#wrapper").toggleClass("toggled");
        });
    })(jQuery);
</script>
<?php get_footer(); ?>