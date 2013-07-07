			var overview = {
				"holz": "<img src='img/CHR/Holz.png' style='border: 1px solid black;width:25px;height: 25px'/>",
				"kreis": "<img src='img/CHR/kreis.png' style='border: 1px solid black;width:25px;height: 25px'/>",
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
			{art : "H",Karte : "2", typ : "Holz" ,res1: "Holz"},
			{art : "S",Karte : "2", typ : "Stein" ,res1: "Stein"},
			{art : "E",Karte : "2", typ : "Erz" ,res1: "Erz"},
			{art : "G",Karte : "2", typ : "Getreide" ,res1: "Getreide"},
			{art : "H",Karte : "3", typ : "Holz" ,res1 : "Holz",res2: "Holz"},
			{art : "S",Karte : "3", typ : "Stein", res1:"Stein" ,res2 : "Stein"},
			{art : "E",Karte : "3", typ : "Erz", res1: "Erz" ,res2 : "Erz"},
			{art : "G",Karte : "3", typ : "Getreide" , res1:"Getreide",res2 : "Getreide"},
			{art : "Df",Karte : "3", typ: "Ereignis", name: "Missernte", Nachteil : "{{{getreide}}} -1"},
			{art : "H",Karte : "2", typ: "Ereignis", name: "Frondienst", Nachteil : "{{{holz}}} -1 {{{stein}}} -1"},
			{art : "H",Karte : "3", typ: "Ereignis", name: "Steuerabgabe", Nachteil : "{{{erz}}}  -1"},
			{art : "G",Karte : "4", typ : "Apokalypse", name: "Sturm", Nachteil : "kein neues {{{getreide}}}.", pagebreak: true},
			{code: "Sbr", art : "S",Karte : "5", typ: "Gebäude", name: "Steinbruch", Kosten : "2 {{{stein}}},1 {{{erz}}}", Vorteil : "jede Runde: {{{stein}}}" ,res1 : "Stein"},
			{code: "Erm", art : "E",Karte : "5", typ: "Gebäude", name: "Erzmine", Kosten : "2 {{{erz}}} 1 {{{holz}}}", Vorteil : "jede Runde: {{{erz}}}" ,res1 : "1",res1 : "Erz"},
			{code: "Whü", art : "H",Karte : "5", typ: "Gebäude", name: "Waldhütte", Kosten : "2 {{{holz}}} 1 {{{stein}}}", Vorteil : "jede Runde: {{{holz}}}" ,res1 : "Holz"},
			{code: "Bh", art : "G",Karte : "6", typ: "Gebäude", name: "Bauernhof", Kosten : "3 {{{holz}}} 1 {{{getreide}}}", Vorteil : "jede Runde {{{getreide}}}" ,res1 : "Getreide"},
			{code: "Bh", art : "G",Karte : "6", typ: "Gebäude", name: "Bauernhof", Kosten: "3 {{{stein}}} 1 {{{getreide}}}", Vorteil: "jede Runde: {{{getreide}}} " ,res1: "Getreide"},
			{code: "Bh", art : "G",Karte : "6", typ: "Gebäude", name: "Bauernhof", Kosten: "2 {{{holz}}} 1 {{{erz}}} 1 {{{getreide}}}", Vorteil: "jede Runde: {{{getreide}}} ",res1: "Getreide"},
			{code: "Bwe", art : "S",Karte : "7", typ: "Gebäude", name: "Bergwerk", Kosten : "3 {{{stein}}} 2 {{{holz}}}", Vorteil : "Steinlager <br>erweitern +1 {{{kreis}}} ",res1 : "Stein"},
			{code: "Smi", art : "E",Karte : "7", typ: "Gebäude", name: "Schürfmine", Kosten : "3 {{{erz}}} 2 {{{stein}}}", Vorteil : "Erzlager <br>erweitern +1 {{{kreis}}} " ,res1 : "Erz"},
			{code: "Säg", art : "H",Karte : "7", typ: "Gebäude", name: "Sägewerk", Kosten : "3 {{{holz}}} 2 {{{erz}}}", Vorteil : "Holzlager <br>erweitern +1 {{{kreis}}} " ,res1 : "Holz"},
			{code: "Mü", art : "G",Karte : "7", typ: "Gebäude", name: "Mühle", Kosten : "2 {{{stein}}} 2 {{{holz}}} 1 {{{erz}}}", Vorteil : "Getreidelager <br>erweitern +1 {{{kreis}}} " ,res1 : "Stein"},
			{code: "GHf", art : "G",Karte : "8", typ: "Gebäude", name: "grosser Hof", Kosten: "1 {{{erz}}} 3 {{{holz}}} 2 {{{stein}}}", Vorteil: "jede Runde: {{{getreide}}}{{{getreide}}}" ,res1: "Holz"},
			{code: "GHf", art : "G",Karte : "8", typ: "Gebäude", name: "grosser Hof", Kosten: "1 {{{erz}}} 3 {{{holz}}} 2 {{{stein}}}", Vorteil: "jede Runde: {{{getreide}}}{{{getreide}}}" ,res1: "Erz", pagebreak: true},
			{code: "Brü", art : "G",Karte : "9", typ: "Gebäude", name: "Steinbrücke", Kosten : "4 {{{stein}}},3 {{{holz}}}", Vorteil : "zählt beim Bau <br>{{{haus}}}{{{haus}}}{{{haus}}}" ,res1 : "Getreide"},
			{code: "Kap", art : "G",Karte : "9", typ: "Gebäude", name: "Kapelle", Kosten : "4 {{{erz}}} 3 {{{stein}}}", Vorteil : "schützt vor dem Sturm" ,res1 : "Getreide"},
			{code: "Jgd", art : "G",Karte : "9", typ: "Gebäude", name: "Jagdrevier", Kosten : "4 {{{holz}}} 3 {{{erz}}}", Vorteil : "die Bevölkerung kann auch mit {{{erz}}} ernährt werden." ,res1 : "Getreide"},
			{art : "H",Karte : "12", typ : "Person", name: "Räuber", Stichbonus : "Stichbonus: 1 Karte von der Hand in die eigene Ablage." ,res1 : "Holz"},
			{art : "S",Karte : "13", typ : "Person", name: "Fürst", Stichbonus : "Stichbonus: sticht die beiden niedrigsten Karten." ,res1 : "Stein"},
			{art : "S",Karte : "11", typ : "Person", name: "Wanderprediger", Vorteil : "Baubonus: schützt vor Sturm und Feuersbrunst" ,res1 : "Stein"},

			{art : "G",Karte : "2", typ : "Getreide" ,res1: "Getreide",res2: "Getreide", stufe: "Weiler"},
			{art : "H",Karte : "3", Punkt: "Krone", typ: "Ereignis", name: "Kriegsdienst", Nachteil : "Bevölkerung kann nicht erhöht werden.", stufe: "Weiler"},
			{art : "E",Karte : "4", Punkt: "Krone", typ : "Apokalypse", name: "Krieg", Nachteil : "Nachteil: kein neues {{{erz}}}", stufe: "Weiler" },
			{art : "E",Karte : "4", Punkt: "Krone", typ : "Erz",res1: "Erz", stufe: "Weiler"},
			{code: "Brn", art : "E",Karte : "7", Punkt: "Krone", typ : "Gebäude", name: "Brunnen", Kosten : "3 {{{holz}}}, 3 {{{stein}}}", Vorteil : "Wird die eigene Warenkarte 2/3/4 gestochen, 1 Karte vom Stapel auf die Hand ziehen." ,res1 : "Erz", stufe: "Weiler"},
			{code: "Smd", art : "E",Karte : "8", typ : "Gebäude", name: "Schmiede", Kosten : "2 {{{holz}}}, 2 {{{stein}}}, 3 {{{erz}}}", Vorteil : "für 1 {{{erz}}} eine      zusätzliche {{{kronewh}}}" ,res1 : "Erz", stufe: "Weiler", pagebreak: true},
			{code: "Kls", art : "G",Karte : "9", typ: "Gebäude", Punkt: "Krone", name: "Kloster", Vorteil: "Resourcenauswertung: Bev+1" , Kosten: "4 {{{erz}}}, 4 {{{holz}}}", res1: "Holz", stufe: "Weiler"},
			{code: "Für", art : "G",Karte : "10", typ: "Gebäude", Punkt: "Krone" , name: "Fürstensitz", Kosten: "5 {{{stein}}}, 4 {{{erz}}}", Vorteil: "Handkarten ziehen: 2 Karten nachziehen und 2 ablegen."  ,res1: "Getreide",res2: "Erz", stufe: "Weiler"},
			{art : "E",Karte : "11", Punkt: "Krone", typ : "Person", name: "Baumeister", Vorteil: "Baubonus: alle {{{kronewh}}} zählen als zusätzliches {{{erz}}}"  ,res1 : "Erz", stufe: "Weiler"},
			{art : "G",Karte : "12", typ : "Person", name: "Handelszug", Vorteil : "Baubonus: die Bevölkerung kann auch mit {{{holz}}} ernährt werden." ,res1 : "Erz", stufe: "Weiler"},
			{art : "G",Karte : "13", Punkt: "Krone", typ : "Person", name: "König", Stichbonus : "Stichbonus: sticht alle Karten mit {{{kronewh}}}." ,res1 : "Getreide", stufe: "Weiler"},

			{art : "S",Karte : "4", typ : "Stein", res1: "Stein" ,res2 : "Stein", stufe: "Dorf"},
			{art : "S",Karte : "4", Punkt: "cross", typ : "Apokalypse", name: "Pest", Nachteil : "Nachteil: kein neuer {{{stein}}}", stufe: "Dorf"},
			{art : "S",Karte : "4", Punkt: "cross", typ : "Ereignis", name: "Erbfolgekrieg", Stichbonus : "die {{{kronewh}}} ist 0, 1 oder 2 Punkte wert.", stufe: "Dorf"},
			{code: "Tst", art : "G",Karte : "6", typ : "Gebäude", name: "Trinkstuben", Kosten : "3 {{{holz}}}, 2 {{{stein}}}, 1 {{{erz}}}", Vorteil : "Rundenbeginn: 1 Karte extra" ,res1 : "Getreide", stufe: "Dorf" },
			{code: "Aqu", art : "S",Karte : "7", Punkt: "cross", typ : "Gebäude", name: "Aquädukt", Kosten : "4 {{{stein}}} 3 {{{holz}}}", Vorteil : "für 1 {{{holz}}} ein zusätzliches {{{buchwh}}}" ,res1 : "Stein", stufe: "Dorf"},
			{code: "Stm", art : "S",Karte : "8", Punkt: "cross",typ : "Gebäude", name: "Stadtmauer", Kosten : "6 {{{stein}}} 2 {{{erz}}}", Vorteil : "Schutz vor Krieg",res1 : "Stein", stufe: "Dorf"},
			{code: "Rhf", art : "E",Karte : "9", typ : "Gebäude", Punkt: "cross", name: "Reiterhof", Kosten : "4 {{{holz}}}, 3 {{{stein}}}, 2 {{{erz}}}", Vorteil : "Rundenbeginn: 2 Karten zusätzlich ziehen und eine davon behalten." ,res1 : "Erz", pagebreak: true},
			{code: "Haf", art : "H",Karte : "10", typ : "Gebäude", Punkt: "cross", name: "Hafen", Kosten : "3 {{{holz}}}, 3 {{{stein}}}, 4 {{{stein}}}", Vorteil:"Deine Karten mit Wert 2 oder 3 haben den Wert 5." ,res1 : "Holz",stufe: "Dorf"},
			{art : "S",Karte : "11", Punkt: "cross", typ : "Person", name: "Architekt", res1 : "Stein", Stichbonus: "Stichbonus: Im nächsten Stich erhöht deine Karte den Wert um 3", stufe: "Dorf"},
			{art : "H",Karte : "11", typ : "Person", name: "Krämer" ,res1 : "Holz", Stichbonus: "Stichbonus: 1 Karte aus der Ablage des Spielers mit der niedrigsten Karte.", stufe: "Dorf"},
			{art : "S",Karte : "12", Punkt: "cross", typ : "Person", name: "Bischof", Vorteil: "Baubonus: alle {{{kreuzwh}}} zählen als zusätzliches {{{stein}}}" ,res1 : "Stein", stufe: "Dorf"},
			{art : "E",Karte : "12", Punkt: "Krone", typ : "Person", name: "Alchemist", Vorteil : "Baubonus: Schutz vor der Pest." ,res1 : "Erz", stufe: "Dorf"},
			{art : "H",Karte : "13", typ : "Person", name: "Papst", Stichbonus : "Stichbonus: sticht alle Karten mit {{{kreuzwh}}}.", res1 : "Holz", stufe: "Dorf"},
			
			{art : "H",Karte : "4", Punkt: "book", typ : "Apokalypse", name: "Feuersbrunst", Nachteil : "Nachteil: kein neues {{{holz}}}, <br>ein gebautes Gebäude brennt ab.", stufe: "Stadt"},
			{art : "S",Karte : "4", Punkt: "book", typ : "Ereignis", name: "Papstschisma", Stichbonus : "die {{{kreuzwh}}} ist 0, 1 oder 2 Punkte wert.", stufe: "Stadt"},
			{art : "H",Karte : "4", Punkt: "book", typ : "Holz" ,res1 : "Holz",res2: "Holz", stufe: "Stadt"},
			{art : "H",Karte : "3", typ: "Ereignis", name: "Barbarenüberfall", Nachteil : "{{{stein}}} halbiert, <br>{{{erz}}} halbiert (abrunden)", stufe: "Stadt"},
			{code: "Heh", art : "H",Karte : "5", Punkt: "book", typ : "Gebäude", name: "Heilhaus", Kosten : "3 {{{holz}}}, 2 {{{stein}}}", Vorteil : "Schutz vor Pest" ,res1 : "Holz", stufe: "Stadt", pagebreak: true},
			{code: "Hah", art : "H",Karte : "6", Punkt: "book", typ : "Gebäude", name: "Handelhaus", Kosten : "5 {{{holz}}}, 1 {{{stein}}}, 2 {{{erz}}}", Vorteil : "Bei jedem gewonnenen Stich 1 Karte von der Hand in die eigene Ablage" ,res1 : "Holz", stufe: "Stadt"},
			{code: "Kas", art : "S",Karte : "7", typ: "Gebäude", Punkt: "book", name: "Kaserne", Kosten: "3 {{{erz}}}, 2 {{{stein}}}", Vorteil: "jede Runde: 1 Karte vom linken Nachbarn für 1 Holz tauschen.",res1: "Stein",res2: "Erz", stufe: "Stadt"},
			{code: "Res", art : "S",Karte : "7", typ: "Gebäude", Punkt: "book", name: "Residenz", Kosten: "5 {{{erz}}}, 1 {{{stein}}}", Vorteil: "jede Runde: 1 Karte vom linken Nachbarn für 1 Stein tauschen." ,res1: "Stein", stufe: "Stadt"},
			{code: "Bur", art : "S",Karte : "8", typ : "Gebäude", name: "Burg", Kosten : "8 {{{stein}}}, 2 {{{erz}}}", Vorteil : "kein Mitspieler kann Karten aus deiner Hand oder Ablage nehmen" ,res1 : "Stein", stufe: "Stadt"},
			{code: "Klk", art : "H",Karte : "9", typ: "Markt", Punkt: "cross",name: "Klosterkirche", Kosten: " 8 {{{holz}}}, 6 {{{stein}}}", Vorteil: "Endauswertung: 2 Ruhmpunkte extra"  ,res1: "holz",res2: "Getreide",stufe: "Stadt"  },
			{code: "Sch", art : "G",Karte : "10", Punkt: "Krone", typ : "Gebäude", name: "Schloss", Kosten : "7 {{{erz}}}, 7 {{{stein}}}, 1 {{{holz}}}", Vorteil : "1 Siegpunkt direkt", res1 : "Getreide", stufe: "Stadt"},
			{art : "G",Karte : "11", Punkt: "book", typ : "Person", name: "Händler", Vorteil : "Baubonus: alle {{{buchwh}}} zählen als zusätzliches {{{holz}}}." ,res1 : "Getreide", stufe: "Stadt"},
			{art : "E",Karte : "13", Punkt: "book", typ : "Person", name: "Fürst", Stichbonus : "Stichbonus: sticht alle Karten mit {{{buchwh}}}." ,res1 : "Erz", stufe: "Stadt"}

			]};
