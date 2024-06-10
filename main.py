@namespace
class SpriteKind:
    Button = SpriteKind.create()
    Cursor = SpriteKind.create()
    characterchoice = SpriteKind.create()
def redrawcursor():
    global cursour1x, cursor1y, cursor2x, cursor2y, Cursor2, Cursor22
    cursour1x = Cursor2.x
    cursor1y = Cursor2.y
    cursor2x = Cursor22.x
    cursor2y = Cursor22.y
    sprites.destroy(Cursor2)
    sprites.destroy(Cursor22)
    Cursor2 = sprites.create(assets.image("""
        myImage7
    """), SpriteKind.Cursor)
    Cursor22 = sprites.create(assets.image("""
        myImage1
    """), SpriteKind.Cursor)
    Cursor2.x = cursour1x
    Cursor2.y = cursour1x
    Cursor22.x = cursor2x
    Cursor22.y = cursor2y
    Cursor2.set_stay_in_screen(True)
    Cursor22.set_stay_in_screen(True)
    controller.move_sprite(Cursor2)
    controller.player2.move_sprite(Cursor22)
def Play():
    mySprite.set_image(assets.image("""
        myImage5
    """))
    music.play(music.melody_playable(music.knock),
        music.PlaybackMode.UNTIL_DONE)
    
    def on_after():
        mySprite.set_image(assets.image("""
            myImage4
        """))
    timer.after(500, on_after)
    
    CHOOSEURCHARACTER()

def on_a_pressed():
    if Cursor2.overlaps_with(mySprite):
        Play()
    if Cursor2.overlaps_with(jeffcharacter):
        Jeff_Has_Been_Chosen(Cursor2)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_player2_button_a_pressed():
    if Cursor22.overlaps_with(mySprite):
        Play()
    if Cursor22.overlaps_with(jeffcharacter):
        Jeff_Has_Been_Chosen(Cursor22)
controller.player2.on_button_event(ControllerButton.A,
    ControllerButtonEvent.PRESSED,
    on_player2_button_a_pressed)

def CHOOSEURCHARACTER():
    global textSprite, jeffcharacter, textSprite2
    scene.set_background_image(assets.image("""
        myImage6
    """))
    sprites.destroy(mySprite)
    textSprite = textsprite.create("Choose Your Character!", 0, 15)
    textSprite.set_max_font_height(9)
    textSprite.x = 85
    textSprite.y = 5
    jeffcharacter = sprites.create(assets.image("""
            myImage8
        """),
        SpriteKind.characterchoice)
    textSprite2 = textsprite.create("JEFF", 0, 15)
    jeffcharacter = sprites.create(assets.image("""
            myImage8
        """),
        SpriteKind.characterchoice)
    jeffcharacter.x = 30
    textSprite2.x = jeffcharacter.x
    textSprite2.y = jeffcharacter.y + 22
    redrawcursor()
def Jeff_Has_Been_Chosen(Player: Sprite):
    global jeffhasbeenchosen, redhaschosen, bluehaschosen
    if Player == Cursor2 and redhaschosen == 0:
        jeffcharacter.set_image(assets.image("""
            myImage9
        """))
        if jeffhasbeenchosen == 1:
            jeffcharacter.set_image(assets.image("""
                myImage11
            """))
        jeffhasbeenchosen += 1
        redhaschosen += 1
        music.play(music.melody_playable(music.beam_up),
            music.PlaybackMode.UNTIL_DONE)
    if Player == Cursor22 and bluehaschosen == 0:
        jeffcharacter.set_image(assets.image("""
            myImage10
        """))
        if jeffhasbeenchosen == 1:
            jeffcharacter.set_image(assets.image("""
                myImage11
            """))
        jeffhasbeenchosen += 1
        bluehaschosen += 1
        music.play(music.melody_playable(music.beam_up),
            music.PlaybackMode.UNTIL_DONE)

def on_on_overlap(sprite, otherSprite):
    pass
sprites.on_overlap(SpriteKind.player, SpriteKind.player, on_on_overlap)

bluehaschosen = 0
jeffhasbeenchosen = 0
redhaschosen = 0
textSprite2: TextSprite = None
textSprite: TextSprite = None
jeffcharacter: Sprite = None
cursor2y = 0
cursor2x = 0
cursor1y = 0
cursour1x = 0
Cursor2: Sprite = None
Cursor22: Sprite = None
mySprite: Sprite = None
scene.set_background_image(assets.image("""
    myImage0
"""))
mySprite = sprites.create(assets.image("""
    myImage4
"""), SpriteKind.Button)
scaling.scale_to_percent(mySprite, 200, ScaleDirection.UNIFORMLY, ScaleAnchor.MIDDLE)
mySprite.y = 75
Cursor22 = sprites.create(assets.image("""
    myImage1
"""), SpriteKind.Cursor)
controller.player2.move_sprite(Cursor22)
Cursor2 = sprites.create(assets.image("""
    myImage7
"""), SpriteKind.Cursor)
controller.move_sprite(Cursor2)
Cursor2.set_stay_in_screen(True)
Cursor22.set_stay_in_screen(True)