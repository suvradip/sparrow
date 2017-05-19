var app = angular.module("sparrow-posts", []);

app.controller("status", function($scope, DataPrep) {

    $scope.postStatus = function (){
        console.log($scope.statusMessage);
        if($scope.statusMessage && $scope.statusMessage !== "") {
            DataPrep.posts.push({
                "name" : "Suvradip Saha",
                "picture" : "cat.jpeg",
                "status" : $scope.statusMessage,
                "like": 0,
                "dislike": 0,
                "comment": 0
            });
            
            $scope.statusMessage = "";
        } else {
            Materialize.toast("You wanted to say, didn't you?", 4000);
        }
    };
});

app.controller("feed", function($scope, DataPrep){
    console.log("feed");
    $scope.dummyData = DataPrep.posts;
});

app.service("DataPrep", function(){
    return {
        "posts" : [{
            "name" : "John Doe",
            "picture" : "cat.jpeg",
            "status" : "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
            "like": 20,
            "dislike": 9,
            "comment": 20
        }, {
            "name" : "Michel Clark",
            "picture" : "cat.jpeg",
            "status" : "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.",
            "like": 34,
            "dislike": 19,
            "comment": 61
        }]
    };
});