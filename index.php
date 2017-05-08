<?php

get_header();
?>

<div id="wrapper">

    <!-- Sidebar -->
<?php  get_sidebar(); ?>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->

    <div id="page-content-wrapper">

        <div class="container-fluid">
            <a href="#menu-toggle" id="menu-toggle"><i class="ion-plus-circled" style="font-size: 24px;"></i></a>
            <!-- <div class="row">
        
                <!--
<div class="col-lg-3 fixie" style="width: 5%; height:100%; background:aqua; border: 1px solid #8a8a8a">

<ion-icon name="md-add-circle"></ion-icon> 
<a href="#menu-toggle" id="menu-toggle"><i class="ion-plus-circled" style="font-size: 24px;"></i></a>

</div>
-->
                <!-- Load posts here -->



                <style>
                    .modal-dialog {
                        width: 100%;
                        height: 100%;
                        padding: 0;
                    }

                    .modal-content {
                        height: 100%;
                        border-radius: 0;

                    }
                    .modal {
                  
                        margin-left: 5px;
                        margin-right: 5px;
                     
                    }
                </style>
         

                <!-- Modal -->
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="load-container"></div> 
                <!-- <button class="btn-info" id = "button-load-related">Load related posts</button> -->


            <!-- </div> -->
        </div>
    </div>
    <!-- /#page-content-wrapper -->

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
