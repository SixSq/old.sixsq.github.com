SixSq Sarl
----------

This is test site for trying out gitpages for company web site.
Please see the company's main web page at
[http://sixsq.com/](http://sixsq.com/).

Comments on design (Cal):

  * ~~"Latest Blogs Entries" should be "Latest Blog Entry" in images~~

  * ~~"Latest Tweets" should be "Latest Tweet" in images (if we stick
    with one tweet)~~

  * Wrong SixSq logo being used; should have dot cropped by square

  * Would like to see "Learn more" links on "front latest" to be
    aligned along the bottom of boxes.

  * ~~Stylesheet cuts text on edges in rotating banner.~~ 

  * Links can't be used in twitter block because stylesheet makes all
    links look like "Learn more >>".  Fix stylesheet.

  * Stylesheet has been updated to style ul in the tweet block.  But,
    this embeds an ul inside a paragraph; this should be a div
    instead to make legal HTML.

  * Compressed font in banner title makes word boundries too small.
    Is it possible to compress text without compressing the spaces? 

  * The menu at the top and in the footer differ by just style.  Is is
    possible to use the CSS to style these menus differently and avoid
    having to maintain the list in two separate files? 

  * ~~I'm finding the banner rotation annoying.  It would help if it
    were slower, but also a fade effect might be less jarring.  If
    fade is used, then there is an issue with the bottom of the banner
    being cut off.~~ 

  * See if we can add some indicator of the number of banner images in
    the rotation.  Use the pager from bxslider? 

  * ~~There are currently no "Services".  Should we maintain the
    distinction between "Products" and "Services"?~~ 

  * ~~Pagination is not working yet.  Paging by category type requires a
    plugin.~~ (removed for the moment) 

  * ~~The "Lorem ipsum..." text in the customers footer needs to be
    changed.  What is it that we want to say here? ~~

  * Need to find images for products ~~(and services if they're kept)~~. 

  * The mechanism used to add images to the products requires two
    different images to be made for each product.  This will be
    tedious to maintain/extend.

  * The selection of the image in the product tiles is done by the
    class of the entry with the images hardcoded into the CSS.  This
    should be instead pulled from an "image" keyword (or keywords) in
    the product "blog" entry to avoid having to edit the CSS everytime
    a change is made. 

  * Article pages look dull.

  * Need square-ish images for each main tile (StratusLab, SlipStream, etc)
    to be used for blog and news entries

  * Need an image for the CiB

  * Blogs entries -> Blog entries 

  * Add link to latest titles to the corresponding list