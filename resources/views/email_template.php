<?php
if (!isset($link)){ $link = 'http://www.pegasusrises.com';}
if (!isset($survey_name)){ $survey_name = 'Election 2016 Survey';}
if (!isset($survey_description)){ $survey_description = "This survey is aimed at collecting information on citizen\'s opinion on the upcoming 2016 elections in Ghana";}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<!-- /* background-color:    				 #c6daea */ -->
	<!-- /* ContentBlockColor01: 				 #e4ded8 */ -->
	<!-- /* ContentBlockColor02: 				 #f6f1ed */ -->
	<!-- /* Title & Text Color:		 			 #6f7579 */ -->
	<!-- /* Small Text Color:				   	 #9ca1a3 */ -->

	<!-- Define Charset -->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

	<!-- Responsive Meta Tag -->
	<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;" />

	<!-- Facebook sharing information tags -->
	<meta property="og:title" content="Pegasusrises Survey" />

	<title>Pegasusrises Survey</title>

	<!-- Hotmail ignores some valid styling, so we have to add this -->
	<style type="text/css">

		/* iPad Text Smoother */
		div, p, a, li, td { -webkit-text-size-adjust:none; }

		.ReadMsgBody
		{width: 100%; background-color: #ffffff;}
		.ExternalClass
		{width: 100%; background-color: #ffffff;}
		body
		{width: 100%; background-color: #ffffff; margin:0; padding:0; -webkit-font-smoothing: antialiased; text-align: left;}
		html
		{width: 100%; }
		img
		{	border:0px;	outline:none;	text-decoration:none;	display:block; }

		.RespoImage_LogoW Img { width:200px!important;}
		.RespoImage_Logo { width:200px !important;}

		.RespoImage_ThumbW Img { width:160px!important; height:150px!important; }
		.RespoImage_Thumb { width:160px !important; height:150px !important; }

		.RespoImage_FullW img{ width:600px !important; height:260px !important; }
		.RespoImage_Full  { width:600px !important; height:260px !important; }

		.RespoImage_FullFramedW img{ width:560px !important; height:240px !important; }
		.RespoImage_FullFramed  { width:560px !important; height:240px !important; }

		.RespoImage_HalfW Img { width: 395px!important; height: 180px!important; }
		.RespoImage_Half { width: 395px!important; height: 180px!important; }

		.RespoImage_HalfFramedW Img { width: 250px!important; height: 180px!important; }
		.RespoImage_HalfFramed { width: 250px!important; height: 180px!important; }

		.RespoImage_TowerHalfW Img { width: 290px!important; height: 375px!important; }
		.RespoImage_TowerHalf { width: 290px!important; height: 375px!important; }

		.RespoImage_ThirdW Img { width: 190px!important; height: 180px!important; }
		.RespoImage_Third { width: 190px!important; height: 180px!important; }

		.RespoImage_TwoThirdsW Img { width: 290px!important; height: 180px!important; }
		.RespoImage_TwoThirds { width: 290px!important; height: 180px!important; }

		.RespoImage_AvatarW Img { width: 60px!important; height: 60px!important; }
		.RespoImage_Avatar { width: 60px!important; height: 60px!important; }

		@media only screen and (max-width: 640px)
		{
			body{ width:auto!important; }

			/* Box Wrap */
			.BoxWrap { width:440px !important;  }
			.RespoList { width:350px !important; }
			.RespoTitle { font-size: 16px !important }

			/* Show/Hide  */
			.RespoHideMedium { display:none !important; }
			.RespoShowMedium { display:block !important; }
			.RespoCenterMedium { text-align:center !important; }

			.RespoImage_LogoW Img { width:170px!important; }
			.RespoImage_Logo { width:170px !important; }

			.RespoImage_ThumbW Img { width:140px!important; height:131px!important; }
			.RespoImage_Thumb { width:140px !important; height:131px !important; }

			.RespoImage_FullW img{ width:440px !important; height:191px !important; }
			.RespoImage_Full  { width:440px !important; height:191px !important; }

			.RespoImage_FullFramedW img{ width:400px !important; height:171px !important; }
			.RespoImage_FullFramed  { width:400px !important; height:171px !important; }

			.RespoImage_HalfW Img { width:440px!important; height:201px!important; }
			.RespoImage_Half { width:440px !important; height:201px !important; }

			.RespoImage_HalfFramedW Img { width: 400px!important; height: 288px!important; }
			.RespoImage_HalfFramed { width: 400px!important; height: 288px!important; }

			.RespoImage_TowerHalfW Img { width: 440px!important; height: 569px!important; }
			.RespoImage_TowerHalf { width: 440px!important; height: 569px!important; }

			.RespoImage_ThirdW Img { width: 440px!important; height: 417px!important; }
			.RespoImage_Third { width: 440px!important; height: 417px!important; }

			.RespoImage_TwoThirdsW Img { width: 440px!important; height: 273px!important; }
			.RespoImage_TwoThirds { width: 440px!important; height: 273px!important; }

			.RespoImage_AvatarW Img { width: 50px!important; height: 50px!important; }
			.RespoImage_Avatar { width: 50px!important; height: 50px!important; }
		}

		@media only screen and (max-width: 479px)
		{
			body{width:auto!important;}

			/* Box Wrap */
			.BoxWrap { width:280px !important;  }
			.RespoList { width:200px !important; }
			.RespoSocial {width: 100%!important; padding-left:0!important; padding-right:0!important}
			.RespoTitle { font-size: 14px !important }

			/* Hide  */
			.RespoHideSmall { display:none !important; }
			.RespoCenterSmall { text-align:center !important; }

			.RespoImage_LogoW Img { width:140px!important;}
			.RespoImage_Logo { width:140px !important;}

			.RespoImage_FullW img{ width:280px !important; height:121px !important; }
			.RespoImage_Full  { width:280px !important; height:121px !important; }

			.RespoImage_FullFramedW img{ width:240px !important; height:103px !important; }
			.RespoImage_FullFramed  { width:240px !important; height:103px !important; }

			.RespoImage_HalfW img{ width:280px !important; height:128px !important; }
			.RespoImage_Half  { width:280px !important; height:128px !important; }

			.RespoImage_HalfFramedW Img { width: 240px!important; height: 173px!important; }
			.RespoImage_HalfFramed { width: 240px!important; height: 173px!important; }

			.RespoImage_TowerHalfW Img { width: 280px!important; height: 362px!important; }
			.RespoImage_TowerHalf { width: 280px!important; height: 362px!important; }

			.RespoImage_ThirdW Img { width: 280px!important; height: 265px!important; }
			.RespoImage_Third { width: 280px!important; height: 265px!important; }

			.RespoImage_TwoThirdsW Img { width: 280px!important; height: 174px!important; }
			.RespoImage_TwoThirds { width: 280px!important; height: 174px!important; }

			.RespoImage_AvatarW Img { width: 40px!important; height: 40px!important; }
			.RespoImage_Avatar { width: 40px!important; height: 40px!important; }
		}

	</style>
</head>

<body>

<table align="center" cellpadding="0" cellspacing="0" bgcolor="#c6daea" style="background-color: #c6daea" width="100%">
	<tr>
		<td valign="top">
			<table cellpadding="0" cellspacing="0" width="100%">

				<tr>
					<td height="15" style="background-color: #202020" width="100%"></td>
				</tr><!-- // Horizontal Spacer \\ -->

				<tr>
					<td align="center" style="background-color: #202020" valign="top">
						<!-- // Begin Module: Header\\ -->

						<table align="center" cellpadding="0" cellspacing="0" class="BoxWrap" width="600">
							<tr>
								<td>
									<table align="right" border="0" cellpadding="0" cellspacing="0" width="100%">
										<tr>
											<td class="RespoImage_LogoW" width="10">
												<a href="#" style="border: none;">
													<img alt="Pegasus Survey : " border="0" class="RespoImage_Logo" src="../assets/logo.png" style="width: 200px; display: block;" width="200" />
												</a>
											</td>

											<td align="left" width="15">&nbsp;</td><!-- // vertical Spacer \\ -->

											<td align="left" style="background-color: #343437" width="1"></td><!-- // vertical Spacer \\ -->

											<td align="left" style="padding-left:20px; font-family: Helvetica, Arial, sans-serif; font-size: 9px; font-weight: normal; color: #9ca1a3; line-height: 13px; text-align: left;">
												<span class="RespoHideMedium">You've been invited to participate in a survey<br />
												<br /></span> <a href="http://www.pegasusrises.com/email?survey_id=i7z" style="text-decoration:none; color: #ffffff;">View Online &gt;</a>
											</td>
										</tr>
									</table>
								</td>
							</tr>
						</table><!-- // End Module: Header\\ -->
					</td>
				</tr>

				<tr>
					<td height="15" style="background-color: #202020" width="100%"></td>
				</tr><!-- // Horizontal Spacer \\ -->

				<tr>
					<td height="15" width="100%"></td>
				</tr>

				<tr>
					<td align="center" valign="top">
						<!-- // Begin Module: Icons List \\ -->

						<table align="center" cellpadding="0" cellspacing="0" class="BoxWrap" style="background-color: #FFFFFF" width="600">
							<tr>
								<td>
									<!-- Caption -->

									<table align="center" cellpadding="0" cellspacing="0" bgcolor="#f6f1ed" style="background-color: #f6f1ed" width="100%">
										<tr>
											<td height="15"></td>
										</tr><!-- // Horizontal Spacer \\ -->

										<tr>
											<td>
												<table cellpadding="0" cellspacing="0" width="100%">
													<tr>
														<td width="20">&nbsp;</td><!-- // Vertical Spacer \\ -->

														<td>
															<table cellpadding="0" cellspacing="0">
																<tr>
																	<td class="RespoHideMedium" height="5" width="100%"></td>
																</tr><!-- // Horizontal Spacer \\ -->

																<tr>
																	<td style="font-family: Myriad Pro, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: normal; font-style: normal; color: #6f7579; line-height: 26px; text-align: left;"><a href="<?=$link?>"><?=$survey_name ?></a></td>
																</tr>

																<tr>
																	<td style="font-family: Helvetica, Arial, sans-serif; font-size: 9px; font-weight: normal; color: #9ca1a3; line-height: 13px; text-align: left;"><?=$survey_description ?></td>
																</tr>
															</table>
														</td>

														<!--<td class="RespoHideSmall" style="font-family: Helvetica, Arial, sans-serif; font-size: 9px; font-weight: normal; color: #9ca1a3; line-height: 13px; text-align:right; padding-right:10px">-->
															<!--<a href="#" style="color: #6f7579; text-decoration:none;">Take Survey</a>-->
														<!--</td>-->

														<td class="RespoHideSmall" width="16">
															<a href="<?=$link?>">

																<div><!--[if mso]>
																	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="<?=$link?>" style="height:40px;v-text-anchor:middle;width:150px;" arcsize="10%"  fillcolor="#46a8b9">
																		<w:anchorlock/>
																		<center style="color:#ffffff;font-family:sans-serif;font-size:13px;font-weight:bold;">Take Survey</center>
																	</v:roundrect>
																	<![endif]-->
																	<a href="<?=$link?>"
																				   style="background-color:#46a8b9;border-radius:4px;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:13px;font-weight:bold;line-height:40px;text-align:center;text-decoration:none;width:150px;-webkit-text-size-adjust:none;mso-hide:all;">Take Survey</a></div>
															</a>
														</td>

														<td width="20">&nbsp;</td><!-- // Vertical Spacer \\ -->
													</tr>
												</table>
											</td>
										</tr><!-- Sub Caption -->

										<tr>
											<td></td>
										</tr>

										<tr>
											<td height="15"></td>
										</tr><!-- // Horizontal Spacer \\ -->

										<tr>
											<td bgcolor="#e4ded8" height="15" style="background-color: #e4ded8"></td>
										</tr><!-- // Horizontal Spacer \\ -->

										<tr>
											<td bgcolor="#e4ded8" style="background-color: #e4ded8; padding-left: 20px; padding-right: 20px; font-family: Myriad Pro, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; color: #6f7579; line-height: 20px; text-align: left;">Pegasus is a cloud-based survey platform to reach the unreachable.</td>
										</tr>

										<tr>
											<td bgcolor="#e4ded8" height="15" style="background-color: #e4ded8"></td>
										</tr><!-- // Horizontal Spacer \\ -->
									</table><!-- Sub Caption -->
									<!-- Big Image -->

									<table align="center" cellpadding="0" cellspacing="0" width="100%">
										<tr>
											<td class="RespoImage_FullW" width="600" style="position: relative">
												<a href="#" style="border: none; margin: 0 auto; display: block">
													<img alt="" border="0" class="RespoImage_Full" height="200" src="http://placehold.it/600x200?text=Pegasus%20Surveys" style="width: 600px; height: 200px; display: block;" width="600" />
													<div style="position: absolute; top: 160px; right : 225px"><!--[if mso]>
														<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="<?=$link?>" style="height:40px;v-text-anchor:middle;width:150px;" arcsize="10%" fillcolor="#46a8b9">
															<w:anchorlock/>
															<center style="color:#ffffff;font-family:sans-serif;font-size:13px;font-weight:bold;">Take Survey</center>
														</v:roundrect>
														<![endif]-->
														<a href="<?=$link?>"
														   style=" margin: 0 auto; display: block; background-color:#46a8b9;border-radius:4px;color:#ffffff;font-family:sans-serif;font-size:13px;font-weight:bold;line-height:40px;text-align:center;text-decoration:none;width:150px;-webkit-text-size-adjust:none;mso-hide:all;">Take Survey</a></div>
												</a>
											</td>
										</tr>

										<tr>
											<td height="15"></td>
										</tr><!-- // Horizontal Spacer \\ -->
									</table>
									<!-- Big Image -->

									<!-- // List Item \\ -->

									<table border="0" cellpadding="0" cellspacing="0" width="100%">
										<tr>
											<td>
												<table border="0" cellpadding="0" cellspacing="0" width="100%">
													<tr>
														<td align="left" height="32" style="padding-left:20px;" width="32"><img alt="icon" height="32" src="../assets/graph.png" width="32" /></td>

														<td style="padding-left:15px; padding-right:20px; vertical-align:bottom; font-family: Myriad Pro, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: normal; font-style: normal; color: #6f7579; line-height: 26px; text-align: left;">Want to build your own surveys?</td>
													</tr>
												</table>
											</td>
										</tr>

										<tr>
											<td height="15" width="100%"></td>
										</tr><!-- // Horizontal Spacer \\ -->

										<tr>
											<td style="padding-left:20px; padding-right:20px; font-family: Myriad Pro, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; color: #6f7579; line-height: 20px; text-align: left;" valign="top" width="100%">With very few clicks, anyone can create an account on Pegasus and deploy surveys to gather relevant information</td>
										</tr>
									</table><!-- // List Item \\ -->
									<!-- Footer -->

									<table border="0" cellpadding="0" cellspacing="0" width="100%">
										<tr>
											<td height="15" width="100%"></td>
										</tr><!-- // Horizontal Spacer \\ -->

										<tr style="min-height: 20px">
											<td height="25" width="40" bgcolor="#e4ded8" style="background-color: #e4ded8; padding: 20px; font-family: Myriad Pro, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; color: #6f7579; line-height: 20px; text-align: left;">&copy; Pegasus 2015</td>
											<td height="25" width="30" bgcolor="#e4ded8" style="background-color: #e4ded8; padding: 20px;font-family: Myriad Pro, Helvetica, Arial, sans-serif; font-size: 12px; font-weight: normal; color: #6f7579; line-height: 20px; text-align: right;">
												<a href="http://www.pegasusrises.com/unsubscribe">Unsubscribe</a>
											</td>
											<td width="20" height="25"></td>
										</tr>

									</table><!-- Footer -->
								</td>
							</tr>
						</table><!-- // End Module: Icons List \\ -->
					</td>
				</tr><!-- // ********************************************************************************************************* \\ -->

			</table>
		</td>
	</tr>
</table>
<!--Table End-->

</body>
</html>

