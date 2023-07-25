<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alarm Clock</title>
    <!-- Bootstrap link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <!-- Stylesheet -->
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <!-- main container -->
    <div class="main-cont">
        <!-- div to display current time -->
        <div class="current-time purple-div"></div>
        <!-- form to create alarm -->
        <form id="alarm-form" class="create-alarm">
            <!-- all inputs have a range -->
            <!-- enter hours -->
            <input class="form-control ms-2 me-2" type="number" name="hours" min="1" max="12" id="hours">
            <!-- enter minutes -->
            <input class="form-control ms-2 me-2" type="number" name="minutes" min="0" max="59" id="minutes">
            <!-- enter seconds -->
            <input class="form-control ms-2 me-2" type="number" name="seconds" min="0" max="59" id="seconds">
            <!-- button to toggle between AM and PM -->
            <input class="btn btn-light ms-2 me-2" type="button" name="AMPM" value="AM" id="toggleAMPM">
            <!-- submit button to create alarm -->
            <button class="btn btn-light ms-2 me-2 yellow-border" type="submit" id="create-alarm-btn">Set Alarm</button>
        </form>
        <!-- list of alarms -->
        <div class="all-alarms"></div>
    </div>
    <!-- bootstrap js -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"></script>
    <!-- app js -->
    <script src="./script.js"></script>
</body>

</html>
