<form action="App/views/function.php" id="start" class="active menu-game" method="post">
    <div class="sub-title"><p>You've succesfully joined the game</p>
        <p>Tell us more about yourself.</p></div>
    <div class="font-menu">Who are you?</div>
    <div class="font-submenu">Alpha-numeric username</div>
    <label for="username" class="input-email">
        <input type="text" name="name" id="username" placeholder="arya" class="input-username"
               value="<?php
               if (isset($_SESSION['data']['name']))
                   echo $_SESSION['data']['name'];
               ?>">
    </label>
    <div class="font-menu">You Great House</div>
    <div class="select" id="select">
        <select type="text" id="select-house" name="user_house" class="select-house">
            <option>Select House</option>
            <option value="0" data-image="public/img/House_Arryn.png">Arryn of the Eyrie</option>
            <option value="1" data-image="public/img/House_Baratheon.png">Baratheon of Storm's End</option>
            <option value="2" data-image="public/img/House_Greyjoy.png">Greyjoy of Pyke</option>
            <option value="3" data-image="public/img/House_Lannister.png">Lannister of Casterly Rock</option>
            <option value="4" data-image="public/img/House_Martell.png">Martell of Sunspear</option>
            <option value="5" data-image="public/img/House_Stark.png">Stark of Winterfell</option>
            <option value="6" data-image="public/img/House_Targaryen.png">Targaryen of King's Landing</option>
            <option value="7" data-image="public/img/House_Tully.png">Tully of Riverrun</option>
            <option value="8" data-image="public/img/House_Tyrell.png">Tyrell of Highgarden</option>
        </select>
    </div>
    <div class="font-menu" id="hobby">You preferences, hobbies, wishes, etc.</div>
    <label for="preferences" class="input-email">
                <textarea type="text" name="preferences" id="preferences" placeholder="I have a long TOKILL list..."
                          class="input-username"
                    <?php
                    if (isset($_SESSION['data']['hobby']))
                        echo $_SESSION['data']['hobby'] ?>></textarea>
    </label>
    <input type="hidden" name="start">
    <input type="submit" id="button-submit" class="button-submit" value="Save">
</form>
<script src="Public/js/jquery-3.4.1.js" type="text/javascript"></script>
<script src="Public/js/jquery.dd.js" type="text/javascript"></script>
<script src="Public/js/script_start.js" type="text/javascript"></script>
