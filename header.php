<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <html class="no-js" lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title><?php wp_title( '|', true, 'right' ); bloginfo( 'name' ); ?></title>
            <meta name="description" content="Qlique-time">

            <?php wp_head(); ?>

        </head>
        <body <?php body_class()  ?>>

            <div id="wrap">  
                <nav class="navbar navbar-default navbar-fixed-top zobilu" role="navigation">
                    <!-- <div class="container"> -->
                    <div class="navbar-header">
                        <a class="navbar-brand" href="<?php echo home_url(); ?>">
                            <?php bloginfo('name'); ?>
                        </a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li>   <a href="#menu-toggle" id="menu-toggle">Kategorier</a></li>
                    </ul>
                    <!--  </div>  -->
                    <div class="col-sm-3 col-md-3 pull-right">
                        <form class="navbar-form" role="search">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search" name="search-term" id="search-term">
                                <div class="input-group-btn">
                                    <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </nav>
                <?php // get_template_part('content','header-nav'); ?>