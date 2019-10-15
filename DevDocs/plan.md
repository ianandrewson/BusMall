User Stories - DONE

HTML Skeleton - see HTML section at bottom - DONE

Data form for images: write an API - DONE
    id - identifier
    image - path to image
    name - display name

Get random images: -DONE
    Need 3 non duplicated images 
        Pays attention to previous image round as well - 
Display Side by side - DONE
    Need HTML to display image in
Click to vote functionality - See event handler section at bottom
    Store as an object
        Need to track votes for 25 set session
        Need to track how many times item was displayed
    Stretch: track for all sessions
Display results after 25 sets shown
    Hide images to prevent further voting
    Need HTML area to display results
    display results function
        Times displayed
        Number of votes
    Reset button
        Store results to localStorage for long term tracking
        Start next set of images
            If page is reloaded, should reset current session

Stretch Goal:
    Separate page for long term results;
        Iterate through session results, create totals
        Display results



HTML:
    Directions for User
    three images
    result display area
    reset/next session button in result area

click eventListener - getting there; need to add radio buttons to images. Images have no way of storing a value, so it is not possible to increment a score just by selecting an image. There needs to be a value to get the product to increment the score.

    store vote - DONE
    store # of times displayed for all items - DONE
    generate next set - NEXT
        stop after 25 sets