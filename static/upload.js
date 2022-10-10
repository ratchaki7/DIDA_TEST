function populate(x,y) {
    // alert('populate')
    if (x != '#provinces') {
        $(x).empty();
    }

    
    for (let index = 0; index < y.length; index++) {
        const element = y[index]
        const name = y[index]['name_th'];
        const id = y[index]['id'];   


       
       $(x).append(`<option value="${id}">${name}</option>`)
    
    }
}

function populate1(x,y) {
    // alert('populate')
    if (x != '#provincesGo') {
        $(x).empty();
    }

    
    for (let index = 0; index < y.length; index++) {
        const element = y[index]
        const name = y[index]['name_th'];
        const id = y[index]['id'];   


       
       $(x).append(`<option value="${id}">${name}</option>`)
    
    }
}

populate('#provinces',cities)
populate1('#provincesGo',cities)
// ####################################################

$("#provinces").change(function () { 
    let province_id = parseInt($("#provinces").val())
    var amphure = cities.filter(checkAmphure);

    function checkAmphure(cities) {
        if (cities.id == province_id) {
            return cities.amphure
        }
    }
    populate('#cities', amphure[0]['amphure'])

    const tambon = amphure[0]['amphure'].filter(checkTambol)

    function checkTambol(tambon) {
        if (parseInt(tambon.id) == parseInt(amphure[0]['amphure'][0]['id']) )  {
            return tambon.tambon
        }
    }
    populate('#subcities',tambon[0]['tambon'])


})

$("#provincesGo").change(function () { 
    let province_id = parseInt($("#provincesGo").val())
    var amphure = cities.filter(checkAmphureGo);

    function checkAmphureGo(cities) {
        if (cities.id == province_id) {
            return cities.amphure
        }
    }
    populate('#citiesGo', amphure[0]['amphure'])

    const tambon = amphure[0]['amphure'].filter(checkTambol)

    function checkTambol(tambon) {
        if (parseInt(tambon.id) == parseInt(amphure[0]['amphure'][0]['id']) )  {
            return tambon.tambon
        }
    }
    populate('#subcitiesGo',tambon[0]['tambon'])

})
// ####################################################

$("#cities").change(function () { 
    let city_id = parseInt($("#cities").val())
    let province_id = parseInt($("#provinces").val())

    const amphure = cities.filter(checkAmphure);
    function checkAmphure(cities) {
        if (cities.id == province_id )  {
            return cities.amphure
        }
    }

    const tambon = amphure[0]['amphure'].filter(checkTambol)
    function checkTambol(tambon) {
        if (tambon.id == city_id )  {
            return tambon.tambon
        }
    }
    populate('#subcities',tambon[0]['tambon'])
})

$("#citiesGo").change(function () { 
    let city_id = parseInt($("#citiesGo").val())

    const amphure = cities.filter(checkAmphureGo);
    function checkAmphureGo(cities) {
        if (cities.id == parseInt($("#provincesGo").val()) )  {
            return cities.amphure
        }
    }

    const tambon = amphure[0]['amphure'].filter(checkTambolGo)
    function checkTambolGo(tambon) {
        if (tambon.id == city_id )  {
            return tambon.tambon
        }
    }
    populate('#subcitiesGo',tambon[0]['tambon'])
})


function populate_country() {
    const COUNTRY = ['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua & Deps','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain',
    'Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina','Burundi',
    'Cambodia','Cameroon','Canada','Cape Verde','Central African Rep','Chad','Chile','China','Colombia','Comoros','Congo','Congo {Democratic Rep}','Costa Rica','Croatia',
    'Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','East Timor','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea',
    'Estonia','Ethiopia','Fiji','Finland','France','Gabon','Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti',
    'Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland (Republic)','Israel','Italy','Ivory Coast','Jamaica','Japan','Jordan','Kazakhstan','Kenya',
    'Kiribati','Korea North','Korea South','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg',
    'Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia',
    'Montenegro','Morocco','Mozambique','Myanmar (Burma)','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan',
    'Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russian Federation','Rwanda','St Kitts & Nevis','St Lucia',
    'Saint Vincent & the Grenadines','Samoa','San Marino','Sao Tome & Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia',
    'Slovenia','Solomon Islands','Somalia','South Africa','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan',
    'Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad & Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates',
    'United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe']
    for (let index = 0; index < COUNTRY.length; index++) {
        const name = COUNTRY[index];
        $('#countries').append(`<option value="${name}">${name}</option>`)}
}
populate_country()

$("#countries").change(function () { 
    var provinces = document.getElementById('provinces');
    provinces.disabled = true;
    var provinces = document.getElementById('cities');
    provinces.disabled = true;
    var provinces = document.getElementById('subcities');
    provinces.disabled = true;
    var provinces = document.getElementById('vehivles');
    provinces.disabled = true;
})

