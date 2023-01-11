''PR Slip @@ hightlight id_;_9176076_;_script infofile_;_ZIP::ssf33.xml_;_
'Go to PR Slip first Departments > Planning > PR Slip then run this script

SwfWindow("PR Slip - Microsoft Dynamics_2").SwfObject("{DF1AA864-6D25-4f2a-8620-C078B").Click
SwfWindow("PR Slip - Microsoft Dynamics").SwfObject("Tree").Click 83,123 @@ hightlight id_;_1442728_;_script infofile_;_ZIP::ssf412.xml_;_
SwfWindow("PR Slip - Microsoft Dynamics").SwfObject("Tree").Click 93,145 @@ hightlight id_;_5048510_;_script infofile_;_ZIP::ssf396.xml_;_
SwfWindow("PR Slip - Microsoft Dynamics").SwfLabel("PR Slip").Click 28,13 @@ hightlight id_;_4589000_;_script infofile_;_ZIP::ssf397.xml_;_
SwfWindow("PR Slip - Microsoft Dynamics").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfButton("New").Click @@ hightlight id_;_1988810832_;_script infofile_;_ZIP::ssf279.xml_;_
SwfWindow("New - PR Slip_2").SwfButton("{0000C42D-0000-0003-0008-00008").Click @@ hightlight id_;_4130006_;_script infofile_;_ZIP::ssf280.xml_;_
SwfWindow("New - PR Slip_2").SwfWindow("No. Series List").SwfButton("OK").Click @@ hightlight id_;_1967366_;_script infofile_;_ZIP::ssf281.xml_;_

'SwfWindow("New - PR Slip - SLIP-0000O171").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfObject("Home").Click 1357,106
slipNum = SwfWindow("New - PR Slip_2").SwfEdit("{0000C42D-0000-0003-0008-00008").GetROProperty("text")
'slipNum = SwfWindow(""New - PR Slip_2"").SwfEdit("{0000C42D-0000-0003-0008-00008").GetROProperty("text")
'msgbox(slipNum)

'SwfWindow("New - PR Slip_2").SwfEdit("{0000C42D-0000-0005-0008-00008").Set "221"
'Function FillNewPRS(ByVal slipNum)

	SwfWindow("New - PR Slip_2").SwfEdit("{0000C42D-0000-0005-0008-00008").Set "221"
	SwfWindow("New - PR Slip_2").SwfEdit("{0000C42D-0000-0006-0008-00008").Click
	SwfWindow("New - PR Slip_2").SwfEdit("{0000C42D-0000-0006-0008-00008").Set "Purchase" @@ hightlight id_;_1181410_;_script infofile_;_ZIP::ssf10.xml_;_
	SwfWindow("New - PR Slip_2").SwfEdit("{0000C42D-0000-0007-0008-00008").Set "Purchase" @@ hightlight id_;_722634_;_script infofile_;_ZIP::ssf11.xml_;_
	'SwfWindow("New - PR Slip_2").SwfObject("{0000C42D-0000-0008-0008-00008").Click 225,10
	SwfWindow("New - PR Slip - SLIP-0000O160").SwfObject("{0000C42D-0000-0008-0008-00008").Click
	
	
	'SwfWindow("New - PR Slip_2").SwfWindow("SwfWindow").SwfCalendar("SwfCalendar").SetDate "1-Jan-2023"
	'SwfCalendar("SwfCalendar").SetDate "3-Jan-2023"
	'SwfWindow("New - PR Slip_2").SwfObject("{0000C42D-0000-0020-0008-00008").Click 431,23
	SwfWindow("New - PR Slip_2").SwfEdit("{0000C42D-0000-0008-0008-00008").Set DataTable("DateNeeded",dtGlobalSheet)
	SwfWindow("New - PR Slip_2").SwfEdit("{0000C42D-0000-0020-0008-00008").Set "2023 and above"


SwfWindow("New - PR Slip_2").SwfEdit("{0000C42D-0000-0021-0008-00008").Set " CAPEX" @@ hightlight id_;_1312390_;_script infofile_;_ZIP::ssf17.xml_;_
SwfWindow("New - PR Slip_2").SwfEdit("{0000C42D-0000-000B-0008-00008").Set " Common" @@ hightlight id_;_3736266_;_script infofile_;_ZIP::ssf18.xml_;_
SwfWindow("New - PR Slip_2").SwfEdit("{0000C42D-0000-000C-0008-00008").Set "AG" @@ hightlight id_;_2950654_;_script infofile_;_ZIP::ssf20.xml_;_
SwfWindow("New - PR Slip_2").SwfEdit("{0000C42D-0000-000D-0008-00008").Set "5.00" @@ hightlight id_;_329912_;_script infofile_;_ZIP::ssf21.xml_;_

'SwfWindow("New - PR Slip - SLIP-0000O160").SwfEdit("9.StringControl.EllipsisTextBo").Set "IT2023CPX-00001"

SwfWindow("New - PR Slip - SLIP-0000O160").SwfTable("_DataGrid").ActivateCell 0,"Budget Code" 'Having errors on selecting the cell @@ hightlight id_;_4522842_;_script infofile_;_ZIP::ssf66.xml_;_
SwfWindow("New - PR Slip - SLIP-0000O160").SwfTable("_DataGrid").SelectCell 0,"Budget Code" 'Having errors on selecting the cell @@ hightlight id_;_4522842_;_script infofile_;_ZIP::ssf66.xml_;_
SwfWindow("New - PR Slip - SLIP-0000O160").SwfTable("_DataGrid").ClickCell 0,"Budget Code"
'SwfWindow("New - PR Slip_2").SwfObject("9.StringControl.TextView").Click 213,19
'SwfWindow("New - PR Slip - SLIP-0000O160").SwfObject("9.StringControl.TextView").Click 213,20 @@ hightlight id_;_8651724_;_script infofile_;_ZIP::ssf52.xml_;_
'SwfWindow("New - PR Slip - SLIP-0000O160").SwfObject("9.StringControl.TextView").Click 212,29 'recalibrate
SwfWindow("New - PR Slip_2").SwfObject("9.StringControl.TextView").Click 109,20 @@ hightlight id_;_657162_;_script infofile_;_ZIP::ssf313.xml_;_
ItemNumber = DataTable("Item Selection", dtGlobalSheet)
SwfWindow("New - PR Slip - SLIP-0000O160").SwfWindow("CAPEX / OPEX Transaction").SwfTable("_DataGrid").SelectCell ItemNumber,"Item Code" 'After running the script make sure to remove the items from the previous UFT run to avoid error in line 80+ @@ hightlight id_;_3934270_;_script infofile_;_ZIP::ssf53.xml_;_
SwfWindow("New - PR Slip - SLIP-0000O160").SwfWindow("CAPEX / OPEX Transaction").SwfButton("OK").Click @@ hightlight id_;_3671064_;_script infofile_;_ZIP::ssf54.xml_;_
SwfWindow("New - PR Slip - SLIP-0000O160").SwfTable("_DataGrid").SelectCell 0,"Qty Required" @@ hightlight id_;_36897536_;_script infofile_;_ZIP::ssf55.xml_;_
SwfWindow("New - PR Slip - SLIP-0000O160").SwfEdit("6.NavDecimalControl.EllipsisTe").Set DataTable("Quantity Required",dtGlobalSheet) @@ hightlight id_;_7145182_;_script infofile_;_ZIP::ssf56.xml_;_
SwfWindow("New - PR Slip - SLIP-0000O160").SwfTable("_DataGrid").SelectCell 0,"Description 3" @@ hightlight id_;_36897536_;_script infofile_;_ZIP::ssf57.xml_;_
SwfWindow("New - PR Slip - SLIP-0000O160").SwfTable("_DataGrid").SelectCell 0,"Qty Approved" @@ hightlight id_;_36897536_;_script infofile_;_ZIP::ssf58.xml_;_
SwfWindow("New - PR Slip - SLIP-0000O160").SwfEdit("7.NavDecimalControl.EllipsisTe").Set DataTable("Quantity Approved",dtGlobalSheet) @@ hightlight id_;_4261834_;_script infofile_;_ZIP::ssf59.xml_;_
SwfWindow("New - PR Slip - SLIP-0000O160").SwfTable("_DataGrid").SelectCell 0,"Remarks" @@ hightlight id_;_36897536_;_script infofile_;_ZIP::ssf60.xml_;_


SwfWindow("New - PR Slip - SLIP-0000O160").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfButton("Release").Click @@ hightlight id_;_1919043728_;_script infofile_;_ZIP::ssf61.xml_;_
SwfWindow("New - PR Slip - SLIP-0000O160").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfButton("Approve").Click @@ hightlight id_;_1918988912_;_script infofile_;_ZIP::ssf62.xml_;_

'Purchase Requisition

'SwfWindow("PR Slip - Microsoft Dynamics").SwfObject("{DF1AA864-6D25-4f2a-8620-C078B").Click @@ hightlight id_;_5243450_;_script infofile_;_ZIP::ssf398.xml_;_
SwfWindow("PR Slip - Microsoft Dynamics").SwfObject("{DF1AA864-6D25-4f2a-8620-C078B").Click
SwfWindow("PR Slip - Microsoft Dynamics").SwfObject("Tree").Click 72,126 @@ hightlight id_;_2950736_;_script infofile_;_ZIP::ssf399.xml_;_
SwfWindow("PR Slip - Microsoft Dynamics").SwfObject("Tree").Click 83,149 @@ hightlight id_;_2950736_;_script infofile_;_ZIP::ssf400.xml_;_
SwfWindow("PR Slip - Microsoft Dynamics").SwfLabel("Purchase Requisition").Click 75,15 @@ hightlight id_;_4129928_;_script infofile_;_ZIP::ssf401.xml_;_

'refresh
SwfWindow("PR Slip - Microsoft Dynamics").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfButton("Refresh").Click
wait(1) 'wait refresh then go


SwfWindow("PR Slip - Microsoft Dynamics").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfButton("New").Click @@ hightlight id_;_1977280432_;_script infofile_;_ZIP::ssf73.xml_;_
SwfWindow("New - Req. Header").SwfButton("{0000C35B-0000-0002-0008-00008").Click @@ hightlight id_;_3474364_;_script infofile_;_ZIP::ssf74.xml_;_

'refresh on new 
SwfWindow("New - Req. Header").SwfWindow("No. Series List").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfButton("Refresh").Click
wait(0.5)

SwfWindow("New - Req. Header").SwfWindow("No. Series List").SwfTable("_DataGrid").SelectCell 14 ,"Code" @@ hightlight id_;_7733390_;_script infofile_;_ZIP::ssf76.xml_;_
SwfWindow("New - Req. Header").SwfWindow("No. Series List").SwfButton("OK").Click @@ hightlight id_;_11272922_;_script infofile_;_ZIP::ssf77.xml_;_


SwfWindow("New - Req. Header").SwfEdit("{0000C35B-0000-0004-0008-00008").Set "12-22-2022" @@ hightlight id_;_460878_;_script infofile_;_ZIP::ssf186.xml_;_
SwfWindow("New - Req. Header").SwfEdit("{0000C35B-0000-0004-0008-00008").Type micReturn @@ hightlight id_;_460878_;_script infofile_;_ZIP::ssf187.xml_;_

'PRNum = SwfWindow("New - Req. Header").SwfEdit("{0000C35B-0000-0002-0008-00008").GetROProperty("text")
'If PRNum <> "ITPR" Then
'	
'End If
'slipNum = "ITPR-
SwfWindow("New - Req. Header - ITPR-00406").SwfEdit("{0000C35B-0000-0016-0008-00008").Set " 2023 and above" @@ hightlight id_;_2426716_;_script infofile_;_ZIP::ssf78.xml_;_
'SwfWindow("Edit - Req. Header - ITPR-0041").SwfLabel("Description").Click 261,9
x = 1
CapexBa = SwfWindow("New - Req. Header - ITPR-00406").SwfEdit("{0000C35B-0000-0006-0008-00008").GetROProperty("text")
Do While (CapexBa <> "CAPEX")
SwfWindow("New - Req. Header - ITPR-00406").SwfEdit("{0000C35B-0000-0006-0008-00008").Click
SwfWindow("New - Req. Header - ITPR-00406").SwfEdit("{0000C35B-0000-0006-0008-00008").Set "CAPEX"
SwfWindow("New - Req. Header - ITPR-00406").SwfEdit("{0000C35B-0000-0006-0008-00008").Set "CAPEX"
'SwfWindow("New - Req. Header").SwfEdit("{0000C35B-0000-0006-0008-00008").Set "CAPEX" @@ hightlight id_;_5114478_;_script infofile_;_ZIP::ssf415.xml_;_
SwfWindow("New - Req. Header - ITPR-00406").SwfEdit("{0000C35B-0000-0006-0008-00008").Type  micReturn @@ hightlight id_;_5114478_;_script infofile_;_ZIP::ssf416.xml_;_
SwfWindow("New - Req. Header - ITPR-00406").SwfEdit("{0000C35B-0000-0016-0008-00008").Click
'Select CAPEX
SwfWindow("New - Req. Header - ITPR-00406").SwfObject("{0000C35B-0000-0006-0008-00008").Click 440,18 @@ hightlight id_;_9176194_;_script infofile_;_ZIP::ssf417.xml_;_
SwfWindow("New - Req. Header - ITPR-00406").SwfWindow("{AAAAAAAA-AAAA-AAAA-FAAB-00000").SwfTable("_DataGrid").SelectCell 1,"" @@ hightlight id_;_787790_;_script infofile_;_ZIP::ssf418.xml_;_

x=x+1
If x=10 Then exit do 'exit loop then error

CapexBa = SwfWindow("New - Req. Header - ITPR-00406").SwfEdit("{0000C35B-0000-0006-0008-00008").GetROProperty("text")

Loop


SwfWindow("New - Req. Header - ITPR-00406").SwfEdit("{0000C35B-0000-0005-0008-00008").Set "221" @@ hightlight id_;_4982874_;_script infofile_;_ZIP::ssf81.xml_;_
SwfWindow("New - Req. Header - ITPR-00406").SwfEdit("{0000C35B-0000-0006-0008-00008").SetSelection 0,5 @@ hightlight id_;_21431464_;_script infofile_;_ZIP::ssf82.xml_;_
'SwfWindow("Edit - Req. Header - ITPR-0041").SwfObject("{0000C35B-0000-000A-0008-00008").Click 1426,212
'SwfWindow("Edit - Req. Header - ITPR-0041").SwfObject("{0000C35B-0000-000A-0008-00008").Click 1621,262
SwfWindow("New - Req. Header - ITPR-00406").SwfEdit("{0000C35B-0000-0008-0008-00008").Set "Calaca" @@ hightlight id_;_8913784_;_script infofile_;_ZIP::ssf83.xml_;_
SwfWindow("New - Req. Header - ITPR-00406").SwfEdit("{0000C35B-0000-0009-0008-00008").Set " Common" @@ hightlight id_;_3082144_;_script infofile_;_ZIP::ssf84.xml_;_

SwfWindow("New - Req. Header").SwfEdit("{0000C35B-0000-000E-0008-00008").Set "01-03-2023" @@ hightlight id_;_3736602_;_script infofile_;_ZIP::ssf188.xml_;_
SwfWindow("New - Req. Header").SwfEdit("{0000C35B-0000-000E-0008-00008").Type micReturn @@ hightlight id_;_3736602_;_script infofile_;_ZIP::ssf189.xml_;_

SwfWindow("New - Req. Header - ITPR-00406").SwfEdit("{0000C35B-0000-0007-0008-00008").Set "AG" @@ hightlight id_;_2885166_;_script infofile_;_ZIP::ssf85.xml_;_
SwfWindow("New - Req. Header - ITPR-00406").SwfEdit("{0000C35B-0000-0011-0008-00008").Set "NPA - PLANNED MODIFICATION/UPG"
SwfWindow("New - Req. Header - ITPR-00406").SwfEdit("{0000C35B-0000-002C-0008-00008").Set "MATS - DIRECT PURCHASE" @@ hightlight id_;_5572198_;_script infofile_;_ZIP::ssf92.xml_;_

SwfWindow("New - Req. Header").SwfEdit("{0000C35B-0000-0021-0008-00008").Set "Non-WO Related"


ITPRNo = SwfWindow("New - Req. Header - ITPR-00406").SwfEdit("{0000C35B-0000-0002-0008-00008").GetROProperty("text")

SwfWindow("New - Req. Header - ITPR-00406").SwfButton("OK").Click @@ hightlight id_;_15663864_;_script infofile_;_ZIP::ssf96.xml_;_

'Back at PR Slip

SwfWindow("New - PR Slip - SLIP-0000O160").SwfEdit("{0000C42D-0000-000A-0008-00008").Set ITPRNo @@ hightlight id_;_6751716_;_script infofile_;_ZIP::ssf97.xml_;_

SwfWindow("New - PR Slip - SLIP-0000O160").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfObject("Carry-out to PR").Click
SwfWindow("New - PR Slip - SLIP-0000O160").SwfWindow("Microsoft Dynamics 365").SwfButton("OK").Click



SwfWindow("Edit - Req. Header - ITPR-0041").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfButton("Refresh").Click @@ hightlight id_;_1972649584_;_script infofile_;_ZIP::ssf319.xml_;_
wait(0.5)
SwfWindow("Edit - Req. Header - ITPR-0041").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfObject("ACTIONS").Click 85,20 @@ hightlight id_;_1975928176_;_script infofile_;_ZIP::ssf320.xml_;_
wait(0.5)
SwfWindow("Edit - Req. Header - ITPR-0041").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfButton("Submit").Click @@ hightlight id_;_2024528808_;_script infofile_;_ZIP::ssf321.xml_;_


wait(3)
'SwfWindow("Edit - Req. Header - ITPR-0040").SwfWindow("Microsoft Dynamics 365").SwfButton("OK").Click @@ hightlight id_;_7209572_;_script infofile_;_ZIP::ssf107.xml_;_
SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_2").SwfButton("OK").Click

'Checkpoint 1 v.1 @@ hightlight id_;_65768_;_script infofile_;_ZIP::ssf282.xml_;_
'SwfWindow("New - Req. Header").SwfEdit("{0000C35B-0000-0019-0008-00008").Check CheckPoint("{0000C35B-0000-0019-0008-0000836BD2D2}_2")
'Checkpoint 1 v.2

SwfWindow("Edit - Req. Header - ITPR-0041").SwfEdit("{0000C35B-0000-0019-0008-00008").Check CheckPoint("Checkpoint 1") @@ hightlight id_;_1770496_;_script infofile_;_ZIP::ssf314.xml_;_

'SwfWindow("Edit - Req. Header - ITPR-0040").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfButton("Approve").Click @@ hightlight id_;_1985291992_;_script infofile_;_ZIP::ssf109.xml_;_
SwfWindow("Edit - Req. Header - ITPR-0041").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfButton("Approve").Click


wait(0.5)
'SwfWindow("Edit - Req. Header - ITPR-0040").SwfWindow("Microsoft Dynamics 365_2").SwfButton("Yes").Check CheckPoint("Yes")
SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_3").SwfButton("Yes").Click @@ hightlight id_;_722370_;_script infofile_;_ZIP::ssf421.xml_;_
SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_2").SwfButton("OK").Click @@ hightlight id_;_460578_;_script infofile_;_ZIP::ssf422.xml_;_
 @@ hightlight id_;_66836_;_script infofile_;_ZIP::ssf259.xml_;_
'Checkpoint 2
'SwfWindow("New - Req. Header").SwfEdit("{0000C35B-0000-0019-0008-00008").Check CheckPoint("{0000C35B-0000-0019-0008-0000836BD2D2}_3") @@ hightlight id_;_67056_;_script infofile_;_ZIP::ssf284.xml_;_
 @@ hightlight id_;_67056_;_script infofile_;_ZIP::ssf283.xml_;_
 'Checkpoint 2 v.2
SwfWindow("Edit - Req. Header - ITPR-0041").SwfEdit("{0000C35B-0000-0019-0008-00008").Check CheckPoint("Checkpoint 2")
SwfWindow("Edit - Req. Header - ITPR-0041").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfButton("Approve").Click @@ hightlight id_;_1985291992_;_script infofile_;_ZIP::ssf112.xml_;_

SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_3").SwfButton("Yes").Click
SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_2").SwfButton("OK").Click @@ hightlight id_;_1574506_;_script infofile_;_ZIP::ssf427.xml_;_


SwfWindow("Edit - Req. Header - ITPR-0041").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfButton("Approve").Click @@ hightlight id_;_1985291992_;_script infofile_;_ZIP::ssf115.xml_;_
SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_3").SwfButton("Yes").Click
SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_2").SwfButton("OK").Click @@ hightlight id_;_7668324_;_script infofile_;_ZIP::ssf117.xml_;_

SwfWindow("Edit - Req. Header - ITPR-0041").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfButton("Approve").Click @@ hightlight id_;_1985291992_;_script infofile_;_ZIP::ssf118.xml_;_
SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_3").SwfButton("Yes").Click @@ hightlight id_;_6095904_;_script infofile_;_ZIP::ssf119.xml_;_
SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_2").SwfButton("OK").Click @@ hightlight id_;_26083694_;_script infofile_;_ZIP::ssf120.xml_;_

SwfWindow("Edit - Req. Header - ITPR-0041").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfButton("Approve").Click @@ hightlight id_;_1985291992_;_script infofile_;_ZIP::ssf121.xml_;_
SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_3").SwfButton("Yes").Click @@ hightlight id_;_8783896_;_script infofile_;_ZIP::ssf122.xml_;_
SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_2").SwfButton("OK").Click @@ hightlight id_;_5638200_;_script infofile_;_ZIP::ssf123.xml_;_

SwfWindow("Edit - Req. Header - ITPR-0041").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfButton("Approve").Click @@ hightlight id_;_1985291992_;_script infofile_;_ZIP::ssf124.xml_;_
SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_3").SwfButton("Yes").Click @@ hightlight id_;_15598164_;_script infofile_;_ZIP::ssf125.xml_;_
SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_2").SwfButton("OK").Click @@ hightlight id_;_36963288_;_script infofile_;_ZIP::ssf126.xml_;_
'SwfWindow("New - Req. Header").SwfEdit("{0000C35B-0000-0019-0008-00008").Check CheckPoint("{0000C35B-0000-0019-0008-0000836BD2D2}_6")
'Checkpoint 3
SwfWindow("Edit - Req. Header - ITPR-0041").SwfEdit("{0000C35B-0000-0019-0008-00008").Check CheckPoint("Checkpoint 3") @@ hightlight id_;_1770496_;_script infofile_;_ZIP::ssf316.xml_;_

SwfWindow("Edit - Req. Header - ITPR-0041").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfButton("Approve").Click @@ hightlight id_;_1977319840_;_script infofile_;_ZIP::ssf127.xml_;_
SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_3").SwfButton("Yes").Click @@ hightlight id_;_7342488_;_script infofile_;_ZIP::ssf128.xml_;_
SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_2").SwfButton("OK").Click @@ hightlight id_;_4917430_;_script infofile_;_ZIP::ssf129.xml_;_
SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_4").SwfButton("OK").Click @@ hightlight id_;_5636960_;_script infofile_;_ZIP::ssf428.xml_;_
'SwfWindow("New - Req. Header").SwfEdit("{0000C35B-0000-0019-0008-00008").Check CheckPoint("{0000C35B-0000-0019-0008-0000836BD2D2}_7")
'Checkpoint 4
SwfWindow("Edit - Req. Header - ITPR-0041").SwfEdit("{0000C35B-0000-0019-0008-00008").Check CheckPoint("Checkpoint 4")

SwfWindow("Edit - Req. Header - ITPR-0041").SwfObject("{FB8CCCF3-54AC-4d77-9AD8-136CE").WpfWindow("WpfWindow").WpfButton("Approve").Click @@ hightlight id_;_1977319840_;_script infofile_;_ZIP::ssf131.xml_;_
SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_3").SwfButton("Yes").Click @@ hightlight id_;_9046040_;_script infofile_;_ZIP::ssf132.xml_;_
SwfWindow("Edit - Req. Header - ITPR-0041").SwfWindow("Microsoft Dynamics 365_2").SwfButton("OK").Click @@ hightlight id_;_1974701608_;_script infofile_;_ZIP::ssf99.xml_;_
SwfWindow("Edit - Req. Header - ITPR-0041").SwfEdit("{0000C35B-0000-0019-0008-00008").Check CheckPoint("Checkpoint 5")
SwfWindow("Edit - Req. Header - ITPR-0041").SwfButton("OK").Click @@ hightlight id_;_7734428_;_script infofile_;_ZIP::ssf218.xml_;_

'Checkpoint 5 @@ hightlight id_;_1770496_;_script infofile_;_ZIP::ssf318.xml_;_
 @@ hightlight id_;_1967478_;_script infofile_;_ZIP::ssf307.xml_;_


SwfWindow("New - PR Slip_2").Close
'SwfWindow("New - Req. Header").Close

SwfWindow("PR Slip - Microsoft Dynamics_2").SwfObject("{DF1AA864-6D25-4f2a-8620-C078B").Click
SwfWindow("PR Slip - Microsoft Dynamics").SwfObject("Tree").Click 83,123 @@ hightlight id_;_1442728_;_script infofile_;_ZIP::ssf412.xml_;_
SwfWindow("PR Slip - Microsoft Dynamics").SwfObject("Tree").Click 93,145 @@ hightlight id_;_5048510_;_script infofile_;_ZIP::ssf396.xml_;_
SwfWindow("PR Slip - Microsoft Dynamics").SwfLabel("PR Slip").Click 28,13 @@ hightlight id_;_4589000_;_script infofile_;_ZIP::ssf397.xml_;_
 @@ hightlight id_;_657006_;_script infofile_;_ZIP::ssf426.xml_;_
