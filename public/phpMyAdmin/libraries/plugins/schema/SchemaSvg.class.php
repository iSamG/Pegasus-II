<?php
/* vim: set expandtab sw=4 ts=4 sts=4: */
/**
 * PDF schema export code
 *
 * @package    PhpMyAdmin-Schema
 * @subpackage SVG
 */
if (! defined('PHPMYADMIN')) {
    exit;
}

/* Get the schema export interface */
require_once 'libraries/plugins/SchemaPlugin.class.php';
require_once 'libraries/plugins/schema/svg/Svg_Relation_Schema.class.php';

/**
 * Handles the schema export for the SVG format
 *
 * @package    PhpMyAdmin-Schema
 * @subpackage SVG
 */
class SchemaSvg extends SchemaPlugin
{
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->setProperties();
    }

    /**
     * Sets the schema export SVG properties
     *
     * @return void
     */
    protected function setProperties()
    {
        $props = 'libraries/properties/';
        include_once "$props/plugins/SchemaPluginProperties.class.php";
        include_once "$props/options/groups/OptionsPropertyRootGroup.class.php";
        include_once "$props/options/groups/OptionsPropertyMainGroup.class.php";
        include_once "$props/options/item/BoolPropertyItem.class.php";

        $schemaPluginProperties = new SchemaPluginProperties();
        $schemaPluginProperties->setText('SVG');
        $schemaPluginProperties->setExtension('svg');
        $schemaPluginProperties->setMimeType('application/svg');

        // create the root group that will be the options field for
        // $schemaPluginProperties
        // this will be shown as "Format specific options"
        $exportSpecificOptions = new OptionsPropertyRootGroup();
        $exportSpecificOptions->setName("Format Specific Options");

        // specific options main group
        $specificOptions = new OptionsPropertyMainGroup();
        $specificOptions->setName("general_opts");
        // add options common to all plugins
        $this->addCommonOptions($specificOptions);

        // create leaf item and add them to the group
        $leaf = new BoolPropertyItem();
        $leaf->setName('all_tables_same_width');
        $leaf->setText(__('Same width for all tables'));
        $specificOptions->addProperty($leaf);

        // add the main group to the root group
        $exportSpecificOptions->addProperty($specificOptions);

        // set the options for the schema export plugin property item
        $schemaPluginProperties->setOptions($exportSpecificOptions);
        $this->properties = $schemaPluginProperties;
    }

    /**
     * Exports the schema into SVG format.
     *
     * @param string $db database name
     *
     * @return bool Whether it succeeded
     */
    public function exportSchema($db)
    {
        $export = new PMA_Svg_Relation_Schema();
        $export->showOutput();
    }
}
?>