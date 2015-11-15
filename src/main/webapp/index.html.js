/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function insertBodyEncadreur () {
    var xhr = new XMLHttpRequest(); 
    var self = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            self.document.getElementById("part_to_change").innerHTML = xhr.response;
        }
    };
    xhr.open("GET", "encadreur.html", true);
    xhr.send(null);
}
function insertBodyTutor () {
    var xhr = new XMLHttpRequest(); 
    var self = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            self.document.getElementById("part_to_change").innerHTML = xhr.response;
        }
    };
    xhr.open("GET", "tutor.html", true);
    xhr.send(null);
}
function insertBodyVolunteer () {
    var xhr = new XMLHttpRequest(); 
    var self = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            self.document.getElementById("part_to_change").innerHTML = xhr.response;
        }
    };
    xhr.open("GET", "volunteer.html", true);
    xhr.send(null);
}
function insertBodyDonation () {
    var xhr = new XMLHttpRequest(); 
    var self = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            self.document.getElementById("part_to_change").innerHTML = xhr.response;
        }
    };
    xhr.open("GET", "donation.html", true);
    xhr.send(null);
}
function insertBodyPartners () {
    var xhr = new XMLHttpRequest(); 
    var self = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            self.document.getElementById("part_to_change").innerHTML = xhr.response;
        }
    };
    xhr.open("GET", "partners.html", true);
    xhr.send(null);
}
function insertBodyLogin () {
    var xhr = new XMLHttpRequest(); 
    var self = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            self.document.getElementById("part_to_change").innerHTML = xhr.response;
        }
    };
    xhr.open("GET", "login.html", true);
    xhr.send(null);
}

function insertBodyPresentation () {
    var xhr = new XMLHttpRequest(); 
    var self = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            self.document.getElementById("part_to_change").innerHTML = xhr.response;
        }
    };
    xhr.open("GET", "presentation.html", true);
    xhr.send(null);
}
function insertBodyActors () {
    var xhr = new XMLHttpRequest(); 
    var self = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            self.document.getElementById("part_to_change").innerHTML = xhr.response;
        }
    };
    xhr.open("GET", "actors.html", true);
    xhr.send(null);
}
function insertBodyFinancialReports () {
    var xhr = new XMLHttpRequest(); 
    var self = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            self.document.getElementById("part_to_change").innerHTML = xhr.response;
        }
    };
    xhr.open("GET", "financial_reports.html", true);
    xhr.send(null);
}
function insertBodyActivitiesReports () {
    var xhr = new XMLHttpRequest(); 
    var self = this;
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
            self.document.getElementById("part_to_change").innerHTML = xhr.response;
        }
    };
    xhr.open("GET", "activities_reports.html", true);
    xhr.send(null);
}