'use strict';
// Lists Controller

class ListsController {
  constructor() {
    this.$addListForm = $('#add_list');
    this.$listTitleInput = $('#list_title');
    this.$selectListMenu = $('#select_list');
    this.$addTaskForm = $('#add_task');
    this.$wrapper = $('#wrapper');
  }

  addListFormListener() {
    var self = this
    this.$addListForm.submit(function(event) {
      event.preventDefault()
      var listTitle = self.$listTitleInput.val()
      var list = new List(listTitle)
      list.build()
      self.$addTaskForm.one().show()
      self.$listTitleInput.val('')
    });
  }

  deleteListFormListener() {
    self = this
    this.$wrapper.on('click', '.destroy-list', function(){ 
      var listId = parseInt($(this).parents('h2').next('ul').data('id'));
      List.all.splice(listId, 1, null);
      self.$selectListMenu.find('option[value="'+listId+'"]').remove();
      $(this).parents('.list').remove();
    });
  }

  init() {
    this.$addTaskForm.hide()
    this.addListFormListener()
    this.deleteListFormListener()
  }
}