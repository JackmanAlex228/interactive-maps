let CountryNameToId = [
    { name: "Afghanistan", id: "AF" },
    { name: "Albania", id: "AL" },
    { name: "Algeria", id: "DZ" },
    { name: "Angola", id: "AO" },
    { name: "Argentina", id: "AR" },
    { name: "Armenia", id: "AM" },
    { name: "Australia", id: "AU" },
    { name: "Austria", id: "AT" },
    { name: "Azerbaijan", id: "AZ" },
    { name: "Bahrain", id: "BH" },
    { name: "Bangladesh", id: "BD" },
    { name: "Belarus", id: "BY" },
    { name: "Belgium", id: "BE" },
    { name: "Benin", id: "BJ" },
    { name: "Bhutan", id: "BT" },
    { name: "Bolivia", id: "BO" },
    { name: "Bosnia", id: "BA" },
    { name: "Botswana", id: "BW" },
    { name: "Brazil", id: "BR" },
    { name: "Brunei", id: "BN" },
    { name: "Bulgaria", id: "BG" },
    { name: "Burkina Faso", id: "BF" },
    { name: "Burundi", id: "BI" },
    { name: "Cambodia", id: "KH" },
    { name: "Cameroon", id: "CM" },
    { name: "Canada", id: "CA" },
    { name: "Cape Verde", id: "CV" },
    { name: "Central African Republic", id: "CF" },
    { name: "Chad", id: "TD" },
    { name: "Chile", id: "CL" },
    { name: "China", id: "CN" },
    { name: "Colombia", id: "CO" },
    { name: "Comoros", id: "KM" },
    { name: "Congo (Kinshasa)", id: "CD" },
    { name: "Congo (Brazzaville)", id: "CG" },
    { name: "Costa Rica", id: "CR" },
    { name: "Ivory Coast", id: "CI" },
    { name: "Croatia", id: "HR" },
    { name: "Cuba", id: "CU" },
    { name: "North Cyprus", id: "TC" },
    { name: "Cyprus", id: "CY" },
    { name: "Czech Republic", id: "CZ" },
    { name: "Denmark", id: "DK" },
    { name: "Greenland", id: "GL" },
    { name: "Djibouti", id: "DJ" },
    { name: "Dominican Republic", id: "DO" },
    { name: "Ecuador", id: "EC" },
    { name: "Egypt", id: "EG" },
    { name: "El Salvador", id: "SV" },
    { name: "Equatorial Guinea", id: "GQ" },
    { name: "Eritrea", id: "ER" },
    { name: "Estonia", id: "EE" },
    { name: "Ethiopia", id: "ET" },
    { name: "Fiji", id: "FJ" },
    { name: "Finland", id: "FI" },
    { name: "France", id: "FR" },
    { name: "Gabon", id: "GA" },
    { name: "French Guiana", id: "GF" },
    { name: "Gambia", id: "GM" },
    { name: "Georgia", id: "GE" },
    { name: "Germany", id: "DE" },
    { name: "Ghana", id: "GH" },
    { name: "Greece", id: "GR" },
    { name: "Guatemala", id: "GT" },
    { name: "Guinea", id: "GN" },
    { name: "Guinea-Biss", id: "GW" },
    { name: "Guyana", id: "GY" },
    { name: "Haiti", id: "HT" },
    { name: "Honduras", id: "HN" },
    { name: "Hong Kong", id: "HK" },
    { name: "Hungary", id: "HU" },
    { name: "Iceland", id: "IS" },
    { name: "India", id: "IN" },
    { name: "Indonesia", id: "ID" },
    { name: "Iran", id: "IR" },
    { name: "Iraq", id: "IQ" },
    { name: "Ireland", id: "IE" },
    { name: "Israel", id: "IL" },
    { name: "Italy", id: "IT" },
    { name: "Jamaica", id: "JM" },
    { name: "Japan", id: "JP" },
    { name: "Jordan", id: "JO" },
    { name: "Kazakhstan", id: "KZ" },
    { name: "Kenya", id: "KE" },
    { name: "North Korea", id: "KP" },
    { name: "South Korea", id: "KR" },
    { name: "Kosovo", id: "XK" },
    { name: "Kuwait", id: "KW" },
    { name: "Kyrgyzstan", id: "KG" },
    { name: "Lao PDR", id: "LA" },
    { name: "Latvia", id: "LV" },
    { name: "Lebanon", id: "LB" },
    { name: "Lesotho", id: "LS" },
    { name: "Liberia", id: "LR" },
    { name: "Libya", id: "LY" },
    { name: "Lithuania", id: "LT" },
    { name: "Luxembourg", id: "LU" },
    { name: "Macedonia", id: "MK" },
    { name: "Madagascar", id: "MG" },
    { name: "Malawi", id: "MW" },
    { name: "Malaysia", id: "MY" },
    { name: "Maldives", id: "MV" },
    { name: "Mali", id: "ML" },
    { name: "Malta", id: "MT" },
    { name: "Mauritania", id: "MR" },
    { name: "Mauritius", id: "MU" },
    { name: "Mexico", id: "MX" },
    { name: "Moldova", id: "MD" },
    { name: "Mongolia", id: "MN" },
    { name: "Montenegro", id: "ME" },
    { name: "Morocco", id: "MA" },
    { name: "West Sahara", id: "EH" },
    { name: "Mozambique", id: "MZ" },
    { name: "Myanmar", id: "MM" },
    { name: "Namibia", id: "NA" },
    { name: "Nepal", id: "NP" },
    { name: "Netherlands", id: "NL" },
    { name: "New Zealand", id: "NZ" },
    { name: "Nicaragua", id: "NI" },
    { name: "Niger", id: "NE" },
    { name: "Nigeria", id: "NG" },
    { name: "Norway", id: "NO" },
    { name: "Svalbard and Jan Mayen", id: "SJ" },
    { name: "Oman", id: "OM" },
    { name: "Pakistan", id: "PK" },
    { name: "Panama", id: "PA" },
    { name: "Papua New Guinea", id: "PG" },
    { name: "Paraguay", id: "PY" },
    { name: "Peru", id: "PE" },
    { name: "Philippines", id: "PH" },
    { name: "Poland", id: "PL" },
    { name: "Portugal", id: "PT" },
    { name: "Qatar", id: "QA" },
    { name: "Romania", id: "RO" },
    { name: "Russia", id: "RU" },
    { name: "Rwanda", id: "RW" },
    { name: "Saudi Arabia", id: "SA" },
    { name: "Senegal", id: "SN" },
    { name: "Serbia", id: "RS" },
    { name: "Sierra Leone", id: "SL" },
    { name: "Singapore", id: "SG" },
    { name: "Slovakia", id: "SK" },
    { name: "Solvenia", id: "SI" },
    { name: "Solomon Is", id: "SB" },
    { name: "Somalia", id: "SO" },
    { name: "South Africa", id: "ZA" },
    { name: "South Sudan", id: "SS" },
    { name: "Spain", id: "ES" },
    { name: "Sri Lanka", id: "LK" },
    { name: "Sudan", id: "SD" },
    { name: "Suriname", id: "SR" },
    { name: "Swaziland", id: "SZ" },
    { name: "Sweden", id: "SE" },
    { name: "Switzerland", id: "CH" },
    { name: "Syria", id: "SY" },
    { name: "Taiwan", id: "TW" },
    { name: "Tajikistan", id: "TJ" },
    { name: "Tanzania", id: "TZ" },
    { name: "Thailand", id: "TH" },
    { name: "Timor-Leste", id: "TL" },
    { name: "Togo", id: "TG" },
    { name: "Trinidad", id: "TT" },
    { name: "Tunisia", id: "TN" },
    { name: "Turkey", id: "TR" },
    { name: "Turkmenistan", id: "TM" },
    { name: "Uganda", id: "UG" },
    { name: "Ukraine", id: "UA" },
    { name: "United Arab Emerates", id: "AE" },
    { name: "United Kingdom", id: "GB" },
    { name: "United States", id: "US" },
    { name: "Uruguay", id: "UY" },
    { name: "Uzbekistan", id: "UZ" },
    { name: "Venezuela", id: "VE" },
    { name: "Palestine", id: "PS" },
    { name: "Vietnam", id: "VN" },
    { name: "Yemen", id: "YE" },
    { name: "Zambia", id: "ZM" },
    { name: "Zimbabwe", id: "ZW" }
]

export default CountryNameToId;