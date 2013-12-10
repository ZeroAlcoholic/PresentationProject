總共有這些檔案
front.html  
init.js 
game.js 
tool.js 
data1.txt 
data2.txt


front.html 就是可以玩的那一個
init.js 負責畫出stage. layer(可以在上面畫出圖形), 還有畫出pool裡面的圖形
tool.js 一些需要的工具
		random_position -- 讓pool裡面的圖形隨意分布
		shape_mouse_event -- 要指定給所有圖形的 mouse event
		is_on_border -- 圖形被拖移到邊界時會跳回原位置
		near_and_snap -- 圖形靠近時snap
		whether_in_used -- 確定他們是否有用這個圖形 (有些多餘的會留在pool裡面)
		save_to_file -- 寫成"編號 x座標 y座標 旋轉角度(degree)" 的檔案(當按下 finish button時)
		jQuery 的部份 "$.get()" -- 這個用來讀取兩個檔案(當按下 check button 時)
		compare_data -- 比較兩個檔案, 一樣會 alert true, else alert false
game.js 排程, 呼叫需要的工具等等

data1.txt 和 data2.txt : 用來compare的兩個檔案