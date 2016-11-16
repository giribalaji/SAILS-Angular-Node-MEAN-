"use strict"
define(['app'], function (app) {
	app.register.factory('ListService', function () {

		var List = function () {
			
			/**
			 * Size of List
			 * @type {Number}
			 */
			this.listSize = 0;
			/**
			 * Position of pointer
			 * @type {Number}
			 */
			this.pos = 0;
			/**
			 * [dataStore : An empty array to store list elements]
			 * @type {Array}
			 */
			this.dataStore = []; // initializes 
			/**
			 * Remove all element from array
			 * @return {[type]} [description]
			 */
			this.clear = function() {
				delete this.dataStore;
				this.dataStore = [];
				this.listSize = this.pos = 0;
			}
			/**
			 * find : Find element position in List
			 * @param  {[object]} element [element which we search in list]
			 * @return {[signed integer]}         [position of element or -1]
			 */
			this.find = function(element) {
				for (var i = 0; i < this.dataStore.length; ++i) {
					if (this.dataStore[i] == element) {
						return i;
					}
				}
				return -1;
			};
			/**
			 * Retuen complete array
			 * @return {[type]} [description]
			 */
			this.getElements = function() {
				return this.dataStore;
			};	
			/**
			 * An insertion function needs to know where to insert an element, so for now we will say that insertion occurs after a specified element already in the list.
			 * @param  {[type]} element [description]
			 * @param  {[type]} after   [description]
			 * @return {[type]}         [description]
			 */
			this.insert = function(element, after) {
				var insertPos = this.find(after);
				if (insertPos > -1) {
					this.dataStore.splice(insertPos + 1, 0, element);
					++this.listSize;
					return true;
				}
				return false;
			}
			/**
			 * This function appends a new element onto the list at the next available position, which will be equal to the value of the listSize variable
			 * @param  {[type]} element [description]
			 * @return {[type]}         [description]
			 */
			this.append = function(element) {
				this.dataStore[this.listSize++] = element;
				//After the element is appended, listSize is incremented by 1.
			}

			/*
			 * Remove element from the list and refresh array index
			 * @param  {[type]} element [description]
			 * @return {[type]}         [description]
			 */
			this.remove = function(element) {
				var foundAt = this.find(element);
				if (foundAt > -1) {
					this.dataStore.splice(foundAt, 1);
					--this.listSize;
					return true;
				}
				return false;
			}
			/**
			 * Reset pointer to 1st position
			 * @return {[void]} [description]
			 */
			this.front = function() {
				this.pos = 0;
			}
			/**
			 * Set pointer to end position
			 * @return {[type]} [description]
			 */
			this.end = function() {
				this.pos = this.listSize - 1;
			}
			/**
			 * Set pointer to previous element
			 * @return {[type]} [description]
			 */
			this.prev = function() {
				if (this.pos > 0) {
					--this.pos;
				}
			}
			/**
			 * Set pointer to next element
			 * @return {Function} [description]
			 */
			this.next = function() {
				if (this.pos < this.listSize - 1) {
					++this.pos;
				}
			}
			/**
			 * Get length of List
			 * @return {[type]} [description]
			 */
			this.length = function() {
				return this.listSize;
			}
			/**
			 * Get current pointer position
			 * @return {[type]} [description]
			 */
			this.currPos = function() {
				return this.pos;
			}
			/**
			 * Move pointer to given position
			 * @param  {[type]} position [description]
			 * @return {[type]}          [description]
			 */
			this.moveTo = function(position) {
				this.pos = position;
			}
			/**
			 * Get element at current position
			 * @return {[type]} [description]
			 */
			this.getElement = function() {
				return this.dataStore[this.pos];
			}
			/**
			 * Check element existance in List
			 * @param  {[type]} element [description]
			 * @return {[type]}         [description]
			 */
			this.contains = function(element) {
				for (var i = 0; i < this.dataStore.length; ++i) {
					if (this.dataStore[i] == element) {
						return true;
					}
				}
				return false;
			}
		}
		return List;
	});
});