			var overview = {
				"holz": "<img src='img/CHR/Holz.png' style='border: 1px solid black;width:25px;height: 25px'/>",
				"stein": "<img src='img/CHR/Stein.png' style='border: 1px solid black;width:25px;height: 25px'/>",
				"erz": "<img src='img/CHR/Erz.png' style='border: 1px solid black;width:25px;height: 25px'/>",
				"getreide": "<img src='img/CHR/Getreide.png' style='border: 1px solid black;width:25px;height: 25px'/>",
				"haus":"<img src='img/CHR/Gebäude.png' style='width:32px;height:32px;'/>",
				"krone":"<img src='img/CHR/Krone.png' style='width:32px;height:32px;'/>",
				"kreuz":"<img src='img/CHR/cross.png' style='width:32px;height:32px;'/>",
				"buch":"<img src='img/CHR/book.png' style='width:32px;height:32px;'/>",
				"kronewh":"<img src='img/CHR/Kronewhite.png' style='width:32px;height:32px;'/>",
				"kreuzwh":"<img src='img/CHR/crosswhite.png' style='width:32px;height:32px;'/>",
				"buchwh":"<img src='img/CHR/bookwhite.png' style='width:32px;height:32px;'/>",
			"cards": [
			
			{code: "H10", art : "H",Karte : "10", typ : "Gebäude", name: "Universität", Kosten : "8 {{{holz}}}, 5 {{{stein}}}, 7 {{{getreide}}}", Vorteil : "Siegpunkte am Ende der Partie verdoppeln." ,res1 : "Holz"},
			{code: "E10", art : "E",Karte : "10", typ : "Gebäude", name: "Armee", Kosten : "5 {{{stein}}}, 5 {{{erz}}}, 5 {{{getreide}}}", Vorteil : "Vorteil: Zu Beginn der Runde je 1 Handkarte von den Spielern mit der grössten Bevölkerung ziehen." ,res1 : "Erz"},
			{code: "S10", art : "S",Karte : "10", typ : "Gebäude", name: "Festung", Kosten : "10 {{{stein}}}, 2 {{{erz}}}, 3 {{{holz}}}", Vorteil : "Ende der Runde: 1 Karte aus der Ablage für die nächste Runde behalten" ,res1 : "Stein"},
			{code: "G9", art : "G",Karte : "10", Punkt: "book", typ : "Gebäude", name: "Rathaus", Kosten : "3 {{{erz}}}, 4 {{{holz}}}, 3 {{{stein}}}", Vorteil: "Die Punkte der neu gebauten Gebäude zählen doppelt.", res1 : "Getreide", stufe: "Stadt"},

			{code: "Mk7", art : "H",Karte : "7", typ: "Markt", name: "Flösserei", Kosten: "5 {{{holz}}}, 1 {{{stein}}}", Vorteil: "jede Runde: {{{holz}}} kann 1:1 gegen andere Resourcen geatuscht werden." ,res1: "holz"},
			{code: "Mk5", art : "H",Karte : "5", typ: "Markt", name: "Trockenleg.", Kosten: "4 {{{holz}}}, 1 {{{erz}}}", Vorteil: "jede Runde: {{{holz}}}+1, {{{stein}}}+1" ,res1: "holz",res2: "Stein"},
			{code: "Mk6", art : "H",Karte : "6", typ: "Markt", name: "Marktplatz", Kosten: "6 {{{holz}}}, 2 {{{erz}}}", Vorteil: "jede Runde: Resourcen können 1:1 gegen {{{getreide}}} getauscht werden",res1: "holz",res2: "Erz"},
			{code: "Mk8", art : "H",Karte : "8", typ: "Markt", Punkt: "cross", name: "Mühle", Kosten: "4 {{{stein}}}, 4 {{{erz}}}", Vorteil: "jede Runde: {{{getreide}}} +3" ,res1: "holz",res2: "Stein"},

			{code: "St5", art : "S",Karte : "5", typ: "Gebäude", Punkt: "cross", name: "Kaserne", Kosten: "3 {{{erz}}}, 2 {{{stein}}}", Vorteil: "jede Runde: {{{erz}}}+1." ,res1: "Stein",res2: "Holz"},
			{code: "St8", art : "S",Karte : "8", typ: "Gebäude", name: "Generalsitz", Kosten: "4 {{{stein}}}, 4 {{{erz}}}", Vorteil: "Rundenauswertung: 2 Punkte extra" ,res1: "Stein",res2: "Erz"},
			{code: "St9", art : "S",Karte : "9", typ: "Gebäude", name: "Residenz", Kosten: "6 {{{stein}}}, 6 {{{holz}}}", Vorteil: "Rundenauswertung: 3 Punkte extra"  ,res1: "Stein",res2: "Getreide"},

			{code: "Gs5", art : "E",Karte : "5", typ: "Gebäude", Punkt: "book", name: "Trockenleg.",  Vorteil: "jede Runde: {{{holz}}}+1, Karte zu Gebäuden legen." ,res1: "Erz",res2: "Stein",art2: "S"},
			{code: "Gs6", art : "E",Karte : "6", typ: "Gebäude", name: "Sägewerk", Kosten: "3 {{{holz}}}, 1 {{{erz}}}", Vorteil: "jede Runde: {{{holz}}} +1",res1: "Erz",res2: "Stein",art2: "S"},
			{code: "Gs7", art : "E",Karte : "7", typ: "Gebäude", name: "Flösserei", Kosten: "5 {{{holz}}}, 1 {{{stein}}}", Vorteil: "jede Runde: {{{holz}}} +2" ,res1: "Erz"},
			{code: "Gs8", art : "E",Karte : "8", typ: "Gebäude", Punkt: "Krone", name: "Residenz", Kosten: "6 {{{stein}}}, 6 {{{holz}}}", Vorteil: "jede Runde: Alle Dorf und Marktspieler müssen dir eine Resource ihrer Wahl abgeben. ",res1: "Erz",res2: "Getreide"},
			{code: "Gs9", art : "E",Karte : "9", typ: "Gebäude", Punkt: "Krone", name: "Mühle", Kosten: "4 {{{stein}}}, 4 {{{erz}}}", Vorteil: "jede Runde: {{{getreide}}} +3" ,res1: "Erz",res2: "Stein"},
			{code: "Gs10", art : "E",Karte : "10", typ: "Gebäude", Punkt: "cross", name: "Kloster", Kosten: "6 {{{stein}}}, 6 {{{holz}}}", Vorteil: "Endauswertung: 2 Ruhmpunkte extra"  ,res1: "Erz",res2: "Getreide"}

			]};
