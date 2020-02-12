/* Author:          Brad Botteron
Date Written:       2/11/2020
 */
var loc = window.location.pathname;
var index = 0;
var img = "img/dir.gif";
var courses = ["JavaScript", "PHP"];
var modules = ["Module 01", "Module 02", "Module 03", "Module 04", "Module 05", "Module 06", "Module 07", "Module 08",
    "Module 09", "Module 10", "Module 11", "Module 12", "Module 13", "Module 14", "Module 15", "Module 16"];

function addTableContent()
{
    var table = document.getElementById("tableContent");
    for (var i = 0; i < courses.length; i++)
    {
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        var th2 = document.createElement("th");
        var th3 = document.createElement("th");
        th.class = "tableIcons";
        var a = document.createElement("a");
        a.href = "img/dir.gif";
        th.appendChild(a);
        tr.appendChild(th);
        th2.text = courses[0];
        tr.appendChild(th2);
        th3.text = "-";
        tr.appendChild(th3);
    }
    table.appendChild(tr);
}

function getPageDir()
{
    var directory = document.getElementById("directory");
    directory.innerHTML = loc.substring(index, loc.lastIndexOf("/"));
}

function init()
{
    getPageDir();
    addTableContent();
}

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
} else if(window.attachEvent) {
    window.attachEvent("onload", init);
}