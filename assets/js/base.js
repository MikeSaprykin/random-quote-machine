/**
 * Created by Mike on 27.05.2016.
 */
    $(document).ready(function(){
    var index = 49;
        var quotes = [
            {"firstLine":"Evither you", "secondLine":"run the day", "thirdLine" : "or the day", "fourthLine" : "runs you","featuredLine":".fourth-line","featuredCss":"font-size","featuredСssValue":"38px"},
            {"firstLine":"In order", "secondLine":"to succeed", "thirdLine" : "we must believe","fourthLine" : "that we can","featuredLine":".third-line","featuredCss":"font-style","featuredСssValue":"italic"},
            {"firstLine":"Nothing is", "secondLine":"impossible", "thirdLine" : "the word itself says","fourthLine" : "I'm possible!","featuredLine":".third-line","featuredCss":"font-size","featuredСssValue":"22px"},
            {"firstLine":"All our dreams", "secondLine":" can come true", "thirdLine" : "if we have the courage ","fourthLine" : "to pursue them","featuredLine":".third-line","featuredCss":"font-size","featuredСssValue":"22px","featuredCss2":"color","featuredСssValue2":"white","featuredLine2":".first-line,.second-line,.third-line,.fourth-line","featuredCss3":"text-transform","featuredСssValue3":"initial"},
            {"firstLine":"If you do", "secondLine":"what you always did,", "thirdLine" : " you will get","fourthLine" : "what you always got","featuredLine":".second-line,.fourth-line","featuredCss":"font-size","featuredСssValue":"22px","featuredCss2":"font-style","featuredСssValue2":"italic"},
            {"firstLine":"Live each", "secondLine":" day as If", "thirdLine" : "your life had","fourthLine" : "just begun","featuredLine":".fourth-line","featuredCss":"font-size","featuredСssValue":"36px","featuredCss2":"font-style","featuredСssValue2":"regular"},
            {"firstLine":"Opportunities", "secondLine":"don't happen", "thirdLine" : "You", "fourthLine" : "create them","featuredLine":".third-line","featuredCss":"font-size","featuredСssValue":"40px","featuredCss2":"color","featuredСssValue2":"red"},
            {"firstLine":"If not us", "secondLine":"who?", "thirdLine" : "if not now", "fourthLine" : "when","featuredLine":".second-line,.fourth-line","featuredCss":"font-size","featuredСssValue":"36px","featuredCss2":"color","featuredСssValue2":"red"},
            {"firstLine":"Speak less", "secondLine":"than you know", "thirdLine" : "have more ","fourthLine" : "than you show","featuredLine":".second-line,.fourth-line","featuredCss":"font-style","featuredСssValue":"italic"},
            {"firstLine":"Defeat is", "secondLine":" not bitter","thirdLine":"unless you", "fourthLine" : "swallow it","featuredLine":".first-line","featuredCss":"font-size","featuredСssValue":"36px"},
            {"firstLine":"If you're", "secondLine":"going through", "thirdLine" : "hell", "fourthLine" : "keep going ","featuredLine":".third-line","featuredCss":"font-size","featuredСssValue":"36px","featuredLine2":".second-line","featuredCss3":"font-size","featuredСssValue3":"24px"},
            {"firstLine":"The best", "secondLine":"revenge", "thirdLine" : "is massive", "fourthLine" : "success","featuredLine":".third-line","featuredCss":"font-style","featuredСssValue":"italic","featuredLine2":".fourth-line","featuredCss3":"color","featuredСssValue3":"blue"},
            {"firstLine":"It is not", "secondLine":"enough to", "thirdLine" : "aim, you", "fourthLine" : "must hit","featuredLine":".fourth-line","featuredCss":"font-size","featuredСssValue":"34px","featuredCss2":"color", "featuredСssValue2":"red"},
            {"firstLine":"Every strike", "secondLine":"brings me", "thirdLine" : "closer to the", "fourthLine" : "next home run"},
            {"firstLine":"We become", "secondLine":"what we", "thirdLine" : "think", "fourthLine" : "about","featuredLine":".third-line","featuredCss":"color","featuredСssValue":"#2A80B9","featuredCss2":"font-size","featuredСssValue2":"34px","featuredCss3":"color", "featuredLine2":".fourth-line","featuredСssValue3":"#96A6A6"},
            {"firstLine":"Be happy!", "secondLine":"It drives", "thirdLine" : "people","fourthLine" : "crazy","featuredLine":".first-line","featuredCss":"color","featuredСssValue":"#F1C40F","featuredCss3":"font-style", "featuredLine2":".fourth-line","featuredСssValue3":"italic"},
            {"firstLine":"If it doesn't ", "secondLine":"challange you", "thirdLine" : "it doesn't","fourthLine" : "change you","featuredLine":".second-line,.fourth-line","featuredCss":"font-style","featuredСssValue":"italic","featuredCss2":"font-size","featuredСssValue2":"26px"},
            {"firstLine":"Believe", "secondLine":"in yourself", "thirdLine" : "a little","fourthLine" : "more","featuredLine":".first-line,.second-line,.third-line,.fourth-line","featuredCss":"font-family","featuredСssValue":"Playball","featuredCss2":"font-weight","featuredСssValue2":"400","messageCss":"text-transform","messageCssValue":"initial","featuredLine2":".first-line,.second-line,.third-line,.fourth-line","featuredCss3":"font-size","featuredСssValue3":"34px",},
            {"firstLine":"Start", "secondLine":"before", "thirdLine" : "you're","fourthLine" : "ready","featuredLine":".second-line","featuredCss":"color","featuredСssValue":"#2FCC71","featuredCss2":"font-size","featuredСssValue2":"34px"},
            {"firstLine":"Stop", "secondLine":"wishing", "thirdLine" : "start","fourthLine" : "doing","featuredLine":".third-line,.fourth-line","featuredCss":"color","featuredСssValue":"#B1053D"},
            {"firstLine":"Progress", "secondLine":"is progress", "thirdLine" : "no matter","fourthLine" : "how small","featuredLine":".first-line,.second-line","featuredCss":"color","featuredСssValue":"#FFF915"},
            {"firstLine":"Over", "secondLine":"thinking", "thirdLine" : "kills your", "fourthLine" : "happiness","messageCss":"text-transform","messageCssValue":"initial"},
            {"firstLine":"What would", "secondLine":"you do", "thirdLine" : "if you weren't","fourthLine" : "afraid","featuredLine":".second-line,.fourth-line","featuredCss":"font-size","featuredСssValue":"36px","featuredCss2":"color","featuredСssValue2":"#E84C3D","featuredLine2":".first-line,.second-line,.third-line,.fourth-line","featuredCss3":"font-family","featuredСssValue3":"Yanone Kaffeesatz"},
            {"firstLine":"A health", "secondLine":"mind does", "thirdLine" : "not speak","fourthLine" : "ill of others","featuredLine":".fourth-line","featuredCss":"font-size","featuredСssValue":"28px","featuredCss2":"font-style","featuredСssValue2":"italic"},
            {"firstLine":"You are", "secondLine":"capable", "thirdLine" : "of amazing","fourthLine" : "things","featuredLine":".first-line,.second-line,.third-line,.fourth-line","featuredCss":"font-family","featuredСssValue":"Playball","featuredCss2":"color","featuredСssValue2":"#D5C476","messageCss":"text-transform","messageCssValue":"initial"},
            {"firstLine":"Remember", "secondLine":"your goal", "thirdLine" : "and why","fourthLine" : "you started","featuredLine":".third-line","featuredCss":"font-size","featuredСssValue":"34px"},
            {"firstLine":"Risk", "secondLine":"or", "thirdLine" : "regret?","fourthLine" : "You choose.","featuredLine":".first-line,.third-line","featuredCss":"font-family","featuredСssValue":"Dancing script","featuredCss2":"font-size","featuredСssValue2":"38px","messageCss":"text-transform","featuredLine2":".second-line,.fourth-line","featuredCss3":"font-size","featuredСssValue3":"24px","featuredCss4":"margin-top","featuredСssValue4":"10px","messageCssValue":"initial"},
            {"firstLine":"Be responsible", "secondLine":"for the", "thirdLine" : "energy","fourthLine" : "you bring","featuredLine":".first-line","featuredCss":"font-size","featuredСssValue":"34px","featuredCss2":"font-family","featuredСssValue2":"Dancing Script","featuredLine2":".first-line","featuredCss3":"text-transform","featuredСssValue3":"initial","featuredCss4":"color","featuredСssValue4":"yellow","featuredCss5":"margin-bottom","featuredСssValue5":"10px"},
            {"firstLine":"No", "secondLine":"negative", "thirdLine" : "thougths" ,"fourthLine" : "allowed","featuredLine":".first-line","featuredCss":"font-size","featuredСssValue":"40px","featuredCss2":"color","featuredСssValue2":"red"},
            {"firstLine":"Choose to", "secondLine":"be optimistic", "thirdLine" : "it feels", "fourthLine" : "better","featuredLine":".third-line","featuredCss":"color","featuredСssValue":"#E84C3D","featuredCss2":"font-size","featuredСssValue2":"34px","featuredLine2":".fourth-line","featuredCss3":"color","featuredСssValue3":"#2FCC71","featuredCss4":"font-size","featuredСssValue4":"34px"},
            {"firstLine":"Mistakes", "secondLine":"are proof", "thirdLine" : "that you're", "fourthLine" : "trying","featuredLine":".second-line,.third-line","featuredCss":"font-family","featuredСssValue":"Dancing Script","featuredCss2":"text-transform","featuredСssValue2":"lowercase","featuredLine2":".second-line,.third-line","featuredCss3":"margin-bottom","featuredСssValue3":"10px","featuredCss4":"font-size","featuredСssValue4":"34px"},
            {"firstLine":"There is no elevator", "secondLine":"to success", "thirdLine" : "You have to take", "fourthLine" : "the stairs","featuredLine":".first-line,.third-line","featuredCss":"font-family","featuredСssValue":"Dancing Script","featuredCss2":"margin-bottom","featuredСssValue2":"10px","messageCss":"text-transform","featuredLine2":".first-line,.third-line","featuredCss3":"color","featuredСssValue3":"#F49C14","messageCssValue":"initial"},
            {"firstLine":"Great things", "secondLine":"never came", "thirdLine" : "from comfort", "fourthLine" : "zones","featuredLine":".second-line,.third-line","featuredCss":"font-size","featuredСssValue":"26px"},
            {"firstLine":"Pain is", "secondLine":"temporal", "thirdLine" : "glory lasts","fourthLine" : "forever","featuredLine":".second-line,.fourth-line","featuredCss":"font-size","featuredСssValue":"34px","featuredLine2":".first-line,.third-line","featuredCss3":"font-size","featuredСssValue3":"27px"},
            {"firstLine":"Sometimes", "secondLine":"you win", "thirdLine" : "sometimes","fourthLine" : "you learn.","featuredLine":".first-line,.second-line","featuredCss":"color","featuredСssValue":"#E77E23","featuredLine2":".third-line,.fourth-line","featuredCss3":"color","featuredСssValue3":"#34495E"},
            {"firstLine":"Motivation", "secondLine":"will almost", "thirdLine" : "always beat","fourthLine" : "mere talent","featuredLine":".second-line,.third-line,.fourth-line","featuredCss":"font-family","featuredСssValue":"Playball","featuredCss2":"text-transform","featuredСssValue2":"lowercase","featuredLine2":".second-line,.third-line,.fourth-line","featuredCss3":"font-size","featuredСssValue3":"36px","featuredCss4":"margin","featuredСssValue4":"5px"},
            {"firstLine":"Failure is", "secondLine":" the condiment that", "thirdLine" : "gives success","fourthLine" : "its flavor","featuredLine":".second-line","featuredCss":"font-size","featuredСssValue":"26px","featuredCss2":"font-style","featuredСssValue2":"italic","messageCss":"text-transform","messageCssValue":"initial"},
            {"firstLine":"Be in love", "secondLine":"with your life", "thirdLine" : " every minute","fourthLine" : "of it","featuredLine":".first-line,.second-line,.third-line,.fourth-line","featuredCss":"font-family","featuredСssValue":"Dancing Script","featuredCss2":"font-size","featuredСssValue2":"36px","messageCss":"text-transform","messageCssValue":"initial"},
            {"firstLine":"You may have", "secondLine":"to fight a battle", "thirdLine" : "more than once","fourthLine" : "to win it","featuredLine":".second-line,.third-line","featuredCss":"font-size","featuredСssValue":"24px","featuredCss2":"color","featuredСssValue2":"orange"},
            {"firstLine":"Life is 10%", "secondLine":"what happens to me", "thirdLine" : "and 90% of","fourthLine" : "how I react to it","featuredLine":".second-line,.fourth-line","featuredCss":"font-family","featuredСssValue":"Yanone Kaffeesatz","featuredCss2":"text-transform","featuredСssValue2":"initial","featuredLine2":".second-line,.fourth-line","featuredCss3":"margin","featuredСssValue3":"5px"},
            {"firstLine":"Believe", "secondLine":"you can", "thirdLine" : "and you’re","fourthLine" : "halfway there","featuredLine":".first-line,.second-line","featuredCss":"font-size","featuredСssValue":"36px","featuredCss":"margin","featuredСssValue":"5px","featuredLine2":".third-line,.fourth-line","featuredCss3":"font-size","featuredСssValue3":"24px"},
            {"firstLine":"Your", "secondLine":"only", "thirdLine" : "Limit is","fourthLine" : "you","featuredLine":".second-line","featuredCss":"color","featuredСssValue":"#9C59B8","featuredLine2":".fourth-line","featuredCss3":"color","featuredСssValue3":"#E84C3D","featuredCss4":"font-size","featuredСssValue4":"34px"},
            {"firstLine":"They call us", "secondLine":"DREAMERS", "thirdLine" : "but we're the ones", "fourthLine" : "who don't sleep","featuredLine":".first-line,.third-line,.fourth-line","featuredCss":"font-family","featuredСssValue":"Dancing Script","featuredCss2":"text-transform","featuredСssValue2":"initial","featuredLine":".first-line,.third-line,.fourth-line","featuredCss":"font-family","featuredСssValue":"Dancing Script","featuredLine2":".first-line,.fourth-line","featuredCss3":"margin","featuredСssValue3":"5px"},
            {"firstLine":"Tomorrow","secondLine":"you will wish", "thirdLine" : "you had started","fourthLine" : "today","featuredLine":".second-line,.third-line","featuredCss":"font-size","featuredСssValue":"24px","featuredLine2":".fourth-line","featuredCss3":"font-size","featuredСssValue3":"34px","featuredCss4":"color","featuredСssValue4":"#FF7B19"},
            {"firstLine":"The only way", "secondLine":"to do great work", "thirdLine" : "is to love","fourthLine" : "what you do","featuredLine":".second-line","featuredCss":"font-family","featuredСssValue":"Dancing Script","featuredCss2":"margin-bottom","featuredСssValue2":"10px","featuredLine2":".third-line,.fourth-line","featuredCss3":"color","featuredСssValue3":"yellow","featuredCss4":"text-transform","featuredСssValue4":"uppercase","messageCss":"text-transform","messageCssValue":"initial"},
            {"firstLine":"I can", "secondLine":"and", "thirdLine" : " I will","fourthLine" : " watch me","featuredLine":".first-line,.third-line","featuredCss":"font-size","featuredСssValue":"38px","featuredCss2":"margin","featuredСssValue2":"5px","featuredLine2":".fourth-line","featuredCss3":"font-family","featuredСssValue3":"Playball","featuredCss4":"text-transform","featuredСssValue4":"lowercase"},
            {"firstLine":"You didn't", "secondLine":"come this far", "thirdLine" : "to only","fourthLine" : "come this far","messageCss":"text-transform","messageCssValue":"initial","featuredLine":".first-line,.third-line","featuredCss":"font-size","featuredСssValue":"34px","featuredCss2":"color","featuredСssValue2":"#5C82AB" },
            {"firstLine":"If you want", "secondLine":"to lift yourself up", "thirdLine" : "lift up","fourthLine" : "someone else","featuredLine":".second-line","featuredCss":"font-family","featuredСssValue":"Dancing Script","featuredCss2":"text-transform","featuredСssValue2":"lowercase","featuredLine2":".second-line","featuredCss3":"margin","featuredСssValue3":"10px","featuredCss4":"color","featuredСssValue4":"#1BBC9D"},
            {"firstLine":"Fall often", "secondLine":"so you can", "thirdLine" : "succeed","fourthLine" : "sooner","featuredLine":".third-line,.fourth-line","featuredCss":"font-size","featuredСssValue":"40px","featuredCss2":"margin","featuredСssValue2":"5px"},
            {"firstLine":"We can’t help", "secondLine":"everyone", "thirdLine" : "but everyone","fourthLine" : " can help someone", "featuredLine":".third-line","featuredLine2":".third-line","featuredCss":"color","featuredСssValue":"red","featuredCss2":"font-size","featuredСssValue2":"34px","featuredCss3":"text-transform","featuredСssValue3":"uppercase","featuredCss4":"margin","featuredСssValue4":"5px","messageCss":"text-transform","messageCssValue":"initial",}
        ];

        var orders =[];
        var arr = [];

        function generateRandom(min, max) {
            arr = [];
            while(arr.length < quotes.length){
                var randNum = Math.floor(Math.random() * (max - min + 1)) + min,
                    found=false;
                for(var i=0;i < arr.length; i++){
                    if(arr[i] == randNum){found=true;break}
                }
                if(!found)arr[arr.length] = randNum;
            }
            return arr;
        }

        orders = generateRandom(0, quotes.length-1);
        $('.message').html("<p><span class='first-line'>" +  quotes[orders[0]].firstLine + "</span>" + "<span class='second-line'>" + quotes[orders[0]].secondLine + "</span><span class='third-line'>" + quotes[orders[0]].thirdLine + "</span><span class='fourth-line'>"+ quotes[orders[0]].fourthLine +"</span></p>")
        $(quotes[orders[0]].featuredLine).css(quotes[orders[0]].featuredCss,quotes[orders[0]].featuredСssValue).css(quotes[orders[0]].featuredCss2,quotes[orders[0]].featuredСssValue2);
        $(quotes[orders[0]].featuredLine2).css(quotes[orders[0]].featuredCss3,quotes[orders[0]].featuredСssValue3).css(quotes[orders[0]].featuredCss4,quotes[orders[0]].featuredСssValue4).css(quotes[orders[0]].featuredCss5,quotes[orders[0]].featuredСssValue5);
        $('.message').css(quotes[orders[0]].messageCss,quotes[orders[0]].messageCssValue).css(quotes[orders[0]].messageCss2,quotes[orders[0]].messageCssValue2);

        $('.new-quote').on("click",function(){
            orders = generateRandom(0, quotes.length-1);
            $( ".message" )
                .queue( "steps", function( next ) {
                    $('.flip-container').toggleClass('flip');
                    next();
                } )
                .delay( 295,"steps" )
                .queue( "steps", function( next ) {
                    $(".message").css("text-transform","uppercase")
                    $('.message').html("<p><span class='first-line'>" +  quotes[orders[0]].firstLine + "</span> " + "<span class='second-line'>" + quotes[orders[0]].secondLine + "</span> <span class='third-line'>" + quotes[orders[0]].thirdLine + "</span> <span class='fourth-line'>"+ quotes[orders[0]].fourthLine +"</span></p>")
                    $(quotes[orders[0]].featuredLine).css(quotes[orders[0]].featuredCss,quotes[orders[0]].featuredСssValue).css(quotes[orders[0]].featuredCss2,quotes[orders[0]].featuredСssValue2);
                    $(quotes[orders[0]].featuredLine2).css(quotes[orders[0]].featuredCss3,quotes[orders[0]].featuredСssValue3).css(quotes[orders[0]].featuredCss4,quotes[orders[0]].featuredСssValue4).css(quotes[orders[0]].featuredCss5,quotes[orders[0]].featuredСssValue5);
                    $('.message').css(quotes[orders[0]].messageCss,quotes[orders[0]].messageCssValue).css(quotes[orders[0]].messageCss2,quotes[orders[0]].messageCssValue2);
                    $('#tweetBtn iframe').remove();
                    // Generate new markup
                    var tweetBtn = $('<a></a>')
                        .addClass('twitter-share-button')
                        .attr('href', 'http://twitter.com/share')
                        .attr('data-hashtags','motivation,qoutes,randomquotes,freecodecamp')
                        .attr('data-text', $('.message p').text());
                    $('#tweetBtn').append(tweetBtn);
                    twttr.widgets.load();
                    next();
                } )
                .dequeue( "steps" );


        });
});