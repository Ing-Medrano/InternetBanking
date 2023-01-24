<?php
include("head.php");






?>
<body>
    <main class="container-fluid">
      <!-- <select name="" id="selectid">
        <option value="0">select</option>
      </select> -->
<div class="divlogin">
      <div class="row divgetlogin">
        
       
      </div>

    


 <div class="row  formlogin">
 <div class="">
          <h3 class="text-center">Log in to get started</h3>
        </div>
        <div class="col-2">
          <img src="http://localhost/bankIstApp/img/logo.png" alt="" />
        </div>
    
      <form class="col-md-8  p-3   " action="verificarLogin.php" method="post">
        <input type="text" class="form-control" placeholder="username" name="userLogin" />
        <br />
        <input type="password" class="form-control" placeholder="pin" name="pinLogin" />
        <br>
        <button type="submit" name="login" class="btn btn-dark form-control"><i class="fa-solid fa-right-to-bracket"></i>Log in</button>
      </form>
    </div>
    </div>

    </main>
<?php



include("footer.php");






?>