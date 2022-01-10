var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_indonesiapeta_0 = new ol.format.GeoJSON();
var features_indonesiapeta_0 = format_indonesiapeta_0.readFeatures(json_indonesiapeta_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_indonesiapeta_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_indonesiapeta_0.addFeatures(features_indonesiapeta_0);var lyr_indonesiapeta_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_indonesiapeta_0, 
                style: style_indonesiapeta_0,
    title: 'indonesiapeta<br />\
    <img src="styles/legend/indonesiapeta_0_0.png" />  2.0000 - 4.6000 <br />\
    <img src="styles/legend/indonesiapeta_0_1.png" />  4.6000 - 7.2000 <br />\
    <img src="styles/legend/indonesiapeta_0_2.png" />  7.2000 - 9.8000 <br />\
    <img src="styles/legend/indonesiapeta_0_3.png" />  9.8000 - 12.4000 <br />\
    <img src="styles/legend/indonesiapeta_0_4.png" />  12.4000 - 15.0000 <br />'
        });

lyr_indonesiapeta_0.setVisible(true);
var layersList = [baseLayer,lyr_indonesiapeta_0];
lyr_indonesiapeta_0.set('fieldAliases', {'ID': 'ID', 'ID_Kec': 'ID_Kec', 'Kecamatan': 'Kecamatan', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'kode_prop': 'kode_prop', 'kode_kab': 'kode_kab', 'Wisata': 'Wisata', 'Desa': 'Desa', });
lyr_indonesiapeta_0.set('fieldImages', {'ID': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kecamatan': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', 'kode_prop': 'TextEdit', 'kode_kab': 'TextEdit', 'Wisata': 'TextEdit', 'Desa': 'TextEdit', });
lyr_indonesiapeta_0.set('fieldLabels', {'ID': 'inline label', 'ID_Kec': 'inline label', 'Kecamatan': 'inline label', 'xcoord': 'no label', 'ycoord': 'no label', 'kode_prop': 'no label', 'kode_kab': 'inline label', 'Wisata': 'inline label', 'Desa': 'inline label', });
lyr_indonesiapeta_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});