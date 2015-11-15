<%-- 
    Document   : connexion
    Created on : 11 oct. 2015, 18:38:12
    Author     : ro
--%>

<!--<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
</html>-->
<%@page contentType="text/html"%>
<%@page errorPage="erreur.jsp"%>
<%-- Importation d'un paquetage (package) --%>
<%@page import="java.util.*"%>
<html>
 <head><title>Page JSP</title>    
    <link rel="stylesheet" type="text/css" href="stylesheet.css">
    <!--<link rel="stylesheet/less" type="text/css" href="styles.less">
    <script src="less.js" type="text/javascript"></script>-->
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
 </head>
 <body>
    <div class="container">
    <div class="row">
    <div class="col-xs-12">
        
        <div class="main">
                
            <div class="row">
            <div class="col-xs-12 col-sm-6 col-sm-offset-1">
                        
                <h1>Ma machine à écrire</h1>
                <h2>Tous vos textes en un seul endroit</h2>
                        
                <form action="/users/login" name="login" role="form" class="form-horizontal" method="post" accept-charset="utf-8">
                    <div class="form-group">
                    <div class="col-md-8"><input name="username" placeholder="Idenfiant" class="form-control" type="text" id="UserUsername"/></div>
                    </div> 
                    
                    <div class="form-group">
                    <div class="col-md-8"><input name="password" placeholder="Mot de passe" class="form-control" type="password" id="UserPassword"/></div>
                    </div> 
                    
                    <div class="form-group">
                    <div class="col-md-offset-0 col-md-8"><input  class="btn btn-success btn btn-success" type="submit" value="Connexion"/></div>
                    </div>
                
                </form>
                <p class="credits">Développé par <a href="http://www.monsite.com" target="_blank">une super agence</a>.</p>
            </div>
            </div>
            
        </div>
    </div>
    </div>
    </div>
 </body>
  
</html>
