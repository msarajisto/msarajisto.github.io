ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3067").setExtent([263892.449762, 6609885.024170, 480481.331012, 6779585.746420]);
var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_FlyingSquirrelsightings_1 = new ol.format.GeoJSON();
var features_FlyingSquirrelsightings_1 = format_FlyingSquirrelsightings_1.readFeatures(json_FlyingSquirrelsightings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_FlyingSquirrelsightings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlyingSquirrelsightings_1.addFeatures(features_FlyingSquirrelsightings_1);
var lyr_FlyingSquirrelsightings_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlyingSquirrelsightings_1, 
                style: style_FlyingSquirrelsightings_1,
                popuplayertitle: "Flying Squirrel sightings",
                interactive: true,
    title: 'Flying Squirrel sightings<br />\
    <img src="styles/legend/FlyingSquirrelsightings_1_0.png" /> 1 - 50<br />\
    <img src="styles/legend/FlyingSquirrelsightings_1_1.png" /> 50 - 500<br />\
    <img src="styles/legend/FlyingSquirrelsightings_1_2.png" /> 500 - 1000<br />\
    <img src="styles/legend/FlyingSquirrelsightings_1_3.png" /> 1000 - 2721<br />'
        });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_FlyingSquirrelsightings_1.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_FlyingSquirrelsightings_1];
lyr_FlyingSquirrelsightings_1.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'kunta': 'kunta', 'vuosi': 'vuosi', 'nimi': 'nimi', 'namn': 'namn', 'count': 'count', });
lyr_FlyingSquirrelsightings_1.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'kunta': 'TextEdit', 'vuosi': 'Range', 'nimi': 'TextEdit', 'namn': 'TextEdit', 'count': 'TextEdit', });
lyr_FlyingSquirrelsightings_1.set('fieldLabels', {'fid': 'hidden field', 'name': 'hidden field', 'kunta': 'hidden field', 'vuosi': 'hidden field', 'nimi': 'inline label - always visible', 'namn': 'hidden field', 'count': 'inline label - always visible', });
lyr_FlyingSquirrelsightings_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});