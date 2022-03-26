# Mini Escape Room/Treasure Hunt w domu: Bag End

Gra "Bag End" w wersji podstawowej zawiera 3 zagadki. Jest przeznaczona dla jednego gracza. Została zaprojektowana i użyta w ramach prezentu urodzinowego i jej przejście zajęło solenizantowi niecałe 30 minut.

## Fabuła

Gracz wciela się w Gandalfa, który dostał list od Bilba. Bilbo pisze w nim o urządzeniu jakie znalazł i prosi o przyjazd. Po wejściu do pokoju gracz znajduje drugi liścik, w którym Bilbo informuje, że niestety musiał wyjechać, a przedmiot jest dobrze ukryty ;)

## Przygotowanie

### Wersja podstawowa

W celu przygotowania najprostszej wersji, wymagającej minimum inwencji własnej, należy:
1. Wydrukować wszystkie pliki z katalogu [to-print](to-print/) (najlepiej w kolorze):
    - [letters.pdf](to-print/letters.pdf) - listy od Bilbo. 
    - [familly-tree.jpg](to-print/familly-tree.jpg) - podpowiedź do zagadki #puzzle_tree
    - [home-plan.jpg](to-print/home-plan.jpg) - podpowiedź do zagadki #puzzle_items
    - [map-runes.png](to-print/map-runes.png) - podpowiedź do zagadki #puzzle_runes
    - [qr_codes.pdf](to-print/qr_codes.pdf) - kody QR do zagadek. Jedna strona, kody to w kolejności: #puzzle_items, #puzzle_runes, #puzzle_tree. 
1. Przygotować 3 schowki chronione zagadkami:
    1. Wytypować 3 miejsca na schowki
    2. Wyciąć kody QR
    3. Nakleić kody na schowki
1. Schować prezent/skarb do jednego ze schowków (lub do wszystkich trzech, w zależności od prezentu)
1. Schować podpowiedzi (gdzieś w pokoju lub do schowków)

#### Przykładowa konfiguracja nieliniowa:

|   Schowek	|  Zagadka 	        |  Zawartość 	            |
|---	    |---	            |---	                    |
|   1	    | #puzzle_runes  	|  Cel gry: prezent/skarb 	|
|   2	    | #puzzle_tree  	|  Pół wydrukowanej mapy 	|
|   3	    | #puzzle_items  	|  Pół wydrukowanej mapy 	|

Drzewo genealogiczne i plan domu można wtedy schować w pokoju.

#### Przykładowa konfiguracja liniowa:

|   Schowek	|  Zagadka 	        |  Zawartość 	            |
|---	    |---	            |---	                    |
|   1	    | #puzzle_runes  	|  Cel gry: prezent/skarb 	|
|   2	    | #puzzle_items  	|  Mapa  	                |
|   3	    | #puzzle_tree  	|  Plan domu             	|

Drzewo genealogiczne można wtedy schować lub np. powiesić na ścianie.

### Dostosowanie gry

#### Zmiana treści listów

Listy są dostępne w [formie html](src/letters.html). Pdf [letters.pdf](to-print/letters.pdf) powstał po wydrukowaniu do pliku z następującymi ustawieniami:
* dwie strony na kartkę
* skalowanie 200%

#### Zwykłe zagadki

https://lockandescape.pl/jak-zrobic-er-w-domu-lub-w-pracy/


# Użyte utwory

## Czcionki

* [Hobbiton Brush Hand](https://www.dafont.com/font-comment.php?file=hobbiton_brush_hand)


## Obrazy/zdjęcia

* [mapa](http://tolkiengateway.net/wiki/File:J.R.R._Tolkien_-_Thror%27s_map.jpg)
* [drzewo genealogiczne](https://www.facebook.com/danielreeveartist/photos/the-baggins-family-tree-this-is-in-the-hobbit-the-one-used-in-lotr-included-the-/271846192960230/)
* [plan domu](https://www.reddit.com/r/lotr/comments/q7deqi/bilbos_lovely_hole_is_finished_d_details_in/)
* zdjęcia/obrazki przedmiotów:
    * [filiżanka](http://www.as.cmielow.com.pl/pl/filizanki/448-filizanka-cmielow.html#/39-reczna_dedykacja-bez_dedykacji)
    * [dzbanek](http://www.as.cmielow.com.pl/pl/dzbanki/1017-dzbanek-matylda-dekoracja-zloty-pasek.html)
    * [parasol](https://www.publicdomainpictures.net/pl/view-image.php?image=142815&picture=parasol)
    * [książka](https://www.maxpixel.net/Knowledge-Learning-Library-Reading-Literature-Book-154254)
    * [miecz](https://commons.m.wikimedia.org/wiki/File:Sword_01.svg)
    * [fajka](https://commons.m.wikimedia.org/wiki/File:Smoking_pipe.png)
* Gandalf wycięty z tego [obrazka](https://pixabay.com/pl/illustrations/stypendium-hobbit-hobbici-5638589/)

## Biblioteki/fragmenty kodu

* [Animacja otwierania drzwi](https://codepen.io/eyedoubleyou/pen/XWWEyWQ)
* [Drag and drop w jquery na mobile](https://www.jqueryscript.net/other/Mobile-Drag-Drop-Plugin-jQuery.html)
