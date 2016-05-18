'use strict';

(function() {

/**
 * The Util Directive is for thin, globally reusable, utility functions
 */

function editMenu($location) {
	return {
		scope: {
			delete: '&removeCall'
		},
		template: 
		`<ul>
		    <li ng-click="remove()">
		        <svg width="16px" height="20px" viewBox="0 0 14 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
		                <g id="Action" transform="translate(-53.000000, -291.000000)">
		                    <g id="ic_delete" transform="translate(48.000000, 288.000000)">
		                        <g id="ic_delete_icon">
		                            <path d="M6,19 C6,20.1 6.9,21 8,21 L16,21 C17.1,21 18,20.1 18,19 L18,7 L6,7 L6,19 L6,19 Z M19,4 L15.5,4 L14.5,3 L9.5,3 L8.5,4 L5,4 L5,6 L19,6 L19,4 L19,4 Z" id="delete-icon" fill="#999999"></path>
		                            <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z" id="Shape"></path>
		                        </g>
		                    </g>
		                </g>
		            </g>
		        </svg>
		    </li>
		    <li ng-click="edit()">
	            <svg width="20px" height="20px" viewBox="0 0 980 980" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
	                <defs></defs>
	                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
	                    <g id="edit-icon" sketch:type="MSLayerGroup" fill="#000000">
	                        <path d="M479.2,44.5 L133.6,44.5 C84.4,44.5 44.5,84.4 44.5,133.6 L44.5,846.3 C44.5,895.5 84.4,935.4 133.6,935.4 L846.3,935.4 C895.5,935.4 935.4,895.5 935.4,846.3 L935.4,502.2 C935.4,495.5 940.9,490 947.6,490 L969.6,490 C975.3,490 980,494.6 980,500.4 L980,846.4 C980,920.2 920.2,980 846.4,980 L133.6,980 C59.8,980 0,920.2 0,846.4 L0,133.6 C0,59.8 59.8,0 133.6,0 L478.8,0 C485,0 490,5 490,11.2 L490,33.8 C490,39.7 485.2,44.5 479.2,44.5 L479.2,44.5 Z" id="Shape" sketch:type="MSShapeGroup"></path>
	                        <path d="M937.5,159.3 L846.2,68 C827,48.8 795.9,48.8 776.7,68 L280.6,564.2 C280.1,564.7 279.7,565.3 279.5,566 L264.1,612.2 L218.1,750.3 C208.8,778.3 224,793.6 252,784.2 L435.9,722.9 L435.9,722.9 L937.4,222.3 C954.8,204.9 954.9,176.7 937.5,159.3 L937.5,159.3 Z M416,679.2 L357.6,702 L279.1,728.2 C276,729.2 273,726.3 274,723.1 L299.2,647.4 L299.3,647.4 L324,583.7 C324,583.7 544.2,363.4 688.6,219 L783,313.4 C640.1,456.1 417,678.6 416,679.2 L416,679.2 Z M900.4,196.4 C900.4,196.4 865.6,231.1 814.7,282 L720.3,187.6 C761.9,146 793.5,114.4 805.9,102 C809.1,98.8 814.1,98.8 817.3,102 C834.2,118.9 883.9,168.7 900.6,185.4 C903.5,188.4 903.4,193.3 900.4,196.4 L900.4,196.4 Z" id="Shape" sketch:type="MSShapeGroup"></path>
	                    </g>
	                </g>
	            </svg>
		    </li>
		</ul>
		`,
		link: (scope, elem, attrs) => {
	
			scope.remove = () => {
				scope.delete()
			}

			scope.edit = () => {
				$location.path(attrs.editurl)
			}
		}
	}
}

angular.module('animalCollectiveApp.util')
  .directive('editMenu', editMenu)
})()
