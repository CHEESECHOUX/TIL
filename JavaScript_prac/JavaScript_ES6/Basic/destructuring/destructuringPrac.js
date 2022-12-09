var chocolateMachine = {
  status: {
    name: "node",
    count: 5,
  },
  getChoco: function() {
    this.status.count--;
    return this.status.count;
  },
};
var getChoco = chocolateMachine.getChoco;
var count = chocolateMachine.status.count;


const chocolateMachine = {
  status: {
    name: "node",
    count: 5,
  },
  getChoco() {
    this.status.count--;
    return this.status.count;
  },
};
const { getChoco, status: { count }} = chocolateMachine;
