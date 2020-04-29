<form action="App/views/function.php" id="login" class="active menu-game" method="post">
    <div class="font-menu">Enter your email</div>
    <label for="email" class="input-email">
        <input type="email" id="email" placeholder="arya@westeros.com" name="mail"
               class="input-username" value="<?php if (isset($_SESSION['user'])) echo $_SESSION['user']; ?>"/>
    </label>
    <div class="font-menu">Choose secure password</div>
    <div class="font-submenu">Must be at least 8 characters</div>
    <label for="user-password" class="input-email">
        <input type="password" id="user-password" maxlength="30" minlength="8" placeholder="password"
               name="password" class="input-username"/>
    </label>
    <label class="container">
        <input type="checkbox">
        <span class="checkbox"></span>
        <p>Remember me</p>
    </label>
    <input type="hidden" name="signUp">
    <input type="submit" id="button-login" class="button-submit" value="Sign Up">
</form>
<script src="Public/js/script_login.js" type="text/javascript"></script>