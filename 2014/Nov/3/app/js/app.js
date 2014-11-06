var app = app || {};

$(function () {
    app.indexView = new app.ListView().render();
    app.list.fetch();
});
