// PROJECT MODEL
// ----------------------------
  function Project(json) {
   
    var self = this;

    /* JSON format:
      "kind": "tasks#taskList",
      "id": "MDIxODQ2OTM2MTQ0OTM3MDQ4MTU6MDow",
      "title": "My Tasks",
      "selfLink": "https://www.googleapis.com/tasks/v1/users/@me/lists/MDIxODQ2OTM2MTQ0OTM3MDQ4MTU6MDow"
    */

    // CONSTRUCTOR
    // -----------------------------------------------------------------------
      this.id = json.id;
      this.title = json.title;
      this.selfLink = json.selfLink;

      this.taskMap = {};
      this.taskTree = {};        

      this.isLoaded = false;
      this.isSelected = false;
      this.isExpanded = true; // HARDODE


    // Public Methods
    // -----------------------------------------------------------------------
      this.addTasks = function(tasks) {
          for (var i = 0; i < tasks.length; i++) {
              var task = new Task(tasks[i]);
              self.taskMap[task.id] = task;
          }

          this.taskTree = {};

          self.taskTree.id = 'none';
          self.taskTree.title = 'root';
          self.taskTree.children = [];
          attachChildrenToParent(self.taskTree, self.taskMap, 0);
      }


    // Private members
    // -----------------------------------------------------------------------
      function attachChildrenToParent(node, fullList, level) {
          // var children = {};
          var children = [];
          var childrenAttached = false;

          for (itemId in fullList) {
              var item = fullList[itemId];

              if (item.parentId == node.id) {
                  console.log( '  "' + item.title + '" attached to "' + node.title + '"');
                  // children[itemId] = item;
                  children.push(item);
                  item.level = level;
                  attachChildrenToParent(item, fullList, level+1);
                  childrenAttached = true;
              }
          }

          if (childrenAttached) {
              node.children = children;
              node.hasSubtasks = true;
          }
      }
  }

// TASK MODEL
// ----------------------------
  function Task(json) {
   
    var self = this;

    /* JSON Sample:
      "kind": "tasks#task",
      "id": "MDIxODQ2OTM2MTQ0OTM3MDQ4MTU6MTgzMTEyMTM2OjMwNTg1NjEwNQ",
      "title": "task 2.3 level 1 description",
      "updated": "2011-10-22T21:34:21.000Z",
      "selfLink": "https://www.googleapis.com/tasks/v1/lists/MDIxODQ2OTM2MTQ0OTM3MDQ4MTU6MTgzMTEyMTM2OjA/tasks/MDIxODQ2OTM2MTQ0OTM3MDQ4MTU6MTgzMTEyMTM2OjMwNTg1NjEwNQ",
      "parent": "MDIxODQ2OTM2MTQ0OTM3MDQ4MTU6MTgzMTEyMTM2OjIyOTkwNDQzNw",
      "position": "00000000001879048191",
      "notes": "Task description\nSecond line",
      "status": "needsAction"  
      "due": "2011-10-25T00:00:00.000Z"

      ----------------------------------------------

      "kind": "tasks#task",
      "id": "MDIxODQ2OTM2MTQ0OTM3MDQ4MTU6MjA5MzE5ODI1ODo4NzM2NzA1OTQ",
      "etag": "\"6RPyiEGJLF05eT5QboB7G3IXo-w/MTM0NzEyMjYyOA\"",
      "title": "Projects sorting",
      "updated": "2013-07-21T08:57:38.000Z",
      "selfLink": "https://www.googleapis.com/tasks/v1/lists/MDIxODQ2OTM2MTQ0OTM3MDQ4MTU6MjA5MzE5ODI1ODow/tasks/MDIxODQ2OTM2MTQ0OTM3MDQ4MTU6MjA5MzE5ODI1ODo4NzM2NzA1OTQ",
      "position": "00000000002147483647",
      "status": "completed",
      "completed": "2013-07-21T08:57:38.000Z"


    */

    // Copy JSON
    this.id = json.id;
    this.title = json.title;
    this.updated = json.updated;
    this.selfLink = json.selfLink;
    this.parentId = "none";
    this.notes = json.notes;
    this.status = json.status;
    this.due = json.due;
    if (json.parent != undefined && json.parent != "") {
      this.parentId = json.parent;
    }

    // Custom fields
    this.dueCustom = {};
    this.dueString = '';

    this.isCompleted = false;
    if (this.status == 'completed') {
      this.isCompleted = true;
    }

    if (this.due == undefined) {
      // TODO: move to a config?
      this.dueString = "no date";
    } else {
      // self.dueCustom = moment(this.due);
      // self.dueString = self.dueCustom.format("DD MMM YYYY");
    }
    
    this.isExpanded = false;
    this.isInTree = false;
    this.hasSubtasks = false;
    this.level = 0;
  }