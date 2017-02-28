<!DOCTYPE html>
<html lang="en">

<head>
    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <!-- Compiled and minified CSS -->
   <link rel="stylesheet" src="css/style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
 
 
  <!-- Compiled and minified JavaScript -->
  <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
   <!--Load the AJAX API-->
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
 
  <script src="js/charts.js"></script>
  <script src="js/charts2.js"></script>

  
 
</head>

<body>
  <nav>
    <div class="nav-wrapper light-blue darken-3">
      <a href="#" class="brand-logo center">|| ANCINE Reports ||</a>
    </div>
  </nav>

   
        <div class="col s12">
            <ul class="tabs light-blue darken-2 nav-principal ">
                <li class="tab col s3"><a style="color:white" href="#test1" class="teste">Ranking de filmes</a></li>
                <li class="tab col s3"><a  style="color:white" class="active" href="#test2">Bilheteria</a></li>
                <li class="tab col s3"><a  style="color:white" href="#test3">Produções</a></li>
            </ul>
        </div>
        
        <br>
       <?php include 'tables.php' ?>
 
               
    
        
     
          
    
</body>

</html>
