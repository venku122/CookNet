
## Overview

This application is for storing and viewing recipes.

## Install Instructions

@TODO

## Project Outline
These are notes on project structure/features/etc. This list will be expanded over time and items will be checked off when implemented. An MVP will have a subset of these features.

* Recipe Schema
  * List of Steps
    * Instructions
    * Time Estimate
    * Feature: Estimate time if not explicitly given
  * List of Ingredients
    * Ingredient name
    * Quantity
      * Automatic Unit conversion?
    * Features
      * Double/half recipe automatically?
  * Meta-tags
    * Meal Type
      * Breakfast
      * Lunch
      * Dinner
      * Snack
      * Side
      * Dessert
    * Food Type
      * Meat
      * Veggie
      * Baked
      * Sauces
      * Etc
    * Serving Size
  * Photos
    * Featured Photo
    * Other Photos
  * Time
    * Total
    * Prep
    * Cooking
* Architecture
  * Backend
    * DB
      * MongoDB
        * Recipe Document (See Above)
        * Mongoose ORM
    * Image Storage
      * S3
      * Node-aws SDK
      * Use CSH S3 or US-East-1
    * Server
      * Express
      * API Server
        * Fetch Recipes
        * Create/delete/update recipes
      * Auth Server?
        *   User Accounts/profiles?
        *   Share recipes to others?
      * Analytics
        * Number of recipes
        * Fun numbers
          * Total time to cook all recipes
          * Total amount of ingredients
  * Front-end
    * React/redux
    * REST
      * Maybe GraphQL?
      * Is it worth it?
      * Pros
        * New skill
        * More data efficient
        * Descriptive react components with schema
      * Cons
        * Increase dev time and risk
        * Overbuilt for a simple app
        * Unknown Unknowns
    * Recipe viewer
      * Instructions
      * Ingredients
      * Images
      * Notes?
        * Allow user to add comment/notes once they make the recipes
        * Can include photos
    * Print mode
     * Pretty-print for printers
    * “Portable mode”
      * Allow for expansion in slack/fb/other
      * iFrame support?
      * Share buttons!
    * Unit conversion
      * Generic conversion table/calculator
      * Click on a unit in the recipe list and switch it automagically
    * Recipe Adder
      * Metadata
        * Name
        * Type
        * Meal
        * Serving Size
    * Add ingredients
      * Allow substitutions?
      * Volume/weight conversion?
    * Add instructions
      * Add time for each step
      * Add alternate or secondary step for larger/smaller batch?
    * Upload photos

