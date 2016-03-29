angular.module('core').controller('WorkspaceController', function($scope) {

   $scope.editor = {

       html: '<div></div>',

       css: 'test css',

       js: 'test js'

   };

   CodeMirror.fromTextArea(document.getElementById('html'), {
       lineNumbers: true,
       mode: 'htmlmixed',
       lineWrapping: true
   });

   CodeMirror.fromTextArea(document.getElementById('css'), {
       lineNumbers: true,
       mode: 'css',
       lineWrapping: true
   });

   CodeMirror.fromTextArea(document.getElementById('js'), {
       lineNumbers: true,
       mode: 'javascript',
       lineWrapping: true
   });
});
