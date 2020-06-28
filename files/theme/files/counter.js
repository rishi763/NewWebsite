function setupElement645438753736612365() {
	var requireFunc = window.platformElementRequire || window.require;

	// Relies on a global require, specific to platform elements
	requireFunc([
		'w-global',
		'underscore',
		'jquery',
		'backbone',
		'util/platform/elements/PlatformElement',
		'util/platform/elements/PlatformElementSettings'
	], function(
		_W,
		_,
		$,
		Backbone,
		PlatformElement,
		PlatformElementSettings
	) {
		var dependencies = null || [];
		var platform_element_id = "859636669115165528-1.1.6";

		if (typeof _W.loadedPlatformDependencies === 'undefined') {
			_W.loadedPlatformDependencies = [];
		}

		if (typeof _W.platformElements === 'undefined') {
			_W.platformElements = [];
		}

		if (typeof _W.platformElements[platform_element_id] === 'undefined') {
			_W.platformElements[platform_element_id] = {};
			_W.platformElements[platform_element_id].deferredObject = new $.Deferred();
			_W.platformElements[platform_element_id].deferredPromise = _W.platformElements[platform_element_id].deferredObject.promise();
		}

		if(_.intersection(_W.loadedPlatformDependencies, dependencies).length !== dependencies.length){
			_.reduce(dependencies, function(promise, nextScript){
				_W.loadedPlatformDependencies.push(nextScript);
				return promise.then(function(){
					return $.getScript(nextScript);
				});
			}, $().promise()).then(function(){
				_W.platformElements[platform_element_id].deferredObject.resolve();
			});
		}

		if (dependencies.length === 0){
			_W.platformElements[platform_element_id].deferredObject.resolve();
		}

		_W.platformElements[platform_element_id].deferredPromise.done(function(){
			var _ElementDefinition = /**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 */
(function() {

    var CounterElement = PlatformElement.extend({
        initialize: function() {
            // Cache counter element
            this.counter = this.$('.counter-number div');
            this.startCounter();
        },

        // Wrapper function to determine when to start animating
        startCounter: function() {
            // Animate immediately if counter is already in view.
            // Otherwise, set interval to check if the counter is in view
            var view = this;
            view.checkView = setInterval(function() {
                if (view.isScrolledIntoView(view.counter)) {
                    clearInterval(view.checkView);
                    view.animateNum();
                }
            }, 200);
        },

        // Perform animation
        animateNum: function() {
            var intervalCounter = 0;
            var end = this.settings.get('end');
            var duration = this.settings.get('duration');
            var view = this;

            view.animateNumInterval = setInterval(function() {
                var percentComplete = intervalCounter / (duration * 100);
                view.counter.text(Math.round(end * percentComplete));
                intervalCounter++;
                if ((intervalCounter / 100) == duration) {
                    // to beat any rounding issues
                    view.counter.text(end);
                    clearInterval(view.animateNumInterval);
                }
            }, 10);
        },

        // Helper function to determine if an element is in view
        isScrolledIntoView: function($elem) {
            // For nested counters that are hidden
            if (!$elem.is(':visible')) {
                return false;
            }

            var $window = $(window);

            var docViewTop = $window.scrollTop();
            var docViewBottom = docViewTop + $window.height();

            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }
    });

    return CounterElement;
})();;

			if (typeof _ElementDefinition == 'undefined' || typeof _ElementDefinition == 'null') {
				var _ElementDefinition = PlatformElement.extend({});
			}

			var _Element = _ElementDefinition.extend({
				initialize: function() {
					// we still want to call the initialize function defined by the developer
					// however, we don't want to call it until placeholders have been replaced
					this.placeholderInterval = setInterval(function() {
						// so use setInterval to check for placeholders.
						if (this.$('.platform-element-child-placeholder').length == 0) {
							clearInterval(this.placeholderInterval);
							this.constructor.__super__.initialize.apply(this);
						}
					}.bind(this), 100);
				}
			});

			_Element.prototype.settings = new PlatformElementSettings({"end_each":[{"end_index":0},{"end_index":1},{"end_index":2},{"end_index":3},{"end_index":4},{"end_index":5},{"end_index":6},{"end_index":7},{"end_index":8},{"end_index":9},{"end_index":10},{"end_index":11},{"end_index":12},{"end_index":13},{"end_index":14},{"end_index":15},{"end_index":16},{"end_index":17},{"end_index":18},{"end_index":19},{"end_index":20},{"end_index":21},{"end_index":22},{"end_index":23},{"end_index":24},{"end_index":25},{"end_index":26},{"end_index":27},{"end_index":28},{"end_index":29},{"end_index":30},{"end_index":31},{"end_index":32},{"end_index":33},{"end_index":34},{"end_index":35},{"end_index":36},{"end_index":37},{"end_index":38},{"end_index":39},{"end_index":40},{"end_index":41},{"end_index":42},{"end_index":43},{"end_index":44},{"end_index":45},{"end_index":46},{"end_index":47},{"end_index":48},{"end_index":49},{"end_index":50},{"end_index":51},{"end_index":52},{"end_index":53},{"end_index":54},{"end_index":55},{"end_index":56},{"end_index":57},{"end_index":58},{"end_index":59},{"end_index":60},{"end_index":61},{"end_index":62},{"end_index":63},{"end_index":64},{"end_index":65},{"end_index":66},{"end_index":67},{"end_index":68},{"end_index":69},{"end_index":70},{"end_index":71},{"end_index":72},{"end_index":73},{"end_index":74},{"end_index":75},{"end_index":76},{"end_index":77},{"end_index":78},{"end_index":79},{"end_index":80},{"end_index":81},{"end_index":82},{"end_index":83},{"end_index":84},{"end_index":85},{"end_index":86},{"end_index":87},{"end_index":88},{"end_index":89},{"end_index":90},{"end_index":91},{"end_index":92},{"end_index":93},{"end_index":94},{"end_index":95},{"end_index":96},{"end_index":97},{"end_index":98},{"end_index":99},{"end_index":100},{"end_index":101},{"end_index":102},{"end_index":103},{"end_index":104},{"end_index":105},{"end_index":106},{"end_index":107},{"end_index":108},{"end_index":109},{"end_index":110},{"end_index":111},{"end_index":112},{"end_index":113},{"end_index":114},{"end_index":115},{"end_index":116},{"end_index":117},{"end_index":118},{"end_index":119},{"end_index":120},{"end_index":121},{"end_index":122},{"end_index":123},{"end_index":124},{"end_index":125},{"end_index":126},{"end_index":127},{"end_index":128},{"end_index":129},{"end_index":130},{"end_index":131},{"end_index":132},{"end_index":133},{"end_index":134},{"end_index":135},{"end_index":136},{"end_index":137},{"end_index":138},{"end_index":139},{"end_index":140},{"end_index":141},{"end_index":142},{"end_index":143},{"end_index":144},{"end_index":145},{"end_index":146},{"end_index":147},{"end_index":148},{"end_index":149},{"end_index":150},{"end_index":151},{"end_index":152},{"end_index":153},{"end_index":154},{"end_index":155},{"end_index":156},{"end_index":157},{"end_index":158},{"end_index":159},{"end_index":160},{"end_index":161},{"end_index":162},{"end_index":163},{"end_index":164},{"end_index":165},{"end_index":166},{"end_index":167},{"end_index":168},{"end_index":169},{"end_index":170},{"end_index":171},{"end_index":172},{"end_index":173},{"end_index":174},{"end_index":175},{"end_index":176},{"end_index":177},{"end_index":178},{"end_index":179},{"end_index":180},{"end_index":181},{"end_index":182},{"end_index":183},{"end_index":184},{"end_index":185},{"end_index":186},{"end_index":187},{"end_index":188},{"end_index":189},{"end_index":190},{"end_index":191},{"end_index":192},{"end_index":193},{"end_index":194},{"end_index":195},{"end_index":196},{"end_index":197},{"end_index":198},{"end_index":199},{"end_index":200},{"end_index":201},{"end_index":202},{"end_index":203},{"end_index":204},{"end_index":205},{"end_index":206},{"end_index":207},{"end_index":208},{"end_index":209},{"end_index":210},{"end_index":211},{"end_index":212},{"end_index":213},{"end_index":214},{"end_index":215},{"end_index":216},{"end_index":217},{"end_index":218},{"end_index":219},{"end_index":220},{"end_index":221},{"end_index":222},{"end_index":223},{"end_index":224},{"end_index":225},{"end_index":226},{"end_index":227},{"end_index":228},{"end_index":229},{"end_index":230},{"end_index":231},{"end_index":232},{"end_index":233},{"end_index":234},{"end_index":235},{"end_index":236},{"end_index":237},{"end_index":238},{"end_index":239},{"end_index":240},{"end_index":241},{"end_index":242},{"end_index":243},{"end_index":244},{"end_index":245},{"end_index":246},{"end_index":247},{"end_index":248},{"end_index":249},{"end_index":250},{"end_index":251},{"end_index":252},{"end_index":253},{"end_index":254},{"end_index":255},{"end_index":256},{"end_index":257},{"end_index":258},{"end_index":259},{"end_index":260},{"end_index":261},{"end_index":262},{"end_index":263},{"end_index":264},{"end_index":265},{"end_index":266},{"end_index":267},{"end_index":268},{"end_index":269},{"end_index":270},{"end_index":271},{"end_index":272},{"end_index":273},{"end_index":274},{"end_index":275},{"end_index":276},{"end_index":277},{"end_index":278},{"end_index":279},{"end_index":280},{"end_index":281},{"end_index":282},{"end_index":283},{"end_index":284},{"end_index":285},{"end_index":286},{"end_index":287},{"end_index":288},{"end_index":289},{"end_index":290},{"end_index":291},{"end_index":292},{"end_index":293},{"end_index":294},{"end_index":295},{"end_index":296},{"end_index":297},{"end_index":298},{"end_index":299},{"end_index":300},{"end_index":301},{"end_index":302},{"end_index":303},{"end_index":304},{"end_index":305},{"end_index":306},{"end_index":307},{"end_index":308},{"end_index":309},{"end_index":310},{"end_index":311},{"end_index":312},{"end_index":313},{"end_index":314},{"end_index":315},{"end_index":316},{"end_index":317},{"end_index":318},{"end_index":319},{"end_index":320},{"end_index":321},{"end_index":322},{"end_index":323},{"end_index":324},{"end_index":325},{"end_index":326},{"end_index":327},{"end_index":328},{"end_index":329},{"end_index":330},{"end_index":331},{"end_index":332},{"end_index":333},{"end_index":334},{"end_index":335},{"end_index":336},{"end_index":337},{"end_index":338},{"end_index":339},{"end_index":340},{"end_index":341},{"end_index":342},{"end_index":343},{"end_index":344},{"end_index":345},{"end_index":346},{"end_index":347},{"end_index":348},{"end_index":349},{"end_index":350},{"end_index":351},{"end_index":352},{"end_index":353},{"end_index":354},{"end_index":355},{"end_index":356},{"end_index":357},{"end_index":358},{"end_index":359},{"end_index":360},{"end_index":361},{"end_index":362},{"end_index":363},{"end_index":364},{"end_index":365},{"end_index":366},{"end_index":367},{"end_index":368},{"end_index":369},{"end_index":370},{"end_index":371},{"end_index":372},{"end_index":373},{"end_index":374},{"end_index":375},{"end_index":376},{"end_index":377},{"end_index":378},{"end_index":379},{"end_index":380},{"end_index":381},{"end_index":382},{"end_index":383},{"end_index":384},{"end_index":385},{"end_index":386},{"end_index":387},{"end_index":388},{"end_index":389},{"end_index":390},{"end_index":391},{"end_index":392},{"end_index":393},{"end_index":394},{"end_index":395},{"end_index":396},{"end_index":397},{"end_index":398},{"end_index":399},{"end_index":400},{"end_index":401},{"end_index":402},{"end_index":403},{"end_index":404},{"end_index":405},{"end_index":406},{"end_index":407},{"end_index":408},{"end_index":409},{"end_index":410},{"end_index":411},{"end_index":412},{"end_index":413},{"end_index":414},{"end_index":415},{"end_index":416},{"end_index":417},{"end_index":418},{"end_index":419},{"end_index":420},{"end_index":421},{"end_index":422},{"end_index":423},{"end_index":424},{"end_index":425},{"end_index":426},{"end_index":427},{"end_index":428},{"end_index":429},{"end_index":430},{"end_index":431},{"end_index":432},{"end_index":433},{"end_index":434},{"end_index":435},{"end_index":436},{"end_index":437},{"end_index":438},{"end_index":439},{"end_index":440},{"end_index":441},{"end_index":442},{"end_index":443},{"end_index":444},{"end_index":445},{"end_index":446},{"end_index":447},{"end_index":448},{"end_index":449},{"end_index":450},{"end_index":451},{"end_index":452},{"end_index":453},{"end_index":454},{"end_index":455},{"end_index":456},{"end_index":457},{"end_index":458},{"end_index":459},{"end_index":460},{"end_index":461},{"end_index":462},{"end_index":463},{"end_index":464},{"end_index":465},{"end_index":466},{"end_index":467},{"end_index":468},{"end_index":469},{"end_index":470},{"end_index":471},{"end_index":472},{"end_index":473},{"end_index":474},{"end_index":475},{"end_index":476},{"end_index":477},{"end_index":478},{"end_index":479},{"end_index":480},{"end_index":481},{"end_index":482},{"end_index":483},{"end_index":484},{"end_index":485},{"end_index":486},{"end_index":487},{"end_index":488},{"end_index":489},{"end_index":490},{"end_index":491},{"end_index":492},{"end_index":493},{"end_index":494},{"end_index":495},{"end_index":496},{"end_index":497},{"end_index":498},{"end_index":499},{"end_index":500}],"num_size_each":[{"num_size_index":0},{"num_size_index":1},{"num_size_index":2},{"num_size_index":3},{"num_size_index":4},{"num_size_index":5},{"num_size_index":6},{"num_size_index":7},{"num_size_index":8},{"num_size_index":9},{"num_size_index":10},{"num_size_index":11},{"num_size_index":12},{"num_size_index":13},{"num_size_index":14},{"num_size_index":15},{"num_size_index":16},{"num_size_index":17},{"num_size_index":18},{"num_size_index":19},{"num_size_index":20},{"num_size_index":21},{"num_size_index":22},{"num_size_index":23},{"num_size_index":24},{"num_size_index":25},{"num_size_index":26},{"num_size_index":27},{"num_size_index":28},{"num_size_index":29},{"num_size_index":30},{"num_size_index":31},{"num_size_index":32},{"num_size_index":33},{"num_size_index":34},{"num_size_index":35},{"num_size_index":36},{"num_size_index":37},{"num_size_index":38},{"num_size_index":39},{"num_size_index":40},{"num_size_index":41},{"num_size_index":42},{"num_size_index":43},{"num_size_index":44},{"num_size_index":45},{"num_size_index":46},{"num_size_index":47},{"num_size_index":48},{"num_size_index":49},{"num_size_index":50},{"num_size_index":51},{"num_size_index":52},{"num_size_index":53},{"num_size_index":54},{"num_size_index":55},{"num_size_index":56},{"num_size_index":57},{"num_size_index":58},{"num_size_index":59},{"num_size_index":60},{"num_size_index":61},{"num_size_index":62},{"num_size_index":63},{"num_size_index":64},{"num_size_index":65},{"num_size_index":66},{"num_size_index":67},{"num_size_index":68},{"num_size_index":69},{"num_size_index":70},{"num_size_index":71},{"num_size_index":72},{"num_size_index":73},{"num_size_index":74},{"num_size_index":75},{"num_size_index":76},{"num_size_index":77},{"num_size_index":78},{"num_size_index":79},{"num_size_index":80},{"num_size_index":81},{"num_size_index":82},{"num_size_index":83},{"num_size_index":84},{"num_size_index":85},{"num_size_index":86},{"num_size_index":87},{"num_size_index":88},{"num_size_index":89}],"duration_each":[{"duration_index":0},{"duration_index":1}],"end":895,"above":true,"below":false,"num_size":90,"num_color":"#2a2a2a","num_bold":true,"duration":2});
			_Element.prototype.settings.page_element_id = "645438753736612365";

			_Element.prototype.element_id = "0f36cf4e-9679-4484-874f-8c38b6b414d7";
			_Element.prototype.user_id = "131561119";
			_Element.prototype.site_id = "752408850550482443";
			_Element.prototype.assets_path = "//marketplace.editmysite.com/uploads/b/marketplace-elements-859636669115165528-1.1.6/assets/";
			new _Element({
				el: '#element-0f36cf4e-9679-4484-874f-8c38b6b414d7'
			});
		});
	});

}

if (typeof document.documentElement.appReady == 'undefined') {
	document.documentElement.appReady = 0;
}

if (document.documentElement.appReady || (window.inEditor && window.inEditor())) {
	setupElement645438753736612365();
} else if (document.createEvent && document.addEventListener) {
	document.addEventListener('appReady', setupElement645438753736612365, false);
} else {
	document.documentElement.attachEvent('onpropertychange', function(event){
		if (event.propertyName == 'appReady') {
			setupElement645438753736612365();
		}
	});
}
