app.controller('SyllabusCtrl', function($scope) {
	$scope.days = [
		{
			id: 1,
			title: "General Concepts of Programming",
			concepts: [
				"Values", "Functions", "Variables", "Call Expressions"
			]
		},
		{
			id: 2,
			title: "Loops and Control",
			concepts: [
				"If/Elif/Else Statements", "While Loops", "For Loops", "List Comprehensions"
			]
		},
		{
			id: 3,
			title: "Logic",
			concepts: [
				"Boolean Values", "Boolean Logic", "Logic Gates", "Truth Tables", "Bitwise Logic"
			]
		},
		{
			id: 4,
			title: "Environment Diagrams and Some Higher-Order Functions",
			concepts: [
				"Environments", "Environment Diagrams", "Intro to Higher-Order Functions", "Environment Frames"
			]
		},
		{
			id: 5,
			title: "Higher-Order Functions and Lambda Expressions",
			concepts: [
				"Functions as Arguments", "Function Composition", "Function Currying", "Lambda Expressions"
			]
		},
		{
			id: 6,
			title: "Recursion and Induction",
			concepts: [
				"Concepts of Recursion", "Linear Recursion", "Intro to Induction and Proofs"
			]
		},
		{
			id: 7,
			title: "Tree Recursion and Strong Induction",
			concepts: [
				"Review of Recursion", "Tree Recursion", "Strong Induction"
			]
		},
		{
			id: 8,
			title: "Linked Lists and Trees",
			concepts: [
				"Intro to Data Structures", "Linked Lists and Linear Recursion", "Traversing Linked Lists",
				"Trees and Tree Recursion", "Traversing Trees"
			]
		}
	];

	$scope.bannerResize = function() {
		if ($(window).width() < 992 && !$scope.small) {
			$('#syllabus-banner').css('padding', '20vh');
			$scope.small = true;
		} else if($(window).width() > 992 && $scope.small) {
			$('#syllabus-banner').css('padding', '40vh');
			$scope.small = false;
		}
	};
	$scope.small = $(window).width() >= 992;
	$scope.bannerResize();

	$(window).on('resize', $scope.bannerResize);
});