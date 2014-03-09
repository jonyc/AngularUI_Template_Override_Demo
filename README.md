#AngularUI Template Override Demo
An example on how to override Angular UI templates using the html2js Grunt task.  
(Please see <https://github.com/angular-ui/bootstrap#customize-templates>)  
In this demo, the alert and ratings templates are overwritten.

To run the demo,  
1.  run `bower install`  
2.  run `npm install`  
3.  add any custom template in the template directory (in this case `app/views/partials/ui-bootstrap-tpls/`), following the same directory structure as AngularUI  
2.  run `grunt html2js` to compile updated template override modules in the output file, in this case ui-template.js  
5.  Make sure to load your template.js file  
    `<script src="/ui-templates.js"></script>`  
6.  Inject the `ui-templates` module in your `app.js`  

        angular.module('myApp', [  
          'ui.bootstrap',  
          'ui-templates'  
        ]);
