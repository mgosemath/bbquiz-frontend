(function() {

    'use strict';

    angular.module('app.toolbar')
        .controller('ToolbarController', ControllerFunction);


    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['$mdDialog'];

    /* @ngInject */
    function ControllerFunction($mdDialog) {

        var vm = this;
        vm.username = null;
        vm.password = null;

        vm.handleSubmit = handleSubmit;
        vm.handleCancel = handleCancel;

        function handleSubmit() {
            return $mdDialog.hide();
        }

        function handleCancel() {
            return $mdDialog.hide();
        }
    }

})();
