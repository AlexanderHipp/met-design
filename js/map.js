$(function(){



	// Example #6
	$(".maparea6").mapael({
		map : {
			name : "world_countries",
			zoom: {
				enabled: true,
				maxLevel : 10
			},
			defaultArea: {
				attrs : {
					stroke : "#ddd",
					"stroke-width" : 0
				}
			}
		},
		legend : {
			area : {
				display : true,
				title :" ",
				slices : [
					{
						max: 2,
						min:0,
						attrs : {
							fill : "#16a085"
						},
						label :"Visited already"
					},
					{
						min :100,
						max :50000000000,
						attrs : {
							fill : "#ddd"
						},
						label :"Not visited"
					},
					{
						min :6,
						max :8,
						attrs : {
							fill : "#888"
						},
						label :"Planned to visit"
					}
				]
			},
			plot :{
				display : true,
				slices : [
					{
						max :500000,
						attrs : {
							fill : "#fa7722"
						},
						attrsHover :{
							transform : "10"
						},
						size : 10
					}
				]
			}
		},
		plots : {
			'newyork' : {
				latitude :40.667,
				longitude :-73.833,
				value : 200001,
				tooltip: {content : "New york"},
				href: "#newyork"
			},
			'Corse' : {
				latitude :42.039604,
				longitude :9.012893,
				value : 200001,
				tooltip: {content : "Corse"},
				href: "#corse"
			},
			'Hawaii' : {
				latitude :21.306944,
				longitude :-157.858333,
				value : 200001,
				tooltip: {content : "Hawaii"},
				href: "#hawaii"
			},
			'Boston' : {
				latitude :42.358486,
				longitude :-71.060097,
				value : 200001,
				tooltip: {content : "Boston"},
				href: "#boston"
			},
			'South Germany' : {
				latitude :48.775418,
				longitude :9.181759,
				value : 200001,
				tooltip: {content : "South Germany"},
				href: "#southgermany"
			},
			'Rome' : {
				latitude :41.872389,
				longitude :12.480180,
				value : 200001,
				tooltip: {content : "Rome"},
				href: "#rome"
			},
			'Canary Islands' : {
				latitude :28.291564,
				longitude :-16.629130,
				value : 200001,
				tooltip: {content : "Canary Islands"},
				href: "#canaryislands"
			},
			'Shanghai' : {
				latitude :31.230416,
				longitude :121.473701,
				value : 200001,
				tooltip: {content : "Shanghai"},
				href: "#shanghaiandbeijing"
			},
			'Beijing' : {
				latitude :39.904211,
				longitude :116.407395,
				value : 200001,
				tooltip: {content : "Beijing"},
				href: "#shanghaiandbeijing"
			},
			'London' : {
				latitude :51.507351,
				longitude :-0.127758,
				value : 200001,
				tooltip: {content : "London"},
				href: "#london"
			},
			'New Zealand' : {
				latitude :-40.900557,
				longitude :174.885971,
				value : 200001,
				tooltip: {content : "New Zealand"},
				href: "#newzealand"
			},
			'South America' : {
				latitude :-16.290154,
				longitude :-63.588653,
				value : 200001,
				tooltip: {content : "South America"},
				href: "#southamerica"
			},
			'Scandinavia' : {
				latitude :60.128161,
				longitude :18.643501,
				value : 200001,
				tooltip: {content : "Scandinavia"},
				href: "#scandinavia"
			}
		},
		areas: {
			"AF": {
				"value": "100",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Afghanistan<\/span>"
				}
			},
			"ZA": {
				"value": "1100",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">South Africa<\/span>"
				}
			},
			"AL": {
				"value": "100",
				"attrs": {

				},
				"tooltip": {
						"content": "<span style=\"font-weight:bold;\">Albania<\/span> "
				}
			},
			"DZ": {
				"value": "100",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Algeria<\/span> "
				}
			},
			"DE": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Germany<\/span> "
				}
			},
			"AD": {
				"value": "1100",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Andorra<\/span> "
				}
			},
			"AO": {
				"value": "1100",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Angola<\/span> "
				}
			},
			"AG": {
				"value": "89612",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Antigua And Barbuda<\/span> "
				}
			},
			"SA": {
				"value": "28082541",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Saudi Arabia<\/span> "
				}
			},
			"AR": {
				"value": "28082541",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Argentina<\/span> "
				}
			},
			"AM": {
				"value": "3100236",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Armenia<\/span> "
				}
			},
			"AU": {
				"value": "6",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Australia<\/span> "
				}
			},
			"AT": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Austria<\/span> "
				}
			},
			"AZ": {
				"value": "9168000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Azerbaijan<\/span> "
				}
			},
			"BS": {
				"value": "347176",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Bahamas<\/span> "
				}
			},
			"BH": {
				"value": "1323535",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Bahrain<\/span> "
				}
			},
			"BD": {
				"value": "150493658",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Bangladesh<\/span> "
				}
			},
			"BB": {
				"value": "273925",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Barbados<\/span> "
				}
			},
			"BE": {
				"value": "11008000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Belgium<\/span> "
				}
			},
			"BZ": {
				"value": "356600",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Belize<\/span> "
				}
			},
			"BJ": {
				"value": "9099922",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Benin<\/span> "
				}
			},
			"BT": {
				"value": "738267",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Bhutan<\/span> "
				}
			},
			"BY": {
				"value": "9473000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Belarus<\/span> "
				}
			},
			"MM": {
				"value": "48336763",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Myanmar<\/span> "
				}
			},
			"BO": {
				"value": "6",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Bolivia, Plurinational State Of<\/span> "
				}
			},
			"BA": {
				"value": "3752228",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Bosnia And Herzegovina<\/span> "
				}
			},
			"BW": {
				"value": "2030738",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Botswana<\/span> "
				}
			},
			"BR": {
				"value": "324098234",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Brazil<\/span> "
				}
			},
			"BN": {
				"value": "405938",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Brunei Darussalam<\/span> "
				}
			},
			"BG": {
				"value": "7476000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Bulgaria<\/span> "
				}
			},
			"BF": {
				"value": "16967845",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Burkina Faso<\/span> "
				}
			},
			"BI": {
				"value": "8575172",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Burundi<\/span> "
				}
			},
			"KH": {
				"value": "14305183",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Cambodia<\/span> "
				}
			},
			"CM": {
				"value": "20030362",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Cameroon<\/span> "
				}
			},
			"CA": {
				"value": "34482779",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Canada<\/span> "
				}
			},
			"CV": {
				"value": "500585",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Cape Verde<\/span> "
				}
			},
			"CF": {
				"value": "4486837",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Central African Republic<\/span> "
				}
			},
			"CL": {
				"value": "2342346",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Chile<\/span> "
				}
			},
			"CN": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">China<\/span> "
				}
			},
			"CY": {
				"value": "1116564",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Cyprus<\/span> "
				}
			},
			"CO": {
				"value": "6",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Colombia<\/span> "
				}
			},
			"KM": {
				"value": "753943",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Comoros<\/span> "
				}
			},
			"CG": {
				"value": "4139748",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Congo<\/span> "
				}
			},
			"CD": {
				"value": "67757577",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Congo, The Democratic Republic Of The<\/span> "
				}
			},
			"KP": {
				"value": "24451285",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Korea, Democratic People's Republic Of<\/span> "
				}
			},
			"KR": {
				"value": "49779000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Korea, Republic Of<\/span> "
				}
			},
			"CR": {
				"value": "2342346",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Costa Rica<\/span> "
				}
			},
			"CI": {
				"value": "20152894",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">C\u00d4te D'ivoire<\/span> "
				}
			},
			"HR": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Croatia<\/span> "
				}
			},
			"CU": {
				"value": "11253665",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Cuba<\/span> "
				}
			},
			"DK": {
				"value": "6",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Denmark<\/span> "
				}
			},
			"DJ": {
				"value": "905564",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Djibouti<\/span> "
				}
			},
			"DM": {
				"value": "67675",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Dominica<\/span> "
				}
			},
			"EG": {
				"value": "82536770",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Egypt<\/span> "
				}
			},
			"AE": {
				"value": "7890924",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">United Arab Emirates<\/span> "
				}
			},
			"EC": {
				"value": "6",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Ecuador<\/span> "
				}
			},
			"ER": {
				"value": "5415280",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Eritrea<\/span> "
				}
			},
			"ES": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Spain<\/span> "
				}
			},
			"EE": {
				"value": "1340000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Estonia<\/span> "
				}
			},
			"US": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">United States<\/span> "
				}
			},
			"ET": {
				"value": "84734262",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Ethiopia<\/span> "
				}
			},
			"FJ": {
				"value": "868406",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Fiji<\/span> "
				}
			},
			"FI": {
				"value": "6",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Finland<\/span> "
				}
			},
			"FR": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">France<\/span> "
				}
			},
			"GA": {
				"value": "1534262",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Gabon<\/span> "
				}
			},
			"GM": {
				"value": "1776103",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Gambia<\/span> "
				}
			},
			"GE": {
				"value": "4486000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Georgia<\/span> "
				}
			},
			"GH": {
				"value": "24965816",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Ghana<\/span> "
				}
			},
			"GR": {
				"value": "11304000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Greece<\/span> "
				}
			},
			"GD": {
				"value": "104890",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Grenada<\/span> "
				}
			},
			"GT": {
				"value": "14757316",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Guatemala<\/span> "
				}
			},
			"GN": {
				"value": "10221808",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Guinea<\/span> "
				}
			},
			"GQ": {
				"value": "720213",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Equatorial Guinea<\/span> "
				}
			},
			"GW": {
				"value": "1547061",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Guinea-bissau<\/span> "
				}
			},
			"GY": {
				"value": "756040",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Guyana<\/span> "
				}
			},
			"HT": {
				"value": "10123787",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Haiti<\/span> "
				}
			},
			"HN": {
				"value": "7754687",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Honduras<\/span> "
				}
			},
			"HU": {
				"value": "9971000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Hungary<\/span> "
				}
			},
			"JM": {
				"value": "2709300",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Jamaica<\/span> "
				}
			},
			"JP": {
				"value": "127817277",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Japan<\/span> "
				}
			},
			"MH": {
				"value": "54816",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Marshall Islands<\/span> "
				}
			},
			"PW": {
				"value": "20609",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Palau<\/span> "
				}
			},
			"SB": {
				"value": "552267",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Solomon Islands<\/span> "
				}
			},
			"IN": {
				"value": "1241491960",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">India<\/span> "
				}
			},
			"ID": {
				"value": "242325638",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Indonesia<\/span> "
				}
			},
			"JO": {
				"value": "6181000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Jordan<\/span> "
				}
			},
			"IR": {
				"value": "74798599",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Iran, Islamic Republic Of<\/span> "
				}
			},
			"IQ": {
				"value": "32961959",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Iraq<\/span> "
				}
			},
			"IE": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Ireland<\/span> "
				}
			},
			"IS": {
				"value": "319000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Iceland<\/span> "
				}
			},
			"IL": {
				"value": "7765700",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Israel<\/span> "
				}
			},
			"IT": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Italy<\/span> "
				}
			},
			"KZ": {
				"value": "16558459",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Kazakhstan<\/span> "
				}
			},
			"KE": {
				"value": "41609728",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Kenya<\/span> "
				}
			},
			"KG": {
				"value": "5507000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Kyrgyzstan<\/span> "
				}
			},
			"KI": {
				"value": "101093",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Kiribati<\/span> "
				}
			},
			"KW": {
				"value": "2818042",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Kuwait<\/span> "
				}
			},
			"LA": {
				"value": "6288037",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Lao People's Democratic Republic<\/span> "
				}
			},
			"LS": {
				"value": "2193843",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Lesotho<\/span> "
				}
			},
			"LV": {
				"value": "2220000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Latvia<\/span> "
				}
			},
			"LB": {
				"value": "4259405",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Lebanon<\/span> "
				}
			},
			"LR": {
				"value": "4128572",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Liberia<\/span> "
				}
			},
			"LY": {
				"value": "6422772",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Libya<\/span> "
				}
			},
			"LI": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Liechtenstein<\/span> "
				}
			},
			"LT": {
				"value": "3203000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Lithuania<\/span> "
				}
			},
			"LU": {
				"value": "517000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Luxembourg<\/span> "
				}
			},
			"MK": {
				"value": "2063893",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Macedonia, The Former Yugoslav Republic Of<\/span> "
				}
			},
			"MG": {
				"value": "21315135",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Madagascar<\/span> "
				}
			},
			"MY": {
				"value": "28859154",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Malaysia<\/span> "
				}
			},
			"MW": {
				"value": "15380888",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Malawi<\/span> "
				}
			},
			"MV": {
				"value": "320081",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Maldives<\/span> "
				}
			},
			"ML": {
				"value": "15839538",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Mali<\/span> "
				}
			},
			"MT": {
				"value": "419000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Malta<\/span> "
				}
			},
			"MA": {
				"value": "32272974",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Morocco<\/span> "
				}
			},
			"MU": {
				"value": "1286051",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Mauritius<\/span> "
				}
			},
			"MR": {
				"value": "3541540",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Mauritania<\/span> "
				}
			},
			"MX": {
				"value": "114793341",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Mexico<\/span> "
				}
			},
			"FM": {
				"value": "111542",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Micronesia, Federated States Of<\/span> "
				}
			},
			"MD": {
				"value": "3559000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Moldova, Republic Of<\/span> "
				}
			},
			"MC": {
				"value": "35427",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Monaco<\/span> "
				}
			},
			"MN": {
				"value": "2800114",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Mongolia<\/span> "
				}
			},
			"ME": {
				"value": "632261",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Montenegro<\/span> "
				}
			},
			"MZ": {
				"value": "23929708",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Mozambique<\/span> "
				}
			},
			"NA": {
				"value": "2324004",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Namibia<\/span> "
				}
			},
			"NP": {
				"value": "30485798",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Nepal<\/span> "
				}
			},
			"NI": {
				"value": "5869859",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Nicaragua<\/span> "
				}
			},
			"NE": {
				"value": "16068994",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Niger<\/span> "
				}
			},
			"NG": {
				"value": "162470737",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Nigeria<\/span> "
				}
			},
			"NO": {
				"value": "6",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Norway<\/span> "
				}
			},
			"NZ": {
				"value": "6",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">New Zealand<\/span> "
				}
			},
			"OM": {
				"value": "2846145",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Oman<\/span> "
				}
			},
			"UG": {
				"value": "34509205",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Uganda<\/span> "
				}
			},
			"UZ": {
				"value": "29341200",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Uzbekistan<\/span> "
				}
			},
			"PK": {
				"value": "176745364",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Pakistan<\/span> "
				}
			},
			"PS": {
				"value": "4019433",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Palestine, State Of<\/span> "
				}
			},
			"PA": {
				"value": "3571185",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Panama<\/span> "
				}
			},
			"PG": {
				"value": "7013829",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Papua New Guinea<\/span> "
				}
			},
			"PY": {
				"value": "6",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Paraguay<\/span> "
				}
			},
			"NL": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Netherlands<\/span> "
				}
			},
			"PE": {
				"value": "6",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Peru<\/span> "
				}
			},
			"PH": {
				"value": "94852030",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Philippines<\/span> "
				}
			},
			"PL": {
				"value": "38216000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Poland<\/span> "
				}
			},
			"PT": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Portugal<\/span> "
				}
			},
			"QA": {
				"value": "1870041",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Qatar<\/span> "
				}
			},
			"DO": {
				"value": "10056181",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Dominican Republic<\/span> "
				}
			},
			"RO": {
				"value": "21390000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Romania<\/span> "
				}
			},
			"GB": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">United Kingdom<\/span> "
				}
			},
			"RU": {
				"value": "141930000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Russian Federation<\/span> "
				}
			},
			"RW": {
				"value": "10942950",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Rwanda<\/span> "
				}
			},
			"KN": {
				"value": "53051",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Saint Kitts And Nevis<\/span> "
				}
			},
			"SM": {
				"value": "31735",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">San Marino<\/span> "
				}
			},
			"VC": {
				"value": "109365",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Saint Vincent And The Grenadines<\/span> "
				}
			},
			"LC": {
				"value": "176000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Saint Lucia<\/span> "
				}
			},
			"SV": {
				"value": "6227491",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">El Salvador<\/span> "
				}
			},
			"WS": {
				"value": "183874",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Samoa<\/span> "
				}
			},
			"ST": {
				"value": "168526",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sao Tome And Principe<\/span> "
				}
			},
			"SN": {
				"value": "12767556",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Senegal<\/span> "
				}
			},
			"RS": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Serbia<\/span> "
				}
			},
			"SC": {
				"value": "86000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Seychelles<\/span> "
				}
			},
			"SL": {
				"value": "5997486",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sierra Leone<\/span> "
				}
			},
			"SG": {
				"value": "5183700",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Singapore<\/span> "
				}
			},
			"SK": {
				"value": "5440000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Slovakia<\/span> "
				}
			},
			"SI": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Slovenia<\/span> "
				}
			},
			"SO": {
				"value": "9556873",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Somalia<\/span> "
				}
			},
			"SD": {
				"value": "34318385",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sudan<\/span> "
				}
			},
			"SS": {
				"value": "10314021",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">South Sudan<\/span> "
				}
			},
			"LK": {
				"value": "20869000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sri Lanka<\/span> "
				}
			},
			"SE": {
				"value": "6",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sweden<\/span> "
				}
			},
			"CH": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Switzerland<\/span> "
				}
			},
			"SR": {
				"value": "529419",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Suriname<\/span> "
				}
			},
			"SZ": {
				"value": "1067773",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Swaziland<\/span> "
				}
			},
			"SY": {
				"value": "20820311",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Syrian Arab Republic<\/span> "
				}
			},
			"TJ": {
				"value": "6976958",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Tajikistan<\/span> "
				}
			},
			"TZ": {
				"value": "46218486",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Tanzania, United Republic Of<\/span> "
				}
			},
			"TD": {
				"value": "11525496",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Chad<\/span> "
				}
			},
			"CZ": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Czech Republic<\/span> "
				}
			},
			"TH": {
				"value": "69518555",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Thailand<\/span> "
				}
			},
			"TL": {
				"value": "1175880",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Timor-leste<\/span> "
				}
			},
			"TG": {
				"value": "6154813",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Togo<\/span> "
				}
			},
			"TO": {
				"value": "104509",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Tonga<\/span> "
				}
			},
			"TT": {
				"value": "1346350",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Trinidad And Tobago<\/span> "
				}
			},
			"TN": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Tunisia<\/span> "
				}
			},
			"TM": {
				"value": "5105301",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Turkmenistan<\/span> "
				}
			},
			"TR": {
				"value": "1",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Turkey<\/span> "
				}
			},
			"TV": {
				"value": "9847",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Tuvalu<\/span> "
				}
			},
			"VU": {
				"value": "245619",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Vanuatu<\/span> "
				}
			},
			"VE": {
				"value": "2342346",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Venezuela<\/span> "
				}
			},
			"VN": {
				"value": "87840000",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Viet Nam<\/span> "
				}
			},
			"UA": {
				"value": "45706100",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Ukraine<\/span> "
				}
			},
			"UY": {
				"value": "632432",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Uruguay<\/span> "
				}
			},
			"YE": {
				"value": "24799880",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Yemen<\/span> "
				}
			},
			"ZM": {
				"value": "13474959",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Zambia<\/span> "
				}
			},
			"ZW": {
				"value": "12754378",
				"attrs": {

				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Zimbabwe<\/span> "
				}
			}
		}
	});

});
