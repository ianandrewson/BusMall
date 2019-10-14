You'll need data that describes the products. Include:
        an id that uniquely identifies each product
        an image property that is the path to image to display
        a name property that is the product name to display

    The thing you want to build today will select three random photos from the available product images and display them side-by-side-by-side in the browser window.

    In addition, you'll want to be able to receive clicks on those displayed images, and track those clicks for each image. You'll also want to track how many times each image is displayed, for statistical purposes. Do this for:
        Individual session
        STRETCH: Add the session to an array of all sessions stored in local storage. This can be used to report on all-time results

    Keep in mind that the Individual session should "restart" on each page load
    Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that we displayed immediately before (you may want to layer in this second requirement after the first is working).

    After 25 selections have been made, hide or disable the images (to prevent additional voting) and display a list of the products with times viewed and votes received. You do not need to display products that were not viewed.
    
    STRETCH: Create a separate page that:
        Retrieves the all-time results (all sessions) from localStorage
        Iterates through the session results and creates grand totals
        Displays list of all-time results.