'use strict';
{
  //日付をアップデートする
  window.onload = function () {
    const semaine = [ 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche']
    
    const mois = [
      'janvier',
      'février',
      'mars',
      'avril',
      'mai',
      'juin',
      'juillet',
      'août',
      'septembre',
      'octobre',
      'novembre',
      'décembre',
    ]
    var date = new Date();
    var dayOfTheWeek = date.getDay();
    var dayOfTheWeek = semaine[dayOfTheWeek];
    var day = date.getDate();
    var month = date.getMonth();
    var month = mois[month];
    var dm = dayOfTheWeek + " " + day + " " + month;
    document.getElementById('date-today').textContent = dm;
  }

  const todos = [
    {id: 0, title: 'tâche 1', isDone: false},
    {id: 1, title: 'tâche 2', isDone: false},
    {id: 2, title: 'tâche 3', isDone: true}
  ];

}

