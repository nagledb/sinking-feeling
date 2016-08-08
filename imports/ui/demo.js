import * as Game from '/imports/api/game.js';
import { Games } from '/imports/api/games.js';

import './demo.html';

Template.demo.events({
  'click .nuke'() {
    Games.remove();
  },
  'click .regen'() {
    const jack_with_found = {
      "_id": "PrHRzuLRLAdnW8age",
      "created_at": "2016-08-07T05:26:54.016Z",
      "creator": {
        "id": "Z9YRqqLonPC8q9jPd",
        "name": "david",
        "ships": {
          "carrier": {
            "row": 3,
            "col": 4,
            "vertical": true
          },
          "battleship": {
            "row": 0,
            "col": 0,
            "vertical": false
          },
          "cruiser": {
            "row": 0,
            "col": 9,
            "vertical": true
          },
          "submarine": {
            "row": 4,
            "col": 0,
            "vertical": true
          },
          "destroyer": {
            "row": 9,
            "col": 8,
            "vertical": false
          }
        },
        "shots": [{
          "row": 0,
          "col": 0,
          "time": "2016-08-07T05:27:30.413Z"
        }, {
          "row": 0,
          "col": 1,
          "time": "2016-08-07T05:27:32.979Z"
        }, {
          "row": 0,
          "col": 2,
          "time": "2016-08-07T05:27:35.410Z"
        }, {
          "row": 0,
          "col": 3,
          "time": "2016-08-07T05:27:38.044Z"
        }, {
          "row": 0,
          "col": 4,
          "time": "2016-08-07T05:27:40.848Z"
        }, {
          "row": 0,
          "col": 5,
          "time": "2016-08-07T05:27:43.018Z"
        }, {
          "row": 0,
          "col": 6,
          "time": "2016-08-07T05:27:46.132Z"
        }, {
          "row": 0,
          "col": 7,
          "time": "2016-08-07T05:27:48.291Z"
        }, {
          "row": 0,
          "col": 8,
          "time": "2016-08-07T05:27:50.311Z"
        }, {
          "row": 0,
          "col": 9,
          "time": "2016-08-07T05:27:52.614Z"
        }, {
          "row": 1,
          "col": 0,
          "time": "2016-08-07T05:27:54.803Z"
        }, {
          "row": 1,
          "col": 1,
          "time": "2016-08-07T05:27:57.349Z"
        }, {
          "row": 1,
          "col": 2,
          "time": "2016-08-07T05:27:59.738Z"
        }, {
          "row": 1,
          "col": 3,
          "time": "2016-08-07T05:28:02.255Z"
        }, {
          "row": 1,
          "col": 4,
          "time": "2016-08-07T05:28:04.271Z"
        }, {
          "row": 1,
          "col": 5,
          "time": "2016-08-07T05:28:06.380Z"
        }, {
          "row": 1,
          "col": 6,
          "time": "2016-08-07T05:28:09.188Z"
        }, {
          "row": 1,
          "col": 7,
          "time": "2016-08-07T05:28:11.586Z"
        }, {
          "row": 1,
          "col": 8,
          "time": "2016-08-07T05:28:13.993Z"
        }, {
          "row": 1,
          "col": 9,
          "time": "2016-08-07T05:28:17.007Z"
        }]
      },
      "challenger": {
        "ships": {
          "carrier": {
            "row": 4,
            "col": 1,
            "vertical": true
          },
          "battleship": {
            "row": 9,
            "col": 1,
            "vertical": false
          },
          "cruiser": {
            "row": 1,
            "col": 5,
            "vertical": false
          },
          "submarine": {
            "row": 3,
            "col": 4,
            "vertical": false
          },
          "destroyer": {
            "row": 6,
            "col": 0,
            "vertical": true
          }
        },
        "shots": [{
          "row": 5,
          "col": 6,
          "time": "2016-08-07T05:27:25.331Z"
        }, {
          "row": 9,
          "col": 9,
          "time": "2016-08-07T05:27:30.414Z"
        }, {
          "row": 9,
          "col": 8,
          "time": "2016-08-07T05:27:32.979Z"
        }, {
          "row": 9,
          "col": 7,
          "time": "2016-08-07T05:27:35.411Z"
        }, {
          "row": 8,
          "col": 8,
          "time": "2016-08-07T05:27:38.044Z"
        }, {
          "row": 8,
          "col": 9,
          "time": "2016-08-07T05:27:40.848Z"
        }, {
          "row": 1,
          "col": 2,
          "time": "2016-08-07T05:27:43.019Z"
        }, {
          "row": 6,
          "col": 6,
          "time": "2016-08-07T05:27:46.132Z"
        }, {
          "row": 9,
          "col": 4,
          "time": "2016-08-07T05:27:48.291Z"
        }, {
          "row": 3,
          "col": 7,
          "time": "2016-08-07T05:27:50.311Z"
        }, {
          "row": 2,
          "col": 7,
          "time": "2016-08-07T05:27:52.614Z"
        }, {
          "row": 8,
          "col": 0,
          "time": "2016-08-07T05:27:54.803Z"
        }, {
          "row": 5,
          "col": 9,
          "time": "2016-08-07T05:27:57.349Z"
        }, {
          "row": 6,
          "col": 2,
          "time": "2016-08-07T05:27:59.738Z"
        }, {
          "row": 4,
          "col": 1,
          "time": "2016-08-07T05:28:02.255Z"
        }, {
          "row": 5,
          "col": 1,
          "time": "2016-08-07T05:28:04.271Z"
        }, {
          "row": 5,
          "col": 8,
          "time": "2016-08-07T05:28:06.380Z"
        }, {
          "row": 3,
          "col": 2,
          "time": "2016-08-07T05:28:09.189Z"
        }, {
          "row": 1,
          "col": 5,
          "time": "2016-08-07T05:28:11.586Z"
        }, {
          "row": 4,
          "col": 8,
          "time": "2016-08-07T05:28:13.993Z"
        }, {
          "row": 4,
          "col": 4,
          "time": "2016-08-07T05:28:17.007Z"
        }],
        "ai": "jack",
        "name": "Geometric Jack",
        "ready_at": "2016-08-07T05:26:54.022Z"
      },
      "first_player": "challenger",
      "state": "active",
      "title": "Jack, with found ship",
      "current_player": "creator",
      "turn_number": 41,
      "time_started": "2016-08-07T05:27:25.330Z",
      "computer_state": {
        "mode": "target",
        "targets": [{
          "row": 3,
          "col": 4
        }, {
          "row": 4,
          "col": 3
        }, {
          "row": 5,
          "col": 4
        }, {
          "row": 4,
          "col": 5
        }]
      }
    };
    
    Games.remove(jack_with_found._id);
    Games.insert(jack_with_found);
    
    const felicity_with_found = {
      "_id": "TaA7CLuEDgPwHHqAB",
      "created_at": "2016-08-07T05:31:22.155Z",
      "creator": {
        "id": "Z9YRqqLonPC8q9jPd",
        "name": "david",
        "ships": {
          "carrier": {
            "row": 3,
            "col": 5,
            "vertical": true
          },
          "battleship": {
            "row": 6,
            "col": 9,
            "vertical": true
          },
          "cruiser": {
            "row": 0,
            "col": 0,
            "vertical": false
          },
          "submarine": {
            "row": 9,
            "col": 0,
            "vertical": false
          },
          "destroyer": {
            "row": 2,
            "col": 0,
            "vertical": true
          }
        },
        "shots": [{
          "row": 9,
          "col": 0,
          "time": "2016-08-07T05:31:49.666Z"
        }, {
          "row": 9,
          "col": 1,
          "time": "2016-08-07T05:31:51.023Z"
        }, {
          "row": 9,
          "col": 2,
          "time": "2016-08-07T05:31:52.622Z"
        }, {
          "row": 9,
          "col": 3,
          "time": "2016-08-07T05:31:54.479Z"
        }, {
          "row": 9,
          "col": 4,
          "time": "2016-08-07T05:31:56.040Z"
        }, {
          "row": 9,
          "col": 5,
          "time": "2016-08-07T05:31:57.482Z"
        }, {
          "row": 9,
          "col": 6,
          "time": "2016-08-07T05:32:00.167Z"
        }, {
          "row": 9,
          "col": 7,
          "time": "2016-08-07T05:32:02.209Z"
        }, {
          "row": 9,
          "col": 8,
          "time": "2016-08-07T05:32:04.521Z"
        }, {
          "row": 9,
          "col": 9,
          "time": "2016-08-07T05:32:06.340Z"
        }, {
          "row": 8,
          "col": 0,
          "time": "2016-08-07T05:32:09.280Z"
        }, {
          "row": 8,
          "col": 1,
          "time": "2016-08-07T05:32:11.793Z"
        }, {
          "row": 8,
          "col": 2,
          "time": "2016-08-07T05:32:13.726Z"
        }, {
          "row": 8,
          "col": 3,
          "time": "2016-08-07T05:32:17.136Z"
        }]
      },
      "challenger": {
        "ships": {
          "carrier": {
            "row": 3,
            "col": 5,
            "vertical": true
          },
          "battleship": {
            "row": 5,
            "col": 4,
            "vertical": true
          },
          "cruiser": {
            "row": 2,
            "col": 9,
            "vertical": true
          },
          "submarine": {
            "row": 6,
            "col": 0,
            "vertical": true
          },
          "destroyer": {
            "row": 9,
            "col": 4,
            "vertical": false
          }
        },
        "shots": [{
          "row": 6,
          "col": 8,
          "time": "2016-08-07T05:31:45.929Z"
        }, {
          "row": 9,
          "col": 5,
          "time": "2016-08-07T05:31:49.667Z"
        }, {
          "row": 7,
          "col": 7,
          "time": "2016-08-07T05:31:51.023Z"
        }, {
          "row": 0,
          "col": 2,
          "time": "2016-08-07T05:31:52.622Z"
        }, {
          "row": 1,
          "col": 2,
          "time": "2016-08-07T05:31:54.480Z"
        }, {
          "row": 0,
          "col": 1,
          "time": "2016-08-07T05:31:56.041Z"
        }, {
          "row": 0,
          "col": 0,
          "time": "2016-08-07T05:31:57.482Z"
        }, {
          "row": 8,
          "col": 2,
          "time": "2016-08-07T05:32:00.167Z"
        }, {
          "row": 7,
          "col": 3,
          "time": "2016-08-07T05:32:02.210Z"
        }, {
          "row": 3,
          "col": 7,
          "time": "2016-08-07T05:32:04.522Z"
        }, {
          "row": 2,
          "col": 0,
          "time": "2016-08-07T05:32:06.340Z"
        }, {
          "row": 1,
          "col": 0,
          "time": "2016-08-07T05:32:09.280Z"
        }, {
          "row": 2,
          "col": 1,
          "time": "2016-08-07T05:32:11.793Z"
        }, {
          "row": 3,
          "col": 0,
          "time": "2016-08-07T05:32:13.727Z"
        }, {
          "row": 5,
          "col": 5,
          "time": "2016-08-07T05:32:17.137Z"
        }],
        "ai": "felicity",
        "name": "Focused Felicity",
        "ready_at": "2016-08-07T05:31:22.158Z"
      },
      "first_player": "challenger",
      "state": "active",
      "title": "Felicity, with found ship",
      "current_player": "creator",
      "turn_number": 29,
      "time_started": "2016-08-07T05:31:45.927Z",
      "computer_state": {
        "shift": 2,
        "mode": "target",
        "targets": [{
          "row": 0,
          "col": 1
        }, {
          "row": 1,
          "col": 2
        }, {
          "row": 0,
          "col": 3
        }, {
          "row": 1,
          "col": 0
        }, {
          "row": 3,
          "col": 0
        }, {
          "row": 2,
          "col": 1
        }, {
          "row": 4,
          "col": 5
        }, {
          "row": 5,
          "col": 4
        }, {
          "row": 6,
          "col": 5
        }, {
          "row": 5,
          "col": 6
        }],
        "ai": "felicity"
      }
    };
    
    Games.remove(felicity_with_found._id);
    Games.insert(felicity_with_found);
    
    const felicity_pattern = {
      "_id": "drauRuPTq2KpZ9Azs",
      "created_at": "2016-08-08T13:51:25.612Z",
      "creator": {
        "id": "Z9YRqqLonPC8q9jPd",
        "name": "david",
        "ships": {
          "carrier": {
            "row": 8,
            "col": 2,
            "vertical": false
          },
          "battleship": {
            "row": 2,
            "col": 0,
            "vertical": true
          },
          "cruiser": {
            "row": 9,
            "col": 6,
            "vertical": false
          },
          "submarine": {
            "row": 0,
            "col": 2,
            "vertical": false
          },
          "destroyer": {
            "row": 7,
            "col": 0,
            "vertical": true
          }
        },
        "shots": [{
          "row": 9,
          "col": 0,
          "time": "2016-08-08T13:57:15.224Z"
        }, {
          "row": 9,
          "col": 1,
          "time": "2016-08-08T13:57:17.264Z"
        }, {
          "row": 9,
          "col": 2,
          "time": "2016-08-08T13:57:19.148Z"
        }, {
          "row": 9,
          "col": 3,
          "time": "2016-08-08T13:57:21.471Z"
        }, {
          "row": 9,
          "col": 4,
          "time": "2016-08-08T13:57:23.053Z"
        }, {
          "row": 9,
          "col": 5,
          "time": "2016-08-08T13:57:24.362Z"
        }, {
          "row": 9,
          "col": 6,
          "time": "2016-08-08T13:57:25.521Z"
        }, {
          "row": 9,
          "col": 7,
          "time": "2016-08-08T13:57:26.802Z"
        }, {
          "row": 9,
          "col": 8,
          "time": "2016-08-08T13:57:28.440Z"
        }, {
          "row": 9,
          "col": 9,
          "time": "2016-08-08T13:57:29.759Z"
        }, {
          "row": 8,
          "col": 0,
          "time": "2016-08-08T13:57:32.329Z"
        }, {
          "row": 8,
          "col": 1,
          "time": "2016-08-08T13:57:34.106Z"
        }, {
          "row": 8,
          "col": 2,
          "time": "2016-08-08T13:57:35.805Z"
        }, {
          "row": 8,
          "col": 3,
          "time": "2016-08-08T13:57:37.452Z"
        }, {
          "row": 8,
          "col": 4,
          "time": "2016-08-08T13:57:39.347Z"
        }, {
          "row": 8,
          "col": 5,
          "time": "2016-08-08T13:57:43.932Z"
        }, {
          "row": 8,
          "col": 6,
          "time": "2016-08-08T13:57:52.529Z"
        }]
      },
      "challenger": {
        "ships": {
          "carrier": {
            "row": 7,
            "col": 0,
            "vertical": false
          },
          "battleship": {
            "row": 3,
            "col": 7,
            "vertical": true
          },
          "cruiser": {
            "row": 9,
            "col": 5,
            "vertical": false
          },
          "submarine": {
            "row": 2,
            "col": 0,
            "vertical": false
          },
          "destroyer": {
            "row": 3,
            "col": 5,
            "vertical": true
          }
        },
        "shots": [{
          "row": 4,
          "col": 1,
          "time": "2016-08-08T13:51:44.340Z"
        }, {
          "row": 7,
          "col": 2,
          "time": "2016-08-08T13:57:15.225Z"
        }, {
          "row": 1,
          "col": 0,
          "time": "2016-08-08T13:57:17.265Z"
        }, {
          "row": 5,
          "col": 8,
          "time": "2016-08-08T13:57:19.148Z"
        }, {
          "row": 2,
          "col": 7,
          "time": "2016-08-08T13:57:21.472Z"
        }, {
          "row": 4,
          "col": 9,
          "time": "2016-08-08T13:57:23.053Z"
        }, {
          "row": 6,
          "col": 7,
          "time": "2016-08-08T13:57:24.362Z"
        }, {
          "row": 3,
          "col": 6,
          "time": "2016-08-08T13:57:25.521Z"
        }, {
          "row": 5,
          "col": 4,
          "time": "2016-08-08T13:57:26.802Z"
        }, {
          "row": 1,
          "col": 4,
          "time": "2016-08-08T13:57:28.440Z"
        }, {
          "row": 7,
          "col": 6,
          "time": "2016-08-08T13:57:29.759Z"
        }, {
          "row": 0,
          "col": 5,
          "time": "2016-08-08T13:57:32.330Z"
        }, {
          "row": 8,
          "col": 9,
          "time": "2016-08-08T13:57:34.106Z"
        }, {
          "row": 0,
          "col": 1,
          "time": "2016-08-08T13:57:35.805Z"
        }, {
          "row": 2,
          "col": 3,
          "time": "2016-08-08T13:57:37.452Z"
        }, {
          "row": 6,
          "col": 3,
          "time": "2016-08-08T13:57:39.347Z"
        }, {
          "row": 8,
          "col": 1,
          "time": "2016-08-08T13:57:43.933Z"
        }, {
          "row": 9,
          "col": 0,
          "time": "2016-08-08T13:57:52.529Z"
        }],
        "ai": "felicity",
        "name": "Focused Felicity",
        "ready_at": "2016-08-08T13:51:25.617Z"
      },
      "first_player": "challenger",
      "state": "active",
      "title": "Felicity, showing partitioning",
      "current_player": "creator",
      "turn_number": 1,
      "time_started": "2016-08-08T13:51:44.338Z",
      "computer_state": {
        "shift": 3,
        "mode": "hunt",
        "targets": [],
        "ai": "felicity"
      }
    };
    
    Games.remove(felicity_pattern._id);
    Games.insert(felicity_pattern);
 
    const felicity_stacked = {
      "_id": "yd3xZZnSMzR6YLtJp",
      "created_at": "2016-08-08T14:02:03.485Z",
      "creator": {
        "id": "Z9YRqqLonPC8q9jPd",
        "name": "david",
        "ships": {
          "carrier": {
            "row": 5,
            "col": 1,
            "vertical": false
          },
          "battleship": {
            "row": 6,
            "col": 2,
            "vertical": false
          },
          "submarine": {
            "row": 4,
            "col": 2,
            "vertical": false
          },
          "cruiser": {
            "row": 0,
            "col": 6,
            "vertical": false
          },
          "destroyer": {
            "row": 9,
            "col": 1,
            "vertical": false
          }
        },
        "shots": [{
          "row": 9,
          "col": 0,
          "time": "2016-08-08T14:04:09.762Z"
        }, {
          "row": 9,
          "col": 1,
          "time": "2016-08-08T14:04:11.666Z"
        }, {
          "row": 9,
          "col": 2,
          "time": "2016-08-08T14:04:13.104Z"
        }, {
          "row": 9,
          "col": 3,
          "time": "2016-08-08T14:04:18.257Z"
        }]
      },
      "challenger": {
        "ships": {
          "carrier": {
            "row": 4,
            "col": 2,
            "vertical": true
          },
          "battleship": {
            "row": 0,
            "col": 5,
            "vertical": false
          },
          "cruiser": {
            "row": 3,
            "col": 5,
            "vertical": true
          },
          "submarine": {
            "row": 5,
            "col": 9,
            "vertical": true
          },
          "destroyer": {
            "row": 6,
            "col": 6,
            "vertical": true
          }
        },
        "shots": [{
          "row": 6,
          "col": 7,
          "time": "2016-08-08T14:02:28.196Z"
        }, {
          "row": 0,
          "col": 9,
          "time": "2016-08-08T14:04:09.763Z"
        }, {
          "row": 4,
          "col": 9,
          "time": "2016-08-08T14:04:11.667Z"
        }, {
          "row": 5,
          "col": 4,
          "time": "2016-08-08T14:04:13.104Z"
        }, {
          "row": 6,
          "col": 4,
          "time": "2016-08-08T14:04:18.258Z"
        }],
        "ai": "felicity",
        "name": "Focused Felicity",
        "ready_at": "2016-08-08T14:02:03.489Z"
      },
      "first_player": "challenger",
      "state": "active",
      "title": "Felicity, with stacked ships",
      "current_player": "creator",
      "turn_number": 9,
      "time_started": "2016-08-08T14:02:28.194Z",
      "computer_state": {
        "shift": 3,
        "mode": "target",
        "targets": [{
          "row": 4,
          "col": 4
        }, {
          "row": 5,
          "col": 3
        }, {
          "row": 6,
          "col": 4
        }, {
          "row": 5,
          "col": 5
        }],
        "ai": "felicity"
      }
    };

    Games.remove(felicity_stacked._id);
    Games.insert(felicity_stacked);
    
  }
});

