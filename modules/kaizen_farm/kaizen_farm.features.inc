<?php
/**
 * @file
 * kaizen_farm.features.inc
 */

/**
 * Implements hook_node_info().
 */
function kaizen_farm_node_info() {
  $items = array(
    'illustrated_article' => array(
      'name' => t('Illustrated Article'),
      'base' => 'node_content',
      'description' => t('Article with slideshow containing selection of images (attached to page)'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
