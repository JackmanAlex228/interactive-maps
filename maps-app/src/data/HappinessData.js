import * as am4core from "@amcharts/amcharts4/core";

let HappinessSeries = [
    { name: "Afghanistan", id: "AF", value: 25.23, rank: 149 },
    { name: "Albania", id: "AL", value: 51.17, rank: 93 },
    { name: "Algeria", id: "DZ", value: 48.87, rank: 109 },
    { name: "Angola", id: "AO", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Argentina", id: "AR", value: 59.29, rank: 57 },
    { name: "Armenia", id: "AM", value: 52.83, rank: 86 },
    { name: "Australia", id: "AU", value: 71.83, rank: 11 },
    { name: "Austria", id: "AT", value: 72.68, rank: 10 },
    { name: "Azerbaijan", id: "AZ", value: 51.71, rank: 90 },
    { name: "Bahrain", id: "BH", value: 66.47, rank: 22 },
    { name: "Bangladesh", id: "BD", value: 50.25, rank: 101 },
    { name: "Belarus", id: "BY", value: 55.34, rank: 75 },
    { name: "Belgium", id: "BE", value: 68.34, rank: 30 },
    { name: "Benin", id: "BJ", value: 50.45, rank: 99 },
    { name: "Bhutan", id: "BT", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Bolivia", id: "BO", value: 57.16, rank: 69 },
    { name: "Bosnia", id: "BA", value: 58.13, rank: 64 },
    { name: "Botswana", id: "BW", value: 34.67, rank: 146 },
    { name: "Brazil", id: "BR", value: 63.30, rank: 35 },
    { name: "Brunei", id: "BN", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Bulgaria", id: "BG", value: 52.66, rank: 88 },
    { name: "Burkina Faso", id: "BF", value: 48.34, rank: 113 },
    { name: "Burundi", id: "BI", value: 37.75, rank: 140 },
    { name: "Cambodia", id: "KH", value: 48.30, rank: 114 },
    { name: "Cameroon", id: "CM", value: 50.42, rank: 91 },
    { name: "Canada", id: "CA", value: 71.03, rank: 14 },
    { name: "Cape Verde", id: "CV", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Central African Republic", id: "CF", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Chad", id: "TD", value: 43.55, rank: 128 },
    { name: "Chile", id: "CL", value: 61.72, rank: 43 },
    { name: "China", id: "CN", value: 53.39, rank: 84 },
    { name: "Colombia", id: "CO", value: 60.12, rank: 52 },
    { name: "Comoros", id: "KM", value: 42.89, rank: 131 },
    { name: "Congo (Kinshasa)", id: "CD", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Congo (Brazzaville)", id: "CG", value: 53.42, rank: 83 },
    { name: "Costa Rica", id: "CR", value: 70.69, rank: 16 },
    { name: "Ivory Coast", id: "CI", value: 53.06, rank: 85 },
    { name: "Croatia", id: "HR", value: 58.82, rank: 60 },
    { name: "Cuba", id: "CU", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "North Cyprus", id: "TC", value: 55.36, rank: 74 },
    { name: "Cyprus", id: "CY", value: 62.34, rank: 39 },
    { name: "Czech Republic", id: "CZ", value: 69.65, rank: 18 },
    { name: "Denmark", id: "DK", value: 76.20, rank: 2 },
    { name: "Greenland", id: "GL", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Djibouti", id: "DJ", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Dominican Republic", id: "DO", value: 55.45, rank: 73 },
    { name: "Ecuador", id: "EC", value: 57.64, rank: 66 },
    { name: "Egypt", id: "EG", value: 42.83, rank: 132 },
    { name: "El Salvador", id: "SV", value: 60.61, rank: 49 },
    { name: "Equatorial Guinea", id: "GQ", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Eritrea", id: "ER", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Estonia", id: "EE", value: 61.89, rank: 40 },
    { name: "Ethiopia", id: "ET", value: 42.75, rank: 133 },
    { name: "Fiji", id: "FJ", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Finland", id: "FI", value: 78.42, rank: 1 },
    { name: "France", id: "FR", value: 66.90, rank: 21 },
    { name: "Gabon", id: "GA", value: 48.52, rank: 112 },
    { name: "French Guiana", id: "GF", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Gambia", id: "GM", value: 50.51, rank: 98 },
    { name: "Georgia", id: "GE", value: 48.91, rank: 108 },
    { name: "Germany", id: "DE", value: 71.55, rank: 13 },
    { name: "Ghana", id: "GH", value: 50.88, rank: 95 },
    { name: "Greece", id: "GR", value: 57.23, rank: 68 },
    { name: "Guatemala", id: "GT", value: 64.35, rank: 30 },
    { name: "Guinea", id: "GN", value: 49.84, rank: 102 },
    { name: "Guinea-Biss", id: "GW", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Guyana", id: "GY", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Haiti", id: "HT", value: 36.15, rank: 143 },
    { name: "Honduras", id: "HN", value: 59.19, rank: 59 },
    { name: "Hong Kong", id: "HK", value: 54.77, rank: 77 },
    { name: "Hungary", id: "HU", value: 59.92, rank: 53 },
    { name: "Iceland", id: "IS", value: 75.54, rank: 4 },
    { name: "India", id: "IN", value: 38.19, rank: 139 },
    { name: "Indonesia", id: "ID", value: 53.45, rank: 82 },
    { name: "Iran", id: "IR", value: 47.21, rank: 118 },
    { name: "Iraq", id: "IQ", value: 48.54, rank: 111 },
    { name: "Ireland", id: "IE", value: 70.85, rank: 15 },
    { name: "Israel", id: "IL", value: 71.57, rank: 12 },
    { name: "Italy", id: "IT", value: 64.83, rank: 28 },
    { name: "Jamaica", id: "JM", value: 63.09, rank: 37 },
    { name: "Japan", id: "JP", value: 59.40, rank: 56 },
    { name: "Jordan", id: "JO", value: 43.95, rank: 127 },
    { name: "Kazakhstan", id: "KZ", value: 61.52, rank: 45 },
    { name: "Kenya", id: "KE", value: 46.07, rank: 121 },
    { name: "North Korea", id: "KP", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "South Korea", id: "KR", value: 58.45, rank: 62 },
    { name: "Kosovo", id: "XK", value: 63.72, rank: 33 },
    { name: "Kuwait", id: "KW", value: 61.06, rank: 47 },
    { name: "Kyrgyzstan", id: "KG", value: 57.44, rank: 67 },
    { name: "Lao PDR", id: "LA", value: 50.30, rank: 100 },
    { name: "Latvia", id: "LV", value: 60.32, rank: 51 },
    { name: "Lebanon", id: "LB", value: 45.84, rank: 123 },
    { name: "Lesotho", id: "LS", value: 35.12, rank: 145 },
    { name: "Liberia", id: "LR", value: 46.25, rank: 120 },
    { name: "Libya", id: "LY", value: 54.10, rank: 80 },
    { name: "Lithuania", id: "LT", value: 62.55, rank: 38 },
    { name: "Luxembourg", id: "LU", value: 73.24, rank: 8 },
    { name: "Macedonia", id: "MK", value: 51.01, rank: 94 },
    { name: "Madagascar", id: "MG", value: 42.08, rank: 135 },
    { name: "Malawi", id: "MW", value: 36.00, rank: 144 },
    { name: "Malaysia", id: "MY", value: 53.84, rank: 81 },
    { name: "Maldives", id: "MV", value: 51.98, rank: 89 },
    { name: "Mali", id: "ML", value: 47.23, rank: 117 },
    { name: "Malta", id: "MT", value: 66.02, rank: 23 },
    { name: "Mauritania", id: "MR", value: 42.27, rank: 134 },
    { name: "Mauritius", id: "MU", value: 60.49, rank: 50 },
    { name: "Mexico", id: "MX", value: 63.17, rank: 36 },
    { name: "Moldova", id: "MD", value: 57.66, rank: 65 },
    { name: "Mongolia", id: "MN", value: 56.77, rank: 70 },
    { name: "Montenegro", id: "ME", value: 55.81, rank: 72 },
    { name: "Morocco", id: "MA", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "West Sahara", id: "EH", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Mozambique", id: "MZ", value: 47.94, rank: 115 },
    { name: "Myanmar", id: "MM", value: 44.26, rank: 126 },
    { name: "Namibia", id: "NA", value: 45.74, rank: 124 },
    { name: "Nepal", id: "NP", value: 52.69, rank: 87 },
    { name: "Netherlands", id: "NL", value: 74.64, rank: 5 },
    { name: "New Zealand", id: "NZ", value: 72.77, rank: 9 },
    { name: "Nicaragua", id: "NI", value: 59.72, rank: 55 },
    { name: "Niger", id: "NE", value: 50.74, rank: 96 },
    { name: "Nigeria", id: "NG", value: 47.59, rank: 116 },
    { name: "Norway", id: "NO", value: 73.93, rank: 6 },
    { name: "Svalbard and Jan Mayen Islands", id: "SJ", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Oman", id: "OM", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Pakistan", id: "PK", value: 49.34, rank: 105 },
    { name: "Panama", id: "PA", value: 61.80, rank: 41 },
    { name: "Papua New Guinea", id: "PG", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Paraguay", id: "PY", value: 56.53, rank: 71 },
    { name: "Peru", id: "PE", value: 58.40, rank: 63 },
    { name: "Philippines", id: "PH", value: 58.80, rank: 61 },
    { name: "Poland", id: "PL", value: 61.66, rank: 44 },
    { name: "Portugal", id: "PT", value: 59.29, rank: 58 },
    { name: "Qatar", id: "QA", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Romania", id: "RO", value: 61.40, rank: 46 },
    { name: "Russia", id: "RU", value: 54.77, rank: 76 },
    { name: "Rwanda", id: "RW", value: 34.15, rank: 147 },
    { name: "Saudi Arabia", id: "SA", value: 64.94, rank: 26 },
    { name: "Senegal", id: "SN", value: 51.32, rank: 92 },
    { name: "Serbia", id: "RS", value: 60.78, rank: 48 },
    { name: "Sierra Leone", id: "SL", value: 38.49, rank: 138 },
    { name: "Singapore", id: "SG", value: 63.77, rank: 32 },
    { name: "Slovakia", id: "SK", value: 63.31, rank: 34 },
    { name: "Solvenia", id: "SI", value: 64.61, rank: 29 },
    { name: "Solomon Is", id: "SB", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Somalia", id: "SO", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "South Africa", id: "ZA", value: 49.56, rank: 103 },
    { name: "South Sudan", id: "SS", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Spain", id: "ES", value: 64.91, rank: 28 },
    { name: "Sri Lanka", id: "LK", value: 43.25, rank: 129 },
    { name: "Sudan", id: "SD", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Suriname", id: "SR", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Swaziland", id: "SZ", value: 43.08, rank: 130 },
    { name: "Sweden", id: "SE", value: 73.63, rank: 7 },
    { name: "Switzerland", id: "CH", value: 75.71, rank: 3 },
    { name: "Syria", id: "SY", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Taiwan", id: "TW", value: 65.84, rank: 24 },
    { name: "Tajikistan", id: "TJ", value: 54.66, rank: 78 },
    { name: "Tanzania", id: "TZ", value: 36.23, rank: 142 },
    { name: "Thailand", id: "TH", value: 59.85, rank: 54 },
    { name: "Timor-Leste", id: "TL", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Togo", id: "TG", value: 41.07, rank: 136 },
    { name: "Trinidad", id: "TT", value: 0, rank: "N/A", fill: am4core.color("#DADADA") },
    { name: "Tunisia", id: "TN", value: 45.96, rank: 122 },
    { name: "Turkey", id: "TR", value: 49.48, rank: 104 },
    { name: "Turkmenistan", id: "TM", value: 50.66, rank: 97 },
    { name: "Uganda", id: "UG", value: 46.36, rank: 119 },
    { name: "Ukraine", id: "UA", value: 48.75, rank: 110 },
    { name: "United Arab Emerates", id: "AE", value: 65.61, rank: 25 },
    { name: "United Kingdom", id: "GB", value: 70.64, rank: 17 },
    { name: "United States", id: "US", value: 69.51, rank: 19 },
    { name: "Uruguay", id: "UY", value: 64.31, rank: 31 },
    { name: "Uzbekistan", id: "UZ", value: 61.79, rank: 42 },
    { name: "Venezuela", id: "VE", value: 48.92, rank: 107 },
    { name: "Palestine", id: "PS", value: 45.17, rank: 125 },
    { name: "Vietnam", id: "VN", value: 54.11, rank: 79 },
    { name: "Yemen", id: "YE", value: 36.58, rank: 141 },
    { name: "Zambia", id: "ZM", value: 40.73, rank: 137 },
    { name: "Zimbabwe", id: "ZW", value: 31.45, rank: 148 }
]

export default HappinessSeries;