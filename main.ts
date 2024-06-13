namespace SpriteKind {
    export const Button = SpriteKind.create()
    export const Cursor = SpriteKind.create()
    export const characterchoice = SpriteKind.create()
    export const READYNESS = SpriteKind.create()
    export const Random_P_Indicator = SpriteKind.create()
    export const character = SpriteKind.create()
    export const Bullet = SpriteKind.create()
}
function P1jeffSpec () {
    if (P1SpecCoolDown == 0) {
        characterAnimations.setCharacterAnimationsEnabled(playr1, false)
        characterAnimations.setCharacterAnimationsEnabled(playr1, true)
        characterAnimations.setCharacterState(playr1, characterAnimations.rule(Predicate.HittingWallUp))
        if (P1Flip == 0) {
            animation.runImageAnimation(
            playr1,
            assets.animation`myAnim18`,
            140,
            false
            )
        }
        if (P1Flip == 1) {
            animation.runImageAnimation(
            playr1,
            assets.animation`myAnim19`,
            100,
            false
            )
        }
        P1SpecCoolDown = 1
        controller.moveSprite(playr1, 0, 0)
        timer.after(2500, function () {
            P1SpecCoolDown = 0
        })
        timer.after(1400, function () {
            characterAnimations.clearCharacterState(playr1)
            controller.moveSprite(playr1, 100, 0)
        })
    }
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Repeated, function () {
    P2SpeedUpBar = 1
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player1 == "jeff") {
        if (playr1.isHittingTile(CollisionDirection.Bottom)) {
            playr1.vy += -70
        }
    }
    if (player1 == "greeg") {
        if (playr1.isHittingTile(CollisionDirection.Bottom)) {
            playr1.vy += -90
        }
    }
    if (player1 == "archie") {
        if (playr1.isHittingTile(CollisionDirection.Bottom)) {
            playr1.vy += -60
        }
    }
})
function redrawcursor (cursor1_char: string, cursor2_char: string) {
    cursour1x = Cursor1.x
    cursor1y = Cursor1.y
    cursor2x = Cursor2.x
    cursor2y = Cursor2.y
    sprites.destroy(Cursor1)
    sprites.destroy(Cursor2)
    Cursor1 = sprites.create(assets.image`myImage7`, SpriteKind.Cursor)
    Cursor2 = sprites.create(assets.image`myImage1`, SpriteKind.Cursor)
    if (cursor1_char != null && cursor2_char != null) {
        sprites.setDataString(Cursor1, "characterchosen", cursor1_char)
        sprites.setDataString(Cursor2, "characterchosen", cursor2_char)
    }
    Cursor1.x = cursour1x
    Cursor1.y = cursour1x
    Cursor2.x = cursor2x
    Cursor2.y = cursor2y
    Cursor1.setStayInScreen(true)
    Cursor2.setStayInScreen(true)
    controller.moveSprite(Cursor1)
    controller.player2.moveSprite(Cursor2)
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
	
})
function Play () {
    mySprite.setImage(assets.image`myImage5`)
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    timer.after(500, function () {
        mySprite.setImage(assets.image`myImage4`)
        timer.after(500, function () {
            archiecharacterselectioncooldown = 1
        })
    })
    sprites.destroy(mySprite)
    CHOOSEURCHARACTER()
    playyed = 1
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CombatActive == 1) {
        if (player1 == "jeff") {
            P1jeffSpec()
        }
        if (player1 == "archie") {
            P1archieSpec()
        }
        if (player1 == "greeg") {
            P1greegSpec()
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (player1 == "jeff") {
        if (playr1.isHittingTile(CollisionDirection.Bottom)) {
            playr1.vy += -70
        }
    }
    if (player1 == "greeg") {
        if (playr1.isHittingTile(CollisionDirection.Bottom)) {
            playr1.vy += -90
        }
    }
    if (player1 == "archie") {
        if (playr1.isHittingTile(CollisionDirection.Bottom)) {
            playr1.vy += -60
        }
    }
})
function P1archieJab () {
    if (P1jabCoolDown == 0) {
        characterAnimations.setCharacterAnimationsEnabled(playr1, false)
        characterAnimations.setCharacterAnimationsEnabled(playr1, true)
        characterAnimations.setCharacterState(playr1, characterAnimations.rule(Predicate.HittingWallUp))
        if (P1Flip == 0) {
            animation.runImageAnimation(
            playr1,
            assets.animation`myAnim14`,
            75,
            false
            )
        }
        if (P1Flip == 1) {
            animation.runImageAnimation(
            playr1,
            assets.animation`myAnim13`,
            70,
            false
            )
        }
        P1jabCoolDown = 1
        timer.after(500, function () {
            P1jabCoolDown = 0
        })
        timer.after(455, function () {
            characterAnimations.clearCharacterState(playr1)
        })
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Cursor1.overlapsWith(mySprite)) {
        Play()
    }
    if (Cursor1.overlapsWith(jeffcharacter)) {
        sprites.setDataString(Cursor1, "characterchosen", "jeff")
        slectedmusictimer = 1
    }
    if (Cursor1.overlapsWith(greegcharacter)) {
        sprites.setDataString(Cursor1, "characterchosen", "greeg")
        slectedmusictimer = 1
    }
    if (Cursor1.overlapsWith(archiecharacter) && archiecharacterselectioncooldown == 1) {
        sprites.setDataString(Cursor1, "characterchosen", "archie")
        slectedmusictimer = 1
    }
    if (Cursor1.overlapsWith(R_READY) && sprites.readDataString(Cursor1, "characterchosen") != null) {
        RedIsREADY = 1
    }
    if (CombatActive == 1) {
        if (player1 == "jeff") {
            P1jeffJab()
        }
        if (player1 == "archie") {
            P1archieJab()
        }
        if (player1 == "greeg") {
            P1greegJab()
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (Cursor2.overlapsWith(jeffcharacter)) {
        sprites.setDataString(Cursor2, "characterchosen", "jeff")
        slectedmusictimer = 1
    }
    if (Cursor2.overlapsWith(greegcharacter)) {
        sprites.setDataString(Cursor2, "characterchosen", "greeg")
        slectedmusictimer = 1
    }
    if (Cursor2.overlapsWith(archiecharacter) && archiecharacterselectioncooldown == 1) {
        sprites.setDataString(Cursor2, "characterchosen", "archie")
        slectedmusictimer = 1
    }
    if (Cursor2.overlapsWith(B_READY) && sprites.readDataString(Cursor2, "characterchosen") != null) {
        BlueIsREADY = 1
    }
    if (CombatActive == 1) {
        if (player2 == "jeff") {
            P2jeffJab()
        }
        if (player2 == "archie") {
            P2archieJab()
        }
        if (player2 == "greeg") {
            P2greegJab()
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    P2SpeedUpBar = 0
})
function CHOOSEURCHARACTER () {
    info.startCountdown(10)
    info.showCountdown(false)
countdownthingy = textsprite.create("Time left:", 0, 15)
    countdownthingy.x = 80
    countdownthingy.y = 15
    countdown2 = textsprite.create(convertToText(Math.round(info.countdown())), 0, 15)
    countdowner = 1
    countdown2.x = 80
    countdown2.y = 30
    countdown2.setScale(2, ScaleAnchor.Middle)
    scene.setBackgroundImage(assets.image`myImage6`)
    sprites.destroy(mySprite)
    textSprite = textsprite.create("Choose Your Character!", 0, 15)
    textSprite.setMaxFontHeight(9)
    textSprite.x = 80
    textSprite.y = 5
    jeffcharacter = sprites.create(assets.image`myImage8`, SpriteKind.characterchoice)
    archiecharacter = sprites.create(assets.image`myImage13`, SpriteKind.characterchoice)
    greegcharacter = sprites.create(assets.image`myImage18`, SpriteKind.characterchoice)
    R_READY = sprites.create(assets.image`myImage21`, SpriteKind.READYNESS)
    sprites.setDataBoolean(R_READY, "musiced", false)
    B_READY = sprites.create(assets.image`myImage20`, SpriteKind.READYNESS)
    sprites.setDataBoolean(B_READY, "musiced", false)
    textSprite2 = textsprite.create("JEFF", 0, 15)
    text3 = textsprite.create("ARCHIE", 0, 15)
    textsprite3 = textsprite.create("GREEG", 0, 15)
    R_READY.x = 53.3
    R_READY.y = 100
    R_READY.setScale(2, ScaleAnchor.Middle)
    B_READY.x = 106.6
    B_READY.y = 100
    B_READY.setScale(2, ScaleAnchor.Middle)
    jeffcharacter.x = 30
    greegcharacter.x = 130
    textSprite2.x = jeffcharacter.x
    textSprite2.y = jeffcharacter.y + 22
    text3.y = archiecharacter.y + 22
    text3.x = archiecharacter.x - 0
    textsprite3.x = greegcharacter.x - 0
    textsprite3.y = greegcharacter.y + 22
    redrawcursor(null, null)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CombatActive == 1) {
        P1Flip = 0
    }
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Released, function () {
    if (CombatActive == 1) {
        P2Flip = 0
    }
})
function purpleurple (backtoorignal: string) {
    if (backtoorignal == "archie") {
        archiecharacter.setImage(assets.image`myImage13`)
    }
    if (backtoorignal == "jeff") {
        archiecharacter.setImage(assets.image`myImage8`)
    }
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (CombatActive == 1) {
        P1Flip = 1
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (CombatActive == 1) {
        P1Flip = 0
    }
})
function ReadierSOund (readyteam: Sprite) {
    sprites.setDataBoolean(readyteam, "musiced", true)
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
}
function Stunnedfunction (Player: string) {
    if (Player == "Player1") {
        P1_StunnedFunctionCounter = 1
        characterAnimations.setCharacterState(playr1, characterAnimations.rule(Predicate.HittingWallRight, Predicate.HittingWallLeft))
        characterAnimations.loopFrames(
        playr1,
        assets.animation`myAnim24`,
        100,
        characterAnimations.rule(Predicate.HittingWallRight, Predicate.HittingWallLeft)
        )
        controller.moveSprite(playr1, 0, 0)
        P1_Greeg_Stunned = 1
        timer.after(2500, function () {
            P1_StunnedFunctionCounter = 0
            controller.moveSprite(playr1, 100, 0)
            P1_Greeg_Stunned = 0
            characterAnimations.clearCharacterState(playr1)
        })
    }
}
function P1greegSpec () {
    if (P1SpecCoolDown == 0) {
        characterAnimations.setCharacterAnimationsEnabled(playr1, false)
        characterAnimations.setCharacterAnimationsEnabled(playr1, true)
        characterAnimations.setCharacterState(playr1, characterAnimations.rule(Predicate.HittingWallUp))
        if (P1Flip == 0) {
            characterAnimations.loopFrames(
            playr1,
            assets.animation`myAnim23`,
            50,
            characterAnimations.rule(Predicate.HittingWallUp)
            )
            playr1.setVelocity(-150, 0)
        }
        if (P1Flip == 1) {
            characterAnimations.loopFrames(
            playr1,
            assets.animation`myAnim22`,
            50,
            characterAnimations.rule(Predicate.HittingWallUp)
            )
            playr1.setVelocity(150, 0)
        }
        P1_greeg_rolling = 1
        P1SpecCoolDown = 1
        timer.after(1000, function () {
            if (P1_greeg_rolling == 1) {
                playr1.setVelocity(0, 0)
                characterAnimations.clearCharacterState(playr1)
                characterAnimations.setCharacterState(playr1, characterAnimations.rule(Predicate.HittingWallLeft, Predicate.HittingWallRight))
                P1_greeg_rolling = 0
                controller.moveSprite(playr1, 0, 0)
                P1_Greeg_Stunned = 1
                timer.after(2500, function () {
                    characterAnimations.clearCharacterState(playr1)
                    controller.moveSprite(playr1, 100, 0)
                    P1_Greeg_Stunned = 0
                })
            }
        })
        timer.after(5000, function () {
            P1SpecCoolDown = 0
        })
    }
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (player2 == "jeff") {
        if (playr2.isHittingTile(CollisionDirection.Bottom)) {
            playr2.vy += -70
        }
    }
    if (player2 == "greeg") {
        if (playr2.isHittingTile(CollisionDirection.Bottom)) {
            playr2.vy += -90
        }
    }
    if (player2 == "archie") {
        if (playr2.isHittingTile(CollisionDirection.Bottom)) {
            playr2.vy += -60
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CombatActive == 1) {
        P1Flip = 1
    }
})
function P1jeffJab () {
    if (P1jabCoolDown == 0) {
        characterAnimations.setCharacterAnimationsEnabled(playr1, false)
        characterAnimations.setCharacterAnimationsEnabled(playr1, true)
        characterAnimations.setCharacterState(playr1, characterAnimations.rule(Predicate.HittingWallUp))
        if (P1Flip == 0) {
            animation.runImageAnimation(
            playr1,
            assets.animation`myAnim11`,
            75,
            false
            )
        }
        if (P1Flip == 1) {
            animation.runImageAnimation(
            playr1,
            assets.animation`myAnim12`,
            75,
            false
            )
        }
        P1jabCoolDown = 1
        timer.after(500, function () {
            P1jabCoolDown = 0
        })
        timer.after(455, function () {
            characterAnimations.clearCharacterState(playr2)
        })
    }
}
// function P1jeffSpec() {
// if ( == 0) {
// characterAnimations.setCharacterAnimationsEnabled(playr1, false)
// characterAnimations.setCharacterAnimationsEnabled(playr1, true)
// characterAnimations.setCharacterState(playr1, characterAnimations.rule(Predicate.HittingWallUp))
// if (P1Flip == 0) {
// animation.runImageAnimation(
// playr1,
// assets.animation`myAnim11`,
// 75,
// false
// )
// }
// if (P1Flip == 1) {
// animation.runImageAnimation(
// playr1,
// assets.animation`myAnim12`,
// 75,
// false
// )
// }
// P1jabCoolDown = 1
// timer.after(500, function () {
// P1jabCoolDown = 0
// })
// timer.after(455, function () {
// characterAnimations.setCharacterState(playr1, characterAnimations.rule(Predicate.NotMoving))
// })
// }
// }
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    if (CombatActive == 1) {
        P2Flip = 1
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    P1SpeedUpBar = 0
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Repeated, function () {
    if (player2 == "jeff") {
        if (playr2.isHittingTile(CollisionDirection.Bottom)) {
            playr2.vy += -70
        }
    }
    if (player2 == "greeg") {
        if (playr2.isHittingTile(CollisionDirection.Bottom)) {
            playr2.vy += -90
        }
    }
    if (player2 == "archie") {
        if (playr2.isHittingTile(CollisionDirection.Bottom)) {
            playr2.vy += -60
        }
    }
})
function P1greegJab () {
    if (P1jabCoolDown == 0) {
        characterAnimations.setCharacterAnimationsEnabled(playr1, false)
        characterAnimations.setCharacterAnimationsEnabled(playr1, true)
        characterAnimations.setCharacterState(playr1, characterAnimations.rule(Predicate.HittingWallUp))
        if (P1Flip == 0) {
            animation.runImageAnimation(
            playr1,
            assets.animation`myAnim17`,
            120,
            false
            )
        }
        if (P1Flip == 1) {
            animation.runImageAnimation(
            playr1,
            assets.animation`myAnim16`,
            120,
            false
            )
        }
        P1jabCoolDown = 1
        timer.after(500, function () {
            P1jabCoolDown = 0
        })
        timer.after(455, function () {
            characterAnimations.clearCharacterState(playr1)
        })
    }
}
function selected () {
    slectedmusictimer = 0
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
}
function P2jeffJab () {
    if (P2jabCoolDown == 0) {
        characterAnimations.setCharacterAnimationsEnabled(playr2, false)
        characterAnimations.setCharacterAnimationsEnabled(playr2, true)
        characterAnimations.setCharacterState(playr2, characterAnimations.rule(Predicate.HittingWallUp))
        if (P2Flip == 0) {
            animation.runImageAnimation(
            playr2,
            assets.animation`myAnim11`,
            75,
            false
            )
        }
        if (P2Flip == 1) {
            animation.runImageAnimation(
            playr2,
            assets.animation`myAnim12`,
            75,
            false
            )
        }
        P2jabCoolDown = 1
        timer.after(500, function () {
            P2jabCoolDown = 0
        })
        timer.after(455, function () {
            characterAnimations.clearCharacterState(playr2)
        })
    }
}
function P2greegJab () {
    if (P2jabCoolDown == 0) {
        characterAnimations.setCharacterAnimationsEnabled(playr2, false)
        characterAnimations.setCharacterAnimationsEnabled(playr2, true)
        characterAnimations.setCharacterState(playr2, characterAnimations.rule(Predicate.HittingWallUp))
        if (P2Flip == 0) {
            animation.runImageAnimation(
            playr2,
            assets.animation`myAnim17`,
            75,
            false
            )
        }
        if (P2Flip == 1) {
            animation.runImageAnimation(
            playr2,
            assets.animation`myAnim16`,
            75,
            false
            )
        }
        P2jabCoolDown = 1
        timer.after(500, function () {
            P2jabCoolDown = 0
        })
        timer.after(455, function () {
            characterAnimations.clearCharacterState(playr2)
        })
    }
}
function P1archieSpec () {
    if (P1SpecCoolDown == 0) {
        characterAnimations.setCharacterAnimationsEnabled(playr1, false)
        characterAnimations.setCharacterAnimationsEnabled(playr1, true)
        characterAnimations.setCharacterState(playr1, characterAnimations.rule(Predicate.HittingWallUp))
        if (P1Flip == 0) {
            animation.runImageAnimation(
            playr1,
            assets.animation`myAnim21`,
            200,
            false
            )
        }
        if (P1Flip == 1) {
            animation.runImageAnimation(
            playr1,
            assets.animation`myAnim20`,
            200,
            false
            )
        }
        P1SpecCoolDown = 1
        controller.moveSprite(playr1, 0, 0)
        timer.after(3000, function () {
            P1SpecCoolDown = 0
        })
        timer.after(800, function () {
            characterAnimations.clearCharacterState(playr1)
            controller.moveSprite(playr1, 100, 0)
            Archie_bullet_P1 = sprites.create(assets.image`myImage69`, SpriteKind.Bullet)
            Archie_bullet_P1.setPosition(playr1.x + 9.5, playr1.y - 1)
            Archie_bullet_P1.setVelocity(200, 0)
            if (P1Flip == 0) {
                Archie_bullet_P1.setVelocity(-200, 0)
            }
            if (P1Flip == 1) {
                Archie_bullet_P1.setVelocity(200, 0)
            }
        })
    }
}
function ZEROIMPACT (Cursor1_Char: string, Cursor2_Char: string) {
    RedIsREADY = 0
    BlueIsREADY = 0
    weepewo = 0
    timer.after(500, function () {
        sprites.destroy(archiecharacter)
        sprites.destroy(greegcharacter)
        sprites.destroy(jeffcharacter)
        sprites.destroy(B_READY)
        sprites.destroy(R_READY)
        sprites.destroy(text3)
        sprites.destroy(countdown2)
        sprites.destroy(textSprite2)
        sprites.destroy(textSprite)
        sprites.destroy(countdownthingy)
        sprites.destroy(textsprite3)
        scene.setBackgroundImage(assets.image`myImage26`)
        redrawcursor(null, null)
        sprites.setDataString(Cursor1, "characterchosen", Cursor1_Char)
        sprites.setDataString(Cursor2, "characterchosen", Cursor2_Char)
        P1_VERSION_VERSUS_SCREEN = sprites.create(assets.image`myImage27`, SpriteKind.Random_P_Indicator)
        P1_VERSION_VERSUS_SCREEN.setPosition(40, 25)
        P2_VERSION_VERSUS_SCREEN = sprites.create(assets.image`myImage28`, SpriteKind.Random_P_Indicator)
        P2_VERSION_VERSUS_SCREEN.setPosition(120, 25)
        jeff_img_flip = assets.image`myImage29`
        jeff_img_flip.flipX()
        archie_img_flip = assets.image`myImage30`
        archie_img_flip.flipX()
        greeg_img_flip = assets.image`myImage31`
        greeg_img_flip.flipX()
        if (sprites.readDataString(Cursor1, "characterchosen") == null) {
            Cursor1rnd = randint(1, 3)
            if (Cursor1rnd == 1) {
                sprites.setDataString(Cursor1, "characterchosen", "jeff")
            }
            if (Cursor1rnd == 2) {
                sprites.setDataString(Cursor1, "characterchosen", "archie")
            }
            if (Cursor1rnd == 3) {
                sprites.setDataString(Cursor1, "characterchosen", "greeg")
            }
        }
        if (sprites.readDataString(Cursor2, "characterchosen") == null) {
            Cursor2rnd = randint(1, 3)
            if (Cursor2rnd == 1) {
                sprites.setDataString(Cursor2, "characterchosen", "jeff")
            }
            if (Cursor2rnd == 2) {
                sprites.setDataString(Cursor2, "characterchosen", "archie")
            }
            if (Cursor2rnd == 3) {
                sprites.setDataString(Cursor2, "characterchosen", "greeg")
            }
        }
        if (sprites.readDataString(Cursor1, "characterchosen") == "jeff") {
            jeff1 = sprites.create(assets.image`myImage29`, SpriteKind.character)
            jeff1.setPosition(40, 90)
            jeff1.setScale(2, ScaleAnchor.Middle)
        }
        if (sprites.readDataString(Cursor2, "characterchosen") == "jeff") {
            jeff2 = sprites.create(jeff_img_flip, SpriteKind.character)
            jeff2.setPosition(120, 90)
            jeff2.setScale(2, ScaleAnchor.Middle)
        }
        if (sprites.readDataString(Cursor1, "characterchosen") == "archie") {
            archie1 = sprites.create(assets.image`myImage30`, SpriteKind.character)
            archie1.setPosition(40, 90)
            archie1.setScale(2, ScaleAnchor.Middle)
        }
        if (sprites.readDataString(Cursor2, "characterchosen") == "archie") {
            archie2 = sprites.create(archie_img_flip, SpriteKind.character)
            archie2.setPosition(120, 90)
            archie2.setScale(2, ScaleAnchor.Middle)
        }
        if (sprites.readDataString(Cursor1, "characterchosen") == "greeg") {
            greeg1 = sprites.create(assets.image`myImage31`, SpriteKind.character)
            greeg1.setPosition(40, 90)
            greeg1.setScale(2, ScaleAnchor.Middle)
        }
        if (sprites.readDataString(Cursor2, "characterchosen") == "greeg") {
            greeg2 = sprites.create(greeg_img_flip, SpriteKind.character)
            greeg2.setPosition(120, 90)
            greeg2.setScale(2, ScaleAnchor.Middle)
        }
        redrawcursor(sprites.readDataString(Cursor1, "characterchosen"), sprites.readDataString(Cursor2, "characterchosen"))
        game.splash("Both players, hold \"A\" to speed up loading.")
    })
    timer.after(1000, function () {
        loadingbaractive = 1
    })
}
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    if (CombatActive == 1) {
        P2Flip = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    P1SpeedUpBar = 1
})
function INITIATE_COMBAT (Player1Char: string, Player2Char: string) {
    loadingbaractive = 0
    scene.setBackgroundImage(img`
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        `)
    if (sprites.readDataString(Cursor1, "characterchosen") == "jeff") {
        sprites.destroy(jeff1)
    }
    if (sprites.readDataString(Cursor1, "characterchosen") == "archie") {
        sprites.destroy(archie1)
    }
    if (sprites.readDataString(Cursor1, "characterchosen") == "greeg") {
        sprites.destroy(greeg1)
    }
    if (sprites.readDataString(Cursor2, "characterchosen") == "jeff") {
        sprites.destroy(jeff2)
    }
    if (sprites.readDataString(Cursor2, "characterchosen") == "archie") {
        sprites.destroy(archie2)
    }
    if (sprites.readDataString(Cursor2, "characterchosen") == "greeg") {
        sprites.destroy(greeg2)
    }
    sprites.destroy(P1_VERSION_VERSUS_SCREEN)
    sprites.destroy(P2_VERSION_VERSUS_SCREEN)
    sprites.destroy(Cursor1)
    sprites.destroy(Cursor2)
    tiles.setCurrentTilemap(tilemap`level0`)
    for (let p1walls of tiles.getTilesByType(assets.tile`myTile1`)) {
        tiles.setWallAt(p1walls, true)
    }
    for (let p2floor of tiles.getTilesByType(assets.tile`myTile2`)) {
        tiles.setWallAt(p2floor, true)
    }
    for (let floor of tiles.getTilesByType(sprites.dungeon.darkGroundCenter)) {
        tiles.setWallAt(floor, true)
    }
    splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.VerticalLeftHalf)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.VerticalRightHalf)
    if (Player1Char == "jeff") {
        if (cooounterP1 == 0) {
            playr1 = sprites.create(assets.image`jeff`, SpriteKind.Player)
            cooounterP1 += 1
        }
        player1 = "jeff"
        tiles.placeOnRandomTile(playr1, assets.tile`myTile3`)
        centreOnP1 = 1
        playr1.vy += 200
        playr1.ay = 200
        controller.moveSprite(playr1, 100, 0)
    }
    if (Player1Char == "archie") {
        if (cooounterP1 == 0) {
            playr1 = sprites.create(assets.image`myImage65`, SpriteKind.Player)
            cooounterP1 += 1
        }
        player1 = "archie"
        tiles.placeOnRandomTile(playr1, assets.tile`myTile3`)
        centreOnP1 = 1
        playr1.vy += 200
        playr1.ay = 200
        controller.moveSprite(playr1, 100, 0)
    }
    if (Player1Char == "greeg") {
        if (cooounterP1 == 0) {
            playr1 = sprites.create(assets.image`myImage66`, SpriteKind.Player)
            cooounterP1 += 1
        }
        player1 = "greeg"
        tiles.placeOnRandomTile(playr1, assets.tile`myTile3`)
        centreOnP1 = 1
        playr1.vy += 200
        playr1.ay = 200
        controller.moveSprite(playr1, 100, 0)
    }
    if (Player2Char == "jeff") {
        if (cooounterP2 == 0) {
            playr2 = sprites.create(assets.image`jeff`, SpriteKind.Player)
            cooounterP2 += 1
        }
        player2 = "jeff"
        tiles.placeOnRandomTile(playr2, assets.tile`myTile4`)
        centreOnP2 = 1
        playr2.vy += 200
        playr2.ay = 200
        controller.player2.moveSprite(playr2, 100, 0)
    }
    if (Player2Char == "archie") {
        if (cooounterP2 == 0) {
            playr2 = sprites.create(assets.image`myImage65`, SpriteKind.Player)
            cooounterP2 += 1
        }
        player2 = "archie"
        tiles.placeOnRandomTile(playr2, assets.tile`myTile4`)
        centreOnP2 = 1
        playr2.vy += 200
        playr2.ay = 200
        controller.player2.moveSprite(playr2, 100, 0)
    }
    if (Player2Char == "greeg") {
        if (cooounterP2 == 0) {
            playr2 = sprites.create(assets.image`myImage66`, SpriteKind.Player)
            cooounterP2 += 1
        }
        player2 = "greeg"
        tiles.placeOnRandomTile(playr2, assets.tile`myTile4`)
        centreOnP2 = 1
        playr2.vy += 200
        playr2.ay = 200
        controller.player2.moveSprite(playr2, 100, 0)
    }
    CombatActive = 1
}
function P2archieJab () {
    if (P2jabCoolDown == 0) {
        characterAnimations.setCharacterAnimationsEnabled(playr2, false)
        characterAnimations.setCharacterAnimationsEnabled(playr2, true)
        characterAnimations.setCharacterState(playr2, characterAnimations.rule(Predicate.HittingWallUp))
        if (P2Flip == 0) {
            animation.runImageAnimation(
            playr2,
            assets.animation`myAnim14`,
            75,
            false
            )
        }
        if (P2Flip == 1) {
            animation.runImageAnimation(
            playr2,
            assets.animation`myAnim13`,
            75,
            false
            )
        }
        P2jabCoolDown = 1
        timer.after(500, function () {
            P2jabCoolDown = 0
        })
        timer.after(455, function () {
            characterAnimations.clearCharacterState(playr2)
        })
    }
}
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Released, function () {
    if (CombatActive == 1) {
        P2Flip = 1
    }
})
let loadingz = 0
let centreOnP2 = 0
let cooounterP2 = 0
let centreOnP1 = 0
let cooounterP1 = 0
let loadingbaractive = 0
let greeg2: Sprite = null
let greeg1: Sprite = null
let archie2: Sprite = null
let archie1: Sprite = null
let jeff2: Sprite = null
let jeff1: Sprite = null
let greeg_img_flip: Image = null
let archie_img_flip: Image = null
let jeff_img_flip: Image = null
let P2_VERSION_VERSUS_SCREEN: Sprite = null
let P1_VERSION_VERSUS_SCREEN: Sprite = null
let Archie_bullet_P1: Sprite = null
let P2jabCoolDown = 0
let P1SpeedUpBar = 0
let playr2: Sprite = null
let P1_greeg_rolling = 0
let P1_Greeg_Stunned = 0
let P1_StunnedFunctionCounter = 0
let P2Flip = 0
let textsprite3: TextSprite = null
let text3: TextSprite = null
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
let countdowner = 0
let countdownthingy: TextSprite = null
let player2 = ""
let BlueIsREADY = 0
let B_READY: Sprite = null
let RedIsREADY = 0
let R_READY: Sprite = null
let archiecharacter: Sprite = null
let greegcharacter: Sprite = null
let slectedmusictimer = 0
let jeffcharacter: Sprite = null
let P1jabCoolDown = 0
let CombatActive = 0
let playyed = 0
let archiecharacterselectioncooldown = 0
let cursor2y = 0
let cursor2x = 0
let cursor1y = 0
let cursour1x = 0
let player1 = ""
let P2SpeedUpBar = 0
let P1Flip = 0
let playr1: Sprite = null
let P1SpecCoolDown = 0
let Cursor1: Sprite = null
let Cursor2: Sprite = null
let mySprite: Sprite = null
let weepewo = 0
let countdown2: TextSprite = null
let Cursor1rnd: Number
let Cursor2rnd: Number
weepewo = 1
scene.setBackgroundImage(assets.image`myImage0`)
mySprite = sprites.create(assets.image`myImage4`, SpriteKind.Button)
mySprite.sayText("Press A to Select")
scaling.scaleToPercent(mySprite, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
mySprite.y = 85
Cursor2 = sprites.create(assets.image`myImage1`, SpriteKind.Cursor)
controller.player2.moveSprite(Cursor2)
Cursor1 = sprites.create(assets.image`myImage7`, SpriteKind.Cursor)
controller.moveSprite(Cursor1)
Cursor1.setStayInScreen(true)
Cursor2.setStayInScreen(true)
sprites.setDataString(Cursor1, "characterchosen", null)
sprites.setDataString(Cursor2, "characterchosen", null)
game.onUpdate(function () {
    if (playyed == 1) {
        if (sprites.readDataString(Cursor1, "characterchosen") == "jeff" && sprites.readDataString(Cursor2, "characterchosen") != "jeff") {
            jeffcharacter.setImage(assets.image`myImage9`)
            if (slectedmusictimer == 1) {
                selected()
            }
        }
        if (sprites.readDataString(Cursor1, "characterchosen") != "jeff" && sprites.readDataString(Cursor2, "characterchosen") == "jeff") {
            jeffcharacter.setImage(assets.image`myImage10`)
            if (slectedmusictimer == 1) {
                selected()
            }
        }
        if (sprites.readDataString(Cursor1, "characterchosen") != "jeff" && sprites.readDataString(Cursor2, "characterchosen") != "jeff") {
            jeffcharacter.setImage(assets.image`myImage8`)
        }
        if (sprites.readDataString(Cursor1, "characterchosen") == "jeff" && sprites.readDataString(Cursor2, "characterchosen") == "jeff") {
            jeffcharacter.setImage(assets.image`myImage11`)
            if (slectedmusictimer == 1) {
                selected()
            }
        }
        if (sprites.readDataString(Cursor1, "characterchosen") == "archie" && sprites.readDataString(Cursor2, "characterchosen") != "archie") {
            archiecharacter.setImage(assets.image`myImage12`)
            if (slectedmusictimer == 1) {
                selected()
            }
        }
        if (sprites.readDataString(Cursor1, "characterchosen") != "archie" && sprites.readDataString(Cursor2, "characterchosen") == "archie") {
            archiecharacter.setImage(assets.image`myImage14`)
            if (slectedmusictimer == 1) {
                selected()
            }
        }
        if (sprites.readDataString(Cursor1, "characterchosen") != "archie" && sprites.readDataString(Cursor2, "characterchosen") != "archie") {
            archiecharacter.setImage(assets.image`myImage13`)
        }
        if (sprites.readDataString(Cursor1, "characterchosen") == "archie" && sprites.readDataString(Cursor2, "characterchosen") == "archie") {
            archiecharacter.setImage(assets.image`myImage15`)
            if (slectedmusictimer == 1) {
                selected()
            }
        }
        if (sprites.readDataString(Cursor1, "characterchosen") == "greeg" && sprites.readDataString(Cursor2, "characterchosen") != "greeg") {
            greegcharacter.setImage(assets.image`myImage17`)
            if (slectedmusictimer == 1) {
                selected()
            }
        }
        if (sprites.readDataString(Cursor1, "characterchosen") != "greeg" && sprites.readDataString(Cursor2, "characterchosen") == "greeg") {
            greegcharacter.setImage(assets.image`myImage16`)
            if (slectedmusictimer == 1) {
                selected()
            }
        }
        if (sprites.readDataString(Cursor1, "characterchosen") != "greeg" && sprites.readDataString(Cursor2, "characterchosen") != "greeg") {
            greegcharacter.setImage(assets.image`myImage18`)
            if (slectedmusictimer == 1) {
                selected()
            }
        }
        if (sprites.readDataString(Cursor1, "characterchosen") == "greeg" && sprites.readDataString(Cursor2, "characterchosen") == "greeg") {
            greegcharacter.setImage(assets.image`myImage19`)
            if (slectedmusictimer == 1) {
                selected()
            }
        }
    }
    if (RedIsREADY == 1) {
        R_READY.setImage(assets.image`myImage22`)
        R_READY.setScale(2, ScaleAnchor.Middle)
        if (sprites.readDataBoolean(R_READY, "musiced") == false) {
            ReadierSOund(R_READY)
        }
    }
    if (BlueIsREADY == 1) {
        B_READY.setImage(assets.image`myImage23`)
        B_READY.setScale(2, ScaleAnchor.Middle)
        if (sprites.readDataBoolean(B_READY, "musiced") == false) {
            ReadierSOund(B_READY)
        }
    }
    if (countdowner == 1) {
        countdown2.setText(convertToText(Math.round(info.countdown())))
        if (Math.round(info.countdown()) <= 9) {
            countdown2.x = 80
        }
        // make it change colour when going down
        if (Math.round(info.countdown()) == 7) {
            countdown2.fg = 5
countdown2.bg = 0
        }
        // make it change colour when going down
        if (Math.round(info.countdown()) == 5) {
            countdown2.fg = 4
countdown2.bg = 0
        }
        // make it change colour when going down
        if (Math.round(info.countdown()) == 2) {
            countdown2.fg = 2
countdown2.bg = 0
        }
        if (Math.round(info.countdown()) == 0) {
            countdowner = 0
            if (weepewo == 1) {
                ZEROIMPACT(sprites.readDataString(Cursor1, "characterchosen"), sprites.readDataString(Cursor2, "characterchosen"))
            }
        }
        if (RedIsREADY == 1 && BlueIsREADY == 1) {
            ZEROIMPACT(sprites.readDataString(Cursor1, "characterchosen"), sprites.readDataString(Cursor2, "characterchosen"))
        }
    }
    if (loadingz == 3) {
        scene.setBackgroundImage(assets.image`myImage32`)
    }
    if (loadingz == 6) {
        scene.setBackgroundImage(assets.image`myImage33`)
    }
    if (loadingz == 9) {
        scene.setBackgroundImage(assets.image`myImage34`)
    }
    if (loadingz == 12) {
        scene.setBackgroundImage(assets.image`myImage35`)
    }
    if (loadingz == 15) {
        scene.setBackgroundImage(assets.image`myImage36`)
    }
    if (loadingz == 18) {
        scene.setBackgroundImage(assets.image`myImage37`)
    }
    if (loadingz == 21) {
        scene.setBackgroundImage(assets.image`myImage38`)
    }
    if (loadingz == 24) {
        scene.setBackgroundImage(assets.image`myImage39`)
    }
    if (loadingz == 27) {
        scene.setBackgroundImage(assets.image`myImage40`)
    }
    if (loadingz == 30) {
        scene.setBackgroundImage(assets.image`myImage41`)
    }
    if (loadingz == 33) {
        scene.setBackgroundImage(assets.image`myImage42`)
    }
    if (loadingz == 36) {
        scene.setBackgroundImage(assets.image`myImage43`)
    }
    if (loadingz == 39) {
        scene.setBackgroundImage(assets.image`myImage44`)
    }
    if (loadingz == 42) {
        scene.setBackgroundImage(assets.image`myImage45`)
    }
    if (loadingz == 45) {
        scene.setBackgroundImage(assets.image`myImage46`)
    }
    if (loadingz == 48) {
        scene.setBackgroundImage(assets.image`myImage47`)
    }
    if (loadingz == 51) {
        scene.setBackgroundImage(assets.image`myImage48`)
    }
    if (loadingz == 54) {
        scene.setBackgroundImage(assets.image`myImage49`)
    }
    if (loadingz == 57) {
        scene.setBackgroundImage(assets.image`myImage50`)
    }
    if (loadingz == 60) {
        scene.setBackgroundImage(assets.image`myImage51`)
    }
    if (loadingz == 63) {
        scene.setBackgroundImage(assets.image`myImage52`)
    }
    if (loadingz == 66) {
        scene.setBackgroundImage(assets.image`myImage53`)
    }
    if (loadingz == 69) {
        scene.setBackgroundImage(assets.image`myImage54`)
    }
    if (loadingz == 72) {
        scene.setBackgroundImage(assets.image`myImage55`)
    }
    if (loadingz == 75) {
        scene.setBackgroundImage(assets.image`myImage57`)
    }
    if (loadingz == 78) {
        scene.setBackgroundImage(assets.image`myImage58`)
    }
    if (loadingz == 81) {
        scene.setBackgroundImage(assets.image`myImage59`)
    }
    if (loadingz == 84) {
        scene.setBackgroundImage(assets.image`myImage60`)
    }
    if (loadingz == 87) {
        scene.setBackgroundImage(assets.image`myImage61`)
    }
    if (loadingz == 90) {
        scene.setBackgroundImage(assets.image`myImage62`)
    }
    if (loadingz == 93) {
        scene.setBackgroundImage(assets.image`myImage63`)
    }
    if (loadingz == 96) {
        scene.setBackgroundImage(assets.image`myImage64`)
        timer.after(1000, function () {
            INITIATE_COMBAT(sprites.readDataString(Cursor1, "characterchosen"), sprites.readDataString(Cursor2, "characterchosen"))
        })
    }
    if (centreOnP1 == 1) {
        splitScreen.centerCameraAt(splitScreen.Camera.Camera1, playr1.x, playr1.y)
    }
    if (centreOnP2 == 1) {
        splitScreen.centerCameraAt(splitScreen.Camera.Camera2, playr2.x, playr2.y)
    }
    if (CombatActive == 1) {
        if (player1 == "jeff") {
            if (characterAnimations.matchesRule(playr1, characterAnimations.rule(Predicate.NotMoving))) {
                if (P1Flip == 1) {
                    characterAnimations.setCharacterAnimationsEnabled(playr1, false)
                    characterAnimations.setCharacterAnimationsEnabled(playr1, true)
                    characterAnimations.loopFrames(
                    playr1,
                    assets.animation`myAnim`,
                    100,
                    characterAnimations.rule(Predicate.NotMoving)
                    )
                }
                if (P1Flip == 0) {
                    characterAnimations.setCharacterAnimationsEnabled(playr1, false)
                    characterAnimations.setCharacterAnimationsEnabled(playr1, true)
                    characterAnimations.loopFrames(
                    playr1,
                    assets.animation`myAnim3`,
                    100,
                    characterAnimations.rule(Predicate.NotMoving)
                    )
                }
            }
            if (characterAnimations.matchesRule(playr1, characterAnimations.rule(Predicate.MovingRight))) {
                characterAnimations.loopFrames(
                playr1,
                assets.animation`myAnim0`,
                50,
                characterAnimations.rule(Predicate.MovingRight)
                )
            }
            if (characterAnimations.matchesRule(playr1, characterAnimations.rule(Predicate.MovingLeft))) {
                characterAnimations.loopFrames(
                playr1,
                assets.animation`myAnim4`,
                50,
                characterAnimations.rule(Predicate.MovingLeft)
                )
            }
        }
        if (player1 == "archie") {
            if (characterAnimations.matchesRule(playr1, characterAnimations.rule(Predicate.NotMoving))) {
                if (P1Flip == 1) {
                    characterAnimations.setCharacterAnimationsEnabled(playr1, false)
                    characterAnimations.setCharacterAnimationsEnabled(playr1, true)
                    characterAnimations.loopFrames(
                    playr1,
                    assets.animation`myAnim1`,
                    100,
                    characterAnimations.rule(Predicate.NotMoving)
                    )
                }
                if (P1Flip == 0) {
                    characterAnimations.setCharacterAnimationsEnabled(playr1, false)
                    characterAnimations.setCharacterAnimationsEnabled(playr1, true)
                    characterAnimations.loopFrames(
                    playr1,
                    assets.animation`myAnim5`,
                    100,
                    characterAnimations.rule(Predicate.NotMoving)
                    )
                }
            }
            if (characterAnimations.matchesRule(playr1, characterAnimations.rule(Predicate.MovingRight))) {
                characterAnimations.loopFrames(
                playr1,
                assets.animation`myAnim2`,
                50,
                characterAnimations.rule(Predicate.MovingRight)
                )
            }
            if (characterAnimations.matchesRule(playr1, characterAnimations.rule(Predicate.MovingLeft))) {
                characterAnimations.loopFrames(
                playr1,
                assets.animation`myAnim6`,
                50,
                characterAnimations.rule(Predicate.MovingLeft)
                )
            }
        }
        if (player1 == "greeg") {
            if (P1_Greeg_Stunned == 1 && P1_StunnedFunctionCounter == 0) {
                Stunnedfunction("Player1")
            }
            if (playr2.overlapsWith(playr1)) {
                if (P1_greeg_rolling == 1) {
                    playr1.setVelocity(0, 0)
                    P1_greeg_rolling = 0
                    characterAnimations.clearCharacterState(playr1)
                    P1_Greeg_Stunned = 1
                }
            }
            if (characterAnimations.matchesRule(playr1, characterAnimations.rule(Predicate.NotMoving))) {
                if (P1Flip == 1) {
                    characterAnimations.setCharacterAnimationsEnabled(playr1, false)
                    characterAnimations.setCharacterAnimationsEnabled(playr1, true)
                    characterAnimations.loopFrames(
                    playr1,
                    assets.animation`myAnim7`,
                    100,
                    characterAnimations.rule(Predicate.NotMoving)
                    )
                }
                if (P1Flip == 0) {
                    characterAnimations.setCharacterAnimationsEnabled(playr1, false)
                    characterAnimations.setCharacterAnimationsEnabled(playr1, true)
                    characterAnimations.loopFrames(
                    playr1,
                    assets.animation`myAnim9`,
                    100,
                    characterAnimations.rule(Predicate.NotMoving)
                    )
                }
            }
            if (characterAnimations.matchesRule(playr1, characterAnimations.rule(Predicate.MovingRight))) {
                characterAnimations.loopFrames(
                playr1,
                assets.animation`myAnim8`,
                50,
                characterAnimations.rule(Predicate.MovingRight)
                )
            }
            if (characterAnimations.matchesRule(playr1, characterAnimations.rule(Predicate.MovingLeft))) {
                characterAnimations.loopFrames(
                playr1,
                assets.animation`myAnim10`,
                50,
                characterAnimations.rule(Predicate.MovingLeft)
                )
            }
        }
    }
    if (player2 == "jeff") {
        if (characterAnimations.matchesRule(playr2, characterAnimations.rule(Predicate.NotMoving))) {
            if (P2Flip == 1) {
                characterAnimations.setCharacterAnimationsEnabled(playr2, false)
                characterAnimations.setCharacterAnimationsEnabled(playr2, true)
                characterAnimations.loopFrames(
                playr2,
                assets.animation`myAnim`,
                100,
                characterAnimations.rule(Predicate.NotMoving)
                )
            }
            if (P2Flip == 0) {
                characterAnimations.setCharacterAnimationsEnabled(playr2, false)
                characterAnimations.setCharacterAnimationsEnabled(playr2, true)
                characterAnimations.loopFrames(
                playr2,
                assets.animation`myAnim3`,
                100,
                characterAnimations.rule(Predicate.NotMoving)
                )
            }
        }
        if (characterAnimations.matchesRule(playr2, characterAnimations.rule(Predicate.MovingRight))) {
            characterAnimations.loopFrames(
            playr2,
            assets.animation`myAnim0`,
            50,
            characterAnimations.rule(Predicate.MovingRight)
            )
        }
        if (characterAnimations.matchesRule(playr2, characterAnimations.rule(Predicate.MovingLeft))) {
            characterAnimations.loopFrames(
            playr2,
            assets.animation`myAnim4`,
            50,
            characterAnimations.rule(Predicate.MovingLeft)
            )
        }
    }
    if (player2 == "archie") {
        if (characterAnimations.matchesRule(playr2, characterAnimations.rule(Predicate.NotMoving))) {
            if (P2Flip == 1) {
                characterAnimations.setCharacterAnimationsEnabled(playr2, false)
                characterAnimations.setCharacterAnimationsEnabled(playr2, true)
                characterAnimations.loopFrames(
                playr2,
                assets.animation`myAnim1`,
                100,
                characterAnimations.rule(Predicate.NotMoving)
                )
            }
            if (P2Flip == 0) {
                characterAnimations.setCharacterAnimationsEnabled(playr2, false)
                characterAnimations.setCharacterAnimationsEnabled(playr2, true)
                characterAnimations.loopFrames(
                playr2,
                assets.animation`myAnim5`,
                100,
                characterAnimations.rule(Predicate.NotMoving)
                )
            }
        }
        if (characterAnimations.matchesRule(playr2, characterAnimations.rule(Predicate.MovingRight))) {
            characterAnimations.loopFrames(
            playr2,
            assets.animation`myAnim2`,
            50,
            characterAnimations.rule(Predicate.MovingRight)
            )
        }
        if (characterAnimations.matchesRule(playr2, characterAnimations.rule(Predicate.MovingLeft))) {
            characterAnimations.loopFrames(
            playr2,
            assets.animation`myAnim6`,
            50,
            characterAnimations.rule(Predicate.MovingLeft)
            )
        }
    }
    if (player2 == "greeg") {
        if (characterAnimations.matchesRule(playr2, characterAnimations.rule(Predicate.NotMoving))) {
            if (P2Flip == 1) {
                characterAnimations.setCharacterAnimationsEnabled(playr2, false)
                characterAnimations.setCharacterAnimationsEnabled(playr2, true)
                characterAnimations.loopFrames(
                playr2,
                assets.animation`myAnim7`,
                100,
                characterAnimations.rule(Predicate.NotMoving)
                )
            }
            if (P2Flip == 0) {
                characterAnimations.setCharacterAnimationsEnabled(playr2, false)
                characterAnimations.setCharacterAnimationsEnabled(playr2, true)
                characterAnimations.loopFrames(
                playr2,
                assets.animation`myAnim9`,
                100,
                characterAnimations.rule(Predicate.NotMoving)
                )
            }
        }
        if (characterAnimations.matchesRule(playr2, characterAnimations.rule(Predicate.MovingRight))) {
            characterAnimations.loopFrames(
            playr2,
            assets.animation`myAnim8`,
            50,
            characterAnimations.rule(Predicate.MovingRight)
            )
        }
        if (characterAnimations.matchesRule(playr2, characterAnimations.rule(Predicate.MovingLeft))) {
            characterAnimations.loopFrames(
            playr2,
            assets.animation`myAnim10`,
            50,
            characterAnimations.rule(Predicate.MovingLeft)
            )
        }
    }
})
game.onUpdateInterval(500, function () {
    if (P1SpeedUpBar != 1 && P2SpeedUpBar != 1) {
        if (loadingbaractive == 1) {
            loadingz += 3
        }
    }
    if (P1SpeedUpBar == 1 && P2SpeedUpBar != 1) {
        if (loadingbaractive == 1) {
            loadingz += 3
        }
    }
    if (P1SpeedUpBar != 1 && P2SpeedUpBar == 1) {
        if (loadingbaractive == 1) {
            loadingz += 3
        }
    }
})
game.onUpdateInterval(100, function () {
    if (P1SpeedUpBar == 1 && P2SpeedUpBar == 1) {
        if (loadingbaractive == 1) {
            loadingz += 3
        }
    }
})
