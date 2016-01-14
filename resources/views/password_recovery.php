<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	</head>
<body>
<form action='/email/authenticate/'.<?=$email?> method="post">
<input type="text" name="password"/>
<input type="text" name="password_confirm"/>
<input type="button"  value="change password" href="/email/authenticate/hadi@hadi.com"/></body>
</form>
</html>