'use strict';

exports.convertBoard = convertBoard;

/*
 * Dependencies
 */

var Markdown = require('markdown');

/*
 * Constants
 */

const ASCII_REGEX = /^[ -~]+$/;

/* *************************************************************************
   Main Functions
   ************************************************************************* */

function convertBoard(trello_json, to_format = 'html') {

	var simple_board = [];

	if (typeof trello_json === "string") trello_json = JSON.parse(trello_json);

	//
	// loop over the lists to generate the HTML
	//

	for (var i = 0; i < trello_json.lists.length; i++) {

		var list_json = trello_json.lists[i];
		var list_name = list_json.name;

		// skip closed lists
		if (list_json.closed == 1) {
			continue;
		}

		// skip lists with names beginning with a hyphen
		if (list_name.startsWith('-')) {
			// console.log("Skipping List: " + list_name);			
			continue;
		}

		var simple_list = transformList(trello_json, list_name);

		simple_board = simple_board.concat(simple_list);

	}

	if (to_format == 'html') {		
		return simpleBoardToHtml(simple_board);
	}
	else {
		return simple_board;
	}

};

/* *************************************************************************
   Support Functions
   ************************************************************************* */

function transformList(trello_json, list_name) {

	var simple_list = [];
	var list_id = '';

	if (typeof trello_json === "string") trello_json = JSON.parse(trello_json);

	//
	// get the ID for the given list name; return if not found
	//

	for (var i = 0; i < trello_json.lists.length; i++) {

		var list_json = trello_json.lists[i];

		// skip closed lists
		if (list_json.closed == 1) {
			// console.log("Skipping closed List: '" + list_json.name + "'");
			continue;
		}
		// found it!
		if (list_json.name == list_name) {
			list_id = trello_json.lists[i].id;
		}

	}

	if (list_id == '') {
		// console.log("ERROR: Trello List not found: '" + list_name + "'");
		return simple_list;
	}

	//
	// get the cards for this list
	//

	for (var i = 0; i < trello_json.cards.length; i++) {

		var card_json = trello_json.cards[i];

		// skip cards that don't match the given list + closed cards
		// + cards that start with a hyphen + have non-ASCII characters (e.g., emoji)
		if (card_json.idList != list_id 
			|| card_json.closed == 1
			|| card_json.name.startsWith('-') 
			|| !ASCII_REGEX.test(card_json.name)) {
		  // console.log("Skipping Card: " + card_json.name);
			continue;
		}

		var simple_card = transformCard(card_json, list_name);

		simple_list.push(simple_card);

	}

	return simple_list;

}

function transformCard(card_json, card_listname = '') {

	var simple_card = {};

  simple_card.id = card_json.id;
  simple_card.list = card_listname;
  simple_card.name = card_json.name;
  simple_card.desc = Markdown.parse(card_json.desc);

  // Summary = first custom text field 
  simple_card.summary = '';
	if (card_json.customFieldItems[0] != undefined) {
		simple_card.summary = card_json.customFieldItems[0].value.text;		
	}

	// Image = attachment cover image
	if (card_json.idAttachmentCover != null) {
		var attachment = card_json.attachments.find((elem) => {
			return elem.id === card_json.idAttachmentCover;
		});
		// attachment might not be able to be found, for some reason?
		if (attachment != undefined) {
			simple_card.image = attachment.name;			
		}
	}

	return simple_card;

}

function simpleBoardToHtml(simple_board) {

	var html = '';

	for (var i = 0; i < simple_board.length; i++) {

		var simple_card = simple_board[i];

		html += '<a name="' + simple_card.id + '"></a>\n';
		html += '<h6>' + simple_card.list + '</h6>\n';
		html += '<h1>' + simple_card.name + '</h1>\n';

		if (simple_card.summary != '') {
			html += '<blockquote>' + simple_card.summary + '</blockquote>\n';
		}

		html += simple_card.desc + '\n';			

	}

	return html;

}
