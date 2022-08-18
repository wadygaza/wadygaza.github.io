var wms_layers = [];

var format_ZONE_0 = new ol.format.GeoJSON();
var features_ZONE_0 = format_ZONE_0.readFeatures(json_ZONE_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONE_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONE_0.addFeatures(features_ZONE_0);
var lyr_ZONE_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONE_0, 
                style: style_ZONE_0,
                interactive: true,
                title: '<img src="styles/legend/ZONE_0.png" /> ZONE'
            });
var format_HOME_1 = new ol.format.GeoJSON();
var features_HOME_1 = format_HOME_1.readFeatures(json_HOME_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOME_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOME_1.addFeatures(features_HOME_1);
var lyr_HOME_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOME_1, 
                style: style_HOME_1,
                interactive: true,
                title: '<img src="styles/legend/HOME_1.png" /> HOME'
            });
var format_STR_2 = new ol.format.GeoJSON();
var features_STR_2 = format_STR_2.readFeatures(json_STR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STR_2.addFeatures(features_STR_2);
var lyr_STR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STR_2, 
                style: style_STR_2,
                interactive: true,
                title: '<img src="styles/legend/STR_2.png" /> STR'
            });

lyr_ZONE_0.setVisible(true);lyr_HOME_1.setVisible(true);lyr_STR_2.setVisible(true);
var layersList = [lyr_ZONE_0,lyr_HOME_1,lyr_STR_2];
lyr_ZONE_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NUMBER_': 'NUMBER_', 'COD': 'COD', 'NAME': 'NAME', 'AREA_DONOM': 'AREA_DONOM', 'FINISHED': 'FINISHED', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_HOME_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOTES': 'NOTES', 'STREET_NUM': 'STREET_NUM', 'BUILD_NUM': 'BUILD_NUM', 'VIRTUAL_NU': 'VIRTUAL_NU', 'VIRTUAL__1': 'VIRTUAL__1', 'ORGANIZING': 'ORGANIZING', 'BUILDING_T': 'BUILDING_T', 'IS_VISITED': 'IS_VISITED', 'FOR_SERCH': 'FOR_SERCH', 'COMMENT_BO': 'COMMENT_BO', 'BUILDING_P': 'BUILDING_P', 'BUILD_CODE': 'BUILD_CODE', 'GOV_NAME_L': 'GOV_NAME_L', 'COUNTRY_CO': 'COUNTRY_CO', 'ZONE_CODE': 'ZONE_CODE', 'SUB_ZONE': 'SUB_ZONE', 'POSTAL_COD': 'POSTAL_COD', 'BUILD_NAME': 'BUILD_NAME', 'BUILD_PURP': 'BUILD_PURP', 'FLOOR_COUN': 'FLOOR_COUN', 'UNIT_COUNT': 'UNIT_COUNT', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'SEWAGE': 'SEWAGE', 'WATER': 'WATER', 'WATER_COD': 'WATER_COD', 'OWNER_TYPE': 'OWNER_TYPE', 'CASE_BULID': 'CASE_BULID', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_STR_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TYPE': 'TYPE', 'STRCASE': 'STRCASE', 'STREET_ORI': 'STREET_ORI', 'STREET_NUM': 'STREET_NUM', 'STREET_NAM': 'STREET_NAM', 'STREET_ARE': 'STREET_ARE', 'PROJECT_NU': 'PROJECT_NU', 'STREET_N_1': 'STREET_N_1', 'STREET_NOT': 'STREET_NOT', 'STREET_REB': 'STREET_REB', 'SEWAGE': 'SEWAGE', 'WATER_NETW': 'WATER_NETW', 'TYPE_NEW': 'TYPE_NEW', 'NUMBERING_': 'NUMBERING_', 'ZONE_NAME': 'ZONE_NAME', 'DIRECTION_': 'DIRECTION_', 'PROPOSEDST': 'PROPOSEDST', 'EXISSTRWID': 'EXISSTRWID', 'COMPANYIMP': 'COMPANYIMP', 'FUNDED': 'FUNDED', 'DETAILED_P': 'DETAILED_P', 'CERTIFIED_': 'CERTIFIED_', 'SURFACESTR': 'SURFACESTR', 'YEAR_CREAT': 'YEAR_CREAT', 'SIDEWALK': 'SIDEWALK', 'THICKNESS_': 'THICKNESS_', 'THICKNESS1': 'THICKNESS1', 'CONTRACT_V': 'CONTRACT_V', 'PROJECT_YE': 'PROJECT_YE', 'LIGHTING_N': 'LIGHTING_N', 'PHONE_NETW': 'PHONE_NETW', 'ELECTRICT_': 'ELECTRICT_', 'THICKNES_1': 'THICKNES_1', 'LINGTH2': 'LINGTH2', 'PAVING_MAT': 'PAVING_MAT', 'STREET_HIE': 'STREET_HIE', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_ZONE_0.set('fieldImages', {'OBJECTID': '', 'NUMBER_': '', 'COD': '', 'NAME': '', 'AREA_DONOM': '', 'FINISHED': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_HOME_1.set('fieldImages', {'OBJECTID': '', 'NOTES': '', 'STREET_NUM': '', 'BUILD_NUM': '', 'VIRTUAL_NU': '', 'VIRTUAL__1': '', 'ORGANIZING': '', 'BUILDING_T': '', 'IS_VISITED': '', 'FOR_SERCH': '', 'COMMENT_BO': '', 'BUILDING_P': '', 'BUILD_CODE': '', 'GOV_NAME_L': '', 'COUNTRY_CO': '', 'ZONE_CODE': '', 'SUB_ZONE': '', 'POSTAL_COD': '', 'BUILD_NAME': '', 'BUILD_PURP': '', 'FLOOR_COUN': '', 'UNIT_COUNT': '', 'MALE': '', 'FEMALE': '', 'SEWAGE': '', 'WATER': '', 'WATER_COD': '', 'OWNER_TYPE': '', 'CASE_BULID': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_STR_2.set('fieldImages', {'OBJECTID': '', 'TYPE': '', 'STRCASE': '', 'STREET_ORI': '', 'STREET_NUM': '', 'STREET_NAM': '', 'STREET_ARE': '', 'PROJECT_NU': '', 'STREET_N_1': '', 'STREET_NOT': '', 'STREET_REB': '', 'SEWAGE': '', 'WATER_NETW': '', 'TYPE_NEW': '', 'NUMBERING_': '', 'ZONE_NAME': '', 'DIRECTION_': '', 'PROPOSEDST': '', 'EXISSTRWID': '', 'COMPANYIMP': '', 'FUNDED': '', 'DETAILED_P': '', 'CERTIFIED_': '', 'SURFACESTR': '', 'YEAR_CREAT': '', 'SIDEWALK': '', 'THICKNESS_': '', 'THICKNESS1': '', 'CONTRACT_V': '', 'PROJECT_YE': '', 'LIGHTING_N': '', 'PHONE_NETW': '', 'ELECTRICT_': '', 'THICKNES_1': '', 'LINGTH2': '', 'PAVING_MAT': '', 'STREET_HIE': '', 'SHAPE_LEN': '', });
lyr_ZONE_0.set('fieldLabels', {'OBJECTID': 'no label', 'NUMBER_': 'no label', 'COD': 'no label', 'NAME': 'no label', 'AREA_DONOM': 'no label', 'FINISHED': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_HOME_1.set('fieldLabels', {'OBJECTID': 'no label', 'NOTES': 'no label', 'STREET_NUM': 'no label', 'BUILD_NUM': 'no label', 'VIRTUAL_NU': 'no label', 'VIRTUAL__1': 'no label', 'ORGANIZING': 'no label', 'BUILDING_T': 'no label', 'IS_VISITED': 'no label', 'FOR_SERCH': 'no label', 'COMMENT_BO': 'no label', 'BUILDING_P': 'no label', 'BUILD_CODE': 'no label', 'GOV_NAME_L': 'no label', 'COUNTRY_CO': 'no label', 'ZONE_CODE': 'no label', 'SUB_ZONE': 'no label', 'POSTAL_COD': 'no label', 'BUILD_NAME': 'no label', 'BUILD_PURP': 'no label', 'FLOOR_COUN': 'no label', 'UNIT_COUNT': 'no label', 'MALE': 'no label', 'FEMALE': 'no label', 'SEWAGE': 'no label', 'WATER': 'no label', 'WATER_COD': 'no label', 'OWNER_TYPE': 'no label', 'CASE_BULID': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_STR_2.set('fieldLabels', {'OBJECTID': 'no label', 'TYPE': 'no label', 'STRCASE': 'no label', 'STREET_ORI': 'no label', 'STREET_NUM': 'no label', 'STREET_NAM': 'no label', 'STREET_ARE': 'no label', 'PROJECT_NU': 'no label', 'STREET_N_1': 'no label', 'STREET_NOT': 'no label', 'STREET_REB': 'no label', 'SEWAGE': 'no label', 'WATER_NETW': 'no label', 'TYPE_NEW': 'no label', 'NUMBERING_': 'no label', 'ZONE_NAME': 'no label', 'DIRECTION_': 'no label', 'PROPOSEDST': 'no label', 'EXISSTRWID': 'no label', 'COMPANYIMP': 'no label', 'FUNDED': 'no label', 'DETAILED_P': 'no label', 'CERTIFIED_': 'no label', 'SURFACESTR': 'no label', 'YEAR_CREAT': 'no label', 'SIDEWALK': 'no label', 'THICKNESS_': 'no label', 'THICKNESS1': 'no label', 'CONTRACT_V': 'no label', 'PROJECT_YE': 'no label', 'LIGHTING_N': 'no label', 'PHONE_NETW': 'no label', 'ELECTRICT_': 'no label', 'THICKNES_1': 'no label', 'LINGTH2': 'no label', 'PAVING_MAT': 'no label', 'STREET_HIE': 'no label', 'SHAPE_LEN': 'no label', });
lyr_STR_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
console.log(done);
