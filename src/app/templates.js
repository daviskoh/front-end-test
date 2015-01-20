angular.module('pacificOcean.templates', []).run(['$templateCache', function($templateCache) {
  "use strict";
  $templateCache.put("app/views/history.tpl.html",
    "<div class=\"history-container\"><div class=\"column\">History <a class=\"close-history\" href=\"\" ui-sref=\"home()\">X</a></div><div class=\"column wikipedia-text\"><div ng-repeat=\"paragraph in vm.history.content\"><p>{{ paragraph }}</p></div></div></div>");
  $templateCache.put("app/views/home.tpl.html",
    "<navigation><a href=\"\" class=\"nav-link\">Sea Otters</a> <a href=\"\" class=\"nav-link\">Killer Whales</a> <a href=\"\" class=\"nav-link\">Viper Fish</a></navigation><div class=\"content\"><div class=\"top\"><p class=\"pacific-ocean-title\">Pacific Ocean</p><div class=\"viper-fish-container\"><img class=\"viper-fish-img\" src=\"{{ vm.images.bigFish }}\"></div></div><div class=\"bottom\"><div class=\"square-image-container\"><img class=\"square-image\" src=\"{{ vm.images.whale }}\"></div><div class=\"square-image-container\"><img class=\"square-image\" src=\"{{ vm.images.smallFish }}\"></div><a class=\"footer\" href=\"\" ui-sref=\"history()\">History</a></div><div ui-view></div></div>");
  $templateCache.put("app/views/navigation.tpl.html",
    "<div><div class=\"left-bar\" ng-show=\"show\"><ng-transclude></ng-transclude></div><div class=\"navigation\"><a href=\"\" class=\"menu-icon\" ng-click=\"toggleNav()\"><div class=\"bar\"></div><div class=\"bar\"></div><div class=\"bar\"></div></a></div></div>");
}]);
