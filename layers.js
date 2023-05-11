var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Indonesia_by_desa_1 = new ol.format.GeoJSON();
var features_Indonesia_by_desa_1 = format_Indonesia_by_desa_1.readFeatures(json_Indonesia_by_desa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indonesia_by_desa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indonesia_by_desa_1.addFeatures(features_Indonesia_by_desa_1);
var lyr_Indonesia_by_desa_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Indonesia_by_desa_1, 
                style: style_Indonesia_by_desa_1,
                interactive: true,
    title: 'Indonesia_by_desa<br />\
    <img src="styles/legend/Indonesia_by_desa_1_0.png" /> DANAU<br />\
    <img src="styles/legend/Indonesia_by_desa_1_1.png" /> LAGE<br />\
    <img src="styles/legend/Indonesia_by_desa_1_2.png" /> LORE BARAT<br />\
    <img src="styles/legend/Indonesia_by_desa_1_3.png" /> LORE PEORE<br />\
    <img src="styles/legend/Indonesia_by_desa_1_4.png" /> LORE SELATAN<br />\
    <img src="styles/legend/Indonesia_by_desa_1_5.png" /> LORE TENGAH<br />\
    <img src="styles/legend/Indonesia_by_desa_1_6.png" /> LORE TIMUR<br />\
    <img src="styles/legend/Indonesia_by_desa_1_7.png" /> LORE UTARA<br />\
    <img src="styles/legend/Indonesia_by_desa_1_8.png" /> PAMONA BARAT<br />\
    <img src="styles/legend/Indonesia_by_desa_1_9.png" /> PAMONA SELATAN<br />\
    <img src="styles/legend/Indonesia_by_desa_1_10.png" /> PAMONA TENGGARA<br />\
    <img src="styles/legend/Indonesia_by_desa_1_11.png" /> PAMONA TIMUR<br />\
    <img src="styles/legend/Indonesia_by_desa_1_12.png" /> PAMONA UTARA<br />\
    <img src="styles/legend/Indonesia_by_desa_1_13.png" /> POSO KOTA<br />\
    <img src="styles/legend/Indonesia_by_desa_1_14.png" /> POSO KOTA SELATAN<br />\
    <img src="styles/legend/Indonesia_by_desa_1_15.png" /> POSO KOTA UTARA<br />\
    <img src="styles/legend/Indonesia_by_desa_1_16.png" /> POSO PESISIR<br />\
    <img src="styles/legend/Indonesia_by_desa_1_17.png" /> POSO PESISIR SELATAN<br />\
    <img src="styles/legend/Indonesia_by_desa_1_18.png" /> POSO PESISIR UTARA<br />\
    <img src="styles/legend/Indonesia_by_desa_1_19.png" /> <br />'
        });
var format_jalannasional_2 = new ol.format.GeoJSON();
var features_jalannasional_2 = format_jalannasional_2.readFeatures(json_jalannasional_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalannasional_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalannasional_2.addFeatures(features_jalannasional_2);
var lyr_jalannasional_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalannasional_2, 
                style: style_jalannasional_2,
                interactive: true,
                title: '<img src="styles/legend/jalannasional_2.png" /> jalan nasional'
            });
var format_ibukotakecamatan_3 = new ol.format.GeoJSON();
var features_ibukotakecamatan_3 = format_ibukotakecamatan_3.readFeatures(json_ibukotakecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ibukotakecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ibukotakecamatan_3.addFeatures(features_ibukotakecamatan_3);
var lyr_ibukotakecamatan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ibukotakecamatan_3, 
                style: style_ibukotakecamatan_3,
                interactive: true,
                title: '<img src="styles/legend/ibukotakecamatan_3.png" /> ibu kota kecamatan'
            });
var format_ibukotakabupaten_4 = new ol.format.GeoJSON();
var features_ibukotakabupaten_4 = format_ibukotakabupaten_4.readFeatures(json_ibukotakabupaten_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ibukotakabupaten_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ibukotakabupaten_4.addFeatures(features_ibukotakabupaten_4);
var lyr_ibukotakabupaten_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ibukotakabupaten_4, 
                style: style_ibukotakabupaten_4,
                interactive: true,
                title: '<img src="styles/legend/ibukotakabupaten_4.png" /> ibu kota kabupaten'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Indonesia_by_desa_1.setVisible(true);lyr_jalannasional_2.setVisible(true);lyr_ibukotakecamatan_3.setVisible(true);lyr_ibukotakabupaten_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Indonesia_by_desa_1,lyr_jalannasional_2,lyr_ibukotakecamatan_3,lyr_ibukotakabupaten_4];
lyr_Indonesia_by_desa_1.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'KODE2010': 'KODE2010', 'PROVNO': 'PROVNO', 'KABKOTNO': 'KABKOTNO', 'KECNO': 'KECNO', 'DESANO': 'DESANO', 'KABKOT': 'KABKOT', });
lyr_jalannasional_2.set('fieldAliases', {'id': 'id', 'jln nas': 'jln nas', });
lyr_ibukotakecamatan_3.set('fieldAliases', {'id': 'id', 'kote kec': 'kote kec', });
lyr_ibukotakabupaten_4.set('fieldAliases', {'id': 'id', 'kab': 'kab', });
lyr_Indonesia_by_desa_1.set('fieldImages', {'PROVINSI': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER': 'TextEdit', 'KODE2010': 'TextEdit', 'PROVNO': 'TextEdit', 'KABKOTNO': 'TextEdit', 'KECNO': 'TextEdit', 'DESANO': 'TextEdit', 'KABKOT': 'TextEdit', });
lyr_jalannasional_2.set('fieldImages', {'id': 'TextEdit', 'jln nas': 'TextEdit', });
lyr_ibukotakecamatan_3.set('fieldImages', {'id': 'TextEdit', 'kote kec': 'TextEdit', });
lyr_ibukotakabupaten_4.set('fieldImages', {'id': 'TextEdit', 'kab': 'TextEdit', });
lyr_Indonesia_by_desa_1.set('fieldLabels', {'PROVINSI': 'inline label', 'KECAMATAN': 'inline label', 'DESA': 'inline label', 'SUMBER': 'inline label', 'KODE2010': 'inline label', 'PROVNO': 'inline label', 'KABKOTNO': 'inline label', 'KECNO': 'inline label', 'DESANO': 'inline label', 'KABKOT': 'inline label', });
lyr_jalannasional_2.set('fieldLabels', {'id': 'inline label', 'jln nas': 'inline label', });
lyr_ibukotakecamatan_3.set('fieldLabels', {'id': 'inline label', 'kote kec': 'inline label', });
lyr_ibukotakabupaten_4.set('fieldLabels', {'id': 'inline label', 'kab': 'inline label', });
lyr_ibukotakabupaten_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});