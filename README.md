SixSq Sarl
----------

This is test site for trying out gitpages for company web site.
Please see the company's main web page at
[http://sixsq.com/](http://sixsq.com/).

Comments on design (Cal):

  * "Latest Blogs Entries" should be "Latest Blog Entries" in images

  * Wrong SixSq logo being used; should have dot cropped by square

  * Stylesheet cuts text on edges in rotating banner. 

  * Links can't be used in twitter block because stylesheet makes all
    links look like "Learn more >>".  Fix stylesheet.

  * Compressed font in banner title makes word boundries too small.
    Is it possible to compress text without compressing the spaces? 

  * The menu at the top and in the footer differ by just style.  Is is
    possible to use the CSS to style these menus differently and avoid
    having to maintain the list in two separate files? 

  * I'm finding the banner rotation annoying.  It would help if it
    were slower, but also a fade effect might be less jarring. 

  * See if we can add some indicator of the number of banner images in
    the rotation. 

  * There are currently no "Services".  Should we maintain the
    distinction between "Products" and "Services"? 

  * Pagination is not working yet.  Paging by category type requires a
    plugin. 

  * The "Lorem ipsum..." text in the customers footer needs to be
    changed.  What is it that we want to say here? 

  * Should the URLs for non-blog entries have the dates removed? 

  * Need to find images for products (and services if they're kept). 

  * The mechanism used to add images to the products requires two
    different images to be made for each product.  This will be
    tedious to maintain/extend.

  * The selection of the image in the product tiles is done by the
    class of the entry with the images hardcoded into the CSS.  This
    should be instead pulled from an "image" keyword (or keywords) in
    the product "blog" entry to avoid having to edit the CSS everytime
    a change is made. 

