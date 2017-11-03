/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
    	it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         it('names are defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);

            });
                    
        });

         it('url are defined',function(){
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);

            });

         });

    });


     describe('The menu',function() {

        
         it('element are hidden',function(){
            verifyHidden =  function () {
                    var menuWidth = $('.slide-menu').outerWidth();
                    hiddenMenu = document.querySelector('.slide-menu'),
                    style = getComputedStyle(hiddenMenu, null).transform,
                    getArgumentValues= style.slice(6),
                    array = getArgumentValues.split(','),
                    number =   Number(array[4]) * -1;
               
                    if ((number >= menuWidth))
                    {
                        return true;
                    }  
                    
                return false;
            };
            expect(verifyHidden()).toBe(true);

         });


        it('Menu changing on click',function(){
                
                var menuIcon = document.querySelector(".menu-icon-link");
                expect($('body').hasClass('menu-hidden')).toBe(true);

                menuIcon.click();
                expect($('body').hasClass('menu-hidden')).toBe(false);

                 menuIcon.click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
                           
             });   
  });


         describe('Initial Entries', function() {

         	beforeEach(function(done){
         		loadFeed(0, function(){

         			done();
         		});

         	});

         	it('at least one entry is loaded',function() {
         		var entryNumbers =$(".feed .entry").length;
         		expect(entryNumbers).toBeGreaterThan(0);

           	});

         });



    	
    	describe('New Feed Selection',function(){
  				var firstFeed, secondFeed ;
  				beforeEach(function(done){
         			loadFeed(0, function(){
                    	firstFeed = $(".feed").html();
         				loadFeed(1, function(){
         	            	secondFeed = $(".feed").html();
         	            	done();
         	    		});
         	 		});
         	   });

         it('feed is changing after loading feeds',function() {
      
         	expect(firstFeed).not.toEqual(secondFeed);
         	 
        });
    
    });
});
