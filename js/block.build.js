/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function (blocks, i18n, element, editor, components) {
    var __ = wp.i18n.__;
    var registerBlockType = wp.blocks.registerBlockType;
    var Fragment = wp.element.Fragment;
    var _wp$editor = wp.editor,
        InspectorControls = _wp$editor.InspectorControls,
        PanelColorSettings = _wp$editor.PanelColorSettings;
    var _wp$components = wp.components,
        PanelBody = _wp$components.PanelBody,
        RangeControl = _wp$components.RangeControl;

    /**
     * Register: Progress Bar.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/
     * @param  {string}   name     Block name.
     * @param  {Object}   settings Block settings.
     * @return {?WPBlock}          The block, if it has been successfully
     *                             registered; otherwise `undefined`.
     */

    var circleCounterIcon = wp.element.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", width: "50", height: "50", viewBox: "0 0 512 512" },
        wp.element.createElement(
            "g",
            null,
            wp.element.createElement("path", { d: "M256,0C114.609,0,0,114.609,0,256c0,141.391,114.609,256,256,256c141.391,0,256-114.609,256-256 C512,114.609,397.391,0,256,0z M256,472c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z " }),
            wp.element.createElement(
                "g",
                null,
                wp.element.createElement("path", { d: "M249.703,201.25H188v-25h19.312c6.859,0,13.422-1.219,19.5-3.594c6.172-2.375,11.438-5.641,15.797-9.797 c4.358-4.203,7.922-9.25,10.547-15.234c2.734-5.906,4.047-12.5,4.047-19.625H284v256h-34.297V201.25z" })
            )
        )
    );
    var barCounterIcon = wp.element.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", width: "50", height: "50", viewBox: "0 0 16 16" },
        wp.element.createElement("path", { fill: "#575757", d: "M0 5v6h16v-6h-16zM15 10h-14v-4h14v4z" }),
        wp.element.createElement("path", { fill: "#575757", d: "M2 7h7v2h-7v-2z" })
    );

    registerBlockType('nk/progress-counter', {
        title: __('Progress Counter'), //Block title
        icon: barCounterIcon, // Block icon
        category: 'common',
        keywords: [__('progress'), __('counter'), __('bar')],
        attributes: {
            backgroundColor: {
                type: 'string',
                default: '#ccc'
            },
            progressColor: {
                type: 'string',
                default: '#000'
            },
            textColor: {
                type: 'string',
                default: '#cdc229'
            },
            progressCounter: {
                type: 'number',
                default: 10
            },
            counterType: {
                type: 'string',
                default: 'bar'
            }
        },
        edit: function edit(props) {
            var _props$attributes = props.attributes,
                backgroundColor = _props$attributes.backgroundColor,
                progressColor = _props$attributes.progressColor,
                progressCounter = _props$attributes.progressCounter,
                textColor = _props$attributes.textColor,
                counterType = _props$attributes.counterType,
                setAttributes = props.setAttributes;

            var onSelectCounterType = function onSelectCounterType(event) {
                var selectedCounter = event.currentTarget.id;
                setAttributes({ counterType: selectedCounter ? selectedCounter : 'bar' });
            };

            var radius = 35;
            var circumference = 2 * Math.PI * radius;
            var strokeDashOffset = circumference - progressCounter * circumference / 100;

            return [wp.element.createElement(
                InspectorControls,
                null,
                wp.element.createElement(
                    PanelBody,
                    { title: __('Progress Counter settings '), initialOpen: true },
                    wp.element.createElement(RangeControl, {
                        label: __('Progress Range'),
                        value: progressCounter,
                        onChange: function onChange(range) {
                            return setAttributes({ progressCounter: range });
                        },
                        min: 1,
                        max: 100,
                        step: 1
                    }),
                    wp.element.createElement(
                        "div",
                        { className: "counterSelectorWrapper" },
                        wp.element.createElement(
                            "p",
                            null,
                            "Progress Type"
                        ),
                        wp.element.createElement(
                            "div",
                            { className: 'bar' === counterType ? 'active' : '',
                                onClick: onSelectCounterType, id: "bar" },
                            barCounterIcon,
                            wp.element.createElement(
                                "p",
                                null,
                                "Bar Counter"
                            )
                        ),
                        wp.element.createElement(
                            "div",
                            { className: 'circle' === counterType ? 'active' : '',
                                onClick: onSelectCounterType, id: "circle" },
                            circleCounterIcon,
                            wp.element.createElement(
                                "p",
                                null,
                                "Circle Counter"
                            )
                        )
                    )
                ),
                wp.element.createElement(
                    Fragment,
                    null,
                    wp.element.createElement(PanelColorSettings, {
                        title: __('Color Settings'),
                        className: "progresscolors",
                        initialOpen: false,
                        colorSettings: [{
                            label: __('Progress Color'),
                            value: progressColor,
                            onChange: function onChange(value) {
                                return setAttributes({ progressColor: value ? value : '#000' });
                            }
                        }, {
                            label: __('Incomplete Progress Color'),
                            value: backgroundColor,
                            onChange: function onChange(value) {
                                return setAttributes({ backgroundColor: value ? value : '#ccc' });
                            }
                        }, {
                            label: __('Text Color'),
                            value: textColor,
                            onChange: function onChange(value) {
                                return setAttributes({ textColor: value ? value : '#cdc229' });
                            }
                        }]
                    })
                )
            ), wp.element.createElement(
                "div",
                { className: "progress-counter" },
                'bar' === counterType && wp.element.createElement(
                    "div",
                    { className: "progress_outer" },
                    wp.element.createElement(
                        "div",
                        { className: "progressbar", style: { backgroundColor: backgroundColor } },
                        wp.element.createElement(
                            "div",
                            { className: "progress", style: { backgroundColor: progressColor, width: progressCounter + '%' }, "data-value": progressCounter },
                            wp.element.createElement(
                                "span",
                                { className: "start", style: { color: textColor } },
                                progressCounter,
                                "%"
                            )
                        )
                    )
                ),
                'circle' === counterType && wp.element.createElement(
                    "div",
                    { className: "circle_outer" },
                    wp.element.createElement(
                        "svg",
                        { className: "prog-radial", "data-countervalue": progressCounter, viewBox: "0 0 80 80" },
                        wp.element.createElement("circle", { className: "incomplete", stroke: backgroundColor, cx: "40", cy: "40", r: "35" }),
                        wp.element.createElement("circle", { className: "complete", stroke: progressColor, cx: "40", cy: "40", r: "35", style: { strokeDashoffset: strokeDashOffset } }),
                        wp.element.createElement(
                            "text",
                            { className: "countervalue start", x: "50%", y: "57%", transform: "matrix(0, 1, -1, 0, 80, 0)", style: { fill: textColor } },
                            progressCounter,
                            "%"
                        )
                    )
                )
            )];
        },
        save: function save(props) {
            var _props$attributes2 = props.attributes,
                backgroundColor = _props$attributes2.backgroundColor,
                progressColor = _props$attributes2.progressColor,
                progressCounter = _props$attributes2.progressCounter,
                textColor = _props$attributes2.textColor,
                counterType = _props$attributes2.counterType;

            return wp.element.createElement(
                "div",
                { className: "progress-counter" },
                'bar' === counterType && wp.element.createElement(
                    "div",
                    { className: "progress_outer" },
                    wp.element.createElement(
                        "div",
                        { className: "progressbar", style: { backgroundColor: backgroundColor } },
                        wp.element.createElement(
                            "div",
                            { className: "progress", style: { backgroundColor: progressColor }, "data-value": progressCounter },
                            wp.element.createElement(
                                "span",
                                { className: "start", style: { color: textColor } },
                                progressCounter,
                                "%"
                            )
                        )
                    )
                ),
                'circle' === counterType && wp.element.createElement(
                    "div",
                    { className: "circle_outer" },
                    wp.element.createElement(
                        "svg",
                        { className: "prog-radial", "data-countervalue": progressCounter, viewBox: "0 0 80 80" },
                        wp.element.createElement("circle", { className: "incomplete", stroke: backgroundColor, cx: "40", cy: "40", r: "35" }),
                        wp.element.createElement("circle", { className: "complete", stroke: progressColor, cx: "40", cy: "40", r: "35" }),
                        wp.element.createElement(
                            "text",
                            { className: "countervalue start", x: "50%", y: "57%", transform: "matrix(0, 1, -1, 0, 80, 0)", style: { fill: textColor } },
                            progressCounter,
                            "%"
                        )
                    )
                )
            );
        }
    });
})(window.wp.blocks, window.wp.i18n, window.wp.element, window.wp.editor, window.wp.components);

/***/ })
/******/ ]);