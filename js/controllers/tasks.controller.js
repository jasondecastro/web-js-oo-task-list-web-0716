'use strict';
// Tasks Controller

class TasksController {
  constructor() {
    this.$addTaskForm = $('#add_task')
    this.$taskDescriptionInput = $('#task_description')
    this.$selectListMenu = $('#select_list')
    this.$taskPriorityInput = $('#task_priority')
    this.$wrapper = $('#wrapper')
  }

  addTaskFormListener() {
    var self = this
    this.$addTaskForm.submit(function(event) {
      event.preventDefault()
      var listId = parseInt(self.$selectListMenu.val())
      var taskDescription = self.$taskDescriptionInput.val()
      var taskPriority = self.$taskPriorityInput.val()
      var task = new Task(taskDescription, taskPriority, List.all[listId])
      task.build()
      self.$taskDescriptionInput.val('')
      self.$taskPriorityInput.val('')
    })
  }

  deleteTaskFormListener() {
    this.$wrapper.on('click', '.destroy-task', function() { 
      var listId = parseInt($(this).parents('ul').data('id'))
      var taskId = parseInt($(this).parent('li').data('id')),
          list = List.all[listId];
          list.tasks.splice(taskId, 1, null);
      $(this).parent('li').remove();
    });
  }

  init() {
    this.addTaskFormListener()
    this.deleteTaskFormListener();
  }
}
