/**
 * Created by Mike on 06.02.17.
 */
/**
 * Array of quote items,
 * text - is an array of strings to generate that number of span elements and
 * assign inner text of each according to the index
 * featuredLines - is an array of objects
 * index - is an array of element indexes that has to be styled
 * style - is an object of styles that have to be set to each element, defined in the index array
 */
module.exports = function QuotesArray(){
    return [
            {
                "text": ["Either you", "run the day", "or the day", "runs you"],
                "featuredLines": [
                    {
                        "index": [2],
                        "style": {"fontSize": "38px"}
                    }
                ]
            },
            {
                "text": ["In order", "to succeed", "we must believe", "that we can"],
                "featuredLines": [
                    {
                        "index": [2],
                        "style": {"fontStyle": "italic"}
                    }
                ]
            },
            {
                "text": ["Nothing is", "impossible", "the word itself says", "I'm possible!"],
                "featuredLines": [
                    {
                        "index": [2],
                        "style": {"fontSize": "22px"}
                    }
                ]
            },
            {
                "text": ["All our dreams", " can come true", "if we have the courage ", "to pursue them"],
                "featuredLines": [
                    {
                        "index": [2],
                        "style": {"fontSize": "22px", "color": "white"}
                    }, {
                        "index": [0, 1, 2, 3],
                        "style": {"textTransform": "initial"}
                    }
                ]
            },
            {
                "text": ["If you do", "what you always did,", " you will get", "what you always got"],
                "featuredLines": [
                    {
                        "index": [1, 3],
                        "style": {"fontSize": "22px", "fontStyle": "italic"}
                    }
                ]
            },
            {
                "text": ["Live each", " day as If", "your life had", "just begun"],
                "featuredLines": [
                    {
                        "index": [3],
                        "style": {"fontSize": "36px", "fontStyle": "regular"}
                    }]
            },
            {
                "text": ["Opportunities", "don't happen", "You", "create them"],
                "featuredLines": [
                    {
                        "index": [2],
                        "style": {"fontSize": "40px", "color": "red"}
                    }
                ]
            },
            {
                "text": ["If not us", "who?", "if not now", "when"],
                "featuredLines": [
                    {
                        "index": [1, 3],
                        "style": {"fontSize": "36px", "color": "red"}
                    }
                ]
            },
            {
                "text": ["Speak less", "than you know", "have more ", "than you show"],
                "featuredLines": [
                    {
                        "index": [1, 3],
                        "style": {"fontStyle": "italic"}
                    }
                ]
            },
            {
                "text": ["Defeat is", " not bitter", "unless you", "swallow it"],
                "featuredLines": [
                    {
                        "index": [0],
                        "style": {"fontSize": "36px"}
                    }
                ]
            },
            {
                "text": ["If you're", "going through", "hell", "keep going "],
                "featuredLines": [
                    {
                        "index": [2],
                        "style": {"fontSize": "36px"}
                    },
                    {
                        "index": [1],
                        "style": {"fontSize": "24px"}
                    }
                ]
            },
            {
                "text": ["The best", "revenge", "is massive", "success"],
                "featuredLines": [
                    {
                        "index": [2],
                        "style": {"fontStyle": "italic"}
                    },
                    {
                        "index": [3],
                        "style": {"color": "blue"}
                    }
                ]
            },
            {
                "text": ["It is not", "enough to", "aim, you", "must hit"],
                "featuredLines": [
                    {
                        "index": [3],
                        "style": {"fontSize": "34px", "color": "red"}

                    }
                ]
            },
            {
                "text": ["Every strike", "brings me", "closer to the", "next home run"]
            },
            {
                "text": ["We become", "what we", "think", "about"],
                "featuredLines": [
                    {
                        "index": [2],
                        "style": {"color": "#2A80B9", "fontSize": "34px"}
                    },
                    {
                        "index": [3],
                        "style": {"color": "#96A6A6"}
                    }
                ]
            },
            {
                "text": ["Be happy!", "It drives", "people", "crazy"],
                "featuredLines": [
                    {
                        "index": [0],
                        "style": {"color": "#F1C40F"}
                    },
                    {
                        "index": [3],
                        "style": {"fontStyle": "italic"}
                    }
                ]
            },
            {
                "text": ["If it doesn't ", "challenge you", "it doesn't", "change you"],
                "featuredLines": [
                    {
                        "index": [1, 3],
                        "style": {"font-style": "italic", "fontSize": "26px"}
                    }
                ]
            },
            {
                "text": ["Believe", "in yourself", "a little", "more"],
                "featuredLines": [
                    {
                        "index": [0, 1, 2, 3],
                        "style": {"fontFamily": "Playball", "fontWeight": "400", "fontSize": "34px"}
                    }
                ]
            },
            {
                "text": ["Start", "before", "you're", "ready"],
                "featuredLines": [
                    {
                        "index": [1],
                        "style": {"color": "#2FCC71", "fontSize": "34px"}
                    }
                ]
            },
            {
                "text": ["Stop", "wishing", "start", "doing"],
                "featuredLines": [
                    {
                        "index": [0, 3],
                        "style": {"color": "#B1053D"}
                    }
                ]
            },
            {
                "text": ["Progress", "is progress", "no matter", "how small"],
                "featuredLines": [
                    {
                        "index": [0, 1],
                        "style": {"color": "#FFF915"}
                    }
                ]
            },
            {
                "text": ["Over", "thinking", "kills your", "happiness"]
            },
            {
                "text": ["What would", "you do", "if you weren't", "afraid"],
                "featuredLines": [
                    {
                        "index": [1, 3],
                        "style": {"fontSize": "36px", "color": "#E84C3D"}
                    },
                    {
                        "index": [0, 1, 2, 3],
                        "style": {"fontFamily": "Yanone Kaffeesatz"}
                    }
                ]
            },
            {
                "text": ["A health", "mind does", "not speak", "ill of others"],
                "featuredLines": [
                    {
                        "index": [3],
                        "style": {"fontSize": "28px", "fontStyle": "italic"}
                    }
                ]
            },
            {
                "text": ["You are", "capable", "of amazing", "things"],
                "featuredLines": [
                    {
                        "index": [0, 1, 2, 3],
                        "style": {"fontFamily": "Playball", "color": "#D5C476"}
                    }
                ]
            },
            {
                "text": ["Remember", "your goal", "and why", "you started"],
                "featuredLines": [
                    {
                        "index": [2],
                        "style": {"fontSize": "34px"}
                    }
                ]
            },
            {
                "text": ["Risk", "or", "regret?", "You choose."],
                "featuredLines": [
                    {
                        "index": [0, 2],
                        "style": {"fontFamily": "Dancing script", "fontSize": "38px"}
                    },
                    {
                        "index": [1, 3],
                        "style": {"fontSize": "24px"}
                    }
                ]
            },
            {
                "text": ["Be responsible", "for the", "energy", "you bring"],
                "featuredLines": [
                    {
                        "index": [0],
                        "style": {"fontSize": "34px", "fontFamily": "Dancing Script"}
                    },
                    {
                        "index": [1],
                        "style": {"textTransform": "initial", "color": "yellow", "marginBottom": "10px"}
                    }
                ]
            },
            {
                "text": ["No", "negative", "thoughts", "allowed"],
                "featuredLines": [
                    {
                        "index": [0],
                        "style": {"fontSize": "40px", "color": "red"}
                    }
                ]
            },
            {
                "text": ["Choose to", "be optimistic", "it feels", "better"],
                "featuredLines": [
                    {
                        "index": [2],
                        "style": {"color": "#E84C3D", "fontSize": "34px"}
                    }, {
                        "index": [3],
                        "style": {"color": "#2FCC71", "fontSize": "34px"}
                    }
                ]
            },
            {
                "text": ["Mistakes", "are proof", "that you're", "trying"],
                "featuredLines": [
                    {
                        "index": [1, 2],
                        "style": {
                            "fontFamily": "Dancing Script",
                            "textTransform": "lowercase",
                            "marginBottom": "10px",
                            "fontSize": "34px"
                        }
                    }
                ]
            },
            {
                "text": ["There is no elevator", "to success", "You have to take", "the stairs"],
                "featuredLines": [
                    {
                        "index": [0, 2],
                        "style": {"fontFamily": "Dancing Script", "marginBottom": "10px", "color": "#F49C14"}
                    }
                ]
            },
            {
                "text": ["Great things", "never came", "from comfort", "zones"],
                "featuredLines": [
                    {
                        "index": [2, 3],
                        "style": {"fontSize": "26px"}
                    }
                ]
            },
            {
                "text": ["Pain is", "temporal", "glory lasts", "forever"],
                "featuredLines": [
                    {
                        "index": [1, 3],
                        "style": {"fontSize": "34px"}
                    },
                    {
                        "index": [0, 2],
                        "style": {"fontSize": "27px"}
                    }
                ]
            },
            {
                "text": ["Sometimes", "you win", "sometimes", "you learn."],
                "featuredLines": [
                    {
                        "index": [0, 1],
                        "style": {"color": "#E77E23"}
                    },
                    {
                        "index": [2, 3],
                        "style": {"color": "#34495E"}
                    }
                ]
            },
            {
                "text": ["Motivation", "will almost", "always beat", "mere talent"],
                "featuredLines": [
                    {
                        "index": [1, 2, 3],
                        "style": {
                            "fontFamily": "Playball",
                            "textTransform": "lowercase",
                            "fontSize": "36px",
                            "margin": "5px"
                        }
                    }
                ]
            },
            {
                "text": ["Failure is", " the condiment that", "gives success", "its flavor"],
                "featuredLines": [
                    {
                        "index": [1],
                        "style": {"fontSize": "26px", "fontStyle": "italic"}
                    }
                ]
            },
            {
                "text": ["Be in love", "with your life", " every minute", "of it"],
                "featuredLines": [
                    {
                        "index": [0, 1, 2, 3],
                        "style": {"fontFamily": "Dancing Script", "fontSize": "36px"}
                    }
                ]
            },
            {
                "text": ["You may have", "to fight a battle", "more than once", "to win it"],
                "featuredLines": [
                    {
                        "index": [1, 2],
                        "style": {"fontSize": "24px", "color": "orange"}
                    }
                ]
            },
            {
                "text": ["Life is 10%", "what happens to me", "and 90% of", "how I react to it"],
                "featuredLines": [
                    {
                        "index": [1, 3],
                        "style": {"fontFamily": "Yanone Kaffeesatz", "margin": "5px"}
                    }
                ]
            },
            {
                "text": ["Believe", "you can", "and you’re", "halfway there"],
                "featuredLines": [
                    {
                        "index": [0, 1],
                        "style": {"fontSize": "36px", "margin": "5px"}
                    },
                    {
                        "index": [2, 3],
                        "style": {"fontSize": "24px"}
                    }
                ]
            },
            {
                "text": ["Your", "only", "Limit is", "you"],
                "featuredLines": [
                    {
                        "index": [1],
                        "style": {"color": "#9C59B8"}
                    },
                    {
                        "index": [3],
                        "style": {"color": "#E84C3D", "fontSize": "34px"}
                    }
                ]
            },
            {
                "text": ["They call us", "DREAMERS", "but we're the ones", "who don't sleep"],
                "featuredLines": [
                    {
                        "index": [0, 2, 3],
                        "style": {"fontFamily": "Dancing Script", "margin": "5px"}
                    }
                ]
            },
            {
                "text": ["Tomorrow", "you will wish", "you had started", "today"],
                "featuredLines": [
                    {
                        "index": [1, 2],
                        "style": {"fontSize": "24px"}
                    },
                    {
                        "index": [3],
                        "style": {"fontSize": "34px", "color": "#FF7B19"}
                    }
                ]
            },
            {
                "text": ["The only way", "to do great work", "is to love", "what you do"],
                "featuredLines": [
                    {
                        "index": [1],
                        "style": {"fontFamily": "Dancing Script", "marginBottom": "10px"}
                    },
                    {
                        "index": [2, 3],
                        "style": {"color": "yellow", "textTransform": "uppercase"}
                    }
                ]
            },
            {
                "text": ["I can", "and", " I will", " watch me"],
                "featuredLines": [
                    {
                        "index": [0, 2],
                        "style": {"fontSize": "38px", "margin": "5px"}
                    },
                    {
                        "index": [3],
                        "style": {"fontFamily": "Playball", "textTransform": "lowercase"}
                    }
                ]
            },
            {
                "text": ["You didn't", "come this far", "to only", "come this far"],
                "featuredLines": [
                    {
                        "index": [0, 2],
                        "style": {"fontSize": "34px", "color": "#5C82AB"}
                    }
                ]
            },
            {
                "text": ["If you want", "to lift yourself up", "lift up", "someone else"],
                "featuredLines": [
                    {
                        "index": [1],
                        "style": {
                            "fontFamily": "Dancing Script",
                            "textTransform": "lowercase",
                            "margin": "10px",
                            "color": "#1BBC9D"
                        }
                    }
                ]
            },
            {
                "text": ["Fall often", "so you can", "succeed", "sooner"],
                "featuredLines": [
                    {
                        "index": [2, 3],
                        "style": {"fontSize": "40px", "margin": "5px"}
                    }
                ]
            },
            {
                "text": ["We can’t help", "everyone", "but everyone", " can help someone"],
                "featuredLines": [
                    {
                        "index": [2],
                        "style": {
                            "color": "red",
                            "fontSize": "34px",
                            "textTransform": "uppercase",
                            "margin": "5px"
                        }
                    }
                ]
            }
        ]
}();