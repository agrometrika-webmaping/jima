var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_NDVI_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11412243.744684, 2344484.219131, -11412038.336439, 2344757.373973]
                            })
                        });
var lyr_Ortomosaico_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ortomosaico",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Ortomosaico_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11412243.744684, 2344484.219131, -11412038.336439, 2344757.373973]
                            })
                        });
var format_VigordeAgaves_3 = new ol.format.GeoJSON();
var features_VigordeAgaves_3 = format_VigordeAgaves_3.readFeatures(json_VigordeAgaves_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VigordeAgaves_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VigordeAgaves_3.addFeatures(features_VigordeAgaves_3);
var lyr_VigordeAgaves_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VigordeAgaves_3, 
                style: style_VigordeAgaves_3,
                interactive: true,
    title: 'Vigor de Agaves<br />\
    <img src="styles/legend/VigordeAgaves_3_0.png" /> Alto<br />\
    <img src="styles/legend/VigordeAgaves_3_1.png" /> Medio<br />\
    <img src="styles/legend/VigordeAgaves_3_2.png" /> Bajo<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_NDVI_1.setVisible(true);lyr_Ortomosaico_2.setVisible(true);lyr_VigordeAgaves_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_NDVI_1,lyr_Ortomosaico_2,lyr_VigordeAgaves_3];
lyr_VigordeAgaves_3.set('fieldAliases', {'ID': 'ID', 'NDVI prome': 'NDVI prome', 'Vigor': 'Vigor', });
lyr_VigordeAgaves_3.set('fieldImages', {'ID': '', 'NDVI prome': '', 'Vigor': '', });
lyr_VigordeAgaves_3.set('fieldLabels', {'ID': 'inline label', 'NDVI prome': 'inline label', 'Vigor': 'inline label', });
lyr_VigordeAgaves_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});